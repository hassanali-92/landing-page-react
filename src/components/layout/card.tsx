


import { Button } from "@/components/ui/button";
import "@/index.css";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export const MovieCard: React.FC = () => {
  const scrollLeft = (): void => {
    const slider = document.getElementById("movie-slider");
    if (slider) slider.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = (): void => {
    const slider = document.getElementById("movie-slider");
    if (slider) slider.scrollBy({ left: 400, behavior: "smooth" });
  };

  const movies = [
    {
      title: "Dhurandhar",
      description: "Gritty action-thriller driven by power and revenge.",
      image: "https://upload.wikimedia.org/wikipedia/en/c/ce/Dhurandhar_poster.jpg",
      year: 2025,
      rating: "8.5"
    },
    {
      title: "Now You See Me",
      description: "High-stakes heist full of illusions and twists. Mystery at its best.",
      image: "https://upload.wikimedia.org/wikipedia/en/0/0f/Now_You_See_Me_Now_You_Don%27t_poster.jpg",
      year: 2025,
      rating: "7.9"
    },
    {
      title: "Avatar: Fire and Ash",
      description: "Epic sci-fi adventure in a visually stunning world.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHuY484VNuH6DQea0DwgHsAYgZCbR0a-jxmLbciys8zoHjd1JJZut8oRSdcQE0lQnAyckwew&s=10",
      year: 2025,
      rating: "9.2"
    },
    {
      title: "Thamma",
      description: "Horror-comedy with thrilling vampire twists.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRojp0A17RU8jL0rvtoUTJcnFykNkp7frAIWuRVzb7jDIIoa9IRCGOeTYCq2db3Tsfeol3p_g&s=10",
      year: 2025,
      rating: "7.2"
    } , {

    title: "Zootopia 2",

    description: "Animated adventure full of fun and friendship.",

    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Zootopia_2_%282025_film%29.jpg/250px-Zootopia_2_%282025_film%29.jpg",

    year: 2025,

  }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-600">
     

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between mb-10">
          <div className="space-y-1">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic">
              Latest <span className="text-blue-600">Releases</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-transparent rounded-full"></div>
          </div>
          
          <div className="flex gap-3">
            <Button onClick={scrollLeft} className="rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all" size="icon">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button onClick={scrollRight} className="rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all" size="icon">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative">
          <div id="movie-slider" className="flex gap-8 overflow-x-auto scroll-smooth py-8 px-6 no-scrollbar">
            {movies.map((movie, index) => (
              <Card
                key={index}
                /* 'group' class yahan button ke hover effect ke liye zaroori hai */
                className="min-w-[300px] md:min-w-[320px] bg-[#111] border-zinc-800/50 rounded-2xl overflow-hidden group hover:border-blue-600/50 transition-all duration-500 shadow-2xl flex flex-col"
              >
                {/* Poster Section */}
                <div className="relative h-[400px] overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src={movie.image} alt={movie.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 border border-white/5">
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-bold text-yellow-500">{movie.rating}</span>
                  </div>
                </div>

                {/* Content Section */}
                <CardHeader className="p-6 space-y-2 flex-grow">
                  <CardTitle className="text-xl text-blue-500 font-bold tracking-tight group-hover:text-white transition-colors">
                    {movie.title}
                  </CardTitle>
                  <CardDescription className="text-zinc-500 text-sm line-clamp-2 leading-relaxed min-h-[40px]">
                    {movie.description}
                  </CardDescription>
                </CardHeader>

                {/* Footer Section */}
                <CardFooter className="p-6 pt-0 flex items-center justify-between gap-4 mt-auto">
                  {/* 'group-hover:bg-blue-600' se poore card par hover hone se button change hoga */}
                  <Button className="flex-1 bg-black text-blue-500 font-bold text-xs uppercase tracking-widest px-6 h-11 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    Watch Now
                  </Button>
                  <span className="text-[12px] font-bold text-zinc-600 whitespace-nowrap">
                    {movie.year}
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

