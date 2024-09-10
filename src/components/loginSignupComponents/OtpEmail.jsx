

import React, { useEffect, useRef, useState } from 'react'
import { Context } from '../../contexts/DashBoardContext'

const OtpEmail = () => {
    const otpLength = 4;
    const {loginEmail,handleOtpSubmit} = Context()
    const [otp, setOtp] = useState(new Array(otpLength).fill(""))
    const inputRefs = useRef([])

    useEffect(()=>{
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus()
        }
    },[])

    const handleChange = (index,e)=>{
        const value = e.target.value;
        if (isNaN(value)) {
            return;
        }

        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1)
        setOtp(newOtp)

        // Handle submit otp trigger

        const combinedOtp = newOtp.join("");
        if (combinedOtp.length === otpLength) {
            handleOtpSubmit(combinedOtp)
        }

        // Move to next input if current field is filled

        if (value && index < otpLength - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    }


    const handleClick = (index)=>{
        inputRefs.current[index].setSelectRange(1,1)

    }

    // Move cursor on pressing back space or Arrowleft

    const handleKeyDown = (index,e)=>{
        
        if (e.key === "ArrowLeft" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {

            inputRefs.current[index - 1].focus(); 
        }
    }

    console.log(otp);
    


  return (
    <>
      <div className="w-[70%] h-fit flex flex-col gap-[30px] bg-white p-[40px]">
              <div className="flex flex-col gap-[10px] text-center">
                <span className="font-[600] text-[20px] leading-[30px] text-[#746f6f]">
                  Email Verification
                </span>
                <span className="font-[400] text-[20px] leading-[30px] text-[#464646]">
                  We have sent a code to your email <span className='text-[#176B87] text-[18px] font-[500]'>{loginEmail}</span>
                </span>
                <span className="font-[600] text-[20px] leading-[30px] text-red-500">
                  {""}
                </span>
              </div>

              <form
                className="flex flex-col h-fit gap-[40px] place-items-center"
                action=""
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex gap-[20px]">
                 {
                    otp.map((value,index)=>{
                        return  <div key={index}>
                    
                        <input
                          
                          className="h-[60px] w-[60px] font-[500] text-center text-[18px] text-[#176B87] border-2 focus:border-[#176B87] bg-white rounded-[10px] focus:outline-none"
                          type="text"
                          ref={(input)=> inputRefs.current[index]=input}
                          value={value}
                          onChange={(e)=>{handleChange(index,e)}}
                          onClick={()=>handleClick(index)}
                          onKeyDown={(e)=> handleKeyDown(index,e)}
                          required
                        />
                      </div>
                    })
                 }
                  
                 
                  

                  
                  
                </div>

                

                <div className=" font-[500] text-[16px] leading-[24px] text-[#464646]">
                  <span>
                  Didn't receive code?{" "}
                    <span
                      className="text-[#176B87] font-[600] cursor-pointer border-b-2 border-[#176B87]"
                    
                    >
                      Resend OTP
                    </span>
                  </span>
            
                  </div>
               
              </form>
            </div>
    </>
  )
}

export default OtpEmail
