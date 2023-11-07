import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Environment } from "../environment";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


interface IImoveis {
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
  wifi?: boolean | null;
  churrasqueira?: boolean | null;
  psicina_aquecida?: boolean | null;
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
  precoDiaria?: number | null;
  psicina_adulto?: boolean | null;
  valor_condominio?: number | null;
  valor_iptu?: number | null;
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

function Carrousel() {
  const [imoveis, setImoveis] = useState<IImoveis[]>([]);

  const url = `${Environment.URL_BASE}/imoveis`;

  const getImoveis = async () => {
    const data = await fetch(url);

    const result = await data.json();

    setImoveis(result);
  };

  useEffect(() => {
    getImoveis();
  }, []);

  return (
    <div className="popular__container swiper">
      <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination]}
          navigation={false}
      >
        <div className="swiper-wrapper">
          {imoveis.map((row) => (
            <SwiperSlide key={row.id}>
              <a href={`/imovel/${row.id}`} key={row.id}>
              <article className="popular__card swiper-slide" key={row.id}>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  className="mySwiper"
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Navigation, Pagination]}
                  navigation={true}
                >
                  {row.imagens !== undefined && row.imagens.length > 0 ? (                            
                    row.imagens.map((i) => (
                      <SwiperSlide key={i.id}>
                        <img
                          src={`${Environment.URL_BASE}${i.url}`}
                          alt=""
                          className="popular__img"
                        />
                      </SwiperSlide>
                    ))
                  ) : (
                    <SwiperSlide key="fallback-image">
                      <img src="/foto.svg" alt="" className="popular__img" />
                    </SwiperSlide>
                  )}
                </Swiper>

                {row.tipoImovel === 'Venda_Locacao' ? (
                  <div className="popular__data">
                    <div className="flex justify-between">
                      <div>
                        <h4>Locação</h4>
                        <h2 className="popular__price">
                          <span>R$</span>
                          {` ${(row.precoLocacao! / 100)
                            .toFixed(2)
                            .replace(".", ",")}`}
                        </h2>
                      </div>
                      <div>
                        <h4>Venda</h4>
                        <h2 className="popular__price">
                          <span>R$</span>
                          {` ${(row.precoVenda! / 100)
                            .toFixed(2)
                            .replace(".", ",")}`}
                        </h2>
                      </div>
                    </div>

                    <h3 className="popular__title">{row.tipoImovel}</h3>
                    <p className="popular__description">{row.descricao}</p>
                  </div>
                ) : row.tipo === 'Venda' ? (
                  <div className="popular__data">
                    <h4>Venda</h4>
                    <h2 className="popular__price">
                      <span>R$</span>
                      {` ${(row.precoVenda! / 100)
                        .toFixed(2)
                        .replace(".", ",")}`}
                    </h2>

                    <h3 className="popular__title">{row.tipoImovel}</h3>
                    <p className="popular__description">{row.descricao}</p>
                  </div>
                ) : row.tipo === 'Locacao' ? (
                  <div className="popular__data">
                    <h4>Locação</h4>
                    <h2 className="popular__price">
                      <span>R$</span>
                      {` ${(row.precoLocacao! / 100)
                        .toFixed(2)
                        .replace(".", ",")}`}
                    </h2>

                    <h3 className="popular__title">{row.tipoImovel}</h3>
                    <p className="popular__description">{row.descricao}</p>
                  </div>
                ) : row.tipo === 'Diaria' ? (
                  <div className="popular__data">
                  <h4>Diária</h4>
                  <h2 className="popular__price">
                    <span>R$</span>
                    {` ${(row.precoDiaria! / 100)
                      .toFixed(2)
                      .replace(".", ",")}`}
                  </h2>

                  <h3 className="popular__title">{row.tipoImovel}</h3>
                  <p className="popular__description">{row.descricao}</p>
                </div>
                ): ''}
              </article>

              </a>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className="swiper-pagination"></div>
    </div>
  );
}

export default Carrousel;
