import React from "react";

const Choice = ({ name, question, onChange }) => {
  return (
    <div>
      <h3 class="mb-4 font-semibold text-white dark:text-white">{question}</h3>
      <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center pl-3">
            <input
              id={`sangatburuk-${name}`}
              type="radio"
              value="sangatburuk"
              name={name}
              onChange={onChange}
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for={`sangatburuk-${name}`}
              class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Sangat Buruk
            </label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center pl-3">
            <input
              id={`buruk-${name}`}
              type="radio"
              value="buruk"
              name={name}
              onChange={onChange}
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for={`buruk-${name}`}
              class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Buruk
            </label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center pl-3">
            <input
              id={`baik-${name}`}
              type="radio"
              value="baik"
              name={name}
              onChange={onChange}
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for={`baik-${name}`}
              class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Baik
            </label>
          </div>
        </li>
        <li class="w-full dark:border-gray-600">
          <div class="flex items-center pl-3">
            <input
              id={`sangatbaik-${name}`}
              type="radio"
              value="sangatbaik"
              name={name}
              onChange={onChange}
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for={`sangatbaik-${name}`}
              class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Sangat Baik
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Choice;
