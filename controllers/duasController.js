const duas = [
    { text: 'Morning Dua' },
    { text: 'Evening Dua' },
    // Add more Duas as needed
  ];
  
  exports.getDuas = (req, res) => {
    res.json(duas);
  };