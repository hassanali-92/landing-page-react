const Hero = () => {
return (
<div>
<section
className="h-[75vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
style={{
backgroundImage:
"linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1400&q=80')",
}}
>
<h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 tracking-wide drop-shadow-xl">
Unlimited Movies, One Place
</h1>

<p className="text-gray-200 max-w-2xl mt-5 text-base md:text-lg leading-relaxed">
Browse trending, popular, and top-rated movies from around the world.
</p>

<div className="mt-8 flex gap-4">
<button className="bg-red-600 hover:bg-red-700 transition px-7 py-3 rounded-xl text-white font-semibold shadow-lg">
Explore Movies
</button>


</div>
</section>

</div>
)
}

export default Hero



