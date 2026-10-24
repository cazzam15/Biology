// Nat 5 Biology — question bank, worksheets, key facts, mock papers and links.
// Ported from the previous single-page version of this site (kept in the repo as legacy.html).
// Question format: {topic, type:'mcq'|'fillin', q, opts (mcq), ans (index for mcq, text for fillin), explain}
const META={"subject": "Biology", "title": "Free Nat 5 Biology Revision — Scotland", "slug": "nat5-biology", "store": "n5bio_v3", "legacyStore": null};
const TOPICS=[{"id": "cell_bio", "name": "Cell Biology", "icon": "🔬", "sub": "Cell structure · Transport · DNA & proteins · Enzymes · Genetic engineering · Respiration"}, {"id": "multicell", "name": "Multicellular Organisms", "icon": "🦠", "sub": "Mitosis · Nervous & hormonal · Reproduction · Variation & Inheritance · Transport systems · Absorption"}, {"id": "life_earth", "name": "Life on Earth", "icon": "🌍", "sub": "Ecosystems · Distribution · Photosynthesis · Energy · Food production · Evolution"}, {"id": "problem", "name": "Problem Solving", "icon": "🧪", "sub": "Data interpretation · Experimental design · Graphs · Calculations · Scientific reasoning"}];
const QUESTIONS=[
{"topic": "cell_bio", "type": "mcq", "q": "What is the function of the mitochondria?", "opts": ["Protein synthesis", "Energy production (ATP)", "Cell division", "Photosynthesis"], "ans": 1, "explain": "Mitochondria carry out aerobic respiration to produce ATP. Aerobic respiration is completed in the mitochondria (glycolysis begins in the cytoplasm)."},
{"topic": "cell_bio", "type": "mcq", "q": "Which organelle is responsible for protein synthesis?", "opts": ["Mitochondria", "Nucleus", "Ribosome", "Vacuole"], "ans": 2, "explain": "Ribosomes are the sites of protein synthesis. They read mRNA and assemble amino acids into polypeptide chains. Found in cytoplasm and on rough ER."},
{"topic": "cell_bio", "type": "mcq", "q": "What is the role of the cell membrane?", "opts": ["Provide rigid support", "Control what enters and leaves the cell", "Store genetic information", "Produce energy"], "ans": 1, "explain": "The cell membrane consists of phospholipids and proteins and is selectively permeable — it controls what enters and leaves the cell."},
{"topic": "cell_bio", "type": "mcq", "q": "What is the cell membrane made of?", "opts": ["Cellulose and starch", "Phospholipids and proteins", "DNA and glucose", "Chitin and lipids"], "ans": 1, "explain": "The cell membrane is a phospholipid bilayer with embedded proteins. The phospholipid heads are hydrophilic (face outwards) and tails are hydrophobic (face inwards)."},
{"topic": "cell_bio", "type": "mcq", "q": "Osmosis is the movement of water molecules from a region of…", "opts": ["Low water concentration to high", "High to low solute concentration", "High water concentration to low through a selectively permeable membrane", "Low solute to high solute"], "ans": 2, "explain": "Osmosis is the movement of water from HIGH water concentration to LOW water concentration through a selectively permeable membrane. No energy is required (passive)."},
{"topic": "cell_bio", "type": "mcq", "q": "A plant cell placed in a very concentrated salt solution will become…", "opts": ["Turgid — swells up", "Plasmolysed — membrane pulls away from cell wall", "It bursts (lysis)", "Unchanged"], "ans": 1, "explain": "In a hypertonic (concentrated) solution, water leaves the plant cell by osmosis. The vacuole shrinks and the membrane pulls away from the cell wall — this is plasmolysis."},
{"topic": "cell_bio", "type": "mcq", "q": "An animal cell placed in pure water will…", "opts": ["Become plasmolysed", "Shrink", "Burst (lyse) due to water entering by osmosis", "Stay the same"], "ans": 2, "explain": "In a hypotonic solution, water enters the cell by osmosis. Animal cells have no cell wall to resist this, so they swell and burst (lysis). This is why human blood cells must be kept in isotonic saline."},
{"topic": "cell_bio", "type": "mcq", "q": "Active transport moves molecules…", "opts": ["Down a concentration gradient, requiring no energy", "Against a concentration gradient, requiring ATP", "Only through protein channels, using no energy", "By osmosis through the membrane"], "ans": 1, "explain": "Active transport moves molecules AGAINST the concentration gradient (from low to high concentration). This requires energy in the form of ATP and uses carrier proteins in the membrane."},
{"topic": "cell_bio", "type": "mcq", "q": "DNA is found in the _____ of a eukaryotic cell.", "opts": ["Cytoplasm", "Ribosome", "Nucleus", "Cell wall"], "ans": 2, "explain": "In eukaryotic cells, DNA is stored in the nucleus within chromosomes. Bacterial cells (prokaryotes) have no nucleus — DNA floats freely in the cytoplasm and also exists as small circular plasmids."},
{"topic": "cell_bio", "type": "mcq", "q": "In DNA, which bases pair with each other?", "opts": ["Adenine with Guanine; Thymine with Cytosine", "Adenine with Thymine; Guanine with Cytosine", "Adenine with Cytosine; Guanine with Thymine", "All four bases pair randomly"], "ans": 1, "explain": "Complementary base pairing in DNA: Adenine (A) always pairs with Thymine (T); Guanine (G) always pairs with Cytosine (C). This A-T, G-C rule holds the double helix together."},
{"topic": "cell_bio", "type": "mcq", "q": "A gene is best defined as…", "opts": ["An entire chromosome", "A section of DNA that codes for a specific protein", "The complete set of all chromosomes in a cell", "A type of RNA molecule"], "ans": 1, "explain": "A gene is a specific sequence of DNA bases on a chromosome that codes for one particular protein. The base sequence determines the amino acid sequence of the protein."},
{"topic": "cell_bio", "type": "mcq", "q": "What is the role of mRNA in protein synthesis?", "opts": ["It replicates DNA in the nucleus", "It carries a complementary copy of the genetic code from DNA to the ribosome", "It directly builds the cell wall", "It transports amino acids to the ribosome"], "ans": 1, "explain": "mRNA (messenger RNA) is made in the nucleus by transcription — it carries a complementary copy of the DNA code to the ribosome in the cytoplasm, where the protein is assembled (translation)."},
{"topic": "cell_bio", "type": "mcq", "q": "Enzymes are biological catalysts. What does this mean?", "opts": ["They provide the energy for reactions", "They speed up chemical reactions without being used up in the process", "They slow down reactions", "They change the products of a reaction"], "ans": 1, "explain": "Enzymes speed up cellular reactions without being used up (unchanged in the process). They are made of protein. The active site has a complementary shape to a specific substrate (lock and key model)."},
{"topic": "cell_bio", "type": "mcq", "q": "What happens to an enzyme when its temperature rises above the optimum?", "opts": ["It works faster and faster", "It is denatured — the active site changes shape permanently", "It simply slows down but recovers when cooled", "It becomes a better catalyst"], "ans": 1, "explain": "Above the optimum temperature, the enzyme denatures: the active site changes shape irreversibly so the substrate can no longer fit. The enzyme cannot catalyse the reaction."},
{"topic": "cell_bio", "type": "mcq", "q": "Which process uses light energy to produce glucose?", "opts": ["Aerobic respiration", "Photosynthesis", "Osmosis", "Fermentation"], "ans": 1, "explain": "Photosynthesis: CO₂ + H₂O → glucose + O₂ (using light energy, in chloroplasts containing chlorophyll). Photosynthesis is a key area in Life on Earth as well as related to chloroplasts in Cell Biology."},
{"topic": "cell_bio", "type": "mcq", "q": "The overall equation for AEROBIC respiration is:", "opts": ["Glucose + Oxygen → Carbon dioxide + Water + ATP", "Carbon dioxide + Water → Glucose + Oxygen", "Glucose → Ethanol + Carbon dioxide", "Glucose → Lactic acid"], "ans": 0, "explain": "Aerobic respiration: Glucose + Oxygen → Carbon dioxide + Water + ATP. It occurs in two stages: glycolysis in the cytoplasm (2 ATP), then aerobic stage in the mitochondria (many more ATP)."},
{"topic": "cell_bio", "type": "mcq", "q": "In anaerobic respiration in YEAST, what are the products?", "opts": ["Lactic acid and CO₂", "Ethanol (alcohol) and CO₂", "Only lactic acid", "Only ATP"], "ans": 1, "explain": "Yeast fermentation (anaerobic): Glucose → Ethanol + Carbon dioxide + 2 ATP. This is the basis of brewing and bread-making. Only 2 ATP are produced (compared to many in aerobic respiration)."},
{"topic": "cell_bio", "type": "mcq", "q": "In anaerobic respiration in ANIMAL MUSCLE CELLS, what is produced?", "opts": ["Ethanol and CO₂", "Only CO₂", "Lactic acid", "Glycogen"], "ans": 2, "explain": "Animal muscle cells anaerobically convert pyruvate to lactic acid when oxygen is scarce (e.g. during intense exercise). Lactic acid build-up causes fatigue. It must be broken down during recovery (the oxygen debt)."},
{"topic": "cell_bio", "type": "mcq", "q": "Where in the cell does glycolysis (the first stage of respiration) take place?", "opts": ["Mitochondria", "Nucleus", "Cytoplasm", "Ribosome"], "ans": 2, "explain": "Glycolysis takes place in the cytoplasm. Glucose is broken down into two pyruvate molecules, releasing 2 ATP. If oxygen is present, pyruvate enters the mitochondria for aerobic respiration."},
{"topic": "cell_bio", "type": "mcq", "q": "What is the correct ORDER of stages in genetic engineering to produce insulin?", "opts": ["Insert gene into plasmid → Extract gene → Identify gene → Insert plasmid into bacteria", "Identify insulin gene → Extract gene using enzymes → Extract plasmid from bacteria → Insert gene into plasmid → Insert plasmid into host bacteria", "Extract plasmid → Copy DNA → Identify gene → Insert into animal cell", "Insert insulin gene into human chromosome only"], "ans": 1, "explain": "Genetic engineering stages (SQA): (1) Identify section of DNA containing the required gene. (2) Extract the gene (using restriction enzymes). (3) Extract plasmid from bacterial cell. (4) Insert gene into plasmid (using ligase enzymes). (5) Insert plasmid into host bacterial cell → GMO produces the protein."},
{"topic": "cell_bio", "type": "mcq", "q": "Which organelle is found in plant cells and carries out photosynthesis?", "opts": ["Mitochondria", "Ribosome", "Chloroplast", "Vacuole"], "ans": 2, "explain": "Chloroplasts contain the green pigment chlorophyll and are the sites of photosynthesis. They are found in plant cells (and some algae) but NOT in animal or fungal cells."},
{"topic": "cell_bio", "type": "mcq", "q": "The cell wall of a PLANT cell is made of:", "opts": ["Chitin", "Protein", "Cellulose", "Starch"], "ans": 2, "explain": "Plant cell walls are made of cellulose fibres. Fungal cell walls are made of chitin. Bacterial cell walls are made of peptidoglycan (murein). Animal cells have NO cell wall."},
{"topic": "cell_bio", "type": "fillin", "q": "The process by which cells become specialised for a specific function is called _____.", "ans": "differentiation", "explain": "Differentiation is when unspecialised cells develop into specific cell types during growth and development. Stem cells are undifferentiated and have the potential to become any cell type."},
{"topic": "cell_bio", "type": "fillin", "q": "The green pigment in plant chloroplasts that absorbs light for photosynthesis is called _____.", "ans": "chlorophyll", "explain": "Chlorophyll absorbs red and blue light (reflecting green — which is why plants appear green) and uses this energy to drive photosynthesis."},
{"topic": "cell_bio", "type": "fillin", "q": "The molecule that carries genetic instructions from the nucleus to the ribosome is called _____.", "ans": "mRNA", "explain": "Messenger RNA (mRNA) is transcribed from DNA in the nucleus. It carries the genetic code as a sequence of codons (triplets of bases) to the ribosome for translation into protein."},
{"topic": "cell_bio", "type": "fillin", "q": "Respiration begins in the cytoplasm with the breakdown of glucose to pyruvate. This process is called _____.", "ans": "glycolysis", "explain": "Glycolysis splits one glucose molecule into two pyruvate molecules, releasing 2 ATP. It occurs in the cytoplasm of ALL cells and does not require oxygen."},
{"topic": "cell_bio", "type": "fillin", "q": "The small circular DNA molecules found in bacterial cells used in genetic engineering are called _____.", "ans": "plasmids", "explain": "Plasmids are small circular DNA molecules found in bacteria (separate from the main chromosome). They are used as vectors in genetic engineering to carry foreign genes into host bacteria."},
{"topic": "multicell", "type": "mcq", "q": "What is the role of the nervous system?", "opts": ["Transport oxygen around the body", "Coordinate rapid responses to stimuli using electrical impulses", "Produce hormones for long-term regulation", "Digest food in the gut"], "ans": 1, "explain": "The nervous system uses electrical impulses to rapidly detect stimuli and coordinate responses. It consists of the CNS (brain and spinal cord) and peripheral nerves."},
{"topic": "multicell", "type": "mcq", "q": "Which organ produces INSULIN?", "opts": ["Liver", "Kidney", "Pancreas", "Stomach"], "ans": 2, "explain": "The pancreas produces both insulin (lowers blood glucose) and glucagon (raises blood glucose). These hormones regulate blood glucose levels through a negative feedback mechanism."},
{"topic": "multicell", "type": "mcq", "q": "What is the function of red blood cells?", "opts": ["Fight infection by producing antibodies", "Transport oxygen using haemoglobin", "Clot the blood at wounds", "Produce hormones"], "ans": 1, "explain": "Red blood cells (erythrocytes) contain haemoglobin. Haemoglobin binds oxygen in the lungs (forming oxyhaemoglobin) and releases it at body tissues where oxygen concentration is lower."},
{"topic": "multicell", "type": "mcq", "q": "In humans, fertilisation (fusion of sperm and egg) occurs in the…", "opts": ["Uterus", "Ovary", "Oviduct (fallopian tube)", "Cervix"], "ans": 2, "explain": "Fertilisation occurs in the oviduct (fallopian tube). The fertilised egg (zygote) then travels to the uterus and implants in the uterine wall."},
{"topic": "multicell", "type": "mcq", "q": "What type of blood vessel carries blood AWAY from the heart?", "opts": ["Vein", "Capillary", "Artery", "Lymph vessel"], "ans": 2, "explain": "Arteries carry blood AWAY from the heart under high pressure. They have thick muscular walls. Veins carry blood BACK to the heart under low pressure, with valves. Capillaries are the site of gas/nutrient exchange."},
{"topic": "multicell", "type": "mcq", "q": "Which part of the brain controls balance and coordination?", "opts": ["Cerebrum", "Medulla", "Cerebellum", "Hypothalamus"], "ans": 2, "explain": "The cerebellum coordinates movement, balance, posture, and fine motor skills. The cerebrum is responsible for conscious thought. The medulla controls vital unconscious functions like heart rate and breathing."},
{"topic": "multicell", "type": "mcq", "q": "What is the correct sequence of a reflex arc?", "opts": ["Receptor → Motor neuron → Relay neuron → Sensory neuron → Effector", "Receptor → Sensory neuron → Relay neuron → Motor neuron → Effector", "Brain → Sensory neuron → Effector", "Effector → Motor neuron → Brain → Sensory neuron → Receptor"], "ans": 1, "explain": "Reflex arc (SQA): Receptor (detects stimulus) → Sensory neuron → Relay (inter) neuron (in spinal cord) → Motor neuron → Effector (muscle or gland). The response bypasses the brain for speed."},
{"topic": "multicell", "type": "mcq", "q": "Meiosis produces cells with…", "opts": ["The same (diploid) number of chromosomes as the parent cell", "Half (haploid) the number of chromosomes", "Double the number of chromosomes", "No chromosomes"], "ans": 1, "explain": "Meiosis halves the chromosome number to produce haploid gametes (sperm and eggs with 23 chromosomes in humans). When two gametes fuse at fertilisation, the diploid number (46) is restored."},
{"topic": "multicell", "type": "mcq", "q": "What does the hormone ADRENALINE do?", "opts": ["Lowers blood glucose after a meal", "Prepares the body for fight or flight — increases heart rate and diverts blood to muscles", "Promotes growth during childhood", "Regulates water balance in the kidney"], "ans": 1, "explain": "Adrenaline is released by the adrenal glands when stressed or in danger. It increases heart rate, dilates airways, raises blood glucose, and redirects blood to muscles — the fight or flight response."},
{"topic": "multicell", "type": "mcq", "q": "Which type of neuron carries impulses from the CNS to muscles?", "opts": ["Sensory neuron", "Relay (inter) neuron", "Motor neuron", "Receptor cell"], "ans": 2, "explain": "Motor neurons carry impulses FROM the CNS (brain/spinal cord) TO effectors (muscles and glands). Sensory neurons carry impulses FROM receptors TO the CNS."},
{"topic": "multicell", "type": "mcq", "q": "Where does gas exchange (O₂ in, CO₂ out) occur in the lungs?", "opts": ["Trachea", "Bronchi", "Alveoli", "Diaphragm"], "ans": 2, "explain": "Alveoli are tiny air sacs. O₂ diffuses from alveolar air into blood; CO₂ diffuses from blood into alveolar air. Adaptations: enormous total surface area (~70m²); walls one cell thick; rich blood supply."},
{"topic": "multicell", "type": "mcq", "q": "What is TRANSPIRATION in plants?", "opts": ["The transport of sugars from leaves to roots", "The loss of water vapour from leaves, mainly through stomata", "The absorption of water by root hairs", "The production of glucose by photosynthesis"], "ans": 1, "explain": "Transpiration is the evaporation and diffusion of water vapour from plant leaves, mainly through stomata. It drives water movement up the xylem from roots to leaves (the transpiration stream)."},
{"topic": "multicell", "type": "mcq", "q": "Which factor would INCREASE the rate of transpiration?", "opts": ["High humidity", "Still/no wind", "Low temperature", "High wind speed"], "ans": 3, "explain": "High wind speed removes water vapour from around stomata, maintaining the concentration gradient and increasing transpiration. Low humidity, high temperature, and increased light also increase transpiration."},
{"topic": "multicell", "type": "mcq", "q": "What does XYLEM transport in plants and in which direction?", "opts": ["Sugar — upwards and downwards", "Water and minerals — upwards from roots to leaves", "Oxygen — downwards from leaves", "Glucose — upwards from roots"], "ans": 1, "explain": "Xylem vessels transport water and dissolved minerals upwards from roots to leaves. Xylem is made of dead cells with no end walls, forming hollow tubes. Xylem also provides structural support."},
{"topic": "multicell", "type": "mcq", "q": "What does PHLOEM transport in plants?", "opts": ["Water only — upwards", "Dissolved sugars (sucrose) — up and down the plant", "Minerals — downwards only", "Carbon dioxide — outwards"], "ans": 1, "explain": "Phloem transports dissolved sugars (mainly sucrose) produced by photosynthesis from leaves to all other parts of the plant (both up and down). Phloem cells are alive (unlike xylem)."},
{"topic": "multicell", "type": "mcq", "q": "In a monohybrid cross between two heterozygous tall plants (Tt × Tt), what is the expected phenotype ratio?", "opts": ["All tall", "1 tall : 1 dwarf", "3 tall : 1 dwarf", "1 tall : 2 medium : 1 dwarf"], "ans": 2, "explain": "Tt × Tt gives genotypes: TT (tall), Tt (tall), Tt (tall), tt (dwarf) — in a 1:2:1 ratio. Phenotype ratio = 3 tall : 1 dwarf. T is dominant so TT and Tt both appear tall."},
{"topic": "multicell", "type": "mcq", "q": "Which of the following is an example of CONTINUOUS variation?", "opts": ["Blood group (A, B, AB, O)", "Tongue rolling ability (can/cannot)", "Height in humans", "Attached or free earlobes"], "ans": 2, "explain": "Continuous variation shows a range of values with no distinct categories (e.g. height, weight, shoe size). It is polygenic (controlled by many genes) and influenced by the environment. Blood groups and tongue rolling are discrete (discontinuous) variation."},
{"topic": "multicell", "type": "mcq", "q": "The role of GLUCAGON is to…", "opts": ["Lower blood glucose by promoting glycogen synthesis", "Raise blood glucose by stimulating the liver to convert glycogen to glucose", "Stimulate insulin production", "Control water balance in the kidney"], "ans": 1, "explain": "Glucagon is released by the pancreas when blood glucose falls too low. It stimulates the liver to break down glycogen into glucose (glycogenolysis), raising blood glucose back to normal."},
{"topic": "multicell", "type": "mcq", "q": "Where does water enter a plant?", "opts": ["Through stomata in leaves", "Through root hair cells by osmosis", "Through the phloem", "Through the xylem directly"], "ans": 1, "explain": "Root hair cells have a large surface area and absorb water by osmosis (water potential of soil water > water potential inside root hair). Water then moves up through the xylem."},
{"topic": "multicell", "type": "mcq", "q": "What is the purpose of valves in VEINS?", "opts": ["To speed up blood flow", "To prevent backflow of blood, ensuring it flows towards the heart", "To absorb nutrients", "To regulate blood pressure"], "ans": 1, "explain": "Veins carry blood back to the heart under low pressure. Valves prevent blood flowing backwards (away from the heart). Arteries do not need valves as blood flows under high pressure from the heart."},
{"topic": "multicell", "type": "fillin", "q": "The liquid part of blood that carries dissolved substances is called _____.", "ans": "plasma", "explain": "Plasma is the straw-coloured liquid component of blood (~55% of blood volume). It transports dissolved nutrients, hormones, CO₂, urea, antibodies, and heat around the body."},
{"topic": "multicell", "type": "fillin", "q": "The type of reproduction that involves two parents and produces genetic variation is called _____ reproduction.", "ans": "sexual", "explain": "Sexual reproduction involves meiosis to produce haploid gametes and fertilisation (fusion of gametes). The combination of genetic material from two parents produces offspring with variation."},
{"topic": "multicell", "type": "fillin", "q": "The gap between two neurons where a chemical signal is passed is called a _____.", "ans": "synapse", "explain": "At a synapse, neurotransmitters are released from vesicles in the presynaptic neuron, diffuse across the synaptic cleft, and bind to receptors on the postsynaptic neuron, triggering a new electrical impulse."},
{"topic": "multicell", "type": "fillin", "q": "The protein in red blood cells that carries oxygen is called _____.", "ans": "haemoglobin", "explain": "Haemoglobin binds to oxygen in the lungs (forming oxyhaemoglobin) and releases it in body tissues. Each haemoglobin molecule can carry 4 oxygen molecules."},
{"topic": "multicell", "type": "fillin", "q": "An organism with two identical alleles for a gene (e.g. TT or tt) is described as _____.", "ans": "homozygous", "explain": "Homozygous = two identical alleles (TT = homozygous dominant; tt = homozygous recessive). Heterozygous = two different alleles (Tt). A heterozygous individual is called a carrier for recessive conditions."},
{"topic": "multicell", "type": "fillin", "q": "The type of variation controlled by a single gene with distinct categories (e.g. blood groups) is called _____ variation.", "ans": "discrete", "explain": "Discrete (discontinuous) variation has distinct categories with no intermediates — e.g. blood type, tongue rolling, earlobe type. It is controlled by one or a small number of genes with no environmental influence."},
{"topic": "life_earth", "type": "mcq", "q": "What is a food chain?", "opts": ["A diagram showing all feeding relationships in an ecosystem", "A sequence showing the transfer of energy from producers to consumers", "A list of all decomposers in a habitat", "A cycle of nutrients through an ecosystem"], "ans": 1, "explain": "A food chain shows the transfer of energy from one organism to the next, starting with a producer (green plant). Arrows show the direction of energy flow (→ means \"is eaten by\")."},
{"topic": "life_earth", "type": "mcq", "q": "What is the role of DECOMPOSERS in an ecosystem?", "opts": ["Produce energy from sunlight", "Break down dead organic matter and recycle nutrients back into the soil", "Eat primary consumers", "Fix nitrogen from the atmosphere"], "ans": 1, "explain": "Decomposers (mainly bacteria and fungi) break down dead organisms and waste, releasing inorganic minerals (e.g. nitrates, phosphates) back into the soil for plants to absorb. They are essential nutrient recyclers."},
{"topic": "life_earth", "type": "mcq", "q": "Which level of a food chain contains the MOST energy?", "opts": ["Top predator", "Secondary consumer", "Primary consumer", "Producer (green plants)"], "ans": 3, "explain": "Producers contain the most energy. Only about 10% of energy is transferred to the next trophic level — approximately 90% is lost as heat through respiration, movement, and waste at each level."},
{"topic": "life_earth", "type": "mcq", "q": "Natural selection is BEST described as:", "opts": ["All organisms in a population survive equally", "Individuals with favourable variations survive and reproduce more, passing on their traits", "Organisms deliberately change their features to suit the environment", "Random mutations always improve survival chances"], "ans": 1, "explain": "Natural selection (Darwin): individuals with advantageous variations are more likely to survive and reproduce → pass on beneficial alleles to offspring → allele becomes more common in population over generations."},
{"topic": "life_earth", "type": "mcq", "q": "Which gas is fixed (converted to usable form) by nitrogen-fixing bacteria?", "opts": ["Oxygen", "Carbon dioxide", "Nitrogen (N₂)", "Methane"], "ans": 2, "explain": "Nitrogen-fixing bacteria (e.g. Rhizobium in root nodules) convert atmospheric N₂ into ammonia/ammonium ions that plants can absorb and use to make proteins and DNA."},
{"topic": "life_earth", "type": "mcq", "q": "What is BIODIVERSITY?", "opts": ["The number of individuals in a population", "The variety of different species in an ecosystem", "The rate at which species evolve", "The total biomass in an area"], "ans": 1, "explain": "Biodiversity is the variety of species in an ecosystem (species richness). High biodiversity makes ecosystems more stable and resilient. Human activities such as deforestation, pollution, and intensive farming reduce biodiversity."},
{"topic": "life_earth", "type": "mcq", "q": "Competition between individuals of the SAME species is called…", "opts": ["Interspecific competition", "Predation", "Intraspecific competition", "Mutualism"], "ans": 2, "explain": "Intraspecific = same species (compete for identical resources — most intense). Interspecific = different species (compete for some shared resources — less intense as niches differ slightly)."},
{"topic": "life_earth", "type": "mcq", "q": "Which of the following is an example of a MUTUALISTIC relationship?", "opts": ["A lion eating a zebra (predation)", "Fleas on a dog (parasitism)", "Nitrogen-fixing bacteria in plant root nodules", "A tapeworm in a human gut (parasitism)"], "ans": 2, "explain": "Mutualism: both species benefit. Rhizobium bacteria in legume root nodules fix nitrogen for the plant; the plant provides the bacteria with sugars. Bees and flowers is another mutualistic example."},
{"topic": "life_earth", "type": "mcq", "q": "The word equation for PHOTOSYNTHESIS is:", "opts": ["Glucose + Oxygen → Carbon dioxide + Water + energy", "Carbon dioxide + Water → Glucose + Oxygen (using light energy)", "Glucose → Lactic acid + CO₂", "Glucose + CO₂ → Starch + O₂"], "ans": 1, "explain": "Photosynthesis: Carbon dioxide + Water → Glucose + Oxygen (using light energy and chlorophyll). It occurs in chloroplasts. This is the foundation of almost all food chains on Earth."},
{"topic": "life_earth", "type": "mcq", "q": "Which factor would LIMIT the rate of photosynthesis on a dull (cloudy) day?", "opts": ["Too much CO₂", "Excess water", "Low light intensity", "High temperature"], "ans": 2, "explain": "On a dull day, low light intensity is the limiting factor — there is not enough light energy to drive the light-dependent reactions. Limiting factors: light intensity, CO₂ concentration, temperature."},
{"topic": "life_earth", "type": "mcq", "q": "An indicator species is…", "opts": ["The top predator in an ecosystem", "A species whose presence or absence indicates the environmental quality or level of pollution", "The most numerous species in a habitat", "A species introduced from another country"], "ans": 1, "explain": "Indicator species signal ecosystem health. Examples: freshwater shrimps (Gammarus) = clean unpolluted water; rat-tailed maggots = heavily polluted water; lichens = clean air (absent in polluted areas)."},
{"topic": "life_earth", "type": "mcq", "q": "What is the CARBON CYCLE?", "opts": ["The flow of energy through a food chain", "The movement of carbon through living organisms and the environment via photosynthesis, respiration, combustion, and decomposition", "The rate at which plants photosynthesise carbon dioxide", "A type of ecological succession"], "ans": 1, "explain": "The carbon cycle: Plants remove CO₂ from the atmosphere by photosynthesis. CO₂ is returned by respiration (all organisms), combustion of fossil fuels, decomposition, and volcanic activity."},
{"topic": "life_earth", "type": "mcq", "q": "Which of the following is an example of a PARASITIC relationship?", "opts": ["Bees and flowers", "Clownfish and sea anemone", "Tapeworm in a human intestine", "Lichen (algae and fungi living together)"], "ans": 2, "explain": "Parasitism: parasite benefits at the host's expense. A tapeworm lives in the human gut, absorbing digested nutrients while the host loses nutrition and may become ill. Fleas, ticks, and mistletoe are other parasites."},
{"topic": "life_earth", "type": "mcq", "q": "Which process returns nitrogen gas (N₂) back to the atmosphere from the soil?", "opts": ["Nitrification", "Nitrogen fixation", "Denitrification", "Decomposition"], "ans": 2, "explain": "Denitrifying bacteria convert nitrates in the soil back into nitrogen gas (N₂) which returns to the atmosphere, completing the nitrogen cycle. This reduces soil fertility."},
{"topic": "life_earth", "type": "mcq", "q": "Why is eating food lower in the food chain (e.g. eating wheat rather than beef) more energy-efficient?", "opts": ["Plants contain more protein than animals", "Less energy is lost because fewer trophic level transfers occur", "Animals taste better", "Plants reproduce faster"], "ans": 1, "explain": "Only ~10% of energy transfers between trophic levels. Eating animals means you receive only ~10% of the energy the animal got from plants. Eating plants directly gives ~10× more energy per unit of land."},
{"topic": "life_earth", "type": "mcq", "q": "What is BIOLOGICAL CONTROL?", "opts": ["Using chemical pesticides to kill pests", "Using a natural predator or parasite to reduce pest numbers", "Genetically modifying crops to resist pests", "Using antibiotics to control bacterial infection in crops"], "ans": 1, "explain": "Biological control uses a natural enemy of the pest (predator, parasite, or pathogen) to reduce pest populations. Example: releasing ladybirds to control aphids. No chemical residues; pest cannot evolve resistance to another organism."},
{"topic": "life_earth", "type": "mcq", "q": "In a pyramid of biomass, what does the BASE represent?", "opts": ["Top predators", "Decomposers", "Producers (plants)", "Secondary consumers"], "ans": 2, "explain": "The base of a pyramid of biomass represents producers — they have the most biomass (total mass of living material). Each level above has less biomass because energy is lost at each trophic level."},
{"topic": "life_earth", "type": "mcq", "q": "What is ECOLOGICAL SUCCESSION?", "opts": ["The extinction of species over time", "The gradual change from one community of organisms to another, ending in a stable climax community", "A type of predator-prey relationship", "The colonisation of new habitats only by animals"], "ans": 1, "explain": "Ecological succession: bare rock/ground is colonised by pioneer species (e.g. mosses/lichens) → soil forms → more complex plants establish → eventually a stable climax community (e.g. oak woodland in Scotland)."},
{"topic": "life_earth", "type": "mcq", "q": "A mutation is…", "opts": ["A normal change that all cells undergo at puberty", "A change in the sequence of bases in DNA", "The process of meiosis", "The fusion of two gametes"], "ans": 1, "explain": "A mutation is a change in the DNA base sequence. Mutations can be neutral, harmful, or (rarely) beneficial. They are the source of new alleles and therefore the raw material for natural selection and evolution."},
{"topic": "life_earth", "type": "mcq", "q": "Which of the following would DECREASE biodiversity in an ecosystem?", "opts": ["Creating wildlife corridors between habitats", "Reducing the use of pesticides", "Intensive monoculture farming (growing a single crop over large areas)", "Establishing nature reserves and protected areas"], "ans": 2, "explain": "Intensive monoculture reduces habitat complexity and food sources for wildlife, leading to fewer species. Pesticides kill non-target organisms. Both significantly reduce biodiversity compared to mixed farming or natural habitats."},
{"topic": "life_earth", "type": "fillin", "q": "The process by which new species arise over time through natural selection is called _____.", "ans": "evolution", "explain": "Evolution is the gradual change in the heritable characteristics of populations over many generations, driven primarily by natural selection acting on random mutations. It leads to adaptation and eventually new species (speciation)."},
{"topic": "life_earth", "type": "fillin", "q": "A _____ is a group of organisms of the same species living in the same area at the same time.", "ans": "population", "explain": "A population is a group of individuals of the same species in a defined area. Population size is affected by birth rate, death rate, immigration, and emigration. It fluctuates around the carrying capacity."},
{"topic": "life_earth", "type": "fillin", "q": "Organisms that make their own food using light energy are called _____.", "ans": "producers", "explain": "Producers (autotrophs) — mainly green plants and algae — use photosynthesis to convert light energy, CO₂, and water into glucose. They form the base of every food chain and food web."},
{"topic": "life_earth", "type": "fillin", "q": "The role an organism plays in its ecosystem, including what it eats and where it lives, is called its _____.", "ans": "niche", "explain": "A niche describes everything about how a species lives in its ecosystem. No two species can occupy exactly the same niche indefinitely — one will outcompete the other (competitive exclusion principle)."},
{"topic": "life_earth", "type": "fillin", "q": "The maximum population size that an environment can sustainably support is called the _____.", "ans": "carrying capacity", "explain": "Carrying capacity is determined by available resources (food, water, space, light). When a population exceeds its carrying capacity, resources become limiting, increasing competition, predation, and disease — reducing the population."},
{"topic": "problem", "type": "mcq", "q": "A student measures the height of 30 pea plants, recording values from 12 cm to 48 cm. What type of variation does this show?", "opts": ["Discrete variation — only distinct categories", "Continuous variation — a range of values with no distinct categories", "Genetic variation only, not affected by environment", "Discontinuous — only two possible phenotypes"], "ans": 1, "explain": "Continuous variation shows a range of values with no clear categories (e.g. height, mass). It is influenced by both genes AND environment. Discontinuous variation has distinct categories (e.g. blood group, tongue rolling)."},
{"topic": "problem", "type": "mcq", "q": "A student tests the effect of light intensity on photosynthesis in pondweed, counting oxygen bubbles per minute at different distances from a lamp. Which variable is the DEPENDENT variable?", "opts": ["The distance of the lamp from the pondweed", "The temperature of the water", "The number of oxygen bubbles produced per minute", "The type of pondweed used"], "ans": 2, "explain": "The dependent variable is what you MEASURE. Independent variable = what you CHANGE (lamp distance). Control variables = what you KEEP THE SAME (temperature, pondweed type, water volume)."},
{"topic": "problem", "type": "mcq", "q": "An enzyme experiment tests amylase at pH 3, 5, 7, 9 and 11. At pH 7 starch breaks down in 2 minutes; at pH 9 it takes 8 minutes. What can be concluded?", "opts": ["pH has no effect on enzyme activity", "The enzyme works faster at pH 9 than pH 7", "The enzyme works faster at pH 7 — it is closer to the optimum pH", "The enzyme is denatured at pH 7"], "ans": 2, "explain": "Faster breakdown = shorter time. 2 min at pH 7 vs 8 min at pH 9 means pH 7 is closer to the optimum for this enzyme. Above the optimum pH, the active site shape changes, slowing the reaction."},
{"topic": "problem", "type": "mcq", "q": "A student counts daisies in 10 quadrats (1m² each): 3, 5, 2, 4, 6, 3, 5, 4, 3, 5. What is the mean number of daisies per m²?", "opts": ["3.5", "4.0", "4.5", "5.0"], "ans": 1, "explain": "Mean = total ÷ number of samples. Total = 3+5+2+4+6+3+5+4+3+5 = 40. Mean = 40 ÷ 10 = 4.0 daisies per m². Quadrat sampling estimates population density across a larger area."},
{"topic": "problem", "type": "mcq", "q": "Potato cylinders are placed in sucrose solutions. A cylinder in 0.2M sucrose GAINS mass. What does this tell you about the potato cells?", "opts": ["Potato cells have higher water concentration than 0.2M sucrose", "Potato cells have lower water concentration than 0.2M sucrose", "Potato cells are denatured in sucrose", "Osmosis does not occur in potato cells"], "ans": 0, "explain": "If the potato gains mass, water moves INTO the cells by osmosis. Water moves from HIGH water concentration to LOW. So potato cells have HIGHER water concentration than 0.2M sucrose solution."},
{"topic": "problem", "type": "mcq", "q": "Germinating seeds are sealed in a flask with limewater, which turns milky in CO₂. After 30 minutes limewater turns milky. A control with boiled seeds stays clear. What conclusion can be drawn?", "opts": ["Only boiled seeds respire", "Living seeds produce CO₂ during respiration; dead seeds do not", "Limewater only reacts with living organisms", "Boiled seeds produce more oxygen"], "ans": 1, "explain": "Living seeds turn limewater milky (CO₂ produced by respiration). Dead boiled seeds show no change. The control confirms it is LIVING cells that carry out respiration and produce CO₂."},
{"topic": "problem", "type": "mcq", "q": "A graph shows hare and lynx populations over 20 years. Hare numbers peak, then lynx numbers peak shortly after. What relationship does this show?", "opts": ["The two species compete for the same food", "A predator-prey cycle — lynx numbers follow hare numbers with a time lag", "Mutualism between hares and lynx", "Lynx population is unaffected by hare numbers"], "ans": 1, "explain": "Classic predator-prey cycle: more hares = more food for lynx → lynx rise. More lynx = more hares eaten → hares fall. Fewer hares = less food → lynx fall. The predator peak always lags behind the prey peak."},
{"topic": "problem", "type": "mcq", "q": "A potometer measures 2 cm³ water absorbed per hour in still air. With a fan, it records 7 cm³ per hour. What explains this increase?", "opts": ["The fan increases water temperature", "Moving air removes water vapour from stomata, increasing the diffusion gradient and transpiration rate", "The fan increases light intensity on leaves", "Moving air increases photosynthesis rate"], "ans": 1, "explain": "Wind removes water vapour from around stomata, steepening the diffusion gradient between humid leaf interior and drier outside air. Steeper gradient = faster transpiration rate."},
{"topic": "problem", "type": "mcq", "q": "CO₂ production in yeast increases from 10°C to 40°C, then drops sharply at 50°C. Why does it drop at 50°C?", "opts": ["Yeast runs out of glucose at 50°C", "Yeast enzymes are denatured at 50°C — active site changes shape and no longer functions", "CO₂ dissolves in water at 50°C", "The reaction becomes anaerobic at 50°C"], "ans": 1, "explain": "At 50°C, yeast respiratory enzymes are denatured — the active site changes shape irreversibly. Substrates can no longer bind, so respiration stops and CO₂ production drops sharply above the optimum temperature."},
{"topic": "problem", "type": "mcq", "q": "A tall pea plant (TT) is crossed with a dwarf plant (tt). What proportion of offspring will be tall?", "opts": ["0% — all will be dwarf", "25% tall", "50% tall", "100% — all will be tall"], "ans": 3, "explain": "TT × tt: all offspring are Tt. Since T (tall) is DOMINANT over t (dwarf), ALL Tt offspring are tall. Ratio = 4 tall : 0 dwarf = 100% tall. This is a monohybrid cross with complete dominance."},
{"topic": "problem", "type": "mcq", "q": "A scientist studies moths in polluted (dark bark) areas vs rural (light bark) areas. Dark moths are much more common in polluted areas. What explains this?", "opts": ["Dark moths chose to move to polluted areas", "Dark moths are better camouflaged on dark bark — survive predation more and reproduce more, increasing dark allele frequency", "Pollution causes moths to turn dark within their lifetime", "Light moths are killed directly by pollution chemicals"], "ans": 1, "explain": "This is natural selection (the peppered moth). On dark bark, dark moths are better camouflaged → fewer eaten by predators → more survive and reproduce → dark allele becomes more common. Moths do NOT change colour during their lifetime — selection acts on existing variation."},
{"topic": "problem", "type": "mcq", "q": "At high light intensity, increasing light further has NO further effect on photosynthesis rate. What is the most likely reason?", "opts": ["The plant has run out of water", "Another factor such as CO₂ concentration or temperature has become the limiting factor", "Light intensity has no effect on photosynthesis", "The plant has produced too much oxygen"], "ans": 1, "explain": "When increasing one factor stops increasing the rate, another factor is now LIMITING. At high light intensity, CO₂ concentration or temperature becomes the limiting factor — these must be increased to further boost the rate."},
{"topic": "problem", "type": "mcq", "q": "In a food chain: Grass (10,000 kJ) → Rabbits → Foxes. Approximately how much energy is available to foxes?", "opts": ["10,000 kJ", "1,000 kJ", "100 kJ", "5,000 kJ"], "ans": 2, "explain": "Only ~10% transfers between trophic levels. Grass→Rabbits: 10,000 × 10% = 1,000 kJ. Rabbits→Foxes: 1,000 × 10% = 100 kJ. ~90% is lost as heat at each level through respiration, movement, and waste."},
{"topic": "problem", "type": "mcq", "q": "A mark-release-recapture study catches 40 beetles (marked and released), then catches 50 beetles of which 8 are marked. What is the estimated population?", "opts": ["200", "250", "400", "100"], "ans": 1, "explain": "Population = (First catch × Second catch) ÷ Recaptured marked = (40 × 50) ÷ 8 = 2000 ÷ 8 = 250 beetles. Assumes: marked animals mix randomly, no births/deaths/immigration between catches."},
{"topic": "problem", "type": "mcq", "q": "A student adds iodine solution to a slice of potato. The iodine turns blue-black. What does this indicate?", "opts": ["The potato contains glucose", "The potato contains starch", "The potato contains protein", "The potato contains lipids"], "ans": 1, "explain": "Iodine solution (brown) turns BLUE-BLACK in the presence of STARCH. Potatoes store glucose as starch. Other food tests: Benedict's solution = reducing sugars (glucose); Biuret reagent = protein; ethanol emulsion test = lipids."},
{"topic": "problem", "type": "mcq", "q": "A student notices plants grow towards light. What is the BEST control for an experiment to test if light causes this?", "opts": ["Use a different species of plant", "Grow a plant in complete darkness with all other conditions identical", "Water one plant more than the other", "Use different sized pots"], "ans": 1, "explain": "A control group is identical to the experimental group EXCEPT for the one variable being tested. A plant in complete darkness (no light stimulus) controls for light. If the experimental plant bends towards light but the control grows straight, light is confirmed as the cause."},
{"topic": "problem", "type": "mcq", "q": "A student tests amylase from mouth saliva (optimum pH ~7) and amylase from a fungus (optimum pH ~4). At pH 4, which will work faster?", "opts": ["Mouth amylase — it is always faster", "Fungal amylase — it is at its optimum pH of 4", "Both will work equally well at pH 4", "Neither enzyme works at pH 4"], "ans": 1, "explain": "Each enzyme has its own optimum pH at which its active site shape is most complementary to the substrate. At pH 4, fungal amylase is at its optimum and works fastest. Mouth amylase is far from its optimum (pH 7) and will be much slower or inactive."},
{"topic": "problem", "type": "mcq", "q": "A scientist measures oxygen consumption of a mouse at 5°C (2.4 ml/min), 10°C (1.6 ml/min), and 20°C (0.8 ml/min). What trend does this show and why?", "opts": ["Oxygen consumption decreases as temperature increases because metabolism slows", "Oxygen consumption increases as temperature decreases because the mouse must generate more heat to maintain body temperature", "Temperature has no effect on oxygen consumption in mammals", "Oxygen consumption increases as temperature increases because enzymes work faster"], "ans": 1, "explain": "Mammals are warm-blooded (endothermic) — they maintain a constant body temperature. In colder environments they must increase metabolic rate to generate more heat, which requires MORE oxygen. This is the opposite of cold-blooded organisms."},
{"topic": "problem", "type": "mcq", "q": "A half-life of a radioactive isotope is 5,000 years. A sample now contains 12.5% of the original amount. How old is the sample?", "opts": ["5,000 years", "10,000 years", "15,000 years", "20,000 years"], "ans": 2, "explain": "Each half-life halves the amount: 100%→50% (5,000 yrs)→25% (10,000 yrs)→12.5% (15,000 yrs). Three half-lives = 3 × 5,000 = 15,000 years. Radiometric dating uses this principle to estimate ages of fossils."},
{"topic": "problem", "type": "mcq", "q": "A student sees cells under a microscope with: no nucleus visible, no membrane-bound organelles, and a cell wall. What type of cell is this?", "opts": ["Animal cell", "Plant cell", "Fungal cell", "Bacterial (prokaryotic) cell"], "ans": 3, "explain": "Prokaryotic (bacterial) cells: no nuclear membrane, no membrane-bound organelles, smaller ribosomes, cell wall (peptidoglycan). Eukaryotic cells (plant, animal, fungal) all have a true nucleus and membrane-bound organelles."},
{"topic": "problem", "type": "fillin", "q": "In an experiment, the variable that the scientist deliberately changes is called the _____ variable.", "ans": "independent", "explain": "The independent variable is what the scientist changes (e.g. temperature, pH, light intensity). The dependent variable is what is measured. Control variables are kept constant to make it a fair test."},
{"topic": "problem", "type": "fillin", "q": "In an experiment, the variable that is measured to show the effect of changes is called the _____ variable.", "ans": "dependent", "explain": "The dependent variable is the result you measure — it depends on the independent variable. E.g. If testing temperature on enzyme activity: temperature = independent, reaction rate = dependent."},
{"topic": "problem", "type": "fillin", "q": "The formula for estimating population using mark-release-recapture is: Population = (First catch × Second catch) ÷ number of _____ individuals in the second catch.", "ans": "marked", "explain": "Population estimate = (N1 × N2) ÷ M2. N1 = first catch marked, N2 = total second catch, M2 = marked individuals in second catch. Assumes random mixing and no population changes between captures."},
{"topic": "problem", "type": "fillin", "q": "When an enzyme stops working above a certain temperature because its active site changes shape irreversibly, the enzyme has been _____.", "ans": "denatured", "explain": "Denaturation: above the optimum temperature, bonds holding the enzyme's 3D shape are disrupted. The active site changes shape permanently — the substrate no longer fits. Unlike inhibition, denaturation cannot be reversed by cooling."},
{"topic": "problem", "type": "fillin", "q": "In an energy pyramid, only approximately _____% of energy is transferred from one trophic level to the next.", "ans": "10", "explain": "Only ~10% of energy passes to the next trophic level — about 90% is lost as heat through respiration, movement, and waste. This limits food chain length to typically 4–5 links."}
];

