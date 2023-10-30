import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";

import {
  faWifi,
  faFire,
  faSwimmingPool,
  faUser,
  faDumbbell,
  faCocktail,
  faElevator,
  faTv,
  faHotTub,
  faBath,
  faChild,
  faBed,
  faFutbol,
  faHome,
  faTree,
  faShower,
  faWind,
  faUmbrella,
  faUtensils,
  faCar,
  faUsers,
  faBalanceScale,
  faBusAlt,
  faBedPulse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Environment } from "../../shared/environment";


interface IProps {
  id: number;
  titulo: string;
  tipo: string;
  descricao: string;
  descricaoLocal: string;
  lougradouro: string;
  numero: string;
  estado: string;
  cep: string;
  bairro: string;
  cidade: string;
  complemento?: string | null;
  coverImage?: string | null;
  precoLocacao?: number | null;
  recommended?: boolean | null;
  maxConvidado?: number | null;
  video?: string | null;
  proprietarioId: number;
  update_at: Date | null;

  banheiro?: string | null;
  cozinha?: string | null;
  dorm?: string | null;
  suite?: string | null;
  closets?: string | null;
  sala?: string | null;
  copa?: string | null;
  despensa?: string | null;
  lavabo?: string | null;
  hall?: string | null;
  sala_jogos?: string | null;
  despejo?: string | null;
  lavanderia?: string | null;
  garagem?: string | null;
  ac?: string | null;
  at?: string | null;
  outras_caracteriscas?: string | null;
  tipoImovel: string | null;
  precoVenda?: number | null;
  valor_condominio?: number | null;
  valor_iptu?: number | null;
  wifi?: boolean | null;
  churrasqueira?: boolean | null;
  psicina_adulto?: boolean | null;
  recepcao?: boolean | null;
  academia?: boolean | null;
  salao_festa?: boolean | null;
  elevador?: boolean | null;
  varanda?: boolean | null;
  sacada?: boolean | null;
  sauna?: boolean | null;
  banheira?: boolean | null;
  piscina_infantil?: boolean | null;
  play_grownd?: boolean | null;
  qtd_camas?: number | null;
  quadra?: boolean | null;
  campo_areia?: boolean | null;
  arcondicionado?: boolean | null;
  ventilador?: boolean | null;
  quiosque?: boolean | null;
  imagens: [
    {
      id: number;
      url: string;
      imovelId: number;
    }
  ];
}

async function getImovel(id: string): Promise<IProps | null> {
  const response = await fetch(`${Environment.URL_BASE}/imoveis/${id}`);

  return response.json();
}

