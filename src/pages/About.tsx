import Shyam from "../assets/images/shyam.jpeg";
import Ram from "../assets/images/ram.jpeg";
import Naif from "../assets/images/Naif.jpeg";
import Studio from "../assets/images/Studio.jpeg";

const About = () => {
  const values = [
    {
      title: "Excellence",
      description:
        "We strive for perfection in every project, using only the finest materials and most skilled craftspeople.",
      icon: "🏆",
    },
    {
      title: "Innovation",
      description:
        "We embrace cutting-edge design trends while respecting timeless principles of good design.",
      icon: "💡",
    },
    {
      title: "Collaboration",
      description:
        "We believe the best results come from working closely with our clients throughout the process.",
      icon: "🤝",
    },
    {
      title: "Sustainability",
      description:
        "We're committed to environmentally responsible design practices and sustainable materials.",
      icon: "🌱",
    },
  ];

  const team = [
    {
      name: "Ram Kishor",
      role: "Founder & Lead Designer",
      image: Ram,
      className: "w-full h-88 object-none",
      bio: "Ram Kishor Mishra is a seasoned structural engineer and certified interior designer with 7+ years of experience in civil construction and space design. A graduate of the Milan School of Design, he fuses European aesthetics with modern engineering. Ram is also certified in green building compliance and specializes in carbon-reducing construction techniques. His projects combine structural precision, sustainable materials, and visual elegance — setting new benchmarks in environmentally responsible design.",
    },
    {
      name: "Shyam Mishra",
      role: "Senior Interior Designer",
      image: Shyam,
      className: "w-full h-88 object-cover",
      bio: "Shyam Ranjan Mishra is a strategy and sustainability expert with experience at McKinsey, Tata, and PwC Consulting. He now focuses on green housing solutions, helping corporates adopt eco-friendly and cost-efficient alternatives to hotels. With his consulting background, Shyam blends strategic insight with environmental responsibility, aligning infrastructure with India’s ESG and Net-Zero goals.",
    },
    {
      name: "Naif Borkar",
      role: "Project Manager",
      image: Naif,
      className: "w-full h-88 object-contain",
      bio: "Mr. Naif is a mechanical engineer with a Master’s in Marine Engineering, known for his expertise in warehouse design, container-based structures, and modular interiors. With a strong foundation in marine systems, he applies principles of durability, space optimization, and engineering precision to industrial and commercial projects. His designs blend mechanical innovation with operational sustainability, resulting in energy-efficient, cost-effective, and scalable infrastructure solutions that redefine modern workspaces.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding hero-gradient">
        <div className="container-custom">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-black mb-6">
              About M.G.Construction
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded on the principle that exceptional design should transform
              lives, M.G.Construction has been creating extraordinary spaces for
              over 15 years.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <img
                src={Studio}
                alt="MGConstruction Office"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-display font-bold text-black mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                M.G.Construction was born from a simple belief: that great
                design has the power to transform not just spaces, but lives.
                Founded by Michael Garcia in 2009, our company started as a
                small residential design firm with big dreams.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we've grown into a full-service interior design
                and construction company, but our core values remain unchanged.
                We're still the same passionate team that believes every space
                has the potential to be extraordinary.
              </p>
              <p className="text-gray-600">
                Today, we're proud to have completed over 500 projects, each one
                a testament to our commitment to excellence, innovation, and
                client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-black mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape every
              decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-black mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our talented team of designers and project managers work together
              to bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg card-hover"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className={member.className}
                />
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-display font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            To create exceptional interior spaces that reflect our clients'
            unique personalities and enhance their quality of life. We believe
            that great design should be both beautiful and functional, timeless
            yet contemporary, and always deeply personal.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
