import { success, download, pdf_viewer } from "../../assets";
import { saveAs } from "file-saver";
import "./Order.css";

const Tiket = (slipData) => {
  const imageURL = slipData.slipData;
  console.log(imageURL);

  const downloadImg = () => {
    saveAs(imageURL, "slip.png");
  };

  // const handleDownload = () => {
  //   const url = window.URL.createObjectURL(new Blob([slipData]));
  //   const link = document.createElement("a");
  //   link.href = url;
  //   link.setAttribute("download", "slip.png");
  //   document.body.appendChild(link);
  //   link.click();
  //   // document.body.removeChild(link);
  // };

  // const handleDownloadClick = () => {
  //   const url = imageURL;

  //   const filename = url.split("/").pop();

  //   const link = document.createElement("a");
  //   link.href = url;
  //   link.setAttribute("download", filename);

  //   document.body.appendChild(link);
  //   link.click();
  // };

  return (
    <div className="tiket">
      <div className="tiket-sukses">
        <img src={success} alt="success" />
        <p>
          <strong>Pembayaran Berhasil!</strong>
        </p>
        <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
      </div>
      <div className="card">
        <div className="download_menu">
          <div className="text-download">
            <p>
              <strong>Invoice</strong>
            </p>
            <p>*no invoice</p>
          </div>
          <div className="button-download" onClick={downloadImg}>
            <button>
              <img src={download} alt="download" /> Unduh
            </button>
          </div>
        </div>
        <div className="card container_pdf">
          {/* <img
            src={pdf_viewer}
            alt="pdf_viewer"
            className="pic_pdf"
            onClick={handleDownloadClick}
          /> */}
          <img
            src={imageURL}
            alt="pdf_viewer"
            className="pic_pdf"
            onClick={downloadImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Tiket;
