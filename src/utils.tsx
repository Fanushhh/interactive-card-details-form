function addSpaceToCardNumber(cardNumber: string) {
    const cardNumberArray = cardNumber.split('');
    const newCard = cardNumberArray.map((number, index) => {
      if(index === 4 || index === 9 || index === 14) {
        return " ";
      } else {
        return number;
      }
    });
    return newCard.join('');
  }
  

  export const convertDummyToRealCardNumber = (cardNumber : string) => {
      const dummyCard = '0000 0000 0000 0000';
      const cardNumberArray = dummyCard.split('');
      const newCard = cardNumberArray.map((number, index) => {
          if(index < cardNumber.length) {
              return cardNumber[index]
          } else {
              return number
          }
      })
      return newCard.join('');

  }

  export const validateCardNumber = (cardNumber: string) => {
    if(cardNumber.length === 19 && cardNumber.match("^[0-9 ]*$")) {
      return true;
    }else{
      return false
    }
  }
  export const validateMonth = (month: number) => {
    if(month >= 1 && month < 13){
      return true;
    }else{
      return false;
    }
  }
  export const validateYear = (year: number) => {
    const currentDate = new Date().getFullYear().toString().slice(2); // returns the last two digits of the current year
    
    if(year > Number(currentDate) && year < (Number(currentDate) + 20)){ // checks if the year is greater than the current year or less than 99
      return true;
    }else{
      return false;
    }
  }
  export const validateCVV = (cvv: number) => {

    if(cvv > 100 || cvv < 999 ){
      return true;
    }else{
      return false;
    }
  }


  export default addSpaceToCardNumber;