// Worksheets: kind = mcq (opts: [html, isCorrect]) | blanks (body html with inputs, ids, answers) | punnett | written (model answer in reveal)
const SHEETS=[
 {
  "title": "Cell Biology worksheet",
  "icon": "🔬",
  "keyAreas": "<strong>📋 SQA Key Areas:</strong> Cell structure · Transport across membranes · DNA &amp; protein production · Proteins &amp; enzymes · Genetic engineering · Respiration",
  "sections": [
   {
    "head": "Section A — Cell Structure &amp; Transport",
    "qs": [
     {
      "kind": "mcq",
      "label": "Q1 · Multiple Choice",
      "text": "Which of the following organelles is found in plant cells BUT NOT in animal cells?",
      "reveal": "<strong>✓ A — Chloroplast.</strong> Plant cells also have a cell wall (cellulose) and large permanent vacuole — not found in animal cells. Both share mitochondria, ribosomes, nucleus, cell membrane, and cytoplasm.",
      "opts": [
       [
        "Chloroplast",
        true
       ],
       [
        "Mitochondria",
        false
       ],
       [
        "Ribosome",
        false
       ],
       [
        "Nucleus",
        false
       ]
      ]
     },
     {
      "kind": "mcq",
      "label": "Q2 · Multiple Choice",
      "text": "A plant cell is placed in a concentrated salt solution. What happens?",
      "reveal": "<strong>✓ C — Plasmolysis.</strong> Water leaves by osmosis (high water conc. inside → low outside). Vacuole and cytoplasm shrink, membrane pulls away from cell wall. In dilute solution the reverse happens — the cell becomes turgid.",
      "opts": [
       [
        "Cell bursts (lysis) — too much water enters",
        false
       ],
       [
        "Cell swells and becomes turgid",
        false
       ],
       [
        "Cell becomes plasmolysed — membrane pulls from wall",
        true
       ],
       [
        "Nothing happens — plant cells are unaffected",
        false
       ]
      ]
     },
     {
      "kind": "blanks",
      "label": "Q3 · Fill in the Blanks — Osmosis Definition",
      "text": "Complete the definition:",
      "reveal": "<strong>✓</strong> Osmosis is the movement of <strong>water</strong> molecules from <strong>high</strong> water concentration to <strong>low</strong> water concentration, through a <strong>selectively permeable</strong> membrane.",
      "body": "Osmosis is the movement of <input class=\"eq-in\" id=\"eq3a\" placeholder=\"?\"/> molecules from <input class=\"eq-in\" id=\"eq3b\" placeholder=\"????\"/> water concentration to <input class=\"eq-in\" id=\"eq3c\" placeholder=\"???\"/> water concentration, through a <input class=\"eq-in\" id=\"eq3d\" placeholder=\"????????????????\" style=\"min-width:140px\"/> membrane.",
      "ids": [
       "eq3a",
       "eq3b",
       "eq3c",
       "eq3d"
      ],
      "answers": [
       "water",
       "high",
       "low",
       "selectively permeable"
      ]
     },
     {
      "kind": "written",
      "label": "Q4 · Short Answer (2 marks)",
      "text": "Explain how ACTIVE TRANSPORT differs from diffusion.",
      "reveal": "<strong>✓ Model answer:</strong><br/>• Active transport moves molecules <strong>against</strong> the concentration gradient (low→high); diffusion moves molecules <strong>down</strong> the gradient (high→low). (1)<br/>• Active transport requires <strong>ATP energy</strong> and carrier proteins; diffusion is passive and needs no energy. (1)",
      "placeholder": "Write your answer here…",
      "tall": false
     }
    ]
   },
   {
    "head": "Section B — DNA, Proteins &amp; Respiration",
    "qs": [
     {
      "kind": "mcq",
      "label": "Q5 · Multiple Choice",
      "text": "In DNA, which base always pairs with Guanine (G)?",
      "reveal": "<strong>✓ C — Cytosine.</strong> Complementary base pairing: A–T and G–C. This rule always holds in DNA. In RNA, Uracil replaces Thymine (so A pairs with U in RNA).",
      "opts": [
       [
        "Adenine (A)",
        false
       ],
       [
        "Thymine (T)",
        false
       ],
       [
        "Cytosine (C)",
        true
       ],
       [
        "Uracil (U)",
        false
       ]
      ]
     },
     {
      "kind": "blanks",
      "label": "Q6 · Fill in the Blanks — Protein Synthesis",
      "text": "Complete the sentences about protein synthesis:",
      "reveal": "<strong>✓</strong> A <strong>gene</strong> codes for one protein. In the nucleus, <strong>mRNA</strong> is made by <strong>transcription</strong>. It travels to the <strong>ribosome</strong> where <strong>translation</strong> builds the protein from amino acids.",
      "body": "A <input class=\"eq-in\" id=\"eq6a\" placeholder=\"????\"/> is a section of DNA that codes for one protein.<br/> In the nucleus, <input class=\"eq-in\" id=\"eq6b\" placeholder=\"????\"/> is made from DNA by <input class=\"eq-in\" id=\"eq6c\" placeholder=\"?????????????\"/>.<br/> This travels to the <input class=\"eq-in\" id=\"eq6d\" placeholder=\"?????????\"/> where <input class=\"eq-in\" id=\"eq6e\" placeholder=\"???????????\"/> builds the protein.",
      "ids": [
       "eq6a",
       "eq6b",
       "eq6c",
       "eq6d",
       "eq6e"
      ],
      "answers": [
       "gene",
       "mrna",
       "transcription",
       "ribosome",
       "translation"
      ]
     },
     {
      "kind": "blanks",
      "label": "Q7 · Fill in the Blanks — Respiration",
      "text": "Complete the respiration equations:",
      "reveal": "<strong>✓</strong> Aerobic: Glucose + <strong>Oxygen</strong> → CO₂ + <strong>Water</strong> + ATP | Yeast: → <strong>Ethanol</strong> + CO₂ | Muscle: → <strong>Lactic acid</strong>",
      "body": "<strong>Aerobic:</strong> Glucose + <input class=\"eq-in\" id=\"eq7a\" placeholder=\"??????\"/> → CO₂ + <input class=\"eq-in\" id=\"eq7b\" placeholder=\"?????\"/> + ATP<br/><br/> <strong>Anaerobic (yeast):</strong> Glucose → <input class=\"eq-in\" id=\"eq7c\" placeholder=\"???????\"/> + CO₂<br/><br/> <strong>Anaerobic (muscle):</strong> Glucose → <input class=\"eq-in\" id=\"eq7d\" placeholder=\"???????????\"/>",
      "ids": [
       "eq7a",
       "eq7b",
       "eq7c",
       "eq7d"
      ],
      "answers": [
       "oxygen",
       "water",
       "ethanol",
       "lactic acid"
      ]
     },
     {
      "kind": "written",
      "label": "Q8 · Short Answer (5 marks)",
      "text": "List the FIVE stages of genetic engineering used to produce insulin from bacteria, in order.",
      "reveal": "<strong>✓ Five stages (1 mark each):</strong><br/>1. <strong>Identify</strong> the section of DNA containing the insulin gene on the human chromosome. (1)<br/>2. <strong>Extract</strong> the insulin gene using restriction enzymes. (1)<br/>3. <strong>Extract a plasmid</strong> from a bacterial cell. (1)<br/>4. <strong>Insert</strong> the gene into the plasmid using ligase enzymes. (1)<br/>5. <strong>Insert</strong> modified plasmid into host bacterium → GMO produces human insulin. (1)",
      "placeholder": "Stage 1:\nStage 2:\nStage 3:\nStage 4:\nStage 5:",
      "tall": true
     }
    ]
   }
  ]
 },
 {
  "title": "Multicellular worksheet",
  "icon": "🦠",
  "keyAreas": "<strong>📋 SQA Key Areas:</strong> Producing new cells (mitosis) · Control &amp; communication · Reproduction · Variation &amp; inheritance · Transport systems · Absorption",
  "sections": [
   {
    "head": "Section A — Nervous System",
    "qs": [
     {
      "kind": "mcq",
      "label": "Q1 · Multiple Choice",
      "text": "What is the correct sequence of structures in a reflex arc?",
      "reveal": "<strong>✓ A.</strong> Receptor (detects stimulus) → Sensory neuron → Relay neuron (spinal cord) → Motor neuron → Effector (muscle/gland). The reflex bypasses conscious brain processing for speed.",
      "opts": [
       [
        "Receptor → Sensory neuron → Relay neuron → Motor neuron → Effector",
        true
       ],
       [
        "Receptor → Motor neuron → Relay neuron → Sensory neuron → Effector",
        false
       ],
       [
        "Brain → Sensory neuron → Motor neuron → Effector",
        false
       ],
       [
        "Effector → Relay neuron → Brain → Receptor",
        false
       ]
      ]
     },
     {
      "kind": "written",
      "label": "Q2 · Short Answer (3 marks)",
      "text": "State the function of each part of the brain: (a) Cerebrum (b) Cerebellum (c) Medulla.",
      "reveal": "<strong>✓ (1 mark each):</strong><br/>(a) <strong>Cerebrum</strong>: conscious thought, memory, language, voluntary movement. (1)<br/>(b) <strong>Cerebellum</strong>: balance, coordination, fine motor control. (1)<br/>(c) <strong>Medulla</strong>: unconscious vital functions — heart rate, breathing rate, blood pressure. (1)",
      "placeholder": "(a) Cerebrum:\n(b) Cerebellum:\n(c) Medulla:",
      "tall": false
     }
    ]
   },
   {
    "head": "Section B — Blood Glucose &amp; Hormones",
    "qs": [
     {
      "kind": "blanks",
      "label": "Q3 · Fill in the Blanks — Blood Glucose Regulation",
      "text": "",
      "reveal": "<strong>✓</strong> <strong>Pancreas</strong> → releases <strong>insulin</strong> → <strong>liver</strong> stores glucose as <strong>glycogen</strong>. When low: <strong>glucagon</strong> released → glycogen → glucose. Negative feedback keeps blood glucose steady.",
      "body": "After eating, blood glucose rises. The <input class=\"eq-in\" id=\"eq3ma\" placeholder=\"?????????\"/> detects this and releases <input class=\"eq-in\" id=\"eq3mb\" placeholder=\"???????\"/>.<br/> This causes the <input class=\"eq-in\" id=\"eq3mc\" placeholder=\"?????\"/> to convert glucose into <input class=\"eq-in\" id=\"eq3md\" placeholder=\"?????????\"/> for storage.<br/> When glucose falls too low, <input class=\"eq-in\" id=\"eq3me\" placeholder=\"?????????\"/> is released, converting glycogen back to glucose.",
      "ids": [
       "eq3ma",
       "eq3mb",
       "eq3mc",
       "eq3md",
       "eq3me"
      ],
      "answers": [
       "pancreas",
       "insulin",
       "liver",
       "glycogen",
       "glucagon"
      ]
     }
    ]
   },
   {
    "head": "Section C — Variation &amp; Inheritance",
    "qs": [
     {
      "kind": "punnett",
      "label": "Q4 · Punnett Square (3 marks)",
      "text": "In pea plants, Tall (T) is dominant over dwarf (t). Cross Tt × Tt. Complete the Punnett square and state the phenotype ratio.",
      "reveal": "<strong>✓</strong> TT | Tt | Tt | tt<br/><strong>Phenotype ratio: 3 Tall : 1 Dwarf</strong> (TT and Tt are both tall as T is dominant)",
      "body": "<table class=\"pun-tbl\"> <tr><th style=\"background:transparent;border:none\"></th><th>T</th><th>t</th></tr> <tr><th>T</th> <td class=\"pun-cell\"><input class=\"pun-in\" id=\"pun0\" maxlength=\"3\" placeholder=\"?\"/></td> <td class=\"pun-cell\"><input class=\"pun-in\" id=\"pun1\" maxlength=\"3\" placeholder=\"?\"/></td> </tr> <tr><th>t</th> <td class=\"pun-cell\"><input class=\"pun-in\" id=\"pun2\" maxlength=\"3\" placeholder=\"?\"/></td> <td class=\"pun-cell\"><input class=\"pun-in\" id=\"pun3\" maxlength=\"3\" placeholder=\"?\"/></td> </tr> </table>",
      "ids": [
       "pun0",
       "pun1",
       "pun2",
       "pun3"
      ],
      "answers": [
       "TT",
       "Tt",
       "Tt",
       "tt"
      ]
     },
     {
      "kind": "mcq",
      "label": "Q5 · Multiple Choice",
      "text": "Which of the following correctly describes XYLEM transport in plants?",
      "reveal": "<strong>✓ B.</strong> Xylem: dead cells, no end walls, transports water + minerals UPWARD only (transpiration stream). Phloem: living cells, transports dissolved sugars up AND down.",
      "opts": [
       [
        "Transports dissolved sugars both up and down the plant",
        false
       ],
       [
        "Transports water and minerals upward from roots to leaves",
        true
       ],
       [
        "Transports oxygen downward to the roots",
        false
       ],
       [
        "Transports water downward from leaves to roots",
        false
       ]
      ]
     }
    ]
   }
  ]
 },
 {
  "title": "Life on Earth worksheet",
  "icon": "🌍",
  "keyAreas": "<strong>📋 SQA Key Areas:</strong> Ecosystems · Distribution of organisms · Photosynthesis · Energy in ecosystems · Food production · Evolution of species",
  "sections": [
   {
    "head": "Section A — Ecosystems &amp; Energy",
    "qs": [
     {
      "kind": "mcq",
      "label": "Q1 · Multiple Choice",
      "text": "Which is the correct word equation for PHOTOSYNTHESIS?",
      "reveal": "<strong>✓ B.</strong> Photosynthesis: CO₂ + H₂O → Glucose + O₂ (using light energy in chloroplasts). This is the reverse of aerobic respiration and is the foundation of almost all food chains.",
      "opts": [
       [
        "Glucose + Oxygen → Carbon dioxide + Water + ATP",
        false
       ],
       [
        "Carbon dioxide + Water → Glucose + Oxygen (light energy)",
        true
       ],
       [
        "Glucose → Ethanol + Carbon dioxide",
        false
       ],
       [
        "Water + Oxygen → Carbon dioxide + Glucose",
        false
       ]
      ]
     },
     {
      "kind": "written",
      "label": "Q2 · Short Answer (2 marks)",
      "text": "Construct a food chain using: <strong>Oak tree / Caterpillar / Blue tit / Sparrowhawk</strong>. Label the producer and primary consumer.",
      "reveal": "<strong>✓</strong> Oak tree → Caterpillar → Blue tit → Sparrowhawk<br/>Producer = <strong>Oak tree</strong> | Primary consumer = <strong>Caterpillar</strong><br/>(Arrows show direction of energy flow — from eaten to eater)",
      "placeholder": "Food chain: … → … → … → …\nProducer = …\nPrimary consumer = …",
      "tall": false
     },
     {
      "kind": "blanks",
      "label": "Q3 · Fill in the Blanks — Nitrogen Cycle",
      "text": "",
      "reveal": "<strong>✓</strong> <strong>Nitrogen-fixing</strong> bacteria → fix N₂. <strong>Decomposers</strong> → break down dead matter. <strong>Denitrifying</strong> bacteria → return N₂ to atmosphere.",
      "body": "<input class=\"eq-in\" id=\"eqla\" placeholder=\"???????????????\" style=\"min-width:140px\"/> bacteria convert N₂ gas into nitrates that plants can absorb.<br/><br/> <input class=\"eq-in\" id=\"eqlb\" placeholder=\"???????????\"/> (bacteria/fungi) break down dead matter, releasing ammonium ions.<br/><br/> <input class=\"eq-in\" id=\"eqlc\" placeholder=\"?????????????\"/> bacteria convert nitrates back into N₂ gas, returning it to the atmosphere.",
      "ids": [
       "eqla",
       "eqlb",
       "eqlc"
      ],
      "answers": [
       "nitrogen-fixing",
       "decomposers",
       "denitrifying"
      ]
     }
    ]
   },
   {
    "head": "Section B — Evolution &amp; Natural Selection",
    "qs": [
     {
      "kind": "mcq",
      "label": "Q4 · Multiple Choice",
      "text": "How does antibiotic resistance develop in bacteria? Which explanation is correct?",
      "reveal": "<strong>✓ B — Natural selection.</strong> Random mutations → some bacteria are resistant. Antibiotics kill non-resistant bacteria. Resistant bacteria survive and reproduce → resistance allele becomes more common. This is Darwin's natural selection in action.",
      "opts": [
       [
        "Bacteria deliberately mutate when they sense antibiotics",
        false
       ],
       [
        "Random mutations create resistant bacteria; antibiotic use kills non-resistant ones — natural selection",
        true
       ],
       [
        "Antibiotics cause bacteria to produce resistance genes",
        false
       ],
       [
        "Bacteria learn to resist antibiotics over their lifetime",
        false
       ]
      ]
     },
     {
      "kind": "written",
      "label": "Q5 · Extended Answer (5 marks)",
      "text": "Explain the process of natural selection. Include: variation, selection pressure, survival, reproduction, change over generations.",
      "reveal": "<strong>✓ Model answer (1 mark each):</strong><br/>1. <strong>Variation</strong> — individuals in a population show variation due to random mutations and sexual reproduction. (1)<br/>2. <strong>Selection pressure</strong> — a challenge (predation, disease, climate) means not all individuals survive equally. (1)<br/>3. <strong>Survival</strong> — individuals with advantageous traits are more likely to survive ('survival of the fittest'). (1)<br/>4. <strong>Reproduction</strong> — survivors reproduce and pass on their beneficial alleles to offspring. (1)<br/>5. <strong>Change over generations</strong> — the advantageous allele becomes more frequent in the population over many generations; over long timescales this can lead to new species (speciation). (1)",
      "placeholder": "Write your extended answer here…",
      "tall": true
     }
    ]
   }
  ]
 }
];

