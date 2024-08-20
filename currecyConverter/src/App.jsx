import { useState } from 'react'
import useCurrencyInfo from "./hooks/useCurrencyInfo"
import InputBox from './components/InputBox'


function App() {

  //setting up states
  // Function On AmountChange
  // Function On CurrencyChange
  // We will set up a from and to named useState to calculate the change in the value
  // it is also going to be used in OnCurrencyChange function
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to , setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);


  //making an api Call using useCurrencyInfo

  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo)

  // Adding the swapping functionalities
  function swap(){
    setTo(from);
    setFrom(to);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  
  function convertValue(){
    setConvertedAmount((amount * currencyInfo[to]).toFixed(3))
  }
  
  return (
    <>
      <div 
      style={{backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`}}
      className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'>
        
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertValue();
            }}
          >
          <div className='w-full mb-1'>
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={currencyOptions}
              onCurrencyChange={(currency) =>{ 
                setFrom(currency)
              }} 
              selectCurrency={from} 
              onAmountChange={(amount) => setAmount(amount)}
            
            />
          </div>
          <div className='relative w-full h-0.5'>
            <button
              type='button'
              className='absolute left1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-1 ml-52'
              onClick={swap}
            >
              Swap
            </button>
          </div>
          <div className='w-full mt-1 mb-4'>
            <InputBox
               label="To"
               amount={convertedAmount}
               currencyOptions={currencyOptions}
               selectCurrency={to} 
               onCurrencyChange={(currency) =>{ 
                setTo(currency)
              }} 
               amountDisable
            />
          </div>
          <button type="submit" className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
          </form>
        </div>
      </div>
     </div>
    </>
  );
}

export default App
