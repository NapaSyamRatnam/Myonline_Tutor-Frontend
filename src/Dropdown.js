// // Dropdown.js
// import React, { useState } from 'react';

// const Dropdown = ({ onChange }) => {
//   const options = [
//     {
//       label: 'Technical',
//       value: 'Technical',
//       subOptions: [
//         { label: 'Java', value: 'Java' },
//         { label: 'Python', value: 'Python' },
//         { label: 'AWS', value: 'AWS' },
//         { label: 'SQL', value: 'SQL' },
//       ],
//     },
//     {
//       label: 'Professional',
//       value: 'Professional',
//       subOptions: [
//         { label: 'Yoga', value: 'Yoga' },
//         { label: 'Music', value: 'Music' },
//         { label: 'Fitness', value: 'Fitness' },
//         { label: 'Cooking', value: 'Cooking' },
//       ],
//     },
//     {
//       label: 'Academic',
//       value: 'Academic',
//       subOptions: [
//         { label: 'School', value: 'School' },
//         { label: 'College', value: 'College' },
//       ],
//     },
//   ];

//   const [selectedMainOption, setSelectedMainOption] = useState('');
//   const [selectedSubOption, setSelectedSubOption] = useState('');

//   const handleMainOptionChange = (event) => {
//     const selectedMainOptionValue = event.target.value;
//     setSelectedMainOption(selectedMainOptionValue);
//     setSelectedSubOption('');

//     // Call the parent component's onChange prop with selected values
//     onChange(selectedMainOptionValue, '');
//   };

//   const handleSubOptionChange = (event) => {
//     const selectedSubOptionValue = event.target.value;
//     setSelectedSubOption(selectedSubOptionValue);

//     // Call the parent component's onChange prop with selected values
//     onChange(selectedMainOption, selectedSubOptionValue);
//   };

//   return (
//     <div >
//       <label htmlFor="mainDropdown" style={{marginLeft: "-240%"}}>Select a Course:</label>
//       <select
//         id="mainDropdown"
//         value={selectedMainOption}
//         onChange={handleMainOptionChange}
//         style={{marginLeft: "-240%"}}>
//         <option value="">-- Select --</option>
//         {options.map((mainOption) => (
//           <option key={mainOption.value} value={mainOption.value}>
//             {mainOption.label}
//           </option>
//         ))}
//       </select>

//       {selectedMainOption && (
//         <div className="sub-dropdown-container">
//           <label htmlFor="subDropdown" style={{marginTop: "-43%", marginLeft: "80%", marginRight: "-150%"}}>Select a Sub-Course:</label>
//           <select
//             id="subDropdown"
//             value={selectedSubOption}
//             onChange={handleSubOptionChange}
//             style={{marginLeft: "120%"}}>
//             <option value="">-- Select --</option>
//             {options
//               .find((mainOption) => mainOption.value === selectedMainOption)
//               ?.subOptions.map((subOption) => (
//                 <option key={subOption.value} value={subOption.value}>
//                   {subOption.label}
//                 </option>
//               ))}
//           </select>
//         </div>
//       )}

//       {selectedMainOption && selectedSubOption && (
//         <p>
//           You selected: {selectedMainOption} - {selectedSubOption}
//         </p>
//       )}
//     </div>
//   );
// };

// export default Dropdown;







import React, { useState } from 'react';

const Dropdown = ({ onChange }) => {
  const options = [
    {
      label: 'Technical',
      value: 'Technical',
      subOptions: [
        { label: 'Java', value: 'Java', amount: 3000 }, // Added amount for Java
        { label: 'Python', value: 'Python', amount: 2500 }, // Added amount for Python
        { label: 'AWS', value: 'AWS', amount: 3000 }, // Added amount for AWS
        { label: 'SQL', value: 'SQL', amount: 3200 }, // Added amount for SQL
      ],
    },
    {
      label: 'Professional',
      value: 'Professional',
      subOptions: [
        { label: 'Yoga', value: 'Yoga', amount: 1200 }, // Added amount for Yoga
        { label: 'Music', value: 'Music', amount: 1500 }, // Added amount for Music
        { label: 'Fitness', value: 'Fitness', amount: 2500 }, // Added amount for Fitness
        { label: 'Cooking', value: 'Cooking', amount: 4000 }, // Added amount for Cooking
      ],
    },
    {
      label: 'Academic',
      value: 'Academic',
      subOptions: [
        { label: 'School', value: 'School', amount: 4500 }, // Added amount for School
        { label: 'College', value: 'College', amount: 4700 }, // Added amount for College
      ],
    },
  ];

  const [selectedMainOption, setSelectedMainOption] = useState('');
  const [selectedSubOption, setSelectedSubOption] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(0); // Added state for selected amount

  const handleMainOptionChange = (event) => {
    const selectedMainOptionValue = event.target.value;
    setSelectedMainOption(selectedMainOptionValue);
    setSelectedSubOption('');
    setSelectedAmount(0); // Reset selected amount when main option changes

    // Call the parent component's onChange prop with selected values
    onChange(selectedMainOptionValue, '', 0); // Pass 0 as amount initially
  };

  const handleSubOptionChange = (event) => {
    const selectedSubOptionValue = event.target.value;
    const selectedOption = options.find(
      (mainOption) => mainOption.value === selectedMainOption
    );
    const selectedSubOption = selectedOption.subOptions.find(
      (subOption) => subOption.value === selectedSubOptionValue
    );

    setSelectedSubOption(selectedSubOptionValue);
    setSelectedAmount(selectedSubOption.amount); // Set selected amount

    // Call the parent component's onChange prop with selected values
    onChange(selectedMainOption, selectedSubOptionValue, selectedSubOption.amount);
  };

  return (
    <div>
      <h4><label htmlFor="mainDropdown">Select a Course:</label></h4>
      <select
        id="mainDropdown"
        value={selectedMainOption}
        onChange={handleMainOptionChange}
      >
        <option value="">-- Select --</option>
        {options.map((mainOption) => (
          <option key={mainOption.value} value={mainOption.value}>
            {mainOption.label}
          </option>
        ))}
      </select>

      {selectedMainOption && (
        <div className="sub-dropdown-container">
         <h6> <label htmlFor="subDropdown">Select Sub-Course:</label></h6>
          <select
            id="subDropdown"
            value={selectedSubOption}
            onChange={handleSubOptionChange}
          >
            <option value="">-- Select --</option>
            {options
              .find((mainOption) => mainOption.value === selectedMainOption)
              ?.subOptions.map((subOption) => (
                <option key={subOption.value} value={subOption.value}>
                  {subOption.label}
                </option>
              ))}
          </select>
        </div>
      )}
      <div>
        <p>
         -
        </p>
      </div>
      {selectedAmount > 0 && <h2> Amount: {selectedAmount}</h2>} {/* Display selected amount */}
    </div>
  );
};

export default Dropdown;
















