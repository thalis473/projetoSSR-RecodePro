import React from "react";
import Head from "next/head"

export default function Home() {
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
          <title>App NextJs SSR</title>
        </Head>
  
        <body>
          <div className="container-fluid bg-light">
            <div className="text-center">
              <img className="mt-5" src="./images/logo1.jpeg" /> < br />
              <h1 className="display-3 ">Confira nosso Produtos</h1>
            </div>
            <div className="row row-cols-4 row-cols-md-4 g-4 mt-5 mx-5 justify-content-center">
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="./images/geladeira.jpg" className="card-img-top" alt="jóia" />
                  <div className="card-body">
                    <h5 className="card-title">Geladeira</h5>
                    <p className="card-text text-danger"><s>R$ 1.500,00 </s></p>
                    <p className="card-text text-primary"> <b>R$ 1.300,00</b>  </p>
                  </div>
                </div>
              </div>
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="./images/fogao.jpg" className="card-img-top" alt="jóia" />
                  <div className="card-body">
                    <h5 className="card-title">Fogão</h5>
                    <p className="card-text text-danger"><s>R$ 799,90 </s></p>
                    <p className="card-text text-primary"> <b>R$ 400,90</b> </p>
                  </div>
                </div>
              </div>
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="./images/torradeira.jpg" className="card-img-top" alt="jóia" />
                  <div className="card-body">
                    <h5 className="card-title">Torradeira</h5>
                    <p className="card-text text-danger"><s>R$ 300,00 </s></p>
                    <p className="card-text text-primary"> <b>R$ 220,99</b>  </p>
                  </div>
                </div>
              </div>
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="./images/televisao.jpg" className="card-img-top" alt="jóia" />
                  <div className="card-body">
                    <h5 className="card-title">Tv</h5>
                    <p className="card-text text-danger"><s> R$ 5.200,00</s></p>
                    <p className="card-text text-primary"> <b>R$ 3.000,99</b>  </p>
                  </div>
                </div>
              </div>
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="./images/microondas.webp" className="card-img-top" alt="jóia" />
                  <div className="card-body">
                    <h5 className="card-title">Microondas</h5>
                    <p className="card-text text-danger"><s>R$ 400,90 </s></p>
                    <p className="card-text text-primary"> <b>R$ 240,99</b>  </p>
                  </div>
                </div>
              </div>
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="./images/radio.webp" className="card-img-top" alt="jóia" />
                  <div className="card-body">
                    <h5 className="card-title">Radio</h5>
                    <p className="card-text text-danger"><s>R$ 647,00 </s></p>
                    <p className="card-text text-primary"> <b>R$ 367,99</b> </p>
                  </div>
                </div>
              </div>
  
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="./images/ventilador.jpg" className="card-img-top" alt="jóia" />
                  <div className="card-body">
                    <h5 className="card-title">ventilador</h5>
                    <p className="card-text text-danger"><s>R$ 67,00 </s></p>
                    <p className="card-text text-primary"> <b>R$ 40,99</b> </p>
                  </div>
                </div>
              </div>
  
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="./images/cafeteira.jpg" className="card-img-top" alt="jóia" />
                  <div className="card-body">
                    <h5 className="card-title">Cafeteira</h5>
                    <p className="card-text text-danger"><s>R$ 80,00 </s></p>
                    <p className="card-text text-primary"> <b>R$ 40,99</b> </p>
                  </div>
                </div>
              </div>
  
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="./images/impressora.webp" className="card-img-top" alt="jóia" />
                  <div className="card-body">
                    <h5 className="card-title">Impressora</h5>
                    <p className="card-text text-danger "><s>R$ 150,00 </s></p>
                    <p className="card-text text-primary"> <b>R$ 1000,99</b> </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
  
  
        </body>
      </div>
    )
  }
  