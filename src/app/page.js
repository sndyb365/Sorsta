'use client';

import { useState } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Waves from './Waves/Waves';
import ScrollVelocity from './ScrollVelocity/ScrollVelocity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const items = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Produk", href: "#produk" },
  {
    label: "Chat WhatsApp",
    href: "https://wa.me/62895339328011?text=Halo%20admin%2C%20saya%20tertarik%20dengan%20produk%20Sorgum%20Anda.",
    isButton: true,
    className: "bg-yellow-400 text-white px-4 py-2 rounded-full hover:bg-yellow-500 transition"
  },
];


const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const totalTestimonial = 10;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const addToCart = (id, name, price) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { id, name, price, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const formatCurrency = (amount) => {
    return amount.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  const handleCheckout = () => {
    const cartDetails = cart.map((item) => {
      return `${item.name} - x${item.quantity} - ${formatCurrency(item.price * item.quantity)}`;
    }).join('\n');

    const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const message = `Halo, saya ingin melakukan pemesanan dari Sorsta:\n\n${cartDetails}\n\nTotal: ${formatCurrency(totalCost)}\n\nMohon konfirmasi ketersediaan produk, Terima kasih!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/62895339328011?text=${encodedMessage}`;
    window.location.href = whatsappURL;
  };
  return (
    <div className={`min-h-screen w-full ${poppins.className} bg-[#005023] text-yellow-800`}>
<header className="fixed top-0 left-0 w-full text-[#005023] bg-[#005023] z-50 shadow-md">
<nav className="flex justify-between items-center py-2 px-8 sm:px-20 text-yellow-400">
          <div>
            <img
              src="/images/logo-sorsta.png"
              alt="Logo Sorsta"
              className="h-8 sm:h-10 w-auto"
            />
          </div>
          <ul className="hidden sm:flex space-x-6 text-lg">
            {items.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <button className="sm:hidden text-yellow-400 text-2xl" onClick={toggleMenu}>&#9776;</button>
        </nav>

        {menuOpen && (
          <ul className="sm:hidden flex flex-col items-center bg-yellow-300 w-full py-4 absolute top-full left-0 shadow-lg">
            {items.map((item, index) => (
              <li key={index} className="py-2">
                <a href={item.href} onClick={toggleMenu}>{item.label}</a>
              </li>
            ))}
          </ul>
        )}
      </header>

      <main className="snap-y snap-mandatory h-screen scroll-smooth">
        <section
          id="hero"
          className="relative w-full min-h-screen flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 sm:px-10 md:px-16 lg:px-20"
        >
          {/* Background */}
          <div
            className={`
      absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-90
      bg-[url('/images/bgg-mobile.jpg')] sm:bg-[url('/images/bgg.jpg')]
    `}
          />

          {/* Konten */}
        

<div className="relative z-10 max-w-lg -mt-20 sm:-mt-16 lg:mt-0 lg:-ml-4">
  <div className="w-90 sm:w-56 md:w-64 lg:w-80 h-auto mx-auto lg:-ml-9">
    <Image
      src="/images/logo-sorsta.png"
      alt="Logo Sorsta"
      width={400}
      height={200}
      className="drop-shadow w-full h-auto"
      priority
    />
  </div>

            <p
              className="mt-6 text-lg sm:text-xl md:text-2xl text-[#005023] font-medium leading-relaxed"
              style={{ textShadow: "2px 2px 4px rgba(253, 199, 0, 0.7)" }}
            >
              Inovasi produk pangan dari sorgum untuk masa depan yang berkelanjutan.
            </p>

            <button
              className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-[#005023] text-yellow-400 text-base sm:text-lg font-semibold rounded-xl hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 hover:text-[#005023] shadow-lg"
              onClick={() =>
                document.getElementById("produk").scrollIntoView({ behavior: "smooth" })
              }
            >
              Jelajahi Sekarang
            </button>
          </div>
        </section>
<Waves
    className="absolute top-0 left-0 w-full min-h-[100dvh] z-0 scale-[1.0] origin-center"
    lineColor="#fdc700"
    backgroundColor="RGBA(193, 165, 88, 0)"
    waveSpeedX={0.02}
    waveSpeedY={0.01}
    waveAmpX={40}
    waveAmpY={20}
    friction={0.9}
    tension={0.01}
    maxCursorMove={120}
    xGap={12}
    yGap={36}
  />

        <div className="mt-0 sm:mt-0">
          <ScrollVelocity
            texts={['- SORSTA', '#AyoMakanSorgum']}
            velocity={50}
            className="bg-yellow-400 font-poppins text-[#005023] custom-scroll-text"
          />
        </div>

        <div className="bg-gradient-to-b from-[#005023] to-yellow-300">
          <section
            id="about"
            className="snap-start min-h-screen flex items-center justify-center px-4
             flex-col md:flex-row md:gap-8"
          >
            {/* Teks konten */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-400">Tentang Kami</h1>
              <p className="text-base md:text-lg text-yellow-400">
              Sorsta adalah produk sorgum pasta inovatif terbuat dari sorgum, Produk ini hadir untuk memberikan alternatif makanan yang lebih sehat, bebas gluten, dan berkelanjutan. Sorsta bukan hanya sekadar produk makanan; ini juga merupakan langkah untuk memberdayakan petani lokal. Dengan berkolaborasi dengan komunitas petani dan komunitas UMKM pengolah sorgum di Desa Kalisoro, Sleman, Yogyakarta. di Yogyakarta, Sorsta membantu meningkatkan pendapatan mereka dan mempromosikan pertanian berkelanjutan.
              </p>
            </div>
          </section>


          <section
  id="produk"
  className="snap-start min-h-screen flex items-center justify-center px-4 flex-col md:flex-row md:gap-2 pb-6 md:pb-16"
>
  <div className="container mx-auto px-4">
    <h1 className="text-3xl font-bold text-center mb-8 text-yellow-400">Produk Kami</h1>
    <div className="overflow-x-auto flex gap-6 mt-8 p-2 sm:justify-center">
      {[...Array(2)].map((_, idx) => (
        <div
          key={idx}
          className="min-w-[220px] bg-yellow-400 p-6 rounded-2xl shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl text-white"
        >
          <div className="w-full h-48 relative rounded-lg overflow-hidden mb-4">
            <Image
              src={`/images/${idx === 0 ? "lidi" : "makaroni"}.jpg`}
              alt={idx === 0 ? "Spaghetti" : "Makaroni"}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>

         

          <h3 className="text-xl text-[#005023] font-bold text-center">
            {idx === 0 ? "Spaghetti" : "Makaroni"}
          </h3>

          <p className="text-lg text-[#005023] text-center mt-2 font-semibold">
            {formatCurrency(50000 + idx * 5000)}
          </p>

          <button
            className="w-full bg-[#005023] text-yellow-400 py-2 px-4 rounded-lg hover:bg-yellow-300 mt-4 hover:text-[#005023] font-semibold transition-colors"
            onClick={() =>
              addToCart(
                idx + 1,
                idx === 0 ? "Spaghetti" : "Makaroni",
                50000 + idx * 5000
              )
            }
          >
            Tambah ke Keranjang
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

          {cart.length > 0 && (
  <section id="keranjang" className="text-[#005023] pt-[9px] md:pt-0 pb-6 w-full">
              <h1 className="text-2xl text-center text-font-semibold">Keranjang Belanja</h1>
              <div className="mt-4 space-y-4 max-w-sm mx-auto p-4 rounded-lg shadow-lg">
                {cart.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-yellow-400 p-4 rounded-lg shadow-md">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={`/images/${item.id === 1 ? "lidi" : item.id === 2 ? "makaroni" : "biskuit"}.jpg`}
                          alt={item.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <p className="text-[#005023]">{item.name}</p>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-4 text-yellow-400">x{item.quantity}</span>
                      <span className="text-[#005023] font-semibold">{formatCurrency(item.price * item.quantity)}</span>
                      <button className="ml-4 text-red-500 hover:text-red-700" onClick={() => removeFromCart(item.id)}>
                        Hapus
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center font-semibold text-lg">
                <p>Total: {formatCurrency(cart.reduce((acc, item) => acc + item.price * item.quantity, 0))}</p>
              </div>

              <div className="mt-6 text-center">
                <button className="px-6 py-2 bg-yellow-400 text-[#005023] rounded-lg hover:bg-[#005023] hover:text-yellow-300" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </section>
          )}

          <section id="testimoni" className="py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8 text-[#005023]">Apa Kata Mereka?</h2>

              <div className="relative">
                <div className="flex gap-6 animate-loop-scroll w-max">
                  {[
                    {
                      name: "Rizal, Petani Sorgum",
                      message: "Sorsta sangat membantu kami menjual hasil panen dengan lebih mudah dan cepat!",
                      photo: "https://i.pravatar.cc/150?img=11"
                    },
                    {
                      name: "Dewi, Ibu Rumah Tangga",
                      message: "Saya suka beli beras sorgum di Sorsta karena lebih sehat dan prosesnya simpel banget!",
                      photo: "https://i.pravatar.cc/150?img=47"
                    },
                    {
                      name: "Budi, Pengusaha Katering",
                      message: "Produk sorgumnya berkualitas. Sangat cocok untuk menu sehat pelanggan saya.",
                      photo: "https://i.pravatar.cc/150?img=32"
                    },
                    {
                      name: "Ayu, Mahasiswa Gizi",
                      message: "Platform Sorsta bener-bener informatif. Banyak belajar soal manfaat sorgum.",
                      photo: "https://i.pravatar.cc/150?img=23"
                    },
                    {
                      name: "Pak Darto, Distributor",
                      message: "Sekarang nggak perlu repot cari petani sorgum. Semua ada di Sorsta.",
                      photo: "https://i.pravatar.cc/150?img=19"
                    },
                    {
                      name: "Lina, Pecinta Produk Lokal",
                      message: "Bangga pakai produk lokal. Sorsta keren banget angkat produk dalam negeri!",
                      photo: "https://i.pravatar.cc/150?img=45"
                    },
                    {
                      name: "Herman, Chef Hotel",
                      message: "Biji sorgumnya fresh dan pengirimannya cepat. Recommended untuk resto!",
                      photo: "https://i.pravatar.cc/150?img=29"
                    },
                    {
                      name: "Rina, Influencer Kuliner",
                      message: "Senang bisa kolaborasi dengan Sorsta! Produk sehat dan berkualitas.",
                      photo: "https://i.pravatar.cc/150?img=37"
                    },
                    {
                      name: "Yusuf, Pelajar SMK",
                      message: "Tugas sekolah jadi makin seru setelah bahas sorgum dan platform Sorsta!",
                      photo: "https://i.pravatar.cc/150?img=58"
                    },
                    {
                      name: "Maya, Freelancer",
                      message: "Checkout via WhatsApp-nya gampang banget. Kayak ngobrol biasa aja!",
                      photo: "https://i.pravatar.cc/150?img=61"
                    },
                  ]
                    .concat(
                      [...Array(10).keys()].map((_, i) => (
                        [
                          {
                            name: "Rizal, Petani Sorgum",
                            message: "Sorsta sangat membantu kami menjual hasil panen dengan lebih mudah dan cepat!",
                            photo: "https://randomuser.me/api/portraits/men/36.jpg"
                          },
                          {
                            name: "Dewi, Ibu Rumah Tangga",
                            message: "Saya suka beli beras sorgum di Sorsta karena lebih sehat dan prosesnya simpel banget!",
                            photo: "https://randomuser.me/api/portraits/women/65.jpg"
                          },
                          {
                            name: "Budi, Pengusaha Katering",
                            message: "Produk sorgumnya berkualitas. Sangat cocok untuk menu sehat pelanggan saya.",
                            photo: "https://randomuser.me/api/portraits/men/52.jpg"
                          },
                          {
                            name: "Ayu, Mahasiswa Gizi",
                            message: "Platform Sorsta bener-bener informatif. Banyak belajar soal manfaat sorgum.",
                            photo: "https://randomuser.me/api/portraits/women/24.jpg"
                          },
                          {
                            name: "Pak Darto, Distributor",
                            message: "Sekarang nggak perlu repot cari petani sorgum. Semua ada di Sorsta.",
                            photo: "https://randomuser.me/api/portraits/men/18.jpg"
                          },
                          {
                            name: "Lina, Pecinta Produk Lokal",
                            message: "Bangga pakai produk lokal. Sorsta keren banget angkat produk dalam negeri!",
                            photo: "https://randomuser.me/api/portraits/women/43.jpg"
                          },
                          {
                            name: "Herman, Chef Hotel",
                            message: "Biji sorgumnya fresh dan pengirimannya cepat. Recommended untuk resto!",
                            photo: "https://randomuser.me/api/portraits/men/44.jpg"
                          },
                          {
                            name: "Rina, Influencer Kuliner",
                            message: "Senang bisa kolaborasi dengan Sorsta! Produk sehat dan berkualitas.",
                            photo: "https://randomuser.me/api/portraits/women/15.jpg"
                          },
                          {
                            name: "Yusuf, Pelajar SMK",
                            message: "Tugas sekolah jadi makin seru setelah bahas sorgum dan platform Sorsta!",
                            photo: "https://randomuser.me/api/portraits/men/20.jpg"
                          },
                          {
                            name: "Maya, Freelancer",
                            message: "Checkout via WhatsApp-nya gampang banget. Kayak ngobrol biasa aja!",
                            photo: "https://randomuser.me/api/portraits/women/55.jpg"
                          }                          
                        ][i]
                      ))
                    )
                    .map((testi, index) => (
                      <div
                        key={index}
                        className="min-w-[240px] sm:min-w-[300px] max-w-sm bg-yellow-400 p-6 rounded-2xl shadow-md transition hover:scale-105"
                      >
                        <div className="flex items-center space-x-4 mb-4">
                          <img
                            src={testi.photo}
                            alt={testi.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <p className="font-semibold text-[#005023]">{testi.name}</p>
                        </div>
                        <p className="text-[#005023]">"{testi.message}"</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <style>{`
    @keyframes scroll {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    .animate-loop-scroll {
      animation: scroll 60s linear infinite;
    }
  `}</style>
          </section>





          <section id="find-us" className="py-16 w-full text-center text-yellow-900">
            <h1 className="text-3xl font-bold text-center mb-8 text-[#005023]">Temukan Kami</h1>


            <div className="mt-10 flex flex-wrap justify-center items-center gap-8 px-4">
              <a href="" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/shopee.png"
                  alt="Shopee"
                  className="h-16 hover:scale-110 transition-transform"
                />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/Tokopedia1.png"
                  alt="Tokopedia"
                  className="h-16 hover:scale-110 transition-transform"
                />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/ttshop.png"
                  alt="Tiktokshop"
                  className="h-16 hover:scale-110 transition-transform"
                />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/Lazada.png"
                  alt="Lazada"
                  className="h-11 md:h-11 hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </section>

        </div>

        <footer className="bg-yellow-300 text-green-800 py-10 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Bagian Kiri - Logo dan Kontak */}
            <div className="flex flex-col items-center md:items-start">
              <img src="/images/logo-sorsta.png" alt="Sorsta Logo" className="w-24 mb-3" />

              <p className="mt-2">Inovasi pangan berbasis sorgum</p>
              <div className="flex space-x-4 mt-4">
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-green-600">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="mailto:contact@sorsta.id" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-green-600">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>

            </div>

            {/* Bagian Tengah - Alamat & Produk */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold">Alamat Kami</h3>
              <p className="mt-2 text-sm">
                Kampus Karang Malang, Jl. Colombo No.1, Karang Gayam, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta (55281)
              </p>
            </div>

            {/* Bagian Kanan - Peta & Media Sosial */}
            <div className="flex flex-col items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.187016341015!2d110.3853643740078!3d-7.769983542249375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59b0d2106bef%3A0x986591e6be2c83dd!2sFakultas%20Teknik%20(FT)%20Universitas%20Negeri%20Yogyakarta!5e0!3m2!1sid!2sid!4v1743774141914!5m2!1sid!2sid"
                width="100%"
                height="150"
                className="rounded-md border-none"
                allowFullScreen=""
                loading="lazy">
              </iframe>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-xl hover:text-green-600"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-xl hover:text-green-600"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-xl hover:text-green-600"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm mt-6">&copy; {new Date().getFullYear()} Sorsta. All Rights Reserved.</p>
        </footer>

      </main>

      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .testimoni-wrapper {
          display: flex;
          animation: scrollLeft 10s linear infinite;
        }
        @media (max-width: 768px) {
          .testimoni-wrapper {
            animation: scrollLeft 15s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}