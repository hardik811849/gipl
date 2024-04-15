function download() {
  const fileUrls = [
    "https://www.gipl.in/Content/Assets/202313090850GIPL_Directors_Resignation_Updated.pdf",
    "https://www.gipl.in/Content/Assets/201819071256Annual%20return%20Form_MGT-7%20FY%202017-18.pdf",
    "https://www.gipl.in/Content/Assets/20185111092117th_Annual%20report_2017-18.pdf",
    "https://www.gipl.in/Content/Assets/18thAnnualReport_GIPL_2018_19.pdf",
    "https://www.gipl.in/Content/Assets/Annualreturn18_19.pdf",
    "https://www.gipl.in/Content/Assets/AnnualReportGIPL2019_20.pdf",
    "https://www.gipl.in/Content/Assets/AnnualReturn_2019-20.pdf",
    "https://www.gipl.in/Detail/Content/3371",
    "https://www.gipl.in/Content/Assets/20215020095420th%20annual%20Report%20-%20website.pdf",
    "https://www.gipl.in/Content/Assets/202140291130Form_MGT_7%202020-21.pdf",
    "https://www.gipl.in/Content/Assets/202347030607ANNUAL%20RETURN%20for%20FY%202021-22.pdf",
    "https://www.gipl.in/Content/Assets/202347030624ANNUAL%20REPORT%20FOR%20%20FY%202021-22.pdf",
  ];

  // Iterate through each file URL and initiate download
  fileUrls.forEach((url, index) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const a = document.createElement("a");
        a.href = window.URL.createObjectURL(blob);
        a.download = `file${index + 1}.pdf`; // You can set custom file names here
        document.getElementById("div").appendChild(a);
        a.click();
        document.getElementById("div").removeChild(a);
      });
  });
}

document.getElementById("download").addEventListener("click", download);
