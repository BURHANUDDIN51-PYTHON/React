import React, {useCallback, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {Button, Input, Select, RTE} from '../index'
import databaseService from '../../appwrite/config'
import storageService from '../../appwrite/storage'
import { Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm({post}) {
    const {register, handleSubmit, watch, setValue, 
        control, getValues} = useForm({

        // Provide default vales
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            status: post?.status || 'active',

        }
    });     

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        // Check whether to update the post or create a new post
        if (post){
            // Update the image handle the files (upload Image)
            const file = data.image[0] ? await storageService.uploadFile(data.image[0]) : null;

            // Delete the existing post image
            if (file){
                const deleteImage = post.featuredImage ? await storageService.deleteFile(post.featuredImage) : undefined;
            } 

            // Reflect the changes to the post
            const dbPost = await databaseService.updatePost(post.$id , {
                ...data, 
                featuredImage: file ? file.$id : undefined
            })

            // Direct the user to the udpated post
            if (dbPost){
                navigate(`/post/${dbPost.$id}`)
            }

        } else {
            // Create a new post

            // Handle the file or the Image
            const file = data.image[0] ? await storageService.uploadFile(data.image[0]) : null;
    
            // Create a new Post
            if (file){
                const dbPost = await databaseService.createPost({
                    ...data,
                    featuredImage: file ? file.$id : undefined,
                    userId: userData.$id
                })

                // Direct the user to the created post
                if (dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
            }

            
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string') 
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");
        return "";
    }, [])

    useEffect(() => {   
        const subsciption = watch((value, {name}) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title), {shouldValidate: true})
            }
        })
        return () => subsciption.unsubscribe();

    }, [watch, slugTransform, setValue]) 

  return (
    

    // Create form for creating or updating a post
    <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>
        <div className="w-2/3 px-2">
            <Input 
                label='Title :'
                placeholder="Title"
                className='mb-4'
                {...register('title', {required: true})}
            />
            <Input 
                label='Slug :'
                placeholder="Slug"
                className='mb-4'
                {...register('slug', {required: true})}
                onInput={(e) => 
                    setValue('slug', slugTransform(e.currentTarget.value), 
                    {shouldValidate: true})}

            />
            <RTE label='Content :' name='content' control={control}
                defaultValue={getValues('content')} />
        </div>
        <div className="w-1/3 px-2">
            <Input 
                label='Featured Image: '
                type='file'
                className='mb-4'
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register('image', {required: !post})}
            />
            {post && (
                <div className="w-full mb-4">
                    <img 
                        src={storageService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className='rounded-lg'
                    />
                </div>
            )}
            <Select
                options={['active', 'inactive']}
                label='Status :'
                className='mb-4'
                {...register('status', {required: true})}
            />
            <Button
                type='submit'
                bgColor={post ? 'bg-green-500' : undefined}
            >
                {post ? 'Update Post' : 'Create Post'}
            </Button>
        </div>

    </form>
  )
}

export default PostForm