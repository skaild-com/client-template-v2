"use client";

import { useSiteConfig } from "@/hooks/useSiteConfig";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import Image from "next/image";

export default function HomePage() {
  const { config, loading, error } = useSiteConfig();

  if (loading) return <div className="p-4">Loading...</div>;
  if (error)
    return <div className="p-4 text-red-500">Error: {error.message}</div>;
  if (!config) return <div className="p-4">Site not found</div>;

  return (
    <ThemeProvider config={config}>
      <main>
        {/* Hero Section */}
        <section className="hero-section relative">
          <div className="absolute top-4 left-4 z-10">
            <h1 className="text-2xl font-bold text-white">
              {config.business?.name}
            </h1>
          </div>

          {config.content?.hero?.backgroundUrl && (
            <div className="hero-background">
              <Image
                src={config.content.hero.backgroundUrl}
                alt="Background"
                fill
                priority
                className="object-cover"
                quality={90}
              />
            </div>
          )}

          <div className="hero-content relative z-10">
            <div className="container mx-auto px-4 py-20 flex items-center justify-between">
              <div className="text-white max-w-2xl">
                <h1 className="text-6xl font-bold mb-6 animate-fade-in">
                  {config.content?.hero?.title}
                </h1>
                <p className="text-2xl mb-12">
                  {config.content?.hero?.subtitle}
                  {config.business?.address?.city && (
                    <span className="text-secondary-light">
                      {" "}
                      in {config.business.address.city}
                    </span>
                  )}
                </p>
                <div className="flex gap-6">
                  <button className="btn btn-primary px-8 py-4 rounded-full text-lg">
                    {config.content?.hero?.cta?.primary}
                  </button>
                  <button className="btn btn-secondary px-8 py-4 rounded-full text-lg">
                    {config.content?.hero?.cta?.secondary}
                  </button>
                </div>
              </div>

              {config.content?.hero?.illustrationUrl && (
                <div className="relative w-[500px] h-[500px] hidden lg:block">
                  <Image
                    src={config.content.hero.illustrationUrl}
                    alt="Hero Illustration"
                    fill
                    className="object-contain"
                    priority
                    quality={90}
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {config.content?.services?.map((service, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  {service.imageUrl && (
                    <div className="mb-4 overflow-hidden rounded-lg h-48 relative">
                      <Image
                        src={service.imageUrl}
                        alt={service.title}
                        fill
                        className="object-cover"
                        quality={75}
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our Advantages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {config.content?.features?.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  {feature.imageUrl && (
                    <div className="mb-4 overflow-hidden rounded-lg h-48 relative">
                      <Image
                        src={feature.imageUrl}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-12">
            {/* Footer content */}
          </div>
        </footer>
      </main>
    </ThemeProvider>
  );
}
