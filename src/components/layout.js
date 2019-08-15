import React, { useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Fade from 'react-reveal/Fade';
import config from 'react-reveal/globals';
config({ ssrFadeout: true });

import heroImg from "../images/hero.png";
// import ayolokahead from "../images/ayoloka_white_prog.jpg";
import ayolokahead from "../images/ayoloka.png";

import website_prog1 from "../images/website 1_prog.jpg";
import website_prog2 from "../images/website 2_prog.jpg";
import website_prog3 from "../images/website 3_prog.jpg";
import website_prog4 from "../images/website 4_prog.jpg";
import website_prog5 from "../images/website 5_prog.jpg";


function Layout({ children }) {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title,
              github,
              blog
            }
          }
        }
      `}
      render={data => (    

        <div className="leading-normal tracking-normal text-white gradient">
            {children}

            {/* Navigation */}
            <nav id="header" className="fixed w-full z-30 top-0 text-white bg-white shadow">

              <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                  
                <div className="pl-4 flex items-center">
                  <Link to={`/#`} className="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl text-gray-800"> 
                    <img className="ayolokahead" alt="img_ayolokahead" src={ayolokahead}/>
                  </Link>
                </div>

                <div className="block lg:hidden pr-4">
                  <button onClick={() => toggleExpansion(!isExpanded)} 
                          className="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20 bg-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                  </button>
                </div>

                <div className={`${ isExpanded ? `block` : `hidden` } w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20 `}>
                  <ul className="list-reset lg:flex justify-end flex-1 items-center">
                    <li className="mr-3">
                      <Link to={`/`} className="inline-block py-2 px-4 text-black font-bold no-underline" >Home</Link>
                    </li>
                    <li className="mr-0">
                      <Link to={`/#`} className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-1">EN</Link>
                    </li>
                    <li className="mr-3">
                      <Link to={`/#`} className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-1 font-bold">ID</Link>
                    </li>
                    <li className="py-3">
                    <Link to={`/#`} id="navAction" className="mx-auto lg:mx-0 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 gradient text-white">Berkarir di Ayoloka</Link>  
                    </li>
                  </ul>
                </div>
              </div>
              
              <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
            </nav>

            {/* Hero */}
            <div className="pt-24">

              <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

                <div className="flex flex-col w-full md:w-2/5 justify-center lg:items-start sm:items-center text-center md:text-left">
                  {/* <p className="uppercase tracking-loose w-full"></p> */}
                  <h1 className="md:antialiased my-4 text-4xl font-bold leading-tight">Buat Event Gratis</h1>
                  <p className="leading-normal text-2xl mb-8">
                    {data.site.siteMetadata.title} - adalah startup yang menyediakan marketplace digital untuk workshop, kursus, dan seminar. Platform ini menghubungkan instructors dan students.                     
                  </p>

                  <form className="w-full"name="subscribe" method="post" data-netlify="true">
                    <input className="sm:w-auto lg:w-8/12 bg-white placeholder-gray-500 text-black rounded-full focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg lg:mx-0 py-4 px-8 mr-1 appearance-none leading-normal" type="email" placeholder="Masukkan email"/> 
                    &nbsp;
                      <button type="submit" className="mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Cari Tahu</button>
                  </form>                  

                </div>

                <div className="w-full md:w-3/5 py-6 text-center">
                  <img className="w-full md:w-4/5 z-50" alt="img-hero" src={heroImg} />
                </div>
                
              </div>

            </div>

            {/* Waves SVG */}
            <div className="relative -mt-12 lg:-mt-24">
              <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
              <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
              <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
              <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
              </g>
              <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fillRule="nonzero">
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
              </g>
              </g>
              </svg>
            </div>

            {/* Alternate features */}
            <section id="features" className="bg-white border-b py-8">
              <div className="container max-w-5xl mx-auto m-8">
                <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Features</h2>
                <div className="w-full mb-4">	
                  <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
              
                <div className="flex content-center items-center flex-wrap">
                  <div className="w-full sm:w-1/2 p-6 ">
                    <Fade left>
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Cari Workshop Dalam Sekejap</h3>
                    <p className="text-gray-600 mb-8">Temukan workshops dengan mencari berdasarkan keyword atau memakai filter berdasar lokasi, kategori, instruktur, dan lain-lain.<br/><br/></p>
                    </Fade>  
                  </div>

                  <div className="w-full sm:w-1/2 p-6">
                    <Fade right> 
                    <img src={website_prog1} />
                    </Fade>
                  </div>
                  
                </div>
                
                
                <div className="flex content-center items-center flex-wrap flex-col-reverse sm:flex-row" >	

                  
                  <div className="w-full sm:w-1/2 p-6 mt-6">
                    <Fade left>
                    <img src={website_prog2}/>
                    </Fade>
                  </div>
                  
                  <div className="w-full sm:w-1/2 p-6 mt-6">
                    <div className="align-middle">
                      <Fade right>
                      <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3" >Baca Detailnya</h3>
                        <p className="text-gray-600 mb-8">Hubungi instruktur, pilih tanggal, beli dari beberapa pilihan tiket, dan sebagainya.Tidak perlu menunggu lama untuk mencari tahu kelas penuh atau tidak.<br/><br/></p>
                      </Fade>
                    </div>
                  </div>
                </div>

                <div className="flex content-center items-center flex-wrap">
                  <div className="w-full sm:w-1/2 p-6">
                    <Fade left>
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3" >Bayar Online</h3>
                    <p className="text-gray-600 mb-8" >Pilih metode pembayaran secara online dan dapatkan poin untuk pembelian selanjutnya.Kami menerima Go Pay, Credit Card, Bank Transfer, dll<br/><br/></p>
                    </Fade>
                    
                  </div>
                  <div className="w-full sm:w-1/2 p-6">
                    <Fade right>
                    <img src={website_prog5}/>
                    </Fade>
                  </div>
                </div>

                <div className="flex content-center items-center flex-wrap flex-col-reverse sm:flex-row">	
                  <div className="w-full sm:w-1/2 p-6 mt-6">
                    <Fade left>
                    <img src={website_prog3}/>
                    </Fade>
                  </div>

                  <div className="w-full sm:w-1/2 p-6 mt-6">
                    <div className="align-middle">
                      <Fade right>
                      <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3" >Kasih Masukan</h3>
                        <p className="text-gray-600 mb-8">Beri masukan kepada instruktur secara pribadi, dan berikan rating/review untuk siswa lain dan berikan rating untuk membantu siswa lain dalam mengambil keputusan. <br/><br/></p>                        
                      </Fade>
                    </div>
                  </div>
                </div>
                
              </div>
            </section>

            

            

            {/* Waves SVG */}
            <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
                  <g className="wave" fill="#f8fafc">
                    <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
                  </g>
                  <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                    <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                      <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                      <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                      <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>

            {/* CTA block */}
          
            {/* Footer */}
            <footer className="bg-white">
              <div className="container mx-auto content-center text-center">

                <div className="w-full py-6">
                <div className="text-black m-2 text-gray-800 text-xs">Copyright&copy; 2019</div>  

                  <div className="mb-6 flex justify-center ">
                    <a href={`/#`}> 
                      <img className="ayolokahead" alt="img-ayolokahead" src={ayolokahead}/>
                    </a>
                  </div>
                        
                        <div className="flex-1">
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:mr-0">
                                    <Link to={`/#`}>
                                      <svg className="fill-current text-teal-500 inline-block h-6 w-6 m-1" id="Instagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                        <title>instagram</title>
                                        <path d="M18.94586,6.28931a6.60561,6.60561,0,0,0-.41833-2.18463,4.41189,4.41189,0,0,0-1.03809-1.59412,4.41189,4.41189,0,0,0-1.59412-1.03809,6.60561,6.60561,0,0,0-2.18463-.41833C12.75073,1.01038,12.44427,1,10,1s-2.75073.01038-3.71069,0.05414a6.60561,6.60561,0,0,0-2.18463.41833A4.41189,4.41189,0,0,0,2.51056,2.51056,4.41189,4.41189,0,0,0,1.47247,4.10468a6.60561,6.60561,0,0,0-.41833,2.18463C1.01038,7.24927,1,7.55573,1,10s0.01038,2.75073.05414,3.71069a6.60561,6.60561,0,0,0,.41833,2.18463,4.41189,4.41189,0,0,0,1.03809,1.59412,4.41109,4.41109,0,0,0,1.59412,1.03809,6.60561,6.60561,0,0,0,2.18463.41833C7.24927,18.98969,7.55573,19,10,19s2.75073-.01031,3.71069-0.05414a6.60561,6.60561,0,0,0,2.18463-.41833,4.60208,4.60208,0,0,0,2.6322-2.6322,6.60561,6.60561,0,0,0,.41833-2.18463C18.98962,12.75073,19,12.44427,19,10S18.98962,7.24927,18.94586,6.28931Zm-1.61993,7.34747a4.97824,4.97824,0,0,1-.30994,1.67114A2.98017,2.98017,0,0,1,15.30792,17.016a4.9786,4.9786,0,0,1-1.67114.30994C12.68787,17.3692,12.40326,17.37836,10,17.37836s-2.68787-.00916-3.63678-0.05243A4.9786,4.9786,0,0,1,4.69208,17.016a2.78769,2.78769,0,0,1-1.03485-.67322A2.78769,2.78769,0,0,1,2.984,15.30792a4.97824,4.97824,0,0,1-.30994-1.67114C2.6308,12.68774,2.62164,12.40314,2.62164,10s0.00916-2.68774.05243-3.63678A4.9786,4.9786,0,0,1,2.984,4.69208a2.78769,2.78769,0,0,1,.67322-1.03485A2.78769,2.78769,0,0,1,4.69208,2.984a4.9786,4.9786,0,0,1,1.67114-.30994C7.31226,2.6308,7.59686,2.62164,10,2.62164s2.68774,0.00916,3.63678.05243a4.9786,4.9786,0,0,1,1.67114.30994,2.78769,2.78769,0,0,1,1.03485.67322A2.78769,2.78769,0,0,1,17.016,4.69208a4.9786,4.9786,0,0,1,.30994,1.67114c0.04327,0.949.05243,1.2337,0.05243,3.63678S17.3692,12.68774,17.32593,13.63678ZM10,5.37836A4.62164,4.62164,0,1,0,14.62164,10,4.62169,4.62169,0,0,0,10,5.37836ZM10,13a3,3,0,1,1,3-3A3,3,0,0,1,10,13Zm5.88422-7.8042a1.08,1.08,0,1,1-1.08-1.08A1.08,1.08,0,0,1,15.88422,5.1958Z" transform="translate(-1 -1)"/>
                                      </svg>
                                    </Link>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:mr-0">
                                    <Link to={`/#`}>
                                    <svg className="fill-current text-teal-500 inline-block h-6 w-6 m-1" id="Github" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" >
                                      <path d="M13.18,11.309c-0.718,0-1.3,0.807-1.3,1.799c0,0.994,0.582,1.801,1.3,1.801s1.3-0.807,1.3-1.801
                                        C14.479,12.116,13.898,11.309,13.18,11.309z M17.706,6.626c0.149-0.365,0.155-2.439-0.635-4.426c0,0-1.811,0.199-4.551,2.08
                                        c-0.575-0.16-1.548-0.238-2.519-0.238c-0.973,0-1.945,0.078-2.52,0.238C4.74,2.399,2.929,2.2,2.929,2.2
                                        C2.14,4.187,2.148,6.261,2.295,6.626C1.367,7.634,0.8,8.845,0.8,10.497c0,7.186,5.963,7.301,7.467,7.301
                                        c0.342,0,1.018,0.002,1.734,0.002c0.715,0,1.392-0.002,1.732-0.002c1.506,0,7.467-0.115,7.467-7.301
                                        C19.2,8.845,18.634,7.634,17.706,6.626z M10.028,16.915H9.972c-3.771,0-6.709-0.449-6.709-4.115c0-0.879,0.31-1.693,1.047-2.369
                                        c1.227-1.127,3.305-0.531,5.662-0.531c0.01,0,0.02,0,0.029,0c0.01,0,0.018,0,0.027,0c2.357,0,4.436-0.596,5.664,0.531
                                        c0.735,0.676,1.045,1.49,1.045,2.369C16.737,16.466,13.8,16.915,10.028,16.915z M6.821,11.309c-0.718,0-1.3,0.807-1.3,1.799
                                        c0,0.994,0.582,1.801,1.3,1.801c0.719,0,1.301-0.807,1.301-1.801C8.122,12.116,7.54,11.309,6.821,11.309z"/>
                                    </svg>
                                    </Link>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:mr-0">
                                    <Link to={`/#`}>
                                    <svg className="fill-current text-teal-500 inline-block h-6 w-6 m-1" id="Twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                      <path d="M17.316,6.246c0.008,0.162,0.011,0.326,0.011,0.488c0,4.99-3.797,10.742-10.74,10.742c-2.133,0-4.116-0.625-5.787-1.697
                                        c0.296,0.035,0.596,0.053,0.9,0.053c1.77,0,3.397-0.604,4.688-1.615c-1.651-0.031-3.046-1.121-3.526-2.621
                                        c0.23,0.043,0.467,0.066,0.71,0.066c0.345,0,0.679-0.045,0.995-0.131c-1.727-0.348-3.028-1.873-3.028-3.703c0-0.016,0-0.031,0-0.047
                                        c0.509,0.283,1.092,0.453,1.71,0.473c-1.013-0.678-1.68-1.832-1.68-3.143c0-0.691,0.186-1.34,0.512-1.898
                                        C3.942,5.498,6.725,7,9.862,7.158C9.798,6.881,9.765,6.594,9.765,6.297c0-2.084,1.689-3.773,3.774-3.773
                                        c1.086,0,2.067,0.457,2.756,1.191c0.859-0.17,1.667-0.484,2.397-0.916c-0.282,0.881-0.881,1.621-1.66,2.088
                                        c0.764-0.092,1.49-0.293,2.168-0.594C18.694,5.051,18.054,5.715,17.316,6.246z"/>
                                      </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                </div>

              </div>
              
              

            </footer>

        </div>
      )}
    />
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
