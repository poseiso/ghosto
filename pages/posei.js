import Head from "next/head";

export default function Posei() {
  const chunk = (str, n) => {
    var ret = [];
    var i;
    var len;

    for (i = 0, len = str.length; i < len; i += n) {
      ret.push(str.substr(i, n));
    }

    return ret;
  };
  return (
    <div class="dark:bg-gray-800 bg-white">
      <div class="flex flex-col items-center justify-center h-screen mx-64  ">
        <h1 class="text-4xl font-normal leading-normal mt-0 mb-2 text-purple-800 p-10">
          Sandwich a string~ ★ ☆
        </h1>
        <textarea
          class="form-textarea bg-transparent mt-1 block w-full border border-gray-400"
          rows="6"
          placeholder="Enter your text"
          id="numb"
        />
        <input
          type="text"
          placeholder="sandwiched character"
          class="
          mt-10
      bg-transparent
         px-2
         py-1
         placeholder-gray-400
         text-gray-600
         relative
         rounded
         text-sm
         border border-gray-400
         outline-none
         focus:outline-none focus:ring
         w-full
         pl-10
       "
          id="replace"
        />
        <input
          id="replacer"
          type="text"
          placeholder="what's the sandwicher"
          class="
          my-10
      bg-transparent
         px-2
         py-1
         placeholder-gray-400
         text-gray-600
         relative
         rounded
         text-sm
         border border-gray-400
         outline-none
         focus:outline-none focus:ring
         w-full
         pl-10
       "
        />
        <div class="flex flex-col">
          <button
            type="button"
            class="shadow-2xl transition duration-500 ease-in-out  bg-blue-500 text-white rounded-md w-64
            h-10 hover:bg-green-300 transform hover:-translate-y-1 hover:scale-110 "
            onClick={() => {
              let x = document.getElementById("numb").value;
              let y = document.getElementById("replace").value;
              let z = document.getElementById("replacer").value;
              let text;
              var replace = `([${y}])`;

              var re = new RegExp(replace, "gi");
              text = x.replace(re, `${z}${y}${z}`);
              document.getElementById("demo").innerHTML = text;
            }}
          >
            Submit
          </button>
        </div>
        <p id="demo"></p>
      </div>
    </div>
  );
}
