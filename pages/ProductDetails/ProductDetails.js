import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";
import { FaDownload } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './productDetails.css'
const tabs = [
  {
    id: "Fiche Technique",
    label: "ტექნიკური მახასიათებელი",
  },
  // {
  //   id: "Description",
  //   label: "აღწერა",
  //   content:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  // },
  
];

const ProductDetails = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [productInfo, setProductInfo] = useState([]);
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    setProductInfo(location.state.item);
    setPrevLocation(location.pathname);
  }, [location, productInfo.ficheTech]);

  return (
    <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
      <div className="max-w-container mx-auto px-4">
        <div style={{marginTop: '60px'}} className="xl:-mt-10 -mt-7">
          {/* <Breadcrumbs title="" prevLocation={prevLocation} /> */}
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4">
          <div className="h-full xl:col-span-2">
            <img
              className="w-full h-full "
              src={productInfo.img}
              alt={productInfo.img}
            />
          </div>
          <div className="h-full w-full md:col-span-2 xl:col-span-4 xl:px-4 flex flex-col gap-6 justify-center">
            <ProductInfo productInfo={productInfo} />
          </div>
        </div>
        <div>
          <div className=" space-x-4  pt-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${
                  activeTab === tab.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                } py-2 px-4  focus:outline-none`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="my-4">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={activeTab === tab.id ? "" : "hidden"}
              >
                {tab.id === "Fiche Technique" && productInfo.ficheTech ? (
                  <div>
                    <table className="table-auto w-full">
                      <tbody>
                        {productInfo.ficheTech.map((row) => (
                          <tr key={row.label} className="bg-gray-100">
                            <td className="border px-4 py-2 font-semibold">
                              {row.label}
                            </td>
                            <td className="border px-4 py-2">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="my-4 flex justify-end">
                      
                    </div>
                  </div>
                ) : (
                  <p>{tab.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

export const ProductDetails2 = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [productInfo, setProductInfo] = useState([]);
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [current, setCurrent] = useState(0);
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    setProductInfo(location.state.item);
    setPrevLocation(location.pathname);
  }, [location, productInfo.ficheTech]);
  const images = [
    productInfo.img,
    productInfo.img2,
    productInfo.img3,
];
  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  return (
    <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
      <div className="max-w-container mx-auto px-4">
        <div style={{marginTop: '60px'}} className="xl:-mt-10 -mt-7">
          {/* <Breadcrumbs title="" prevLocation={prevLocation} /> */}
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4">
          <div className="h-full xl:col-span-2">
          <div className='butts' >
              <button onClick={prevSlide} style={{background: 'none', border: '0'}}><FontAwesomeIcon style={{width: '30px', height: '30px'}} icon={faChevronLeft} /></button>
              <img 
                className="w-full h-full"
                src={images[current]}
                alt={productInfo.img}
              />
              <button onClick={nextSlide}style={{background: 'none', border: '0'}}><FontAwesomeIcon style={{width: '30px', height: '30px'}} icon={faChevronRight} /></button>
            </div>

          </div>
          <div className="h-full w-full md:col-span-2 xl:col-span-4 xl:px-4 flex flex-col gap-6 justify-center">
            <ProductInfo productInfo={productInfo} />
          </div>
        </div>
        <div>
          <div className=" space-x-4  pt-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${
                  activeTab === tab.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                } py-2 px-4  focus:outline-none`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="my-4">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={activeTab === tab.id ? "" : "hidden"}
              >
                {tab.id === "Fiche Technique" && productInfo.ficheTech ? (
                  <div>
                    <table className="table-auto w-full">
                      <tbody>
                        {productInfo.ficheTech.map((row) => (
                          <tr key={row.label} className="bg-gray-100">
                            <td className="border px-4 py-2 font-semibold">
                              {row.label}
                            </td>
                            <td className="border px-4 py-2">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="my-4 flex justify-end">
                      
                    </div>
                  </div>
                ) : (
                  <p>{tab.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


