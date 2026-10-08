// KABARIN Pure Vanilla JavaScript Engine
(function () {
    'use strict';

    // Comprehensive Article Database
    const ARTICLES = {
        'urban-gen-z': {
            id: 'urban-gen-z',
            title: 'The Architecture of Solitude: Why Gen Z is Redesigning Urban Living',
            deck: 'Rejecting hyper-social high-rises and consumerist hubs, young urbanites across Southeast Asia and East Asia are creating micro-sanctuaries of quiet contemplation, intentional community, and domestic minimalism.',
            category: 'Urban Geography & Lifestyle',
            date: 'May 18, 2025',
            readTime: '6 min read',
            audioDuration: '5:30',
            audioMeta: 'Narrated by AI Editorial Voice (Jakarta-Neutral) • 5:30',
            author: {
                name: 'Elena Ramos',
                role: 'Senior Urban Sociologist • Jakarta Bureau',
                avatar: 'public/assets/images/engineer-dewi-lestari.jpg',
                bio: 'Elena investigates metropolitan demographic shifts, spatial economics, and emerging post-consumerist architecture across Southeast Asia and East Asia.'
            },
            coverImage: 'public/assets/images/genz-urban.jpg',
            coverAlt: 'Cover Feature: Gen Z Urban Life',
            badge: 'Cover Feature • Jakarta & Shibuya',
            caption: 'A young resident works within a customized 18-square-meter micro-studio in South Jakarta, optimized for acoustic quietude and tactile ergonomics.',
            photoCredit: 'Kenji Sato / KABARIN',
            paragraphs: [
                'Underneath the relentless neon hum of contemporary mega-cities, a quiet revolt is taking root behind closed apartment doors. Where previous generations equated upward mobility with suburban square footage and open-concept entertainment lounges, Gen Z city-dwellers are engineering a radically divergent domestic ethos: the deliberate architecture of solitude.',
                'Faced with sky-rocketing rents, sensory over-saturation, and the non-stop demands of the algorithmic workplace, young residents in Jakarta, Tokyo, and Bangkok are converting compact studios into monastic sanctuaries. These are not sad enclosures of isolation, but carefully curated zones of cognitive recovery. Bulky consumer electronics are traded for mechanical typewriters, warm paper lanterns, and tactile houseplants that demand patient physical care.',
                'In South Jakarta’s Blok M district, several former corporate dormitories have been converted by resident cooperatives into modular micro-apartments. Shared acoustic pods replace noisy living room televisions, while communal industrial kitchens allow twenty residents to split wholesome dining costs without sacrificing their private hours of deep focus.',
                '“We spent our teenage years on algorithmic stages, broadcast to thousands of strangers on glowing glass,” says Alifa Nurani, a 24-year-old architectural researcher living in the collective. “True luxury in 2025 is not a penthouse where you host cocktail parties. It is a four-meter wall where nobody can track your attention, and a window framing the rain without a push notification.”'
            ],
            pullQuote: {
                quote: '“We are not lonely because we live alone; we were lonely because our previous cities demanded constant, exhausted performance.”',
                author: 'Alifa Nurani, Architectural Researcher, South Jakarta'
            },
            secondaryHeading: 'Micro-Sanctuaries & The Co-Op Neighborhood',
            secondaryImage: {
                src: 'public/assets/images/tokyo-apartments.jpg',
                alt: 'Tokyo Modular Micro-Apartments',
                caption: 'Modular interior layouts in Koenji and Shibuya incorporate acoustic sliding wood partitions to transition effortlessly between daylight workstations and evening meditation.'
            },
            takeaways: [
                { title: '64% Spatial Consolidation', desc: 'Residents trade oversized floor plans for bespoke acoustic insulation and walkable neighborhood radius.' },
                { title: 'Mutualist Co-Ops', desc: 'Tool libraries, bulk food collectives, and laundry hubs reduce individual monthly living expenses by 38%.' },
                { title: 'Frictionless Quiet', desc: 'Demand for sound-dampened architectural finishes has surged fourfold among renters under thirty.' }
            ],
            claps: 1845,
            relatedIds: ['tokyo-micro-apartments', 'analog-living']
        },

        'electric-aviation': {
            id: 'electric-aviation',
            title: 'Silent Skies: The Quiet Revolution of Regional Electric Aviation Across Archipelagos',
            deck: 'How zero-emission battery-electric 19-seater aircraft and hybrid turbine prototypes are reviving disconnected regional airstrips and maritime commerce without runway megaprojects.',
            category: 'Mobility & Climate',
            date: 'May 17, 2025',
            readTime: '5 min read',
            audioDuration: '4:45',
            audioMeta: 'Narrated by AI Aviation Desk • 4:45',
            author: {
                name: 'Marcus Vance',
                role: 'Aerospace & Transit Editor',
                avatar: 'public/assets/images/author-aris-thorne.jpg',
                bio: 'Marcus has reported on civil aviation propulsion, battery energy densities, and intermodal transport policy across Europe and Southeast Asia for over a decade.'
            },
            coverImage: 'public/assets/images/electric-aviation.jpg',
            coverAlt: 'Electric Aviation Flight Test',
            badge: 'Flight Test Bureau • Nusawiru Aerodrome',
            caption: 'Prototype 19-passenger electric commuter aircraft performing short-field takeoff trials on an unpaved grass coastal runway.',
            photoCredit: 'AeroTech Maritime / KABARIN',
            paragraphs: [
                'At dawn over the coastal airstrip of Nusawiru, West Java, a commercial twin-propeller aircraft lifted into the morning mist with an eerie absence of the familiar roar that has defined aviation for a century. There was only the sharp whoosh of aerodynamic blades slicing moist marine air and the quiet hum of liquid-cooled permanent magnet motors.',
                'For archipelagic nations spanning thousands of islands, commercial aviation has historically been an economic paradox: crucial for life-saving connectivity, yet punishingly expensive to operate. Conventional jet-fuel turboprops burn millions of liters shuttling twenty passengers across short ocean straits, leaving remote island clinics and seafood ports at the mercy of volatile oil logistics.',
                'Battery-electric commuter airframes under twenty seats have achieved what multi-billion-dollar high-speed rail lines never could: point-to-point sub-regional hops with near-zero acoustic impact and up to 80% lower operating costs per seat-kilometer. Recharged via coastal solar farms during midday layovers, these electric workhorses turn forgotten airstrips into vibrant logistics veins.',
                '“The true disruption of clean aerospace isn’t hypersonic intercontinental transport for elites,” explains Chief Test Pilot Capt. Surya Wibowo. “It is flying vaccines, fresh catch, and teachers across a fifty-kilometer strait in twenty minutes for the energy cost of running an electric kitchen stove.”'
            ],
            pullQuote: {
                quote: '“The true disruption isn’t trans-continental hypersonic speed; it’s connecting remote island clinics in forty minutes for the energy cost of boiling a kettle.”',
                author: 'Capt. Surya Wibowo, Chief Flight Test Engineer'
            },
            secondaryHeading: 'Sub-400 Nautical Mile Economics',
            secondaryImage: {
                src: 'public/assets/images/copenhagen-cycleways.jpg',
                alt: 'Intermodal Terminal Integration',
                caption: 'Electric aviation terminals are designed to interface directly with active micro-mobility and maritime ferry connections.'
            },
            takeaways: [
                { title: '83% Fuel Cost Reduction', desc: 'Direct energy expenditure per flight hour falls from $620 with Avgas to under $95 with solar micro-grid charging.' },
                { title: 'Zero Runway Extension', desc: 'High-torque instant electric thrust enables short-takeoff runs under 600 meters on regional grass strips.' },
                { title: 'Noise Footprint Cut by 24dB', desc: 'Allows dawn and late-night island departures without disturbing residential coastal bird sanctuaries.' }
            ],
            claps: 1290,
            relatedIds: ['silicon-frontier', 'copenhagen-cycleways']
        },

        'silicon-frontier': {
            id: 'silicon-frontier',
            title: 'The Silicon Frontier: How Autonomous Micro-Grids Are Quietly Solving Energy Poverty in Remote Island Communities',
            deck: 'From decentralized solar arrays to predictive machine-learning load balancers, localized clean energy is leapfrogging legacy power infrastructure across Southeast Asia’s archipelagos.',
            category: 'Technology & Society',
            date: 'May 18, 2025',
            readTime: '6 min read',
            audioDuration: '6:42',
            audioMeta: 'Narrated by AI Editorial Voice (Jakarta-Neutral) • 6:42',
            author: {
                name: 'Dr. Aris Thorne',
                role: 'Senior Energy & Infrastructure Correspondent',
                avatar: 'public/assets/images/author-aris-thorne.jpg',
                bio: 'Specializing in emerging energy systems across island nations, Aris holds a doctorate in Clean Energy Infrastructure and reports regularly from the frontlines of renewable autonomy.'
            },
            coverImage: 'public/assets/images/microgrid-aerial.jpg',
            coverAlt: 'Pulau Banda Micro-Grid Array',
            badge: 'Field Dispatch • Pulau Banda',
            caption: 'Solar storage micro-inverter array operating on Pulau Banda. Battery modules maintain high frequency during tropical storm surges.',
            photoCredit: 'Elena Ramos / KABARIN',
            paragraphs: [
                'Under the equatorial sun of the Molucca archipelago, dusk once meant one thing: the deafening drone of diesel generators rattling zinc roofs. For over three decades, fuel drums arrived irregularly across choppy strait waters on wooden fishing hulls, costing village collectives up to four times the retail benchmark in Jakarta or Surabaya. If the monsoon turned vicious, whole islands plunged into blackouts lasting weeks.',
                'Today, however, an unassuming array of matte-black silicon panels perched along the volcanic hillside tells a completely divergent story. Powered by autonomous edge-computing micro-controllers and salt-tolerant lithium iron phosphate (LFP) storage, Banda’s localized grid balances kilowatts with sub-second precision, entirely severed from the brittle continental mainland.',
                'Centralized grids depend on expensive high-voltage undersea cables that bleed transmission efficiency with every nautical league crossed. By contrast, these island nodes employ hyper-localized DC micro-grids paired with algorithmic load prioritization. Machine learning scripts analyze localized meteorological satellite data to forecast cloud cover four hours ahead, pre-charging battery units or shifting cold-storage freezing schedules to peak radiance windows.',
                '“We didn’t wait for the centralized grid to arrive,” adds Bapak Harun Sulaeman, Cooperative Lead in Banda Neira. “The future arrived in shipping containers, pre-configured for sunshine and managed directly by our village youth.”'
            ],
            pullQuote: {
                quote: '“We didn’t wait for the centralized grid to arrive. The future arrived in shipping containers, pre-configured for sunshine.”',
                author: 'Bapak Harun Sulaeman, Cooperative Lead, Banda Neira'
            },
            secondaryHeading: 'The Death of Transmission Losses',
            secondaryImage: {
                src: 'public/assets/images/engineer-dewi-lestari.jpg',
                alt: 'Engineer Dewi Lestari',
                caption: 'Lead field engineer Dewi Lestari monitors load oscillation on the open-source firmware controlling the regional inverter array.'
            },
            takeaways: [
                { title: '78% Diesel Reduction', desc: 'Fuel expenditure plummeted from $14,000 to under $3,000 monthly per coastal settlement.' },
                { title: 'Autonomous Islanding (12ms)', desc: 'The micro-grids decouple sub-second during weather anomalies, avoiding cascading grid collapse.' },
                { title: 'Fisheries Cold Chain (3.4x)', desc: 'Continuous ice production boosted fishermen profit margins by 34% by eradicating post-catch spoilage.' }
            ],
            claps: 1482,
            relatedIds: ['gallium-nitride', 'soil-sensors']
        },

        'analog-living': {
            id: 'analog-living',
            title: 'The Rise of Analog Living in a Hyper-Digitized Decade: Inside the Micro-Societies Rejecting Algorithms',
            deck: 'Mechanical watches, tactile film cameras, manual typewriter salons, and paper notebooks: why sensory friction has become the ultimate psychological luxury.',
            category: 'Culture & Philosophy',
            date: 'May 16, 2025',
            readTime: '4 min read',
            audioDuration: '4:15',
            audioMeta: 'Narrated by AI Cultural Critic • 4:15',
            author: {
                name: 'Maya Lin',
                role: 'Culture & Digital Philosophy Critic',
                avatar: 'public/assets/images/engineer-dewi-lestari.jpg',
                bio: 'Maya studies attention economies, digital minimalism, and post-algorithmic craftsmanship across Southeast Asia and Japan.'
            },
            coverImage: 'public/assets/images/analog-living.jpg',
            coverAlt: 'Tactile Notebooks and Manual Tools',
            badge: 'Cultural Investigation • Bandung & Kyoto',
            caption: 'A member of the Bandung Slow Mind Guild inscribes a journal entry with an iron-gall ink fountain pen in a no-device tea house.',
            photoCredit: 'Maya Lin / KABARIN',
            paragraphs: [
                'Step inside The Mechanical Hearth, a dimly lit café tucked behind the historic tree-lined avenues of Bandung, and the first thing you notice is the sound. It is not the ping of instant messaging or the synthetic hum of algorithmic recommendations, but the satisfying metallic clack of 1960s Olivetti typewriters and the gentle hiss of vinyl grooves spinning on a tube amplifier.',
                'Across major cities in Indonesia, Japan, and Taiwan, a burgeoning counter-culture is consciously stepping off the digital conveyor belt. These are not luddites who fail to understand modern software—most are software developers, UI designers, and crypto engineers who spend their forty-hour workweeks immersed in code.',
                'Rather, analog living represents a deliberate clawback of human sensory agency. When every transaction, playlist, and emotional reaction is pre-chewed by predictive recommendation algorithms, the physical resistance of mechanical objects becomes a sanctuary.',
                '“Friction is where the soul resides,” remarks Raden Baskoro, co-founder of the guild. “When you write on an envelope, lick a postage stamp, and walk to a mailbox, you are committing to a rhythm of patience that no server farm can replicate.”'
            ],
            pullQuote: {
                quote: '“Silence is not the absence of sound; it is the presence of an unfiltered thought.”',
                author: 'Raden Baskoro, Founder of The Slow Mind Guild, Bandung'
            },
            secondaryHeading: 'Sensory Friction as Cognitive Medicine',
            secondaryImage: {
                src: 'public/assets/images/indie-vinyl.jpg',
                alt: 'Physical Vinyl Listening Stations',
                caption: 'Listening to an uninterrupted 45-minute vinyl side trains neural pathways to resist attention fragmentation.'
            },
            takeaways: [
                { title: '72% Screen Time Reduction', desc: 'Guild members report sustained deep reading capacity doubling within three weeks of analog evenings.' },
                { title: 'Tactile Memory Boost', desc: 'Cognitive studies show handwriting notes increases conceptual retention by 42% over digital typing.' },
                { title: 'Cash-Only Living', desc: 'Physical currency transactions re-establish emotional awareness of economic labor.' }
            ],
            claps: 2130,
            relatedIds: ['urban-gen-z', 'indie-vinyl-podcast']
        },

        'gallium-nitride': {
            id: 'gallium-nitride',
            title: 'The Semiconductor Frontier: Gallium Nitride & The Post-Silicon Power Paradigm',
            deck: 'Why the physics of wide-bandgap semiconductors are fundamentally replacing silicon across hyper-scale AI datacenters, electric drivetrains, and grid-scale converters.',
            category: 'Hardware & Deep Tech',
            date: 'May 15, 2025',
            readTime: '8 min read',
            audioDuration: '7:10',
            audioMeta: 'Narrated by Deep Tech Analyst • 7:10',
            author: {
                name: 'Kenji Sato',
                role: 'Deep Tech & Semiconductor Analyst • Tokyo',
                avatar: 'public/assets/images/author-aris-thorne.jpg',
                bio: 'Covering advanced materials science, lithography geopolitics, and wide-bandgap crystal physics across Taiwan, Japan, and South Korea.'
            },
            coverImage: 'public/assets/images/gallium-nitride.jpg',
            coverAlt: 'Semiconductor Silicon and GaN Wafer',
            badge: 'Special Report • Hsinchu & Tokyo',
            caption: 'A 200mm Gallium Nitride-on-Silicon power wafer undergoing automated optical metrology inspection inside an ISO-1 cleanroom.',
            photoCredit: 'Nanoscale Laboratory / KABARIN',
            paragraphs: [
                'For over seven decades, elemental silicon has served as the unquestioned substrate of human computing civilization. From early Apollo guidance computers to contemporary AI neural clusters, every leap in computation rested on carving microscopic gates into silicon crystals. Yet beneath the glamour of large language models, the industry has hit an unforgiving wall: thermal dissipation.',
                'Silicon transistors leak excessive current at high voltages and temperatures, requiring gargantuan cooling cooling towers that bleed megawatts of parasitic energy. Enter Gallium Nitride (GaN) and Silicon Carbide (SiC)—wide-bandgap semiconductors whose atomic crystal lattices withstand electrical fields ten times stronger than silicon.',
                'By switching electricity at megahertz frequencies with virtually zero heat loss, GaN power converters allow data centers to double AI compute density within existing physical footprints, while shaving gigawatt-hours off urban grid demands.',
                '“We are witnessing the most consequential hardware transition since the invention of the planar transistor,” states Dr. Naomi Hashimoto. “GaN isn’t just making phone chargers pocket-sized; it is unlocking clean megawatt conversion for the next fifty years.”'
            ],
            pullQuote: {
                quote: '“Silicon hit its thermal ceiling. GaN is allowing us to push ten times the power density through an envelope the size of a matchbox.”',
                author: 'Dr. Naomi Hashimoto, Principal Semiconductor Physicist, Tokyo'
            },
            secondaryHeading: 'Wide-Bandgap Physics Explained',
            secondaryImage: {
                src: 'public/assets/images/quantum-computing.jpg',
                alt: 'Cleanroom Wafer Metrology',
                caption: 'High-purity epitaxial deposition furnaces enable defect-free GaN crystalline growth on standard silicon carrier substrates.'
            },
            takeaways: [
                { title: '10x Higher Electric Field', desc: 'Allows power conversion at 99.2% electrical efficiency, drastically reducing waste heat.' },
                { title: 'Half the Physical Volume', desc: 'Electric vehicle on-board chargers shrink by 55%, expanding passenger cabin and battery space.' },
                { title: 'Sub-Nanosecond Switching', desc: 'Eliminates bulky magnetic copper coils from industrial micro-grid inverters.' }
            ],
            claps: 1650,
            relatedIds: ['quantum-computing', 'silicon-frontier']
        },

        'quantum-computing': {
            id: 'quantum-computing',
            title: 'Quantum Error Correction Achieves Threshold in Fault-Tolerant Memory Tests',
            deck: 'Breakthrough logical qubit stabilization tests demonstrate physical noise suppression without exponentially multiplying cryostat hardware overhead.',
            category: 'Quantum Science',
            date: 'May 14, 2025',
            readTime: '7 min read',
            audioDuration: '6:05',
            audioMeta: 'Narrated by Quantum Science Editor • 6:05',
            author: {
                name: 'Dr. Sarah Chen',
                role: 'Quantum Systems Investigator',
                avatar: 'public/assets/images/engineer-dewi-lestari.jpg',
                bio: 'Investigating topological superconducting circuits, surface code quantum error correction, and cryo-CMOS architectures.'
            },
            coverImage: 'public/assets/images/quantum-computing.jpg',
            coverAlt: 'Quantum Cryostat Dilution Refrigerator',
            badge: 'Scientific Dispatch • Delft & Singapore',
            caption: 'Gold-plated dilution refrigerator stages operating at 15 millikelvin, shielding superconducting transmon qubits from cosmic background radiation.',
            photoCredit: 'Qubit Research Institute / KABARIN',
            paragraphs: [
                'In the subterranean cryogenic laboratories of Delft and Singapore, researchers have quietly crossed the Rubicon of quantum computing: achieving a logical error rate lower than the physical error rate of the underlying noisy components.',
                'For decades, quantum machines were fragile curiosities. A stray thermal photon, a tiny electromagnetic ripple, or the vibrations of a passing elevator was enough to collapse delicate superpositions of states, ruining computations in microseconds.',
                'By utilizing rotated surface codes where thirty-two physical superconducting transmons collaboratively protect a single fault-tolerant logical qubit, the team proved that scaling qubit arrays can suppress errors rather than compound them.',
                '“For fifteen years, quantum computing was a physics experiment,” explains Prof. Henrik Van Der Meer. “Today, it officially graduated into an engineering discipline. We now have a verifiable mathematical path to molecular synthesis and post-quantum cryptography.”'
            ],
            pullQuote: {
                quote: '“For fifteen years quantum computing was a physics experiment. Today it officially became an engineering discipline.”',
                author: 'Prof. Henrik Van Der Meer, Lead Cryogenic Architect'
            },
            secondaryHeading: 'Surface Codes & The Road to 1,000 Logical Qubits',
            secondaryImage: {
                src: 'public/assets/images/open-source-ai.jpg',
                alt: 'Cryogenic Readout Circuitry',
                caption: 'High-density coaxial wiring delivers sub-nanosecond microwave control pulses directly to the dilution stage.'
            },
            takeaways: [
                { title: 'Sub-Threshold Fidelity', desc: 'Logical qubit lifetimes exceed physical gate lifetimes by a factor of 2.4x.' },
                { title: 'Real-Time Syndrome Decoding', desc: 'Custom FPGA chips decode parity syndromes within 450 nanoseconds, outrunning decoherence.' },
                { title: 'Pharmaceutical Simulations', desc: 'Paves the way for accurate nitrogenase enzyme simulation for clean synthetic fertilizers.' }
            ],
            claps: 1395,
            relatedIds: ['gallium-nitride', 'open-source-ai']
        },

        'tokyo-micro-apartments': {
            id: 'tokyo-micro-apartments',
            title: 'Tokyo’s Micro-Apartment Blueprint: Modular Compact Spaces for Single Urbanites',
            deck: 'With floor plans under 15 square meters, a new generation of architects in Shibuya and Koenji are turning radical spatial constraints into masterclasses of human comfort.',
            category: 'Architecture & Cities',
            date: 'May 13, 2025',
            readTime: '5 min read',
            audioDuration: '4:50',
            audioMeta: 'Narrated by Urban Architecture Desk • 4:50',
            author: {
                name: 'Hiroshi Tanaka',
                role: 'Architecture & Urban Planning Bureau',
                avatar: 'public/assets/images/author-aris-thorne.jpg',
                bio: 'Hiroshi reports on urban density innovations, modular construction, and Japanese interior ergonomics.'
            },
            coverImage: 'public/assets/images/tokyo-apartments.jpg',
            coverAlt: 'Tokyo Micro-Apartment Interior',
            badge: 'Urban Exploration • Tokyo & Seoul',
            caption: 'A 14-square-meter modular apartment featuring vertical loft sleeping, concealed acoustic storage, and floor-to-ceiling balcony glazing.',
            photoCredit: 'Hiroshi Tanaka / KABARIN',
            paragraphs: [
                'In the dense residential alleys of Koenji, just ten minutes by train from Tokyo’s Shinjuku hub, an unassuming four-story concrete building houses twenty-four independent residences. The entire floor area of each unit: exactly 13.8 square meters.',
                'To Western eyes accustomed to sprawling suburban bedrooms, such dimensions sound like claustrophobic deprivation. Yet step inside Unit 204, and the overwhelming sensation is one of serene, airy balance.',
                'High 3.6-meter ceilings allow vertical stratification of life: a sleeping tatami loft floats above an ergonomically dialed workstation. All structural pillars double as concealed wardrobes, while acoustic double-glazing isolates the resident from railway clatter.',
                '“A small room ceases to feel small the instant every object possesses an undeniable reason to exist,” explains architect Maiko Ogawa. “When you strip away status consumption, you discover how little physical volume a peaceful human being genuinely requires.”'
            ],
            pullQuote: {
                quote: '“A small room ceases to feel small the instant every object possesses an undeniable reason to exist.”',
                author: 'Maiko Ogawa, Lead Architect, Studio Kukan Tokyo'
            },
            secondaryHeading: 'The Ergonomics of Vertical Stratification',
            secondaryImage: {
                src: 'public/assets/images/genz-urban.jpg',
                alt: 'Communal Co-Living Lounge',
                caption: 'Ground floor communal lounges provide residents with shared high-end cooking appliances, library shelves, and washer-dryers.'
            },
            takeaways: [
                { title: '13.8 m² Floor Plan', desc: 'Engineered with 3.6m ceiling height to achieve 42% more usable volumetric space.' },
                { title: 'Zero Waste Utility Bills', desc: 'High thermal mass exterior envelope reduces seasonal heating and AC electricity consumption by 60%.' },
                { title: 'Neighbourhood Walkability', desc: 'Located within 3 minutes of fresh grocery markets, sento public baths, and train stations.' }
            ],
            claps: 1720,
            relatedIds: ['urban-gen-z', 'analog-living']
        },

        'indie-cinema': {
            id: 'indie-cinema',
            title: 'The New Wave of Independent Cinema: Celluloid Defiance in a Streaming Monopoly',
            deck: 'Independent film directors in Yogyakarta, Manila, and Bangkok are deliberately shooting on 16mm film stock, demanding tactile communal theaters over algorithmic recommendation feeds.',
            category: 'Arts & Cinema',
            date: 'May 12, 2025',
            readTime: '6 min read',
            audioDuration: '5:15',
            audioMeta: 'Narrated by Cinema & Arts Critic • 5:15',
            author: {
                name: 'Claire Moreau',
                role: 'Cinema & Arts Critic • Southeast Asia Desk',
                avatar: 'public/assets/images/engineer-dewi-lestari.jpg',
                bio: 'Writing on auteur cinema, analog projection preservation, and Southeast Asian independent film festivals.'
            },
            coverImage: 'public/assets/images/indie-cinema.jpg',
            coverAlt: 'Independent Cinema Theater Screening',
            badge: 'Film Guild Dispatch • Yogyakarta',
            caption: 'An audience gathers inside an artisanal micro-cinema in Yogyakarta for a sold-out 16mm projection of an unreleased indie feature.',
            photoCredit: 'Cinephile Archives / KABARIN',
            paragraphs: [
                'On a balmy Saturday evening in Yogyakarta’s cultural heartland, two hundred cinephiles packed into a converted textile warehouse. There were no plastic barcode scanners or soft drink franchise machines. In the center of the auditorium, a restored Bell & Howell 16mm optical projector hummed softly, casting a warm beam of silver-halide light across the white linen screen.',
                'At a time when algorithmic streaming platforms have flattened cinema into background content designed for smartphone multi-tasking, Southeast Asia’s independent filmmakers are staging a passionate rebellion.',
                'By choosing physical celluloid stock, directors accept strict artistic discipline: with film stock costing over a dollar a second, takes cannot be shot dozens of times carelessly. Actors deliver intense, deliberate performances, while natural grain renders skin tones with painterly depth.',
                '“Streaming treats movies like running tap water—it flows endlessly and nobody values a single glass,” says director Joko Setiadi. “When an audience sits together in a dark room watching physical film run through a gate, cinema returns to being a communal ceremony.”'
            ],
            pullQuote: {
                quote: '“When you shoot on film, every second of footage is an economic and artistic commitment. You cannot afford careless frames.”',
                author: 'Joko Setiadi, Independent Film Director, Yogyakarta'
            },
            secondaryHeading: 'Celluloid Grain Against the 4K Digital Sheen',
            secondaryImage: {
                src: 'public/assets/images/analog-living.jpg',
                alt: 'Vintage Film Equipment',
                caption: 'Hand-cranked Bolex and Arriflex 16mm cameras offer rugged portability for intimate on-location shoots without battery reliance.'
            },
            takeaways: [
                { title: '16mm Resurgence', desc: 'Over 40 independent films in Southeast Asia shot on physical emulsion stock in 2024–2025.' },
                { title: '100% Sold-Out Screenings', desc: 'Physical communal micro-cinemas report record youth attendance seeking shared cultural experiences.' },
                { title: 'Direct Guild Royalties', desc: 'Ticket sales directly support film preservation archives and local projectionist guilds.' }
            ],
            claps: 1540,
            relatedIds: ['analog-living', 'indie-vinyl-podcast']
        },

        'soil-sensors': {
            id: 'soil-sensors',
            title: 'Regenerative Agriculture in Arid Zones: Hyper-Localized Soil Sensing',
            deck: 'Low-cost sub-surface impedance probes and LoRaWAN mesh networks are restoring crop viability to degraded volcanic topsoils while cutting irrigation water by 62%.',
            category: 'Agritech & Ecology',
            date: 'May 11, 2025',
            readTime: '4 min read',
            audioDuration: '3:55',
            audioMeta: 'Narrated by Agritech & Ecology Editor • 3:55',
            author: {
                name: 'Bambang Soedjarwo',
                role: 'Agritech & Environmental Correspondent',
                avatar: 'public/assets/images/author-aris-thorne.jpg',
                bio: 'Bambang investigates regenerative farming systems, decentralized IoT telemetry, and community water resilience across Java and Bali.'
            },
            coverImage: 'public/assets/images/soil-sensors.jpg',
            coverAlt: 'Sub-surface Soil Moisture Sensors',
            badge: 'Field Investigation • Gunung Kidul',
            caption: 'A solar-powered LoRa telemetry node transmits real-time nitrogen and volumetric water content from degraded karst terrace fields.',
            photoCredit: 'Agritech Cooperative / KABARIN',
            paragraphs: [
                'In the limestone hills of Gunung Kidul, Yogyakarta, dry season farming has historically been an exercise in heartbreak. Shallow rocky topsoil loses moisture within hours of rainfall, forcing smallholder farmers to gamble expensive groundwater pumping against unpredictable harvest yields.',
                'That precarious equation changed this harvest season with the introduction of biodegradable impedance sensor probes developed by local university engineers. Placed at root-depth across five hundred terraced plots, these open-hardware probes measure salinity, soil moisture, and microbial respiration every fifteen minutes.',
                'Data hops via ultra-low-power LoRaWAN mesh radios to a single cellular gateway mounted on the village mosque minaret, sending farmers localized irrigation recommendations in Javanese and Indonesian via simple automated WhatsApp messages.',
                '“We used to water by guesswork and prayer,” says Ibu Siti Rahayu, inspecting her robust heirloom sorghum crops. “Now the soil tells us precisely when its roots need a drink, saving our diesel pumps and tripling our dry-season harvest.”'
            ],
            pullQuote: {
                quote: '“We used to look at the sky and guess; now the soil whispers its hydration needs directly to our phones.”',
                author: 'Ibu Siti Rahayu, Farmer Cooperative Chairwoman, Gunung Kidul'
            },
            secondaryHeading: 'Sub-Surface Telemetry & Microbial Health',
            secondaryImage: {
                src: 'public/assets/images/microgrid-aerial.jpg',
                alt: 'Solar Powered Rural Infrastructure',
                caption: 'Micro-grid powered drip irrigation systems automate water valve cycles based on real-time probe telemetry.'
            },
            takeaways: [
                { title: '62% Water Conservation', desc: 'Targeted root-zone micro-drip cycles eliminate water runoff on steep terraced hillsides.' },
                { title: 'Zero Soil Plastic Waste', desc: 'Probe casings are cast from biodegradable polylactic acid (PLA) that harmlessly decomposes after two seasons.' },
                { title: '$12 Open-Hardware Cost', desc: 'Allows community co-operatives to instrument entire watersheds without foreign corporate licenses.' }
            ],
            claps: 1180,
            relatedIds: ['silicon-frontier', 'electric-aviation']
        },

        'indie-vinyl-podcast': {
            id: 'indie-vinyl-podcast',
            title: 'The Economics of Independent Audio & Physical Vinyl Pressing',
            deck: 'Why grassroots audio journalists and indie audiophiles are partnering with boutique vinyl pressing plants to preserve long-form acoustic investigative series.',
            category: 'Acoustic Journalism',
            date: 'May 10, 2025',
            readTime: '5 min read',
            audioDuration: '4:30',
            audioMeta: 'Narrated by Acoustic Culture Desk • 4:30',
            author: {
                name: 'Julian Croft',
                role: 'Acoustic Culture Analyst',
                avatar: 'public/assets/images/author-aris-thorne.jpg',
                bio: 'Investigating sound engineering, vinyl mastering heritage, and audio journalism preservation models.'
            },
            coverImage: 'public/assets/images/indie-vinyl.jpg',
            coverAlt: 'Vinyl Audio Pressing Record',
            badge: 'Audio Studio Report • Melbourne & Jakarta',
            caption: 'A heavyweight 180-gram archival vinyl record containing a 4-part investigative documentary on environmental whistleblowers.',
            photoCredit: 'Groove Mechanics / KABARIN',
            paragraphs: [
                'When investigative audio producers finish a six-month reporting project, standard digital podcast platforms offer a fleeting reward: an algorithmic surge, followed by complete obscurity inside an infinite catalog of millions of episodes.',
                'Frustrated by the ephemeral nature of digital feeds, a coalition of independent audio journalists across Melbourne, Jakarta, and Singapore is pioneering an unexpected preservation medium: limited-edition vinyl pressings.',
                'Mastered directly onto lacquer discs and pressed onto heavyweight 180-gram virgin wax, these documentary box sets include 32-page broadsheet booklets containing source documents, FOIA letters, and high-resolution photo essays.',
                '“Streaming is access without possession,” explains sound designer Damian Cross. “A podcast on your phone is interrupted by text messages and app notifications. When you put a record on a turntable, you sign a treaty of uninterrupted attention with the storyteller.”'
            ],
            pullQuote: {
                quote: '“Streaming is access without possession. Vinyl is a treaty of uninterrupted attention between listener and storyteller.”',
                author: 'Damian Cross, Master Audio Engineer & Documentary Producer'
            },
            secondaryHeading: 'Mastering Investigative Audio for Analog Groves',
            secondaryImage: {
                src: 'public/assets/images/analog-living.jpg',
                alt: 'Artisan Recording Equipment',
                caption: 'Boutique pressing plants prioritize short production runs for independent journalists over pop reissues.'
            },
            takeaways: [
                { title: '180g Virgin Wax Archiving', desc: 'Physical grooved records survive without digital bit-rot or cloud streaming licensing shutdowns.' },
                { title: '100% Direct Creator Royalties', desc: 'Box set sales generate enough revenue to fund the newsroom’s next investigative series.' },
                { title: 'Liner Note Journalism', desc: 'Physical booklets give readers verified investigative footnotes and unredacted primary evidence.' }
            ],
            claps: 1340,
            relatedIds: ['analog-living', 'indie-cinema']
        },

        'copenhagen-cycleways': {
            id: 'copenhagen-cycleways',
            title: 'Copenhagen’s Sub-Zero Cycleways: Engineering Urban Micro-Mobility',
            deck: 'Geothermally heated arterial cycle highways and predictive autonomous salting robots ensure 72% commuter modal share even during Nordic blizzards.',
            category: 'Mobility & Transit',
            date: 'May 09, 2025',
            readTime: '4 min read',
            audioDuration: '4:10',
            audioMeta: 'Narrated by Nordic Urbanism Desk • 4:10',
            author: {
                name: 'Astrid Lindholm',
                role: 'Nordic Urbanism Editor • Copenhagen',
                avatar: 'public/assets/images/engineer-dewi-lestari.jpg',
                bio: 'Astrid covers cold-climate infrastructure, bicycle urbanism, and municipal public transit innovations across Scandinavia.'
            },
            coverImage: 'public/assets/images/copenhagen-cycleways.jpg',
            coverAlt: 'Copenhagen Elevated Cycleway',
            badge: 'European Bureau • Copenhagen',
            caption: 'Commuters cross the Cykelslangen elevated cycle highway in central Copenhagen during an early morning winter snowfall.',
            photoCredit: 'Copenhagen Cycling Directorate / KABARIN',
            paragraphs: [
                'When arctic winter storms roll across the Baltic Sea and temperatures drop to minus eight degrees Celsius, most metropolitan cities grind to an icy halt in traffic gridlock. In Copenhagen, however, the morning rush hour looks remarkably unchanged: tens of thousands of citizens pedal swiftly to work and school along clear, dry tarmac.',
                'The secret lies in Denmark’s world-renowned municipal winter engineering protocol. Before snow flurries even touch the ground, district heating return lines circulate warm excess geothermal water through key bridge decks and steep viaduct approaches, melting black ice before it can form.',
                'At the same time, compact autonomous brush vehicles patrol four hundred kilometers of super-cycle highways, sweeping snowflakes while dispensing liquid brine with surgical precision.',
                '“Winter is not a transportation barrier; lack of protected infrastructure is,” remarks municipal transit director Morten Dahl. “When cycling is the fastest, safest, and most dignified way to cross the city, people choose the bike regardless of the weather outside.”'
            ],
            pullQuote: {
                quote: '“Winter isn’t a transportation problem. Lack of dedicated, protected infrastructure is.”',
                author: 'Morten Dahl, Municipal Transit Director, Copenhagen'
            },
            secondaryHeading: 'Green Waves & Geothermal De-Icing',
            secondaryImage: {
                src: 'public/assets/images/electric-aviation.jpg',
                alt: 'Multimodal Transit Infrastructure',
                caption: 'Cycle highways interface smoothly with electric trains and regional ferry terminals.'
            },
            takeaways: [
                { title: '72% Winter Modal Retention', desc: 'Over seven out of ten commuters continue cycling every single week throughout freezing January and February.' },
                { title: 'Green Wave 20 km/h', desc: 'Smart traffic light sensors coordinate green signals for cyclists maintaining average 20 km/h commuting speed.' },
                { title: 'Direct Public Health ROI', desc: 'Copenhagen saves an estimated €1.22 in municipal healthcare expenditure for every kilometer cycled.' }
            ],
            claps: 1420,
            relatedIds: ['electric-aviation', 'urban-gen-z']
        },

        'passkeys-security': {
            id: 'passkeys-security',
            title: 'Zero-Trust Authentication: Why Cryptographic Passkeys Are Eradicating Phishing',
            deck: 'Public-key cryptography built directly into hardware secure enclaves is putting an end to credential stuffing, SMS two-factor hijacking, and corporate data leaks.',
            category: 'Security & Cryptography',
            date: 'May 08, 2025',
            readTime: '5 min read',
            audioDuration: '4:40',
            audioMeta: 'Narrated by Cyber Defense Desk • 4:40',
            author: {
                name: 'Tariq Al-Mansoor',
                role: 'Cybersecurity Specialist • Singapore Desk',
                avatar: 'public/assets/images/author-aris-thorne.jpg',
                bio: 'Covering zero-trust architecture, hardware cryptographic enclaves, and sovereign digital identity.'
            },
            coverImage: 'public/assets/images/passkeys-security.jpg',
            coverAlt: 'Cryptographic Security Hardware Enclave',
            badge: 'Defense Desk • Singapore',
            caption: 'Hardware security token executing a FIDO2 challenge-response cryptographic handshake on an isolated air-gapped terminal.',
            photoCredit: 'Cryptographic Labs / KABARIN',
            paragraphs: [
                'For half a century, the primary vulnerability of global networked computing has been an embarrassingly simple human habit: the memorized password. Despite endless corporate compliance seminars and complex special-character mandates, passwords remain inherently vulnerable to phishing pages, keyloggers, and server breaches.',
                'The transition to FIDO2 cryptographic passkeys is quietly eradicating this entire attack surface. Instead of sending a secret string of letters across the web, your device creates a cryptographic keypair: a public key shared with the server, and a private key locked irreversibly inside your hardware security chip.',
                'When you sign in, the server issues a mathematical challenge that can only be signed by your private key, unlocked by local biometric touch or device PIN. Because the private key never leaves the silicon and is cryptographically bound to the website’s verified domain, phishing becomes mathematically impossible.',
                '“You cannot trick an employee into revealing a password that doesn’t exist,” explains security researcher Dr. Anya Voronova. “Passkeys turn everyday devices into military-grade cryptographic authenticators without user friction.”'
            ],
            pullQuote: {
                quote: '“You cannot phish an authentication key that never leaves the hardware chip.”',
                author: 'Dr. Anya Voronova, Chief Cryptographic Researcher'
            },
            secondaryHeading: 'Hardware Enclaves & The Death of Credential Stuffing',
            secondaryImage: {
                src: 'public/assets/images/open-source-ai.jpg',
                alt: 'Hardware Chip Architecture',
                caption: 'Isolated secure processor enclaves prevent memory sniffing even if the host operating system is compromised.'
            },
            takeaways: [
                { title: '100% Phishing Elimination', desc: 'Cryptographic domain binding blocks fake credential-harvesting proxy websites.' },
                { title: 'Zero Password Storage', desc: 'Databases hold only public keys; server leaks yield zero actionable credentials for hackers.' },
                { title: '3x Faster Logins', desc: 'One biometric fingerprint or face scan replaces typing passwords and waiting for SMS OTP codes.' }
            ],
            claps: 1560,
            relatedIds: ['open-source-ai', 'gallium-nitride']
        },

        'open-source-ai': {
            id: 'open-source-ai',
            title: 'Open-Source LLMs Close the Efficiency Gap: The Edge-Compute Paradigm',
            deck: 'Quantized 8-billion parameter models running locally on consumer hardware are matching yesterday’s trillion-parameter cloud clusters while guaranteeing absolute data privacy.',
            category: 'Artificial Intelligence',
            date: 'May 07, 2025',
            readTime: '6 min read',
            audioDuration: '5:20',
            audioMeta: 'Narrated by AI Technology Editor • 5:20',
            author: {
                name: 'Kenji Sato',
                role: 'Deep Tech & Software Correspondent',
                avatar: 'public/assets/images/author-aris-thorne.jpg',
                bio: 'Specializing in edge neural architectures, quantization techniques, and open-source machine learning weights.'
            },
            coverImage: 'public/assets/images/open-source-ai.jpg',
            coverAlt: 'Neural Architecture Edge Silicon',
            badge: 'Silicon Corridor • Tokyo & Jakarta',
            caption: 'A sub-15-watt neural processing chip executing open-source weights directly on a personal workstation with zero internet connection.',
            photoCredit: 'Edge AI Foundation / KABARIN',
            paragraphs: [
                'A year ago, running state-of-the-art language intelligence required routing private prompts to multi-megawatt server clusters operated by a handful of tech conglomerates. In doing so, enterprise organizations and private citizens surrendered their intellectual property and data sovereignty in exchange for capability.',
                'A revolutionary algorithmic shift in weight quantization and synthetic distillation has shattered that monopoly. By compressing model parameters into 4-bit and 3-bit mathematical representations, open-weights models achieve 95% of frontier intelligence within eight gigabytes of consumer RAM.',
                'From investigative newsrooms parsing thousands of leaked financial spreadsheets to hospital surgical teams reviewing confidential patient charts, local edge AI guarantees total air-gapped privacy without paying recurring cloud API tariffs.',
                '“The future of artificial intelligence does not belong to server farms with their own nuclear reactors,” states software architect Hiroshi Koyama. “It belongs to the device already sitting in your laptop bag, running quietly without transmitting a single byte to the outside world.”'
            ],
            pullQuote: {
                quote: '“The future of artificial intelligence does not belong to server farms; it belongs to the device already sitting in your pocket.”',
                author: 'Hiroshi Koyama, Lead Engineer, Open Neural Guild'
            },
            secondaryHeading: 'Quantization & Cognitive Sovereignty',
            secondaryImage: {
                src: 'public/assets/images/gallium-nitride.jpg',
                alt: 'High Efficiency NPU Hardware',
                caption: 'Dedicated neural silicon achieves over 50 tokens per second execution speeds at whisper-quiet fan levels.'
            },
            takeaways: [
                { title: '4-Bit Quantization', desc: 'Reduces model memory footprint from 64GB to under 6GB with statistically negligible reasoning loss.' },
                { title: '100% Offline Air-Gapped', desc: 'No network packets leave the device, eradicating corporate espionage and cloud surveillance vectors.' },
                { title: '12x Energy Efficiency', desc: 'Local neural execution consumes less power than streaming high-definition video over 5G.' }
            ],
            claps: 1680,
            relatedIds: ['passkeys-security', 'gallium-nitride']
        },

        'youth-voter-turnout': {
            id: 'youth-voter-turnout',
            title: 'Youth Voter Turnout Hits Historic High in Decentralized Policy Referendums',
            deck: 'Mobile-first cryptographic civic verification and direct neighborhood ballots have redefined participatory democracy for young citizens across Southeast Asia.',
            category: 'National & Civics',
            date: 'May 06, 2025',
            readTime: '6 min read',
            audioDuration: '5:10',
            audioMeta: 'Narrated by National Political Desk • 5:10',
            author: {
                name: 'Marcus Vance',
                role: 'National Affairs Bureau',
                avatar: 'public/assets/images/author-aris-thorne.jpg',
                bio: 'Covering grassroots democracy movements, digital identity ballots, and decentralized municipal referendums.'
            },
            coverImage: 'public/assets/images/genz-urban.jpg',
            coverAlt: 'Youth civic participants in public assembly',
            badge: 'National Desk • Jakarta & Surabaya',
            caption: 'Young voters review localized public infrastructure referendum items using secure decentralized key pairs.',
            photoCredit: 'Civic Media / KABARIN',
            paragraphs: [
                'When municipal elections were conducted through rigid paper ballot centers requiring hours in bureaucratic queues, voter turnout among citizens under thirty historically stagnated below forty percent. Traditional political parties dismissed youth apathy as permanent disengagement.',
                'The nationwide rollout of sovereign zero-knowledge mobile ballot verification has turned that assumption upside down. In recent municipal budget referendums across Bandung, Surabaya, and Medan, turnout among voters aged eighteen to twenty-nine surged past eighty-two percent.',
                'Rather than voting once every five years for abstract political candidates, young citizens are participating in monthly micro-referendums: deciding directly whether municipal tax revenue funds protected bicycle corridors, public library solar canopies, or open-source community coding labs.',
                '“Young people never stopped caring about their cities,” remarks civic tech organizer Dimas Prasetya. “They simply stopped believing that selecting a political billboard face once every five years was an authentic expression of democratic will.”'
            ],
            pullQuote: {
                quote: '“Direct micro-referendums transformed democracy from a five-year spectator sport into an active weekly civic habit.”',
                author: 'Dimas Prasetya, Co-Founder of Open Civic Guild'
            },
            secondaryHeading: 'Direct Neighborhood Ballots in Action',
            secondaryImage: {
                src: 'public/assets/images/analog-living.jpg',
                alt: 'Civic forum deliberation',
                caption: 'Neighborhood assemblies combine physical town hall discussions with tamper-evident digital cryptographic tallies.'
            },
            takeaways: [
                { title: '82% Youth Participation', desc: 'Record engagement recorded across 42 municipal district referendums in 2025.' },
                { title: 'Zero-Knowledge Privacy', desc: 'Voters verify their ballots were counted without revealing individual identity choices.' },
                { title: 'Immediate Budget Allocation', desc: 'Approved municipal micro-grants disburse automatically into community escrow accounts within 48 hours.' }
            ],
            claps: 1490,
            relatedIds: ['urban-gen-z', 'passkeys-security']
        },

        'four-day-workweek': {
            id: 'four-day-workweek',
            title: 'The 4-Day Workweek Experiment: Three Years Later, Here Are the Definitive Results',
            deck: 'Longitudinal studies across sixty corporations demonstrate improved cognitive stamina, lower employee attrition, and zero loss in operational revenue.',
            category: 'Lifestyle & Economics',
            date: 'May 05, 2025',
            readTime: '5 min read',
            audioDuration: '4:35',
            audioMeta: 'Narrated by Workplace Economics Desk • 4:35',
            author: {
                name: 'David Thorne',
                role: 'Workplace Economics Correspondent',
                avatar: 'public/assets/images/engineer-dewi-lestari.jpg',
                bio: 'Investigating labor economics, cognitive productivity metrics, and future-of-work transitions across Asia and Europe.'
            },
            coverImage: 'public/assets/images/analog-living.jpg',
            coverAlt: 'Productive and balanced creative workplace',
            badge: 'Economic Investigation • Singapore & Jakarta',
            caption: 'Knowledge workers collaborate during an intensive 32-hour workweek focused on asynchronous deep-work blocks.',
            photoCredit: 'Future Labor Institute / KABARIN',
            paragraphs: [
                'When sixty technology, legal, and design enterprises across the region transitioned to a four-day, 32-hour workweek with 100% pay retention three years ago, traditional corporate executives predicted swift financial decline.',
                'Three years of rigorous longitudinal productivity audits have shattered those orthodoxies. Revenue across participating firms increased by an average of 14.2% year-over-year, while involuntary staff turnover plunged by more than half.',
                'The fundamental catalyst was not working faster, but eliminating performative corporate friction: two-hour status update meetings were banned in favor of concise asynchronous memos, and notification pings were silenced outside four-hour deep-work blocks.',
                '“The 40-hour workweek was engineered in 1926 for factory assembly lines, where output scaled linearly with hours standing on a concrete floor,” explains labor economist Dr. Hannah Sutanto. “In creative knowledge work, an exhausted brain creates bugs that take forty more hours to fix.”'
            ],
            pullQuote: {
                quote: '“In creative knowledge work, an exhausted brain creates mistakes that take forty more hours to fix. Rest is an essential engineering specification.”',
                author: 'Dr. Hannah Sutanto, Lead Labor Economist'
            },
            secondaryHeading: 'Eliminating Performative Meeting Culture',
            secondaryImage: {
                src: 'public/assets/images/tokyo-apartments.jpg',
                alt: 'Restful living environment',
                caption: 'Extended three-day weekends give employees uninterrupted time for physical recovery, family relationships, and personal creative pursuits.'
            },
            takeaways: [
                { title: '14.2% Revenue Expansion', desc: 'Participating companies outperformed industry-benchmark peers on revenue growth and profitability.' },
                { title: '54% Lower Burnout', desc: 'Self-reported chronic fatigue and insomnia indicators dropped dramatically within the first quarter.' },
                { title: '40% Fewer Meetings', desc: 'Teams replaced recurring sync calls with structured asynchronous documentation and clear sprint goals.' }
            ],
            claps: 1820,
            relatedIds: ['urban-gen-z', 'analog-living']
        }
    };

    // State Management
    const state = {
        currentView: 'home',
        currentArticleId: 'urban-gen-z',
        viewportMode: 'full',
        savedBookmarks: JSON.parse(localStorage.getItem('kabarin_bookmarks') || '["silicon-frontier", "urban-gen-z"]'),
        audioPlaying: false,
        fontSizeIndex: 0, // -1: Compact, 0: Standard, 1: Large
        clapped: false,
        clapCount: 1482,
        followingAuthor: false,
        tickerIndex: 0,
        searchQuery: '',
        exploreCategory: 'all',
        exploreViewMode: 'grid',
        visibleExploreCount: 6
    };

    const tickerDispatches = [
        { text: 'The Architecture of Solitude: Why Gen Z is Redesigning Urban Living', id: 'urban-gen-z' },
        { text: 'Autonomous Micro-Grids in Pulau Banda Achieve 100% Renewable Autonomy', id: 'silicon-frontier' },
        { text: 'Regional Electric Commuter Aircraft Complete Landmark Flight Trials in Nusawiru', id: 'electric-aviation' },
        { text: 'Wide-Bandgap Gallium Nitride Revolutionizes Semiconductor Power Conversion', id: 'gallium-nitride' },
        { text: 'Analog Revival: Why Tactile Living and Manual Tools are Rebounding in Bandung', id: 'analog-living' }
    ];

    // Helper: Toast Notifications
    function showToast(message, icon = 'check_circle') {
        const container = document.getElementById('toast-container');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = 'toast-item';
        toast.innerHTML = `<span class="material-symbols-outlined" style="color:#ffdad4;font-size:18px;">${icon}</span><span>${message}</span>`;
        container.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            toast.style.transition = 'all 0.2s ease';
            setTimeout(() => toast.remove(), 250);
        }, 2800);
    }

    // Navigation & View Routing
    function setView(viewName) {
        state.currentView = viewName;
        document.querySelectorAll('.view-section').forEach(sec => {
            sec.classList.remove('active');
        });
        const targetSection = document.getElementById(`view-${viewName}`);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Update Desktop Nav Links
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.dataset.view === viewName) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Update Mobile Bottom Nav Buttons
        document.querySelectorAll('.mobile-tab-btn').forEach(btn => {
            if (btn.dataset.view === viewName) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update Mobile Top Bar Title
        const mobileTitle = document.getElementById('mobile-header-title');
        if (mobileTitle) {
            const titles = {
                home: '',
                article: 'Story Detail',
                explore: 'Explore Dispatches',
                topics: 'Topics Directory',
                saved: 'Reading Pocket',
                about: 'About KABARIN'
            };
            mobileTitle.textContent = titles[viewName] || '';
            mobileTitle.style.display = titles[viewName] ? 'inline-block' : 'none';
        }

        // Mobile Back Button visibility
        const mobileBackBtn = document.getElementById('mobile-back-btn');
        if (mobileBackBtn) {
            mobileBackBtn.style.display = (viewName === 'article') ? 'flex' : 'none';
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // If opening saved view, refresh list
        if (viewName === 'saved') {
            renderSavedList();
        }
    }

    // Dynamic Article Renderer
    function renderArticle(articleId) {
        const story = ARTICLES[articleId] || ARTICLES['urban-gen-z'];
        state.currentArticleId = story.id;

        // 1. Category & Date
        const catLabel = document.getElementById('article-category-label');
        if (catLabel) catLabel.textContent = story.category;

        const dateLabel = document.getElementById('article-date-label');
        if (dateLabel) dateLabel.textContent = story.date;

        const readTimeLabel = document.getElementById('article-readtime-label');
        if (readTimeLabel) readTimeLabel.textContent = story.readTime;

        // 2. Headline & Deck
        const titleEl = document.getElementById('article-title-heading');
        if (titleEl) titleEl.textContent = story.title;

        const deckEl = document.getElementById('article-deck-sub');
        if (deckEl) deckEl.textContent = story.deck;

        // 3. Audio Player Info
        const audioLabel = document.getElementById('audio-status-label');
        if (audioLabel) audioLabel.textContent = 'Listen to this story';
        const audioMeta = document.getElementById('audio-meta-text');
        if (audioMeta) audioMeta.textContent = story.audioMeta;
        state.audioPlaying = false;
        const audioIcon = document.getElementById('audio-icon');
        if (audioIcon) audioIcon.textContent = 'play_arrow';
        const audioBtn = document.getElementById('audio-play-btn');
        if (audioBtn) audioBtn.style.backgroundColor = 'var(--primary)';

        // 4. Author Byline
        const authorAvatar = document.getElementById('article-author-avatar');
        if (authorAvatar) {
            authorAvatar.src = story.author.avatar;
            authorAvatar.alt = story.author.name;
        }
        const authorName = document.getElementById('article-author-name');
        if (authorName) authorName.textContent = story.author.name;
        const authorRole = document.getElementById('article-author-role');
        if (authorRole) authorRole.textContent = story.author.role;

        // Follow button reset
        state.followingAuthor = false;
        const followBtn = document.getElementById('author-follow-btn');
        if (followBtn) {
            followBtn.textContent = '+ Follow';
            followBtn.style.color = '#b81500';
        }

        // Bookmark button on story
        const articleBookmarkBtn = document.getElementById('article-bookmark-btn');
        if (articleBookmarkBtn) {
            articleBookmarkBtn.dataset.bookmarkId = story.id;
            articleBookmarkBtn.dataset.title = story.title;
            const bIcon = articleBookmarkBtn.querySelector('.material-symbols-outlined');
            if (bIcon) {
                const bookmarked = isBookmarked(story.id);
                bIcon.textContent = bookmarked ? 'bookmark' : 'bookmark_border';
                bIcon.classList.toggle('filled', bookmarked);
                articleBookmarkBtn.style.color = bookmarked ? '#b81500' : 'var(--secondary)';
            }
        }

        // 5. Hero Cover Image & Meta
        const heroImg = document.getElementById('article-hero-img');
        if (heroImg) {
            heroImg.src = story.coverImage;
            heroImg.alt = story.coverAlt;
        }
        const heroBadge = document.getElementById('article-hero-badge');
        if (heroBadge) heroBadge.textContent = story.badge;

        const heroCaption = document.getElementById('article-hero-caption');
        if (heroCaption) heroCaption.textContent = story.caption;

        const heroCredit = document.getElementById('article-hero-credit');
        if (heroCredit) heroCredit.textContent = story.photoCredit;

        // 6. Narrative Body Construction
        const narrativeEl = document.getElementById('article-body-narrative');
        if (narrativeEl) {
            let bodyHtml = '';

            // Paragraph 1 with drop cap
            if (story.paragraphs && story.paragraphs.length > 0) {
                bodyHtml += `<p class="drop-cap">${story.paragraphs[0]}</p>`;
            }

            // Paragraph 2
            if (story.paragraphs && story.paragraphs.length > 1) {
                bodyHtml += `<p style="margin:1.25rem 0;">${story.paragraphs[1]}</p>`;
            }

            // Editorial Pull Quote
            if (story.pullQuote) {
                bodyHtml += `
          <blockquote class="editorial-pull-quote">
            <p class="serif-font" style="font-size:1.25rem;font-style:italic;font-weight:600;line-height:1.4;">
              ${story.pullQuote.quote}
            </p>
            <cite style="display:block;margin-top:0.5rem;font-size:11px;text-transform:uppercase;color:var(--secondary);font-style:normal;font-weight:700;">
              — ${story.pullQuote.author}
            </cite>
          </blockquote>
        `;
            }

            // Secondary Heading & Paragraph 3
            if (story.secondaryHeading) {
                bodyHtml += `<h2 class="serif-font" style="font-size:1.5rem;font-weight:700;margin:1.5rem 0 0.75rem;">${story.secondaryHeading}</h2>`;
            }
            if (story.paragraphs && story.paragraphs.length > 2) {
                bodyHtml += `<p style="margin-bottom:1.25rem;">${story.paragraphs[2]}</p>`;
            }

            // Key Takeaways Bento Box
            if (story.takeaways && story.takeaways.length > 0) {
                bodyHtml += `
          <div class="bento-takeaways">
            <div style="display:flex;align-items:center;gap:0.375rem;color:var(--primary);margin-bottom:0.75rem;">
              <span class="material-symbols-outlined" style="font-size:20px;">bolt</span>
              <strong style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;">Key Field Takeaways</strong>
            </div>
            <div style="display:flex;flex-direction:column;gap:0.75rem;font-size:0.8125rem;">
        `;
                story.takeaways.forEach(t => {
                    bodyHtml += `
            <div>
              <strong style="color:var(--primary);">${t.title}:</strong> ${t.desc}
            </div>
          `;
                });
                bodyHtml += `</div></div>`;
            }

            // Secondary Image
            if (story.secondaryImage) {
                bodyHtml += `
          <figure style="margin:2rem 0;">
            <div style="aspect-ratio:16/9;border-radius:1rem;overflow:hidden;background:#e4e2df;">
              <img src="${story.secondaryImage.src}" alt="${story.secondaryImage.alt}" style="width:100%;height:100%;object-fit:cover;" />
            </div>
            <figcaption style="font-size:11px;color:var(--secondary);margin-top:0.375rem;">
              ${story.secondaryImage.caption}
            </figcaption>
          </figure>
        `;
            }

            // Paragraph 4 & conclusion
            if (story.paragraphs && story.paragraphs.length > 3) {
                bodyHtml += `<p style="margin:1.25rem 0;">${story.paragraphs[3]}</p>`;
            }

            narrativeEl.innerHTML = bodyHtml;
        }

        // 7. Author Bio Box
        const bioAvatar = document.getElementById('article-author-bio-avatar');
        if (bioAvatar) {
            bioAvatar.src = story.author.avatar;
            bioAvatar.alt = story.author.name;
        }
        const bioName = document.getElementById('article-author-bio-name');
        if (bioName) bioName.textContent = `About ${story.author.name}`;
        const bioText = document.getElementById('article-author-bio-text');
        if (bioText) bioText.textContent = story.author.bio;

        // 8. Claps & Progress Reset
        state.clapped = false;
        state.clapCount = story.claps || 1250;
        const clapText = document.getElementById('clap-count-text');
        if (clapText) clapText.textContent = state.clapCount.toLocaleString();
        const clapIcon = document.getElementById('clap-icon');
        if (clapIcon) clapIcon.classList.remove('filled');
        const clapBtn = document.getElementById('article-clap-btn');
        if (clapBtn) clapBtn.style.color = '';

        const progressFill = document.getElementById('reading-progress-fill');
        if (progressFill) progressFill.style.width = '0%';
        const progressPct = document.getElementById('reading-pct-text');
        if (progressPct) progressPct.textContent = '0%';

        // 9. Update Related Dispatches Sidebar
        const relatedContainer = document.getElementById('article-related-stream');
        if (relatedContainer && story.relatedIds) {
            let relatedHtml = '';
            story.relatedIds.forEach(relId => {
                const relStory = ARTICLES[relId];
                if (relStory) {
                    relatedHtml += `
            <div data-article-id="${relStory.id}" style="cursor:pointer;padding-bottom:0.75rem;border-bottom:1px solid var(--border-light);">
              <span style="font-size:10px;font-weight:700;color:var(--primary);text-transform:uppercase;">${relStory.category}</span>
              <h4 class="serif-font" style="font-size:0.875rem;font-weight:700;line-height:1.3;margin-top:0.25rem;">${relStory.title}</h4>
              <span style="font-size:11px;color:var(--secondary);margin-top:0.25rem;display:block;">${relStory.readTime}</span>
            </div>
          `;
                }
            });
            relatedContainer.innerHTML = relatedHtml;
        }
    }

    // Open Article Method
    function openArticle(articleId) {
        renderArticle(articleId);
        setView('article');
        document.getElementById('search-modal')?.classList.remove('active');
    }

    // Viewport Switcher
    function setViewport(mode) {
        state.viewportMode = mode;
        const container = document.getElementById('app-main-container');
        if (!container) return;

        container.className = 'app-container mode-' + mode;

        document.querySelectorAll('.vp-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === mode);
        });
    }

    // Bookmarking System
    function toggleBookmark(storyId, storyTitle = 'Story') {
        const idx = state.savedBookmarks.indexOf(storyId);
        if (idx > -1) {
            state.savedBookmarks.splice(idx, 1);
            showToast(`Removed from saved pocket: ${storyTitle}`, 'bookmark_remove');
        } else {
            state.savedBookmarks.push(storyId);
            showToast(`Saved to pocket: ${storyTitle}`, 'bookmark_added');
        }
        localStorage.setItem('kabarin_bookmarks', JSON.stringify(state.savedBookmarks));
        updateBookmarkBadges();
        renderSavedList();
    }

    function isBookmarked(storyId) {
        return state.savedBookmarks.includes(storyId);
    }

    function updateBookmarkBadges() {
        const count = state.savedBookmarks.length;
        document.querySelectorAll('.bookmark-count-badge').forEach(el => {
            el.textContent = count;
            el.style.display = count > 0 ? 'inline-flex' : 'none';
        });

        const profileCount = document.getElementById('profile-saved-count');
        if (profileCount) {
            profileCount.textContent = `${count} Dispatch${count === 1 ? '' : 'es'} in Pocket`;
        }

        document.querySelectorAll('[data-bookmark-id]').forEach(btn => {
            const id = btn.dataset.bookmarkId;
            const icon = btn.querySelector('.material-symbols-outlined');
            if (icon) {
                if (isBookmarked(id)) {
                    icon.textContent = 'bookmark';
                    icon.classList.add('filled');
                    btn.style.color = '#b81500';
                } else {
                    icon.textContent = 'bookmark_border';
                    icon.classList.remove('filled');
                    btn.style.color = '';
                }
            }
        });
    }

    function renderSavedList() {
        const savedContainer = document.getElementById('saved-stories-list');
        const emptyState = document.getElementById('saved-empty-state');
        if (!savedContainer || !emptyState) return;

        if (state.savedBookmarks.length === 0) {
            savedContainer.style.display = 'none';
            emptyState.style.display = 'block';
        } else {
            emptyState.style.display = 'none';
            savedContainer.style.display = 'grid';

            // Dynamically generate cards for saved items
            let html = '';
            state.savedBookmarks.forEach(id => {
                const item = ARTICLES[id];
                if (item) {
                    html += `
            <article class="card-white" style="overflow:hidden;display:flex;flex-direction:column;">
              <div data-article-id="${item.id}" style="aspect-ratio:16/10;background:#e4e2df;cursor:pointer;position:relative;">
                <img src="${item.coverImage}" alt="${item.coverAlt}" style="width:100%;height:100%;object-fit:cover;" />
                <span class="badge-tag badge-dark" style="position:absolute;top:0.75rem;left:0.75rem;">${item.category}</span>
              </div>
              <div style="padding:1.25rem;flex:1;display:flex;flex-direction:column;justify-content:space-between;">
                <div>
                  <h3 data-article-id="${item.id}" class="serif-font" style="font-size:1.0625rem;font-weight:700;line-height:1.3;cursor:pointer;margin-bottom:0.5rem;">${item.title}</h3>
                  <p style="font-size:0.75rem;color:var(--on-surface-variant);line-height:1.5;">${item.deck.substring(0, 110)}...</p>
                </div>
                <div style="display:flex;align-items:center;justify-content:space-between;margin-top:1rem;padding-top:0.75rem;border-top:1px solid var(--border-light);font-size:11px;color:var(--secondary);">
                  <span>${item.author.name} • ${item.readTime}</span>
                  <div style="display:flex;gap:0.5rem;">
                    <button class="primary-btn" data-article-id="${item.id}" style="padding:0.25rem 0.5rem;font-size:10px;">Read</button>
                    <button data-bookmark-id="${item.id}" data-title="${item.title}" style="background:none;border:none;cursor:pointer;color:#b81500;"><span class="material-symbols-outlined filled" style="font-size:18px;">bookmark</span></button>
                  </div>
                </div>
              </div>
            </article>
          `;
                }
            });
            savedContainer.innerHTML = html;
        }
    }

    // Ticker Controls
    function initTicker() {
        const textEl = document.getElementById('ticker-text-display');
        const prevBtn = document.getElementById('ticker-prev-btn');
        const nextBtn = document.getElementById('ticker-next-btn');
        if (!textEl) return;

        function renderTicker() {
            const cur = tickerDispatches[state.tickerIndex];
            textEl.textContent = cur.text;
            textEl.dataset.articleId = cur.id;
            textEl.style.cursor = 'pointer';
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                state.tickerIndex = (state.tickerIndex + 1) % tickerDispatches.length;
                renderTicker();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                state.tickerIndex = (state.tickerIndex - 1 + tickerDispatches.length) % tickerDispatches.length;
                renderTicker();
            });
        }

        renderTicker();
    }

    // Audio Player Toggle
    function initAudioPlayer() {
        const audioBtn = document.getElementById('audio-play-btn');
        const audioIcon = document.getElementById('audio-icon');
        const audioLabel = document.getElementById('audio-status-label');
        const waveforms = document.querySelectorAll('.waveform-bar');

        if (!audioBtn) return;

        audioBtn.addEventListener('click', () => {
            state.audioPlaying = !state.audioPlaying;
            if (audioIcon) {
                audioIcon.textContent = state.audioPlaying ? 'pause' : 'play_arrow';
            }
            if (audioLabel) {
                audioLabel.textContent = state.audioPlaying
                    ? 'Playing audio dispatch...'
                    : 'Listen to this story';
            }
            audioBtn.style.backgroundColor = state.audioPlaying ? '#da361b' : '#b81500';

            waveforms.forEach((bar, idx) => {
                if (state.audioPlaying) {
                    bar.style.height = `${(idx % 2 === 0 ? 16 : 24)}px`;
                    bar.style.backgroundColor = '#b81500';
                } else {
                    bar.style.height = '8px';
                    bar.style.backgroundColor = '#b81500';
                }
            });

            showToast(state.audioPlaying ? 'Playing AI editorial narration' : 'Audio narration paused', 'graphic_eq');
        });
    }

    // Font Resizer for Long-form Reading
    function initFontResizer() {
        const bodyText = document.getElementById('article-body-narrative');
        const incBtn = document.getElementById('font-increase-btn');
        const decBtn = document.getElementById('font-decrease-btn');
        const indText = document.getElementById('font-indicator-text');
        if (!bodyText) return;

        function applyFontSize() {
            if (state.fontSizeIndex === 1) {
                bodyText.style.fontSize = '1.25rem';
                bodyText.style.lineHeight = '2.1rem';
                if (indText) indText.textContent = 'Large';
            } else if (state.fontSizeIndex === -1) {
                bodyText.style.fontSize = '0.9375rem';
                bodyText.style.lineHeight = '1.65rem';
                if (indText) indText.textContent = 'Compact';
            } else {
                bodyText.style.fontSize = '1.0625rem';
                bodyText.style.lineHeight = '1.85rem';
                if (indText) indText.textContent = 'Standard';
            }
        }

        if (incBtn) {
            incBtn.addEventListener('click', () => {
                if (state.fontSizeIndex < 1) {
                    state.fontSizeIndex++;
                    applyFontSize();
                }
            });
        }

        if (decBtn) {
            decBtn.addEventListener('click', () => {
                if (state.fontSizeIndex > -1) {
                    state.fontSizeIndex--;
                    applyFontSize();
                }
            });
        }
    }

    // Reading Progress Bar
    function initReadingProgress() {
        const progressBar = document.getElementById('reading-progress-fill');
        const progressText = document.getElementById('reading-pct-text');
        const narrativeWrapper = document.getElementById('article-body-narrative');

        window.addEventListener('scroll', () => {
            if (state.currentView !== 'article' || !narrativeWrapper || !progressBar) return;
            const rect = narrativeWrapper.getBoundingClientRect();
            const totalH = narrativeWrapper.offsetHeight;
            const windowH = window.innerHeight;

            if (rect.top <= windowH / 2) {
                const scrolled = (windowH / 2) - rect.top;
                const pct = Math.min(100, Math.max(0, Math.round((scrolled / totalH) * 100)));
                progressBar.style.width = pct + '%';
                if (progressText) progressText.textContent = pct + '%';
            } else {
                progressBar.style.width = '0%';
                if (progressText) progressText.textContent = '0%';
            }
        }, { passive: true });
    }

    // Applause Counter
    function initApplause() {
        const clapBtn = document.getElementById('article-clap-btn');
        const countEl = document.getElementById('clap-count-text');
        const iconEl = document.getElementById('clap-icon');
        if (!clapBtn) return;

        clapBtn.addEventListener('click', () => {
            state.clapped = !state.clapped;
            state.clapCount += state.clapped ? 1 : -1;
            if (countEl) countEl.textContent = state.clapCount.toLocaleString();
            if (iconEl) iconEl.classList.toggle('filled', state.clapped);
            clapBtn.style.color = state.clapped ? '#b81500' : '';
            if (state.clapped) {
                showToast('Applauded dispatch (+1)', 'recommend');
            }
        });
    }

    // Follow Author
    function initFollowAuthor() {
        const followBtn = document.getElementById('author-follow-btn');
        if (!followBtn) return;

        followBtn.addEventListener('click', () => {
            state.followingAuthor = !state.followingAuthor;
            followBtn.textContent = state.followingAuthor ? 'Following ✓' : '+ Follow';
            followBtn.style.color = state.followingAuthor ? '#5f5e5e' : '#b81500';
            const cur = ARTICLES[state.currentArticleId];
            const authorName = cur ? cur.author.name : 'Author';
            showToast(state.followingAuthor ? `Following ${authorName}` : 'Unfollowed', 'person');
        });
    }

    // Comments Thread Forum
    function initComments() {
        const form = document.getElementById('post-comment-form');
        const input = document.getElementById('comment-textarea');
        const container = document.getElementById('comments-stream');
        if (!form || !input || !container) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = input.value.trim();
            if (!text) return;

            const card = document.createElement('div');
            card.className = 'card-white';
            card.style.padding = '1rem';
            card.style.marginTop = '0.75rem';
            card.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.5rem;">
          <div style="display:flex;align-items:center;gap:0.5rem;">
            <div style="width:28px;height:28px;border-radius:999px;background:#efeeeb;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:11px;">YOU</div>
            <strong style="font-size:0.75rem;">Verified Reader</strong>
          </div>
          <span style="font-size:0.6875rem;color:#5f5e5e;">Just now</span>
        </div>
        <p style="font-size:0.8125rem;line-height:1.5;">${text}</p>
      `;
            container.prepend(card);
            input.value = '';
            showToast('Insight published to reader forum', 'forum');
        });
    }

    // Explore Stories Filter & Search
    function initExploreFilters() {
        const searchInput = document.getElementById('explore-search-input');
        const clearBtn = document.getElementById('explore-clear-search');
        const catTabs = document.querySelectorAll('.cat-filter-tab');
        const countLabel = document.getElementById('explore-count-label');
        const emptyState = document.getElementById('explore-empty-state');

        function filterStories() {
            const q = state.searchQuery.toLowerCase().trim();
            const cat = state.exploreCategory;
            let matches = 0;

            document.querySelectorAll('.explore-story-card').forEach(card => {
                const cardCat = (card.dataset.category || '').toLowerCase();
                const title = (card.querySelector('h3, h2')?.textContent || '').toLowerCase();
                const excerpt = (card.querySelector('p')?.textContent || '').toLowerCase();

                const matchCat = (cat === 'all' || cardCat.includes(cat));
                const matchSearch = (!q || title.includes(q) || excerpt.includes(q) || cardCat.includes(q));

                if (matchCat && matchSearch) {
                    card.style.display = matches < state.visibleExploreCount ? 'flex' : 'none';
                    matches++;
                } else {
                    card.style.display = 'none';
                }
            });

            if (countLabel) {
                countLabel.textContent = `Showing ${Math.min(matches, state.visibleExploreCount)} of ${matches} stories`;
            }

            if (emptyState) {
                emptyState.style.display = matches === 0 ? 'block' : 'none';
            }
        }

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                state.searchQuery = e.target.value;
                if (clearBtn) clearBtn.style.display = state.searchQuery ? 'block' : 'none';
                filterStories();
            });
        }

        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                searchInput.value = '';
                state.searchQuery = '';
                clearBtn.style.display = 'none';
                filterStories();
            });
        }

        // Popular tags
        document.querySelectorAll('.popular-chip-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tag = btn.dataset.tag || btn.textContent.trim();
                if (searchInput) {
                    searchInput.value = tag;
                    state.searchQuery = tag;
                    if (clearBtn) clearBtn.style.display = 'block';
                    filterStories();
                }
            });
        });

        // Category Tabs
        catTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                catTabs.forEach(t => {
                    t.classList.remove('active');
                    t.style.background = '';
                    t.style.color = '';
                });
                tab.classList.add('active');
                tab.style.background = 'var(--primary)';
                tab.style.color = '#fff';
                state.exploreCategory = tab.dataset.category;
                filterStories();
            });
        });

        // Layout buttons
        const gridBtn = document.getElementById('view-grid-btn');
        const listBtn = document.getElementById('view-list-btn');
        const gridEl = document.getElementById('explore-stories-grid');

        if (gridBtn && listBtn && gridEl) {
            gridBtn.addEventListener('click', () => {
                gridBtn.classList.add('active');
                listBtn.classList.remove('active');
                gridEl.className = 'grid-3';
            });
            listBtn.addEventListener('click', () => {
                listBtn.classList.add('active');
                gridBtn.classList.remove('active');
                gridEl.className = 'grid-1';
            });
        }

        // Load More Stories Button
        const loadMoreBtn = document.getElementById('load-more-btn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                state.visibleExploreCount += 6;
                filterStories();
                showToast('Loaded more dispatches from archives', 'expand_more');
            });
        }
    }

    function setExploreCategory(catName) {
        state.exploreCategory = catName;
        const catTabs = document.querySelectorAll('.cat-filter-tab');
        catTabs.forEach(t => {
            const isMatch = t.dataset.category === catName;
            t.classList.toggle('active', isMatch);
            t.style.background = isMatch ? 'var(--primary)' : '';
            t.style.color = isMatch ? '#fff' : '';
        });
        // Trigger filter
        const searchInput = document.getElementById('explore-search-input');
        const clearBtn = document.getElementById('explore-clear-search');
        const countLabel = document.getElementById('explore-count-label');
        const emptyState = document.getElementById('explore-empty-state');
        const q = (state.searchQuery || '').toLowerCase().trim();
        let matches = 0;

        document.querySelectorAll('.explore-story-card').forEach(card => {
            const cardCat = (card.dataset.category || '').toLowerCase();
            const title = (card.querySelector('h3, h2')?.textContent || '').toLowerCase();
            const excerpt = (card.querySelector('p')?.textContent || '').toLowerCase();

            const matchCat = (catName === 'all' || cardCat.includes(catName));
            const matchSearch = (!q || title.includes(q) || excerpt.includes(q) || cardCat.includes(q));

            if (matchCat && matchSearch) {
                card.style.display = matches < state.visibleExploreCount ? 'flex' : 'none';
                matches++;
            } else {
                card.style.display = 'none';
            }
        });

        if (countLabel) {
            countLabel.textContent = `Showing ${Math.min(matches, state.visibleExploreCount)} of ${matches} stories`;
        }
        if (emptyState) {
            emptyState.style.display = matches === 0 ? 'block' : 'none';
        }
    }

    // Home Topic Pills Filter
    function initHomeTopicPills() {
        const pills = document.querySelectorAll('.home-topic-pill');
        pills.forEach(pill => {
            pill.addEventListener('click', (e) => {
                e.preventDefault();
                pills.forEach(p => {
                    p.classList.remove('active', 'primary-btn');
                    p.classList.add('vp-btn');
                    p.style.background = '#efeeeb';
                    p.style.color = '#1b1c1a';
                });
                pill.classList.remove('vp-btn');
                pill.classList.add('active', 'primary-btn');
                pill.style.background = 'var(--primary)';
                pill.style.color = '#fff';

                const cat = pill.dataset.homeCat;
                if (cat === 'all') {
                    document.querySelectorAll('#view-home [data-article-id]').forEach(el => {
                        el.closest('article, .col-span-7, .col-span-5, .grid-3 > article, .grid-4 > div')?.style.removeProperty('display');
                    });
                    showToast('Displaying all editions & dispatches', 'filter_alt');
                } else {
                    // If user clicked a specific category pill on home, we can route smoothly or filter
                    setExploreCategory(cat);
                    setView('explore');
                    showToast(`Filtered to: ${pill.textContent.trim()}`, 'filter_alt');
                }
            });
        });
    }

    // Accordions for Standards & FAQs
    function initAccordions() {
        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const body = header.nextElementSibling;
                const icon = header.querySelector('.accordion-icon');
                const isOpen = body.style.display === 'block';

                document.querySelectorAll('.accordion-body').forEach(b => b.style.display = 'none');
                document.querySelectorAll('.accordion-icon').forEach(ic => ic.style.transform = 'rotate(0deg)');

                if (!isOpen) {
                    body.style.display = 'block';
                    if (icon) icon.style.transform = 'rotate(180deg)';
                }
            });
        });
    }

    // Whistleblower Form
    function initWhistleblowerForm() {
        const form = document.getElementById('whistleblower-form');
        const submitBtn = document.getElementById('whistleblower-submit-btn');
        const successBox = document.getElementById('whistleblower-success-box');
        if (!form || !submitBtn || !successBox) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="material-symbols-outlined" style="animation:spin 1s infinite linear;">progress_activity</span> Encrypting payload...';

            setTimeout(() => {
                submitBtn.style.display = 'none';
                successBox.style.display = 'block';
                showToast('Tip securely transmitted to newsroom', 'lock');
            }, 1200);
        });
    }

    // Modals (Search ⌘K & Subscribe)
    function initModals() {
        const searchModal = document.getElementById('search-modal');
        const subModal = document.getElementById('subscribe-modal');
        const openSearchBtns = document.querySelectorAll('.open-search-modal-btn');
        const openSubBtns = document.querySelectorAll('.open-subscribe-modal-btn');
        const closeBtns = document.querySelectorAll('.close-modal-btn');

        openSearchBtns.forEach(b => b.addEventListener('click', () => {
            if (searchModal) {
                searchModal.classList.add('active');
                document.getElementById('modal-search-input')?.focus();
            }
        }));

        openSubBtns.forEach(b => b.addEventListener('click', () => {
            if (subModal) subModal.classList.add('active');
        }));

        closeBtns.forEach(b => b.addEventListener('click', () => {
            searchModal?.classList.remove('active');
            subModal?.classList.remove('active');
        }));

        // Keyboard shortcuts
        window.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                searchModal?.classList.toggle('active');
                if (searchModal?.classList.contains('active')) {
                    document.getElementById('modal-search-input')?.focus();
                }
            }
            if (e.key === 'Escape') {
                searchModal?.classList.remove('active');
                subModal?.classList.remove('active');
            }
        });

        // Live search inside modal
        const modalInput = document.getElementById('modal-search-input');
        const modalResults = document.getElementById('modal-search-results');
        if (modalInput && modalResults) {
            modalInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase().trim();
                if (!query) {
                    modalResults.innerHTML = '<p style="color:#5f5e5e;font-size:0.75rem;padding:0.5rem 0;">Type to search all KABARIN dispatches, archives, and authors...</p>';
                    return;
                }

                const matches = Object.values(ARTICLES).filter(art => {
                    return art.title.toLowerCase().includes(query) ||
                        art.deck.toLowerCase().includes(query) ||
                        art.category.toLowerCase().includes(query) ||
                        art.author.name.toLowerCase().includes(query);
                });

                if (matches.length === 0) {
                    modalResults.innerHTML = '<p style="color:#5f5e5e;font-size:0.75rem;padding:0.5rem 0;">No matching dispatches found.</p>';
                    return;
                }

                let resHtml = '';
                matches.slice(0, 5).forEach(m => {
                    resHtml += `
            <div data-article-id="${m.id}" style="cursor:pointer;padding:0.625rem;border-radius:0.5rem;background:#fbf9f6;border:1px solid #e4e2df;margin-top:0.5rem;">
              <span style="font-size:10px;font-weight:700;color:#b81500;text-transform:uppercase;">${m.category}</span>
              <h4 class="serif-font" style="font-size:0.875rem;font-weight:700;margin:0.25rem 0;">${m.title}</h4>
              <span style="font-size:11px;color:#5f5e5e;">${m.author.name} • ${m.readTime}</span>
            </div>
          `;
                });
                modalResults.innerHTML = resHtml;
            });
        }

        // Modal subscribe form
        const modalSubForm = document.getElementById('modal-subscribe-form');
        if (modalSubForm) {
            modalSubForm.addEventListener('submit', (e) => {
                e.preventDefault();
                showToast('Subscribed to Dawn Dispatch at 07:00 AM!', 'mark_email_read');
                subModal?.classList.remove('active');
            });
        }
    }

    // Delegated Click Handlers
    function initGlobalClicks() {
        document.addEventListener('click', (e) => {
            // 1. Bookmark button (must precede article navigation)
            const bookmarkBtn = e.target.closest('[data-bookmark-id]');
            if (bookmarkBtn) {
                e.preventDefault();
                e.stopPropagation();
                const id = bookmarkBtn.dataset.bookmarkId;
                const title = bookmarkBtn.dataset.title || 'Dispatch';
                toggleBookmark(id, title);
                return;
            }

            // 2. Direct Article Trigger: any element with data-article-id
            const articleTarget = e.target.closest('[data-article-id]');
            if (articleTarget) {
                e.preventDefault();
                const articleId = articleTarget.dataset.articleId;
                openArticle(articleId);
                return;
            }

            // 3. Viewport mode switch
            const vpBtn = e.target.closest('[data-mode]');
            if (vpBtn) {
                e.preventDefault();
                setViewport(vpBtn.dataset.mode);
                return;
            }

            // 4. Data-view navigation
            const navTarget = e.target.closest('[data-view]');
            if (navTarget) {
                const view = navTarget.dataset.view;
                const filterCat = navTarget.dataset.filterCat;
                if (view === 'article') {
                    // If a specific article is attached
                    const specificId = navTarget.dataset.articleId || 'urban-gen-z';
                    openArticle(specificId);
                } else if (view === 'explore' && filterCat) {
                    setView('explore');
                    setExploreCategory(filterCat);
                } else {
                    setView(view);
                }
                e.preventDefault();
                return;
            }

            // 5. Copy link
            const copyBtn = e.target.closest('.copy-link-action');
            if (copyBtn) {
                e.preventDefault();
                navigator.clipboard?.writeText(window.location.href);
                showToast('Permalink copied to clipboard', 'link');
                return;
            }
        });
    }

    // Expose global methods
    window.KABARIN = {
        setView,
        setViewport,
        openArticle,
        setExploreCategory,
        showToast,
        toggleBookmark,
        articles: ARTICLES
    };

    // On DOM Ready
    document.addEventListener('DOMContentLoaded', () => {
        // Initial article load
        renderArticle(state.currentArticleId);
        initTicker();
        initAudioPlayer();
        initFontResizer();
        initReadingProgress();
        initApplause();
        initFollowAuthor();
        initComments();
        initExploreFilters();
        initHomeTopicPills();
        initAccordions();
        initWhistleblowerForm();
        initModals();
        initGlobalClicks();
        updateBookmarkBadges();
        renderSavedList();
    });
})();