// Key facts reference
const FACTS=[
 {
  "h": "🔬 Cell Biology",
  "cards": [
   [
    "Aerobic Respiration",
    "Glucose + Oxygen → CO₂ + Water + ATP<br/>Occurs in: cytoplasm (glycolysis) + mitochondria"
   ],
   [
    "Anaerobic — Yeast",
    "Glucose → Ethanol + CO₂ (+ 2 ATP)"
   ],
   [
    "Anaerobic — Muscle",
    "Glucose → Lactic acid (+ 2 ATP)"
   ],
   [
    "DNA Base Pairing",
    "A — T | G — C<br/>Double helix held by complementary base pairs"
   ],
   [
    "Osmosis",
    "Water moves: HIGH water conc. → LOW water conc.<br/>Through a selectively permeable membrane (passive)"
   ],
   [
    "Protein Synthesis",
    "DNA → mRNA (transcription, in nucleus)<br/>mRNA → Protein (translation, at ribosome)"
   ],
   [
    "Genetic Engineering (5 steps)",
    "1. Identify gene → 2. Extract gene (restriction enzymes) → 3. Extract plasmid → 4. Insert gene into plasmid (ligase) → 5. Insert plasmid into host bacterium"
   ]
  ]
 },
 {
  "h": "🦠 Multicellular Organisms",
  "cards": [
   [
    "Reflex Arc",
    "Receptor → Sensory neuron → Relay neuron → Motor neuron → Effector"
   ],
   [
    "Blood Glucose Regulation",
    "High glucose → Pancreas releases Insulin → Liver converts glucose→glycogen<br/>Low glucose → Pancreas releases Glucagon → Liver converts glycogen→glucose"
   ],
   [
    "Brain Regions",
    "Cerebrum: thought/memory | Cerebellum: balance/coordination<br/>Medulla: heart rate/breathing (unconscious)"
   ],
   [
    "Genetics Terms",
    "Dominant (capital) = expressed with 1 copy<br/>Recessive (lowercase) = needs 2 copies (homozygous)<br/>Heterozygous = Aa | Homozygous = AA or aa"
   ],
   [
    "Plant Transport",
    "Xylem: water + minerals UPWARD (dead cells)<br/>Phloem: sugars UP and DOWN (living cells)"
   ],
   [
    "Transpiration Rate ↑ when…",
    "↑ Wind speed | ↓ Humidity | ↑ Temperature | ↑ Light intensity"
   ]
  ]
 },
 {
  "h": "🌍 Life on Earth",
  "cards": [
   [
    "Photosynthesis",
    "CO₂ + H₂O → Glucose + O₂ (using light energy, in chloroplasts)<br/>Limiting factors: light intensity, CO₂ concentration, temperature"
   ],
   [
    "Energy Transfer in Food Chains",
    "Only ~10% of energy transfers between trophic levels<br/>~90% lost as heat (respiration, movement, waste)"
   ],
   [
    "Nitrogen Cycle",
    "Nitrogen-fixing bacteria: N₂ → nitrates (usable)<br/>Decomposers: dead matter → ammonium<br/>Denitrifying bacteria: nitrates → N₂ (back to atmosphere)"
   ],
   [
    "Natural Selection",
    "Variation → Selection pressure → Survival of fittest → Reproduction → Allele frequency changes over generations"
   ],
   [
    "Ecological Relationships",
    "Predation: predator benefits, prey harmed<br/>Mutualism: both benefit (e.g. Rhizobium + legumes)<br/>Parasitism: parasite benefits, host harmed<br/>Competition: intraspecific (same sp.) / interspecific (diff. sp.)"
   ]
  ]
 }
];

