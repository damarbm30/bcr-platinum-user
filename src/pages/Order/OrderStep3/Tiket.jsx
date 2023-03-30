import { success, download, pdf_viewer } from "~/assets";
import { saveAs } from "file-saver";
import "../Order.css";
import { useCallback } from "react";
import { debounce } from "lodash";

const Tiket = (slipData) => {
  const imageURL = slipData.slipData;
  console.log(imageURL);

  const downloadImg = useCallback(() => {
    saveAs(imageURL, "slip.png");
  }, []);

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
          <div
            className="button-download"
            onClick={debounce(downloadImg, 2000)}
          >
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