export default function Imovel() {
  const { id } = useParams<'id'>();
  const [fetchedImoveis, setFetchedImoveis] = useState<IProps | null>(null);
  const [showPhotos, setShowPhotos] = useState(true);

  const handleShowPhotos = () => {
    setShowPhotos(true);
  };

  const handleShowVideo = () => {
    setShowPhotos(false);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        
        const data = await getImovel(id !== undefined ? id : '');
        if (data) {
          setFetchedImoveis(data);
        }
      } catch (error) {
        console.error("Erro ao buscar dados do imóvel:", error);
      }
    }

    fetchData();
  }, [id]);

  const infoArray = [
    {
      condition: fetchedImoveis?.banheiro,
      icon: faShower,
      descricao: "Banheiro: ",
    },
    {
      condition: fetchedImoveis?.cozinha,
      icon: faFire,
      descricao: "Cozinha: ",
    },
    {
      condition: fetchedImoveis?.dorm,
      icon: faBedPulse,
      descricao: "Dormitorios: ",
    },
    { condition: fetchedImoveis?.suite, icon: faBed, descricao: "Suite: " },
    {
      condition: fetchedImoveis?.closets,
      icon: faCocktail,
      descricao: "Closets: ",
    },
    { condition: fetchedImoveis?.sala, icon: faTv, descricao: "Sala: " },
    { condition: fetchedImoveis?.copa, icon: faUtensils, descricao: "Copa: " },
    {
      condition: fetchedImoveis?.despensa,
      icon: faHome,
      descricao: "Despensa: ",
    },
    { condition: fetchedImoveis?.lavabo, icon: faBath, descricao: "Lavabo: " },
    { condition: fetchedImoveis?.hall, icon: faChild, descricao: "Hall: " },
    { condition: fetchedImoveis?.despejo, icon: faBed, descricao: "Despejo: " },
    {
      condition: fetchedImoveis?.lavanderia,
      icon: faBath,
      descricao: "Lavanderia: ",
    },
    {
      condition: fetchedImoveis?.academia,
      icon: faDumbbell,
      descricao: "Academia: ",
    },
    { condition: fetchedImoveis?.garagem, icon: faCar, descricao: "Garagem: " },
    {
      condition: fetchedImoveis?.ac,
      icon: faHome,
      descricao: "Área Construida: ",
    },
    { condition: fetchedImoveis?.at, icon: faTree, descricao: "Área Total: " },
    {
      condition: fetchedImoveis?.churrasqueira,
      icon: faFire,
      descricao: "Churrasqueira",
    },
    { condition: fetchedImoveis?.wifi, icon: faWifi, descricao: "Wifi" },
    {
      condition: fetchedImoveis?.psicina_adulto,
      icon: faSwimmingPool,
      descricao: "Psicina Adulto",
    },
    {
      condition: fetchedImoveis?.recepcao,
      icon: faUser,
      descricao: "Recepção",
    },
    {
      condition: fetchedImoveis?.salao_festa,
      icon: faFutbol,
      descricao: "Salão de Festas",
    },
    {
      condition: fetchedImoveis?.elevador,
      icon: faElevator,
      descricao: "Elevador",
    },
    {
      condition: fetchedImoveis?.varanda,
      icon: faBalanceScale,
      descricao: "Varanda",
    },
    { condition: fetchedImoveis?.sacada, icon: faBusAlt, descricao: "Sacada" },
    { condition: fetchedImoveis?.sauna, icon: faHotTub, descricao: "Sauna" },
    {
      condition: fetchedImoveis?.banheira,
      icon: faBath,
      descricao: "Banheira",
    },
    {
      condition: fetchedImoveis?.piscina_infantil,
      icon: faChild,
      descricao: "Psicina Infantil",
    },
    {
      condition: fetchedImoveis?.play_grownd,
      icon: faFutbol,
      descricao: "Play Grownd",
    },
    {
      condition: fetchedImoveis?.qtd_camas,
      icon: faUsers,
      descricao: "Camas: ",
    },
    { condition: fetchedImoveis?.quadra, icon: faFutbol, descricao: "Quadra" },
    {
      condition: fetchedImoveis?.campo_areia,
      icon: faFutbol,
      descricao: "Campo de Areia",
    },
    {
      condition: fetchedImoveis?.arcondicionado,
      icon: faWind,
      descricao: "ArCondicionado",
    },
    {
      condition: fetchedImoveis?.ventilador,
      icon: faWind,
      descricao: "Ventilador",
    },
    {
      condition: fetchedImoveis?.quiosque,
      icon: faUmbrella,
      descricao: "Quiosque",
    },
  ];

  if (!fetchedImoveis) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-col h-screen">
        <header className="bg-gray-900 ">
          <nav className="container flex justify-between items-center">
            <a href={"/"}>
              <img src="/logobranco.png" width={"80px"} height={"100px"} />
            </a>
          </nav>
        </header>
        <div>
          <div>
            <div className="flex w-full justify-center">
              {showPhotos ? (
                <Swiper
                  slidesPerView={3}
                  spaceBetween={5}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  className="mySwiper"
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  navigation={true}
                >
                  {fetchedImoveis.imagens.map((row) => (
                    <SwiperSlide key={row.id}>
                      <img
                        src={`${Environment.URL_BASE}${row.url}`}
                        alt=""
                        className="w-[650px] h-[350px]"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <ReactPlayer
                  url={
                    fetchedImoveis.video !== null ? fetchedImoveis.video : ""
                  }
                  controls={false}
                  playing={true}
                  loop={true}
                  style={{
                    minWidth: "100%",
                    maxHeight: "350px",
                  }}
                />
              )}
            </div>
            <div className="flex justify-center mt-2 gap-5">
              <button
                onClick={handleShowPhotos}
                disabled={showPhotos}
                className="cursor-pointer w-20 h-20 p-4 rounded-lg border-solid border-[1px] border-cyan-50 transition-transform hover:scale-110 hover:bg-cyan-400 hover:text-white"
              >
                Fotos
              </button>
              <button
                onClick={handleShowVideo}
                disabled={!showPhotos}
                className="cursor-pointer w-20 h-20 p-4 rounded-lg border-solid border-[1px] border-cyan-50 transition-transform hover:scale-110 hover:bg-cyan-400 hover:text-white"
              >
                Vídeo
              </button>
            </div>
          </div>

          <div className="flex flex-1">
            <section className="bg-white w-1/4 ">
              <div className="container flex justify-between items-center">
                <div className="w-full p-5 m-10 border-solid border-[1px] border-cyan-50 rounded-sm bg-slate-50 z-10 shadow-lg">
                  {fetchedImoveis.tipo === "Locação" ? (
                    <>
                      <div className="flex justify-between py-1">
                        <p className="font-bold">Aluguel * </p>
                        <p className="font-bold">
                          {fetchedImoveis?.precoLocacao !== null &&
                          fetchedImoveis?.precoLocacao !== undefined
                            ? (
                                fetchedImoveis?.precoLocacao / 100
                              ).toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              })
                            : "Valor não disponível"}
                        </p>
                      </div>
                      <div className="flex justify-between py-1">
                        <p>Condomínio * </p>
                        <p>
                          {fetchedImoveis?.valor_condominio !== null &&
                          fetchedImoveis?.valor_condominio !== undefined
                            ? (
                                fetchedImoveis?.valor_condominio / 100
                              ).toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              })
                            : "Valor não disponível"}
                        </p>
                      </div>
                      <div className="flex justify-between py-1">
                        <p>IPTU * </p>
                        <p>
                          {fetchedImoveis?.valor_iptu !== null &&
                          fetchedImoveis?.valor_iptu !== undefined
                            ? (
                                fetchedImoveis?.valor_iptu / 100
                              ).toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              })
                            : "Valor não disponível"}
                        </p>
                      </div>

                      <div className="flex justify-between py-1 border-solid border-t-2 border-gray-600">
                        <p className="font-bold">Total * </p>
                        <p className="font-bold">
                          {(
                            fetchedImoveis.valor_iptu! +
                            fetchedImoveis.valor_condominio! +
                            fetchedImoveis.precoLocacao! / 100
                          ).toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </p>
                      </div>
                    </>
                  ) : fetchedImoveis.tipo === "Venda" ? (
                    <>
                      <div className="flex justify-between py-1">
                        <p>Condomínio * </p>
                        <p>
                       
                          {fetchedImoveis?.valor_condominio !== null &&
                          fetchedImoveis?.valor_condominio !== undefined
                            ? (
                                fetchedImoveis?.valor_condominio / 100
                              ).toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              })
                            : "Valor não disponível"}
                        </p>
                        
                      </div>
                      <div className="flex justify-between py-1">
                        <p>IPTU * </p>
                        <p>
                          {fetchedImoveis?.valor_iptu !== null &&
                          fetchedImoveis?.valor_iptu !== undefined
                            ? (
                                fetchedImoveis?.valor_iptu / 100
                              ).toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              })
                            : "Valor não disponível"}
                        </p>
                      </div>

                      <div className="flex py-1 justify-between border-solid border-t-2 border-gray-600">
                        <p className="font-bold">Total * </p>
                        <p className="font-bold">
                          {(
                            fetchedImoveis.valor_iptu! +
                            fetchedImoveis.valor_condominio! +
                            fetchedImoveis.precoLocacao! / 100
                          ).toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </p>
                      </div>
                      <div className="flex justify-between py-1 ">
                        <p className="font-bold">Venda * </p>
                        <p className="font-bold">
                          {(fetchedImoveis.precoVenda! / 100).toLocaleString(
                            "pt-BR",
                            {
                              style: "currency",
                              currency: "BRL",
                            }
                          )}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between py-1">
                        <p className="font-bold">Aluguel * </p>
                        <p className="font-bold">
                          {(fetchedImoveis.precoLocacao! / 100).toLocaleString(
                            "pt-BR",
                            {
                              style: "currency",
                              currency: "BRL",
                            }
                          )}
                        </p>
                      </div>
                      <div className="flex justify-between py-1">
                        <p>Condomínio * </p>
                        <p>
                          {(
                            fetchedImoveis.valor_condominio! / 100
                          ).toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </p>
                      </div>
                      <div className="flex justify-between py-1">
                        <p>IPTU * </p>
                        <p>
                          {(fetchedImoveis.valor_iptu! / 100).toLocaleString(
                            "pt-BR",
                            {
                              style: "currency",
                              currency: "BRL",
                            }
                          )}
                        </p>
                      </div>

                      <div className="flex justify-between py-1 border-solid border-t-2 border-gray-600">
                        <p className="font-bold">Total * </p>
                        <p className="font-bold">
                          {(
                            fetchedImoveis.valor_iptu! +
                            fetchedImoveis.valor_condominio! +
                            fetchedImoveis.precoLocacao! / 100
                          ).toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </p>
                      </div>
                      <div className="flex justify-between py-1">
                        <p className="font-bold">Venda * </p>
                        <p className="font-bold">
                          {(fetchedImoveis.precoVenda! / 100).toLocaleString(
                            "pt-BR",
                            {
                              style: "currency",
                              currency: "BRL",
                            }
                          )}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </section>

            <section className="flex-1 p-4">
              <h1 className="text-4xl font-bold mb-4">
                {fetchedImoveis.titulo}
              </h1>
              <p className="text-gray-600">
                {fetchedImoveis.bairro}, {fetchedImoveis.cidade},{" "}
                {fetchedImoveis.estado} <br />
                <span className="text-gray-400">
                  Imóvel: {fetchedImoveis.id}
                </span>
              </p>

              <div className="mt-4">
                <p className="text-lg font-semibold">Descrição do Imóvel:</p>
                <p className="text-gray-600">{fetchedImoveis.descricao}</p>
              </div>

              <div className="mt-4">
                <p className="text-lg font-semibold">Tipo de Imóvel:</p>
                <p className="text-gray-600">{fetchedImoveis.tipoImovel}</p>
              </div>

              <div className="flex mt-4 w-11/12 gap-5 flex-wrap max-h-[250px]">
                {infoArray.map(
                  (info, index) =>
                    info.condition && (
                      <div key={index} className="w-[auto] flex gap-1">
                        <FontAwesomeIcon icon={info.icon} />
                        <p>{info.descricao}</p>
                        <p>{info.condition}</p>
                      </div>
                    )
                )}
              </div>
            </section>
          </div>
        </div>

        <div className="footer__info ">
          <span className="footer__copy">
            &#169; AgnaldoCordeiro. Todos os direitos reservados.
          </span>
        </div>
      </div>
    </>
  );
}
