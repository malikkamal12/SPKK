import React, { useState } from "react";
import Choice from "./Choice";
import { questions } from "../constants";
import Modal from "./Modal";

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState([]);

  const [data, setData] = useState({});

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    // console.log(data);

    const arr = Object.entries(data);
    // console.log(arr);
    let sb = 0;
    let bu = 0;
    let b = 0;
    let sbk = 0;
    arr.map((e, i) => {
      if (e[1] == "sangatburuk") {
        sb++;
      } else if (e[1] == "buruk") {
        bu++;
      } else if (e[1] == "baik") {
        b++;
      } else if (e[1] == "sangatbaik") {
        sbk++;
      }
    });

    if (sb >= 4) {
      setId("KAR1");
      setIsOpen(true);
    } else if (sb < 4 && sbk < 7) {
      setId("KAR2");
      setIsOpen(true);
    } else if (sbk >= 7) {
      setId("KAR3");
      setIsOpen(true);
    }
  };
  return (
    <>
      <form
        onSubmit={submit}
        className="shadow-3xl p-10 px-16 flex flex-col gap-5"
      >
        {questions.map((e) => {
          return (
            <Choice
              key={e.name}
              question={e.question}
              name={e.name}
              onChange={updateData}
            />
          );
        })}
        <div className="w-full flex justify-center">
          <button
            type="submit"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-1/3"
          >
            Submit
          </button>
        </div>
      </form>
      {isOpen && <Modal setIsOpen={setIsOpen} cds={id} />}
    </>
  );
};

export default Form;
