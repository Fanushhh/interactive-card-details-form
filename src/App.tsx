import React from "react";
import addSpaceToCardNumber, { convertDummyToRealCardNumber,validateMonth, validateCardNumber, validateYear, validateCVV } from "./utils";
import { Success } from "./components/Success";
function App() {
  const [card, setCard] = React.useState({
    name: "",
    cardNumber: "",
    expMonth: '',
    expYear: "",
    cvc: "",
  });
  const [error, setError] = React.useState({
    nameError: "",
    cardNumberError: "",
    expMonthError: "",
    expYearError: "",
    cvcError: "",
  });

  const [success, setSuccess] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Validating the name
    if(card.name.length === 0){
      setError({...error, nameError: "Cannot be blank."});
      return;
    }else{
      setError({...error, nameError: ""});
    }
    // Validating the card number
    if(card.cardNumber.length === 0 || card.cardNumber.length < 19){
      setError({...error, cardNumberError: "Blank or incomplete."});
      return;
    }

    if(!validateCardNumber(card.cardNumber.trim())){
      setError({...error, cardNumberError: "Invalid card number."});
      return;
      
    }else{
      setError({...error, cardNumberError: ""});
    }
    //validating the expiration month

    if(card.expMonth.length === 0){
      setError({...error, expMonthError: "Cannot be blank."});
      return;
    }
    
    if(!validateMonth(Number(card.expMonth))){
      setError({...error, expMonthError: "Invalid month."});
      return;
    }else{
      setError({...error, expMonthError: ""});
    }

    //validating the expiration year

    if(card.expYear.length === 0){
      setError({...error, expYearError: "Cannot be blank."});
      return;
    }
    if(!validateYear(Number(card.expYear))){
      setError({...error, expYearError: "Invalid year."});
      return;
    }else{
      setError({...error, expYearError: ""});
    }
    // window.alert('success')
    if(card.cvc.length === 0){
      setError({...error, cvcError: "Cannot be blank."});
      return;
    }
    if(!validateCVV(Number(card.cvc))){
      setError({...error, cvcError: "Invalid CVC."});
      return;
    }else{
      setError({...error, cvcError: ""});
    }
    console.log(card)
    setSuccess(true);  
    setError({...error, nameError: "", cardNumberError: "", expMonthError: "", expYearError: "", cvcError: ""});

  }
  function handleDismiss(){
    setSuccess(false);
    setCard({name: "", cardNumber: "", expMonth: "", expYear: "", cvc: ""});
  }
  
  

  

  return (
    <main className="xl:flex xl:h-screen xl:items-center  ">
      <div className="relative z-0 xl:h-full  xl:w-[483px]">
        
          <picture>
            <source
              media="(max-width: 600px)"
              srcSet="./images/bg-main-mobile.png"
            />
            <source
              media="(min-width: 1280px)"
              srcSet="./images/bg-main-desktop.png"
            />
            <img
              className="block w-full h-full object-cover"
              src="./images/bg-main-mobile.png"
              alt="background gradient"
              srcSet="./images/bg-main-mobile.png"
            />
          </picture>
        
        <div>
          <div className="absolute z-1 right-[5%] top-[15%] text-white xl:top-auto xl:bottom-1/4 xl:right-[-222px]">
            <img
              className="w-full max-w-[286px] xl:max-w-[447px]"
              src="./images/bg-card-back.png"
              alt="image of a credit card from the back"
            />
            <p className="text-[9px] absolute right-[40px] top-[45%] xl:right-[60px] xl:text-[14px]">
              {card.cvc.length > 0 ? card.cvc : "000"}
            </p>
          </div>
          <div className="absolute z-2 bottom-[-42px] left-[5%] text-white xl:left-auto xl:top-[187px] xl:right-[-128px] xl:bottom-auto">
            <img
              className="w-full max-w-[286px] xl:max-w-[447px]"
              src="./images/bg-card-front.png"
              alt="imge of a credit card from the front"
            />
            <img
              className="absolute top-[20px] left-[20px] w-[54px] h-[30px] xl:w-[84px] xl:h-[46px]"
              src="./images/card-logo.svg"
              alt=""
            />
            <p className="absolute bottom-1/4 left-[19px] tracking-[2.2px] xl:text-xl ">
              {card.cardNumber.length > 0
                ? convertDummyToRealCardNumber(card.cardNumber)
                : "0000 0000 0000 0000"}
            </p>
            <div className="flex justify-between absolute bottom-5 text-[9px] xl:text-[14px] uppercase tracking-[1.29px] w-full px-5">
              <p className="">
                {card.name.length > 0 ? card.name : "JANE APPLESEED"}
              </p>
              <p>
                {card.expMonth?.length > 0 ? card.expMonth : "MM"}/
                {card.expYear.length > 0 ? card.expYear : "YY"}
              </p>
            </div>
          </div>
        </div>
      </div>
      {success === false && <form onSubmit={handleSubmit} className="pt-[91px] pb-12 px-6 uppercase w-full flex flex-col gap-5 xl:max-w-[381px] xl:w-full mx-auto">
        <div className="flex flex-col">
          <label htmlFor="name">Cardholder Name</label>
          <input
            name="name"
            id="name"
            value={card.name}
            onChange={(e) => {
              setCard({ ...card, name: e.target.value });
            }}
            type="text"
            pattern="[A-Za-z ]+]"
            title="Please enter a valid name"
            placeholder="e.g. Jane Appleseed"
            // required
          />
          <span className=" text-red-500 text-xs pt-2">{error.nameError}</span>
        </div>
        <div className="flex flex-col">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            
            name="cardNumber"
            id="cardNumber"
            value={card.cardNumber}
            onChange={(e) => {
              const formattedCard = addSpaceToCardNumber(e.target.value);
              setCard({ ...card, cardNumber: formattedCard });
            }}
            
            type="string"
            maxLength={19}
            placeholder="e.g. 1234 5678 9123 0000"
          />
          <span className=" text-red-500 text-xs pt-2">{error.cardNumberError}</span>
        </div>
        <div className="flex w-full gap-[10px] max-w-[327px]">
          <div className="flex-col flex w-1/4">
            <label htmlFor="expMonth">exp. date</label>
            <input
              
              name="expMonth"
              id="expMonth"
              onChange={(e) => setCard({ ...card, expMonth: e.target.value })}
              value={card.expMonth}
              className="w-full"
              type="string"
              maxLength={2}
              placeholder="MM"
            />
            <span className=" text-red-500 text-xs pt-2">{error.expMonthError}</span>
          </div>
          <div className="flex-col flex w-1/4">
            <label htmlFor="expYear">(MM/YY)</label>
            <input
              
              className="w-full"
              name="expYear"
              id="expYear"
              onChange={(e) =>{
                setCard({ ...card, expYear: e.target.value });
              }}
              value={card.expYear}
              type="string"
              maxLength={2}
              placeholder="YY"
            />
            <span className=" text-red-500 text-xs pt-2">{error.expYearError}</span>
          </div>
          <div className="flex-col flex w-2/4">
            <label htmlFor="cvc">CVC</label>
            <input
              name="cvc"
              id="cvc"
              value={card.cvc}
              onChange={(e) => setCard({ ...card, cvc: e.target.value })}
              className="w-full"
              type="string"
              maxLength={3}
              placeholder="e.g. 123"
            />
            <span className=" text-red-500 text-xs pt-2">{error.cvcError}</span>
          </div>
        </div>
        <button className=" bg-very-dark-violet text-white py-[15px] text-center rounded-xl">
          Confirm
        </button>
      </form> }
      {success === true && <Success handleDismiss={handleDismiss}/>}
    </main>
  );
}

export default App;
