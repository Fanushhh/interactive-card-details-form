

type SuccessProps = {
  handleDismiss: () => void;
};

export const Success = ({ handleDismiss }: SuccessProps) => {
  return(
    <section className=" mt-[91px] xl:max-w-[381px] xl:w-full mx-auto">
      
    <div className="flex flex-col justify-center items-center text-center p-4">
      <img className="mb-[35px]" src="./images/icon-complete.svg" alt="icon signifying you successfully completed the form" />
      <h2 className=" text-3xl uppercase mb-4">Thank you!</h2>
      <p className="text-dark-gray-violet mb-12">We've added your card details</p>
      <button onClick={handleDismiss} className=" bg-very-dark-violet text-white w-full py-4 rounded-lg">Continue</button>
    </div>
    </section>
  )
}