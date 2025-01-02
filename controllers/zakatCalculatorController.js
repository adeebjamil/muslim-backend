exports.calculateZakat = (req, res) => {
    const { assets, liabilities } = req.body;
    const netAssets = assets - liabilities;
    const zakat = netAssets * 0.025; // 2.5% Zakat
    res.json({ zakat });
  };