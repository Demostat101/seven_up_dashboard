import React from "react";
import { useParams } from "react-router-dom";
import { MdPrint } from "react-icons/md";
import { Context } from "../../contexts/DashBoardContext";

const PaySlip = () => {
  const { open, data } = Context();
  const { id } = useParams();

  const PaySlip = data.filter(
    (employeePaySlip) => employeePaySlip.id.toString() === id
  );

  const totalEarnings = PaySlip.map((filterPaySlip) => {
    return (
      Number(filterPaySlip.salary) +
      Number(filterPaySlip.medicalAllowance) +
      Number(filterPaySlip.transportAllowance) +
      Number(filterPaySlip.foodAllowance) +
      Number(filterPaySlip.overTime) +
      Number(filterPaySlip.otherAllowance)
    ).toLocaleString();
  });

  const totalDeduction = PaySlip.map((filterPaySlip) => {
    return (
      Number(filterPaySlip.natinalInsurance) +
      Number(filterPaySlip.incomeTax) +
      Number(filterPaySlip.loanRepayment) +
      Number(filterPaySlip.nhs)
    ).toLocaleString();
  });

  const netPay = PaySlip.map((filterPaySlip) => {
    return (
      Number(filterPaySlip.salary) +
      Number(filterPaySlip.medicalAllowance) +
      Number(filterPaySlip.transportAllowance) +
      Number(filterPaySlip.foodAllowance) +
      Number(filterPaySlip.overTime) +
      Number(filterPaySlip.otherAllowance) -
      (Number(filterPaySlip.natinalInsurance) +
        Number(filterPaySlip.incomeTax) +
        Number(filterPaySlip.loanRepayment) +
        Number(filterPaySlip.nhs))
    ).toLocaleString();
  });

  return (
    <>
      <div
        className={
          open
            ? "w-full h-[170px] border-[1.86px] border-[#ECEEF6] bg-white p-[20px] shadow-lg rounded-xl"
            : "w-full h-[186.53px] border-[1.96px] border-[#ECEEF6] bg-white p-[20px] shadow-lg rounded-xl"
        }
      >
        <div
          className={
            open
              ? "w-[727px] h-[122px] justify-between flex"
              : "w-[797.71px] h-[133.87px] justify-between flex"
          }
        >
          <>
            {PaySlip.map((filterPaySlip) => {
              return (
                <div
                  key={filterPaySlip.id}
                  className={
                    open
                      ? "w-[192px] h-[122px] flex flex-col gap-[25px] "
                      : "w-[209.95px] h-[132.86px] flex flex-col gap-[27.43px] "
                  }
                >
                  <div className="w-full flex justify-between">
                    <span
                      className={
                        open
                          ? "font-[400] text-[16px] leading-[24px] text-black opacity-70"
                          : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-70"
                      }
                    >
                      Employee ID:
                    </span>
                    <span
                      className={
                        open
                          ? "font-[400] text-[16px] leading-[24px] text-black opacity-80"
                          : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-80"
                      }
                    >
                      {filterPaySlip.empID}
                    </span>
                  </div>
                  <div className="w-full flex justify-between">
                    <span
                      className={
                        open
                          ? "font-[400] text-[16px] leading-[24px] text-black opacity-70"
                          : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-70"
                      }
                    >
                      Pay Cycle:
                    </span>
                    <span
                      className={
                        open
                          ? "font-[400] text-[16px] leading-[24px] text-black opacity-80"
                          : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-80"
                      }
                    >
                      {filterPaySlip.cycle}
                    </span>
                  </div>
                  <div className="w-full flex justify-between">
                    <span
                      className={
                        open
                          ? "font-[400] text-[16px] leading-[24px] text-black opacity-70"
                          : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-70"
                      }
                    >
                      Date Issued:
                    </span>
                    <span
                      className={
                        open
                          ? "font-[400] text-[16px] leading-[24px] text-black opacity-80"
                          : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-80"
                      }
                    >
                      {filterPaySlip.dateIssued}
                    </span>
                  </div>
                </div>
              );
            })}
          </>
          {/* box 2 */}
          <>
            {PaySlip.map((filterPaySlip) => {
              return (
                <div
                  key={filterPaySlip.id}
                  className={
                    open
                      ? "w-[228px] h-[122px] flex flex-col gap-[25px] "
                      : "w-[249.95px] h-[132.86px] flex flex-col gap-[27.43px]"
                  }
                >
                  <div className="w-full flex justify-between">
                    <span
                      className={
                        open
                          ? "font-[400] text-[16px] leading-[24px] text-black opacity-70"
                          : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-70"
                      }
                    >
                      Bank Account:
                    </span>
                    <span
                      className={
                        open
                          ? "font-[400] text-[16px] leading-[24px] text-black opacity-80"
                          : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-80"
                      }
                    >
                      {filterPaySlip.bankAccount}
                    </span>
                  </div>
                  <div className="w-full flex justify-between">
                    <span
                      className={
                        open
                          ? "font-[400] text-[16px] leading-[24px] text-black opacity-70"
                          : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-70"
                      }
                    >
                      Bank Name:
                    </span>
                    <span
                      className={
                        open
                          ? "font-[400] text-[16px] leading-[24px] text-black opacity-80"
                          : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-80"
                      }
                    >
                      {filterPaySlip.bankName}
                    </span>
                  </div>
                  <div className="w-full flex justify-between">
                    <span
                      className={
                        open
                          ? "font-[400] text-[16px] leading-[24px] text-black opacity-70"
                          : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-70"
                      }
                    >
                      Days Worked:
                    </span>
                    <span
                      className={
                        open
                          ? "font-[400] text-[16px] leading-[24px] text-black opacity-80"
                          : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-80"
                      }
                    >
                      {filterPaySlip.daysWorked}
                    </span>
                  </div>
                </div>
              );
            })}
          </>
        </div>
      </div>

      {/* bigger box */}
      <div
        className={
          open
            ? "w-full h-[480px] flex gap-[31px] mt-[10px] "
            : "w-full h-[526.68px] flex gap-[34.02px] mt-[10px]"
        }
      >
        {/* box 1 */}

        <div
          className={
            open
              ? "w-[550px] h-[480px] border-[1px] border-[#E3EFF3] bg-white shadow-lg rounded-xl grow"
              : "w-[603.49px] h-[526.68px] border-[1.1px] border-[#E3EFF3] bg-white shadow-lg rounded-xl grow"
          }
        >
          {/* top */}
          <div
            className={
              open
                ? "w-full p-[20px] font-[600] text-[16px] leading-[24px] text-black opacity-80"
                : "w-full p-[20px] font-[600] text-[17.56px] leading-[26.33px] text-black opacity-80"
            }
          >
            Earnings
          </div>
          <hr />
          {/* two boxes */}
          <div className="w-full flex justify-between p-[20px]">
            <div
              className={
                open
                  ? "w-[164px] h-[244px] flex flex-col gap-[20px]"
                  : "w-[180px] h-[265.73px] flex flex-col gap-[21.95px]"
              }
            >
              <span
                className={
                  open
                    ? "font-[400] text-[16px] leading-[24px] text-black opacity-70"
                    : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-70"
                }
              >
                Basic Salary
              </span>
              <span
                className={
                  open
                    ? "font-[400] text-[16px] leading-[24px] text-black opacity-70"
                    : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-70"
                }
              >
                Medical Allowance
              </span>
              <span
                className={
                  open
                    ? "font-[400] text-[16px] leading-[24px] text-black opacity-70"
                    : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-70"
                }
              >
                Transport Allowance
              </span>
              <span
                className={
                  open
                    ? "font-[400] text-[16px] leading-[24px] text-black opacity-70"
                    : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-70"
                }
              >
                Food Allowance
              </span>
              <span
                className={
                  open
                    ? "font-[400] text-[16px] leading-[24px] text-black opacity-70"
                    : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-70"
                }
              >
                Overtime Allowance
              </span>
              <span
                className={
                  open
                    ? "font-[400] text-[16px] leading-[24px] text-black opacity-70"
                    : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-70"
                }
              >
                Other Allowance
              </span>
            </div>

            <>
              {PaySlip.map((filterPaySlip) => {
                return (
                  <div
                    key={filterPaySlip.id}
                    className={
                      open
                        ? "w-[79px] h-[244px] flex flex-col gap-[20px] text-end"
                        : "w-[87px] h-[265.73px] flex flex-col gap-[21.95px] text-end"
                    }
                  >
                    <span
                      className={
                        open
                          ? "font-[600] text-[16px] leading-[24px] text-black opacity-80"
                          : "font-[600] text-[17.56px] leading-[26.33px] text-black opacity-80"
                      }
                    >
                      #{Number(filterPaySlip.salary).toLocaleString()}
                    </span>
                    <span
                      className={
                        open
                          ? "font-[600] text-[16px] leading-[24px] text-black opacity-80"
                          : "font-[600] text-[17.56px] leading-[26.33px] text-black opacity-80"
                      }
                    >
                      #{Number(filterPaySlip.medicalAllowance).toLocaleString()}
                    </span>
                    <span
                      className={
                        open
                          ? "font-[600] text-[16px] leading-[24px] text-black opacity-80"
                          : "font-[600] text-[17.56px] leading-[26.33px] text-black opacity-80"
                      }
                    >
                      #
                      {Number(
                        filterPaySlip.transportAllowance
                      ).toLocaleString()}
                    </span>
                    <span
                      className={
                        open
                          ? "font-[600] text-[16px] leading-[24px] text-black opacity-80"
                          : "font-[600] text-[17.56px] leading-[26.33px] text-black opacity-80"
                      }
                    >
                      #{Number(filterPaySlip.foodAllowance).toLocaleString()}
                    </span>
                    <span
                      className={
                        open
                          ? "font-[600] text-[16px] leading-[24px] text-black opacity-80"
                          : "font-[600] text-[17.56px] leading-[26.33px] text-black opacity-80"
                      }
                    >
                      #{Number(filterPaySlip.overTime).toLocaleString()}
                    </span>
                    <span
                      className={
                        open
                          ? "font-[600] text-[16px] leading-[24px] text-black opacity-80"
                          : "font-[600] text-[17.56px] leading-[26.33px] text-black opacity-80"
                      }
                    >
                      #{Number(filterPaySlip.otherAllowance).toLocaleString()}
                    </span>
                  </div>
                );
              })}
            </>
          </div>
          <hr />

          <div className="w-full flex justify-between p-[20px]">
            <div
              className={
                open
                  ? "font-[400] text-[16px] leading-[24px] text-black opacity-70"
                  : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-70"
              }
            >
              Total Earnings
            </div>
            <div
              className={
                open
                  ? "font-[600] text-[16px] leading-[24px] text-black opacity-80"
                  : "font-[600] text-[17.56px] leading-[26.33px] text-black opacity-80"
              }
            >
              #{totalEarnings}
            </div>
          </div>
        </div>

        {/* box 2 */}

        <div
          className={
            open
              ? "w-[550px] h-[480px] border-[1px] border-[#E3EFF3] bg-white shadow-lg rounded-xl grow"
              : "w-[603.49px] h-[526.68px] border-[1.1px] border-[#E3EFF3] bg-white shadow-lg rounded-xl grow"
          }
        >
          {/* top */}
          <div
            className={
              open
                ? "w-full p-[20px] font-[600] text-[16px] leading-[24px] text-black opacity-80"
                : "w-full p-[20px] font-[600] text-[17.56px] leading-[26.33px] text-black opacity-80"
            }
          >
            Deductions
          </div>
          <hr />
          {/* two boxes */}
          <div className="w-full flex justify-between p-[20px]">
            <div
              className={
                open
                  ? "w-[164px] h-[244px] flex flex-col gap-[20px]"
                  : "w-[180px] h-[265.73px] flex flex-col gap-[21.95px]"
              }
            >
              <span
                className={
                  open
                    ? "font-[400] text-[16px] leading-[24px] text-black opacity-70"
                    : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-70"
                }
              >
                National Insurance
              </span>
              <span
                className={
                  open
                    ? "font-[400] text-[16px] leading-[24px] text-black opacity-70"
                    : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-70"
                }
              >
                Income Tax
              </span>
              <span
                className={
                  open
                    ? "font-[400] text-[16px] leading-[24px] text-black opacity-70"
                    : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-70"
                }
              >
                Loan Repayment
              </span>
              <span
                className={
                  open
                    ? "font-[400] text-[16px] leading-[24px] text-black opacity-70"
                    : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-70"
                }
              >
                NHS
              </span>
            </div>

            <>
              {PaySlip.map((filterPaySlip) => {
                return (
                  <div
                    key={filterPaySlip.id}
                    className={
                      open
                        ? "w-[79px] h-[244px] flex flex-col gap-[20px] text-end"
                        : "w-[87px] h-[265.73px] flex flex-col gap-[21.95px] text-end"
                    }
                  >
                    <span
                      className={
                        open
                          ? "font-[600] text-[16px] leading-[24px] text-black opacity-80"
                          : "font-[600] text-[17.56px] leading-[26.33px] text-black opacity-80"
                      }
                    >
                      #{Number(filterPaySlip.natinalInsurance).toLocaleString()}
                    </span>
                    <span
                      className={
                        open
                          ? "font-[600] text-[16px] leading-[24px] text-black opacity-80"
                          : "font-[600] text-[17.56px] leading-[26.33px] text-black opacity-80"
                      }
                    >
                      #{Number(filterPaySlip.incomeTax).toLocaleString()}
                    </span>
                    <span
                      className={
                        open
                          ? "font-[600] text-[16px] leading-[24px] text-black opacity-80"
                          : "font-[600] text-[17.56px] leading-[26.33px] text-black opacity-80"
                      }
                    >
                      #{Number(filterPaySlip.loanRepayment).toLocaleString()}
                    </span>
                    <span
                      className={
                        open
                          ? "font-[600] text-[16px] leading-[24px] text-black opacity-80"
                          : "font-[600] text-[17.56px] leading-[26.33px] text-black opacity-80"
                      }
                    >
                      #{Number(filterPaySlip.nhs).toLocaleString()}
                    </span>
                  </div>
                );
              })}
            </>
          </div>
          <hr />

          <div className="w-full flex justify-between p-[20px]">
            <div
              className={
                open
                  ? "font-[400] text-[16px] leading-[24px] text-black opacity-70"
                  : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-70"
              }
            >
              Total Deductions
            </div>
            <div
              className={
                open
                  ? "font-[600] text-[16px] leading-[24px] text-black opacity-80"
                  : "font-[600] text-[17.56px] leading-[26.33px] text-black opacity-80"
              }
            >
              #{totalDeduction}
            </div>
          </div>

          <hr />

          <div className="w-full flex justify-between px-[20px] pt-[8px]">
            <div
              className={
                open
                  ? "font-[400] text-[16px] leading-[24px] text-black opacity-70"
                  : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-70"
              }
            >
              Net Pay
            </div>
            <div
              className={
                open
                  ? "font-[600] text-[16px] leading-[24px] text-black opacity-80"
                  : "font-[600] text-[17.56px] leading-[26.33px] text-black opacity-80"
              }
            >
              #{netPay}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col place-items-end mt-[10px] cursor-pointer">
        <div className="py-[12px] px-[22px] flex gap-[10px] rounded-xl bg-[#176B87] text-[#FFFFFF]">
          <span className="font-[600] text-[16.66px] leading-[24.99px]">
            Print
          </span>{" "}
          <MdPrint size={23.8} />
        </div>
      </div>
    </>
  );
};

export default PaySlip;