// Mock exams: questions drawn at random from the whole bank, 1 mark each
const MOCK_INTRO="Based on the SQA curriculum. Two sittings just like the real exam.<br/><strong>Paper 1:</strong> Short answers · 25 marks · 30 min | <strong>Paper 2:</strong> Extended · 25 marks · 40 min";
const MOCK_PAPERS=[{"key": "paper1", "title": "Paper 1 — Mixed Questions", "short": "Paper 1", "desc": "25 questions · 30 minutes · all units", "n": 25, "mins": 30}, {"key": "paper2", "title": "Paper 2 — Mixed Questions", "short": "Paper 2", "desc": "25 questions · 40 minutes · all units", "n": 25, "mins": 40}];
const MOCK_GRADES=[{"min": 85, "grade": "A", "msg": "Outstanding! An A-grade performance."}, {"min": 70, "grade": "B", "msg": "Well done! Review the questions you dropped to push for an A."}, {"min": 60, "grade": "C", "msg": "Good effort! Target your weakest topics to move up."}, {"min": 45, "grade": "D", "msg": "Keep revising — use Smart Mix to work on the topics you found hardest."}, {"min": 0, "grade": "No Award", "msg": "Don't give up! Review your answers, then try again."}];

const EXAM_TIPS=[
 [
  "✏️",
  "<strong>Use precise scientific vocabulary</strong> — the SQA mark scheme awards marks for specific terms (e.g. \"plasmolysis\", \"complementary base pairing\", \"selectively permeable\")."
 ],
 [
  "🔬",
  "<strong>Learn the equations</strong> — aerobic respiration, photosynthesis, and both forms of anaerobic respiration are common exam questions."
 ],
 [
  "📊",
  "<strong>Show your reasoning</strong> — for 2-mark questions, give two separate points. Watch for command words: \"describe\", \"explain\", \"state\"."
 ],
 [
  "🧬",
  "<strong>Genetics questions</strong> — always show your Punnett square working. State the genotype AND phenotype ratio in your answer."
 ],
 [
  "⏱",
  "<strong>Manage your time</strong> — if stuck, move on and come back. Never leave a blank — an attempt may get a mark."
 ]
];
const LINKS=[
 [
  "https://www.sqa.org.uk/sqa/47427.html",
  "SQA — Nat 5 Biology",
  "Official past papers, marking schemes &amp; course spec"
 ],
 [
  "https://www.bbc.co.uk/bitesize/subjects/z4882hv",
  "BBC Bitesize — Nat 5 Biology",
  "Videos, notes and revision for every topic"
 ],
 [
  "https://scholar.hw.ac.uk",
  "SCHOLAR (Heriot-Watt)",
  "Detailed online course for Scottish Nat 5 Biology"
 ],
 [
  "https://www.understandingstandards.org.uk/Subjects/Biology",
  "Understanding Standards",
  "SQA exemplar answers and marking guidance"
 ],
 [
  "https://blogs.glowscotland.org.uk/gc/n5biology/",
  "Glow — Nat 5 Biology Resources",
  "Teacher-created notes and resources by key area"
 ]
];
const ABOUT="Covers all three SQA Nat 5 Biology units: Cell Biology, Multicellular Organisms, and Life on Earth.<br/><br/> ✅ Verified against SQA Course Spec <strong>C807 75</strong> (valid from 2022–23, confirmed current 2025).<br/><br/> 103 practice questions · 3 interactive worksheets (18 questions) · Mock exams · Flashcards · Timed challenge · Key facts reference.<br/><br/> Progress saves automatically in your browser — nothing is sent anywhere. Not affiliated with the SQA.";
