window.COURSE_DATA = {
  "course": {
    "title": "Simulation and Modeling",
    "subtitle": "Discrete-Event System Simulation",
    "source": "Banks, Carson II, Nelson & Nicol, elaborated by Dr. Farouk Shaaban",
    "lectureMaterial": "materials/Simulation.pdf",
    "pageCount": 73,
    "grading": [
      "4th week lecture test: 10 marks",
      "7th week lecture test: 15 marks",
      "7th week section test: 5 marks",
      "12th week lecture test: 20 marks",
      "5 lecture assignments: 5 marks",
      "Section term work: 5 marks",
      "Final exam: 40 marks"
    ]
  },
  "modules": [
    {
      "id": "concepts",
      "title": "1. Basic Concepts and Terminology",
      "pages": [
        6,
        26
      ],
      "topics": [
        "System definition and state",
        "System classification",
        "System methodology",
        "Validation and verification",
        "Advantages and disadvantages of simulation",
        "Introductory simulation examples"
      ],
      "pageRefs": [
        {
          "page": 6,
          "text": "Simulation Principles and Methods\n1. Introduction\nThe basic idea of Simulation is to build an\nexperimental device (model) that act like\n(simulate) the real system in certain important\naspects. The purpose is to understand or\nevaluate the behavior of a complex real-world\nsystem over extended period without risk to the\nreal system performance.\n2. Why using Simulation\na) If the experimentation on the real-world\nsystem is not feasible or not possible:\n6"
        },
        {
          "page": 7,
          "text": "• Too expensive, (not feasible)\n• Too risky (atomic problems),(not possible)\n• Too complex,\n• Not existing system,\n• Intractable.\nb) Simulation is the best (may be the only)\ntechnique available under conditions of\nuncertainty due to stochastic (random)\nvariables, or nonlinearity. Mathematical\ntreatment of such systems is frequently not\npossible.\nc) Computer simulation gives control over time,\nwhich may be compressed or expanded, such\nas an aircraft; simulation may gather data on\nmany months of operations in minutes.\n7"
        },
        {
          "page": 8,
          "text": "3. Simulation Application\nSimulation can be used in Theoretical problems in\nbasic science areas such as math., physics, and\nchemistry.\nIt can be useful in practical problems in all aspects\nof life such as industrial problems, business,\neconomic, biomedical systems, social problems\n(Population dynamics), space researches, and War\nstrategies.\n4. Basic concepts and terminology\na) System : is defined as an isolated collection of\ninteracting components or objects with defined set of\ninteractions among them. A Jet aircraft is an excellent\nexample of a complex system consisting of mechanical,\nelectronic, chemical and human components.\n8"
        },
        {
          "page": 9,
          "text": "b) State of a system: It is the minimal\ncollection of information with which the system\nfuture behavior can be predicted. For the Jet aircraft,\nthe state of the system can be determined by Speed,\nDirection of travel, weather conditions, number of\npassengers, and amount of remaining fuel.\nc) An Activity: It is the process or Event\nWhich changes the system state.\n9"
        },
        {
          "page": 10,
          "text": "d) System Classification:\no Natural and Man-Made,\no Deterministic\no Stochastic (Probabilistic)\no Continuous: A system whose changes in its state\noccurs continuously over time (liquid flow in a\npipeline),\no Discrete: Growth of world population with respect\nto time.\n10"
        },
        {
          "page": 11,
          "text": "5. System methodology\nWhen simulation is used to solve a problem, the\nfollowing time-tested steps, or stages are\napplied:\nA. Observation of the system,\nB. Formulation of hypotheses or theories that account\nfor the observed behavior,\nC. Prediction of the future behavior of the system\nbased on the assumption that the hypotheses are\ncorrect,\nD. Comparison of the predicted behavior with the\nactual behavior.\n11"
        },
        {
          "page": 12,
          "text": "The system being studied may impose constraints\non certain steps of this scientific method. For\nexample, consider the simulation of a system that\ndoes not yet exist. Obviously the observation of\nsuch system is not possible, but the simulation of\nsuch system may still be possible if the analysis is\ncarefully conducted and if the ultimate\nrequirements are known. The problem solving\nprocess is divided into four phases:\n. Planning\n. Modeling\n. Validation\n. Application.\n12"
        },
        {
          "page": 13,
          "text": "a) Planning or premodeling includes the initial\nencounter with the system, the problem to be\nsolved, and the factors pertaining to the system\nand its environment that are likely to affect the\nsolution of the problem. This means the problem\nmust be well defined. Obviously the more accurate\nand precise the problem statement is, the more\nsmoothly the solution process can proceed .\nResources must be considered and estimated such\nas money, time, personal, and special equipment .If\ncrucial resources are not available, solution of the\nproblem can be judged infeasible before a\nsignificant amount of time or money is spent.\n13"
        },
        {
          "page": 14,
          "text": "b) Modeling in this phase the analyst constructs the\nsystem model, which is a representation of the real\nsystem. The characteristics of this model should be\nRepresentative (not identical) of the characteristics of the\nreal system. You must select some minimal set of the\nsystem's characteristics so that the model approximates\nthe real system to be cost-effective and manageable.\nThere are many types of simulation models:\n1-Descriptive models (verbalizations of the system's\ncomposition)\n2-Physical models (scaled facsimiles of the system:\naircraft, cars, building,..)\n3-Mathematical models (abstract expressions of the\nrelationships among the system variables: Newton's laws\nof motion,..)\n4-Flowcharts ( Logical interaction between system's\ncomponents)\n5-Schematics ( Logical interaction between system's\ncomponents)\n6-Computer programs : If the system is too complex\nthen the reduction technique or subsystem modeling is\nused.\n14"
        },
        {
          "page": 15,
          "text": "c) Validation is to check that the system or the model\nis a correct representation of the real system. But\nverification means that the logical of a computer\nprogram is ok. So, a verified computer program can\nrepresent invalid model . There are many techniques\nused to validate a computer program:\n• Compare the results of simulation model with\nresults historically produced by the real system\noperating under the same conditions.\n• Use simulator to predict results, and then\ncompare with the real data for some period.\nVarious statistical procedures can be used to determine\nwhether the simulated output could have been produced\nby the real systems and vice versa. Two such methods\nare the Chi-square goodness-of-fit test and the\nkolmogrove-Smirnov test.\n15"
        },
        {
          "page": 16,
          "text": "d) Application Once the model has been properly\nvalidated, it can be applied to solve the problem at\nhand. A simulator may work error-free for a long period\nuntil it encounters a new and perhaps unique\ncombination of program parameters that generates the\nnext error.\n16"
        },
        {
          "page": 17,
          "text": "6.Advantages and disadvantages of\nsimulation\nPhillips Ravindran and Solberg [OR principles and\npractice, New York John Wiley,1976] stated that\nsimulation is one of the easiest tools of\nmanagement science to use but probably one of\nthe hardest to apply properly and perhaps the\nmost difficult one from which to draw accurate\nconclusions.\nAdkins and Pooch list 5 advantages of simulation\nmodeling:\na) It permits controlled experimentation,\nb) It permits time compression,\nc) It permits sensitivity analysis by manipulation of\ninput variables,\nd) It does not disturb the real system,\ne) It is an effective training tools.\n17"
        },
        {
          "page": 18,
          "text": "They also list 4 disadvantages:\na) A simulation model may become expensive in terms of\nmanpower and computer time,\nb) Extensive development time may be encountered,\nc) Hidden critical assumption may cause the model to\ndiverge from reality,\nd) Model parameters may be difficult to initialize. These\nmay require extensive time in collection, analysis, and\ninterpretation.\nThus although simulation has proved an effective\napproach to problem solving, it has its drawbacks.\nThe researcher should be aware of these\ndrawbacks before becoming committed to this\napproach.\n18"
        },
        {
          "page": 19,
          "text": "Examples\nExample1\nThe first example we are going to see is the\nsimulation of a tossing of a fair coin. First step is\nanalyzing the problem. The fair coin means that\nwhen tossing that coin the probability of head equal\nthe probability of tail equal 50%. So, using a digital\ncomputer to simulate this phenomenon we are going\nto use a uniform Random number generated by the\npackage you are using or you can write its code.\nUniform random number means that you have a set\nof random number between 0 and 1 all with the\nsame probability. But most languages generate\nuniform random number integer from a to b with\nequal probability.\n19"
        },
        {
          "page": 20,
          "text": "See the following program written in c++\n#include <iostream>\n#include <stdlib.h>\nvoid main(void)\n{\nint x,nuber_of_trials, head=0, tail=0;\nfloat phead,ptail,error_head,error_tail;\ncout<<\"enter number of trials\"<<endl;\ncin>>nuber_or_trials;\nfor(int i=0;i<nuber_of_trials;i++)\n{\nx=random(2);\nif (x==1) head++;\nelse ++tail;\n}\nphead=head*1.0/nuber_of_trials;\nptail=tail*1.0/nuber_of_trials;\nerror_head = abs(((0.5 - phead)/0.5)*100);\nerror_tail = abs(((0.5 - ptail)/0.5)*100);\ncout<<\"probability of head= \" <<phead<<\"\nwith error =\"<<error_head<<\"%\"<<endl;\ncout<<\"probability of tai = \"<<ptail<<\" with\nerror =\"<<error_tail<<\"%\"<<endl;\ncin>>x;\n}\n20"
        },
        {
          "page": 21,
          "text": "The output results are:\nEnter number of trials = 1\nprobability of head= 0 with error =100%\nProbability of tail = 1 with error =100%\nEnter number of trials =5\nprobability of head= 0 with error =100%\nProbability of tail = 1 with error =100%\nEnter number of trials = 32767\nprobability of head= 0.496292 with error =0%\nProbability of tail = 0.503708 with error =0%\n21"
        },
        {
          "page": 22,
          "text": "Example2\nGet the average daily demand for a small grocery store\nselling a fresh bread according to the following table:\nDevice to generate\nDaily demand D Probability Of chance outcomes\ndemand P(D) Number and color\nof balls\n100 0.20 20 Red\n110 0.50 50 Blue\n120 0.30 30 Yellow\nNote that the proportion of balls of a specific color\ncorresponds exactly to the probability of a specific\nlevel of daily demand.\n22"
        },
        {
          "page": 23,
          "text": "To simulate the daily demand (5 days)\n• Draw one ball at a time, notice its color and then place\nit back in the bowl. Then translate the outcomes into\nunique values of demand.\nSample Color of Day of the Simulate\nNumber ball Week d\nDemand\n1 Blue Monday 110\n2 Blue Tuesday 110\n3 Yellow Wednesday 120\n4 Yellow Thursday 120\n5 Red Friday 100\nTotal 560\n• Expected value of simulated demand\n= 560/5=112 units / day\n• Analytical solution\nExpected daily demand\n=100(0.2) + 110(0.5) +120(0.3) = 111 units / day\n23"
        },
        {
          "page": 24,
          "text": "Example3\nUse the one-digit Random Number (6, 3, 5, 0, 8)\nto generate random observations for :\na)Throwing an unbiased coin,\nb)Throwing a die,\nc)The color of a traffic found by a randomly arriving car\nwhen it is green 40% of the time, yellow 10% of the\ntime, and red 50% of the time.\n24"
        },
        {
          "page": 25,
          "text": "Solution\na) To simulate a coin using one digit R.N.(0-9), let 0 - 4\nRepresent a Head and 5 – 9 Represent a Tail; so the\nsolution will be\nR.Observations\n(6, 3, 5, 0, 8) (T, H, T, H, T)\nb) To simulate a die using number 0 – 9. Let 1 – 6\nrepresents the faces of the die; then 0, 7, 8 and 9 are\nrejected. So the solution will be\nR.Observations\n(6, 3, 5, 0, 8) (6,3,5,reject,reject)\n25"
        },
        {
          "page": 26,
          "text": "c) Divide 0 – 9 into 3 classes according to the given\nprobability:\no Green 40% 0, 1, 2, 3\no Yellow 10% 4\no Red 50% 5, 6, 7, 8, 9\nR.Observations\nSo (6,3,5,0,8) (Red,Green,Red,Green,Red)\n26"
        }
      ],
      "summary": "Simulation Principles and Methods\n1. Introduction\nThe basic idea of Simulation is to build an\nexperimental device (model) that act like\n(simulate) the real system in certain important\naspects. The purpose is to understand or\nevaluate the behavior of a complex real-world\nsystem over extended period without risk to the\nreal system performance.\n2. Why using Simulation\na) If the experimentation on the real-world\nsystem i"
    },
    {
      "id": "probability",
      "title": "2. Probability and Distribution Theory",
      "pages": [
        27,
        43
      ],
      "topics": [
        "Random variables",
        "Events and set operations",
        "Discrete and continuous distributions",
        "CDF and PDF properties",
        "Expected value, variance, and moments",
        "Bernoulli, uniform, Poisson, exponential, and normal distributions"
      ],
      "pageRefs": [
        {
          "page": 27,
          "text": "Probability and Distribution Theory\nDefinition1 A random variable is a quantity whose value\nis determined by the outcome of a Random Experiment\n,i.e., the Random Variable X is a function whose domain\nis the event space (set of all possible outcomes of a\nrandom experiment) and whose range is some subset of\nthe real numbers.\nX : E R\nSet Theory and compound Events\nDefinition2\nAn event is some subset of the event space of a\nrandom experiment.\nΩ : Event space or the collection of all the possible outcomes of\nthe experiment.\nExample\nConsider the experiment of tossing two dice and noting\nthe sum of the faces. The event space is Ω = {2, 3, 4,\n5, 6, 7, 8, 9, 10, 11, 12} and some events are\nE1 = {2} E2 = { 3, 4, 5} E3 = {2,4,6,8,10.12} (an\neven number appears.\nDefinition3\nThe Complement of an event E is Ē which contains the\nset of elements that are in Ω but not in E.\nNote that: E + Ē = Ω , E * Ē = Φ (null set )\n27"
        },
        {
          "page": 28,
          "text": "Example\nĒ1 = {3,4,5,6,7,8,9,10,11,12}\nĒ2 ={2,6,7,8,9,10,11,12}\nĒ3 = {3,5,7,9,11}\nDefinition4\nLet a random experiment has N equally likely\noutcomes. Let some event E is composed of n\noutcomes, so the probability of E is denoted by\nP(E) = n/N , P(Ē ) = 1 – P( E ) = (N – n )/N\nNote : P(Ω ) = 1 , P( Φ ) = 0.\nDefinition5\nThe Union of two events E1 and E2 is denoted\nby E1 + E2 and it is defined as the outcomes in\neither E1 OR E2 OR both.\nThe intersection of two events E1 & E2 is denoted by\nE1 . E2 and is defined as the outcomes that the\nevents have in common .Two events that have no\noutcomes in common are said to be\nmutually exclusive.\n28"
        },
        {
          "page": 29,
          "text": "Discrete Distribution\nExample Tossing a single die Let X a random Variable\nthat counts the spots of the side facing up. Then the\nvalues of X is 1, 2, 3, 4, 5, 6\nX 1 2 3 4 5\n6\nP(X = x ) 1/21 2/21 3/21 4/21 5/21 6/21\nP(x)\n6/21\n5/21\n4/21\n2/21\n1/21\nx\n6\n1 2 3 4 5\n29"
        },
        {
          "page": 30,
          "text": "The properties that every discrete probability\nfunction must have :\n1) P(x ) ≤0 for all x It is called probability density\ni\nfunction (p.d.f.)\n\n\n2) P(x ) = 1\ni\ni=1\nAnother useful function is the Cumulative distribution\nCDF=F(x) = P ( X ≤ x ) {probability that X ≤ x }\nF(x)\n1\n3/4\n1/2\n1/4\n1 2 3 4 5 6\n30"
        },
        {
          "page": 31,
          "text": "The CDF has the following properties:\n1) 0 ≤ F ( X ) ≤ 1 - ∞ < x < ∞\n2) If X ≤ X F ( X ) ≤ F ( X ) that is F is\n1 2 1 2\nmonotonically increasing.\n3) Lim F ( X ) =F(∞) = 1\nx ∞\nLim F ( X ) =F(-∞) = 0\nx -∞\nExpected value (Mean)\nE(X) =\nFor the above example\nE(X) = (1)(1/21) + (2)(2/21) + (3)(3/21) + (4)(4/21) +\n(5)(5/21) + (6)(6/21) = 91/21\ni\n\n= 0\nX\ni\nP ( X\ni\n)\n31"
        },
        {
          "page": 32,
          "text": "Variance\nFor the above example V(X) = 2.222\nStandard Deviation of X is given by S(X) =\nFor the above example\nS(X)=[2.222]^1/2 b= 1.4907\nV ( X ) =\n=\n=\ni\nE\n\n=\nE\n0\n[\n[\n(\n(\nx\nX\nX\ni\n2\n−\n−\n)\nE\nE\n−\n(\n(\n(\nX\nX\nE\n)\n)\n(\n]\n)\nX\n2\n2\nP\n]\n) )\n(\n2\nx\ni\nV\n)\n( X )\n1 / 2\n32"
        },
        {
          "page": 33,
          "text": "\n f (x)dx =1\n−\n\n xf (x)dx\n−\n\n(x − E(X ))2 f (x)dx\n−\n\n x2 f (x)dx − (E(X ))2\n−\nX\n\n−\n1\n\nf ( x ) d x\nContinuous Distribution\n• 1- f(x) =0 if x is not in the range of X,\n• 2- f(x) ≤0,\n• 3-\n• 4- F(x ) =\n1\n• 5- E(X) =\n• 6- V(X ) =\n• =\n33"
        },
        {
          "page": 34,
          "text": "Function of a Random Variable\n• Let X denote a R.V. Suppose the R.V. Y is related to\nX by Y = aX + b where a, b are arbitrary constant.\n• E(Y) = E(aX+b)\n• =\n• So E(Y) = aE(X) + b\n• V(y) = V(aX + b)\n•\n=\n−\n\n\n\n\n\n−\n(\n\na\n(\nx\na\n+\nx +\nb )\nb\n2\n)\nf\nf\n(\n(\nx\nx\n)\n)\nd\nd\nx\nx\n−\n= a\n( E\n−\n\n\n\n(\nx\na\nf\nX\n( x\n+\n)\nb\nd\n)\nx\n)\n+\n2\nb\n−\n\n\n\nf ( x ) d x\n34"
        },
        {
          "page": 35,
          "text": "=\n=\n=\n=\n=\n\n a\n− \n\n a\n− \n\n−\n\n2 a\n2 a\na\n[\nV\n2 x\n2 x\n2 x\n\n−\n\n(\n2\n2\nx\n2\nX\nf\nf\n2\nf\n(\n(\n(\nf\n)\nx\nx\nx\n(\n)\n)\nx\nd\nd\n) d\n)\nx\nx\nd\nx\n+\n+\nx\n−\n−\n2\n2\na\na\na\n(\n2\nE\nb\nb\n(\n\n−\n\nE\nE\n( X\nx\n(\n(\nf\nX\nX\n) )\n( x\n)\n) )\n2 ]\n)\n+\n2\nd x\nb\n+\n2\nb\n−\n2\n(\n\n−\n\nE\nf\n( a\n( x\nX\n) d\n+\nx\nb\n−\n) )\n(\n2\nE ( a X + b ) ) 2\n35"
        },
        {
          "page": 36,
          "text": "Some Common Distribution\n1) Bernoulli Distribution\nIt is a discrete distribution having only two\noutcomes. Let X has been defined and it takes\nthe value o with probability p and 1 with\nprobability q=1-p i.e.,\nX p(x)\n0 p\n1 q\nCDF = F(x) = 0 x< 0\np 0 ≤ x < 1\n1 x ≤ 1\nμ = E(X) = 0.p + 1.q = q\n2 =\n=\n=\nV\n0\n(\n(\n.\np\np\nX\nq\n+\n)\n)\n1\n1\n=\n. q\n/ 2\nE\n−\n(\nq\nX\n2 =\n2\nq\n) −\n( 1\n(\n−\nE\nq\n(\n)\nX\n=\n)\np\n)\nq\n2 \n\n36"
        },
        {
          "page": 37,
          "text": "p(x) F(x)\nq 1\np\np\nx x\n0 1 0 1\nExample\nConsider the experiment of tossing a fair coin. Let X\nassume the value o if a head appears and 1 for tail.\nThen p = q = ½ and μ(mean) = p = ½ &\n2 (V (X ))= pq =1/ 4\n37"
        },
        {
          "page": 38,
          "text": "Uniform Distribution\nf(x)\nLet variable X has a uniform distribution\nbetween a and b X ≈ U(a,b)\nf(x) = 1/(b-a) a ≤ x ≤ b\na b\n= 0 otherwise\n•Rectangular distribution\n•The interval [a,b] is called the range of\nF(x)\nthe distribution\n1\n•CDF is given by:\nx\nF(X) =  f (t)dt = 0 x  a\n0\n−\nx − a a\n= a  x  b b\nb − a\n=1 x  b\na +b (b − a)2\nMean = = Var.= 2 =\n2 12\nProve the above mean and\nvariance\n38"
        },
        {
          "page": 39,
          "text": "Poisson Distribution\nIt is a discrete distribution.\nP( X = k ) = P ( k )\nX\nMean λ Variance = λ\n=\nk\n\n=\n(\n0\nt\nk\nk\n)\ne\nk\n!\nk\n−\n!\ne\n−\n=\nt\n1\n\n\n \n39"
        },
        {
          "page": 40,
          "text": "Exponential Distribution\n( )\n1\n0\n\n\nf\nx\ny =\ne\n−\ny\n1\n\nf (x)\ny\n0\ny\n40"
        },
        {
          "page": 41,
          "text": "\n  y −y\n1\n−\n f (y)dy =  e  dy = − e  = 1\nx\n\n− 0 0\n1 1\n = E(X ) = , 2 = V (X ) =\n 2\n\nCDF = F (b) =  f (y)dy\nx x\n−\n= 0 b 0\n −y −b\n= 1\n e  dy = 1−e  b 0\n\n0\n41"
        },
        {
          "page": 42,
          "text": "Normal Distribution\ni\nf\nt\nx\ni\n(\ns\ny\nc\n)\na l l e d\n2\n1\na\ne\nN\n( y\n2 2\n(\n) 2\n, ) i . , e . , i t h a s t w o\ny\np a r a m e t e r s .\n\n\n\n\n=\n−\n\n−\n−    \nfy(x)\nx\nμ\n-∞ ∞\n42"
        },
        {
          "page": 43,
          "text": "\n−(y−)2\n1\nF (b)=  e 22 dy\nx\n2\n−\nThis integral does not exist in closed form. But there\nexist tables of values for the standard normal distribution\nwith mean=0 and var.=1 which is given by:\n−z2\n1\nf (z)= e 2 (=0 , =1)\n2\nIf X is N (,)thentherandomvariable Z is\nZ =(X − ) / is a N (0,1)\n X =+ Z i.,e., X is N  (,)\n43"
        }
      ],
      "summary": "Probability and Distribution Theory\nDefinition1 A random variable is a quantity whose value\nis determined by the outcome of a Random Experiment\n,i.e., the Random Variable X is a function whose domain\nis the event space (set of all possible outcomes of a\nrandom experiment) and whose range is some subset of\nthe real numbers.\nX : E R\nSet Theory and compound Events\nDefinition2\nAn event is some subset of the event space o"
    },
    {
      "id": "variance",
      "title": "3. Estimation and Statistical Ideas",
      "pages": [
        44,
        47
      ],
      "topics": [
        "Variance reduction",
        "Complement random numbers",
        "Empirical estimation examples",
        "Random-variable transformations"
      ],
      "pageRefs": [
        {
          "page": 44,
          "text": "Variance Reduction Techniques\n1 Increase sample size N where\nV = E(x2) – (E(X))2  V 1/N\nExamples\nuse f(x) = e –x it is exponential distribution with\nmean λ=1 i.,e.,F(X)= 1 – e –x\ni R.N. X = - ln ( 1 - r )\ni i\n1 0.495 0.684\n2 0.335 0.408\n3 0.791 1.568\n4 0.469 0.633\n5 0.279 0.326\n6 0.698 1.199\n7 0.013 0.014\n8 0.761 1.433\n9 0.290 0.343\n10 0.693 1.183\nTotal = 7.793 so mean = 7.793/10 = 0.779\nwith error = ((1-0.779)/1)*100 = 22.1%\n44"
        },
        {
          "page": 45,
          "text": "2-Use Complement Random Numbers for the\nabove example f(x) = e –x\ni ri x=-ln(1-r) ŕ=1-r x=-ln(1- ŕ)\ni i i i i i\n1 0.495 0.684 0.505 0.702\n2 0.335 0.408 0.665 1.092\n3 0.791 1.568 0.209 0.234\n4 0.469 0.633 0.531 0.756\n5 0.279 0.326 0.721 1.275\n6 0.698 1.199 0.302 0.359\n7 0.013 0.014 0.987 4.305\n8 0.761 1.433 0.239 0.272\n9 0.290 0.343 0.710 1.236\n10 0.693 1.183 0.307 0.366\nTotal = 7.793 =10.597\nEstimated mean = 0.5(0.7793+1.0597)\n= 0.92\nWith Error = ((1-0,92)/1)*100 = 8.05%\n45"
        },
        {
          "page": 46,
          "text": "Example:\ndetermine the mean of the random variable with\nF(X)= x2 0≤x≤1\nf(x) = 2x, 0≤x≤1\n2 0.5\nF(X) = X = r So X = + r\ni i\n0.5\nR X = r\ni i i\n0.628 0.792\n0.207 0.455\n0.662 0.814\n0.774 0.880\n0.360 0.600\n0.951 0.975\nTOTAL= 4.516 Estimated mean = 4.516/6 = 0.753 with\nerror = 13%\nx =\n1\n0 x f ( x ) d x =\n1\n0 2 x 2 d x = 2 / 3\n46"
        },
        {
          "page": 47,
          "text": "Using Complement Random Variables:\nr ŕ=1-r x = r , (1− r )\ni i i i i\n0.628 0.792\n0.372 0.61\n0.207 0.455\n0.793 0.891\n0.662 0.814\n0.338 0.581\nTotal = 2.061 + 2.082 = 4.143\nSo the mean = 4.143/6 = 0.691\nwith Error = ((2/3-0.691)/(2/3))*100 = 4%\n47"
        }
      ],
      "summary": "Variance Reduction Techniques\n1 Increase sample size N where\nV = E(x2) – (E(X))2  V 1/N\nExamples\nuse f(x) = e –x it is exponential distribution with\nmean λ=1 i.,e.,F(X)= 1 – e –x\ni R.N. X = - ln ( 1 - r )\ni i\n1 0.495 0.684\n2 0.335 0.408\n3 0.791 1.568\n4 0.469 0.633\n5 0.279 0.326\n6 0.698 1.199\n7 0.013 0.014\n8 0.761 1.433\n9 0.290 0.343\n10 0.693 1.183\nTotal = 7.793 so mean = 7.793/10 = 0.779\nwith error = ((1-0.779)/1)*1"
    },
    {
      "id": "queueing",
      "title": "4. Introduction to Queuing Theory",
      "pages": [
        48,
        53
      ],
      "topics": [
        "Customer arrivals and service",
        "Queue length and waiting time",
        "M/M/1/∞/FIFO system",
        "Little's formula",
        "Performance measures"
      ],
      "pageRefs": [
        {
          "page": 48,
          "text": "Introduction to Queuing Theory\nA queuing system is a system in which customers arrive,\nwait if that service is not immediately available,\nreceive the necessary service, and then depart.\nCustomers Service Customers\narriving facility departing\nCharacteristics of any queuing system\n(A) The arrival pattern (distribution of arriving\ncustomers)\n(B) The service process (distribution of service time)\n(C) The number of parallel servers\n(D) The system capacity\n(E) The queuing discipline (FIFO, LIFO, priority)\nSo any queuing system can be described as A/B/C/D/E\n48"
        },
        {
          "page": 49,
          "text": "The items of interest concerning any queuing\nmodel:\n• 1. Queuing length (L )\nq\n• 2. Time in the system (W)\n• 3. Idle and busy time of a server\n• M/M/1/∞/FIFO system\n• Derivation using stochastic balance\nλp\nλp λp\n2\no 1\nSS\nS S S 23\no 1 2\nμp\nμp μp 3\n1 2\n• Using balance\n• at point S μp =λp p = λ/μp\no 1 o 1 o\n• at point S (λ+ μ)p =λp + μp\n1 1 o 2\n2\np = (λ/μ) p\n2 o\nn\n• and so on we get p = (λ/μ) p\nn o\n49"
        },
        {
          "page": 50,
          "text": "  \n p =1=  ( )n p\nn 0\n\nn=0 n=0\n1 1\n p = = =\n0   \n ( )n  n\n\nn=0 n=0\n1\n p = =1−\n0 1\n1−\n p = (1−)n forn = 0,1,2,3,...\nn\n\nL = 1,\n1−\n2\nL = 1\nq\n1−\n50"
        },
        {
          "page": 51,
          "text": "• Expected number in the system (L)\n• L = E(X)\n \n=  xp =  x(1− )x\nn\nx=0 x=0\n\nL = (1− ) xx\nx=0\n= (1− ) xx−1\nd \n= (1− ) x\nd\nx=0\nd 1\n= (1− )\nd1− \n1\n= (1− )\n(1− )2\n \n L = =  1 i.,e.,  \n1−  −\n51"
        },
        {
          "page": 52,
          "text": "• Expected Number in the queue L\nq\n\n\n\n \n  \n  \n\nL\nq\n=\n=\n=\n=\n=\nL\no\nx\nL\nL\n1\nq\np\n\n=\n−\n=\n1\n−\n0\nx\n1\n1\n+\np\n−\n+\nx\nx\n−\n−\n2\n\n=\n−\np\n1\n( x\n1\n\nx\n=\n( 1 −\n0\n+ 1\n=\n1\n−\n−\np\np\n1\nx\n0\n(\n)\n)\np\nx\n2\n− )\n 1 , i . e . , \n52"
        },
        {
          "page": 53,
          "text": "Using Little’s formula\nThe Expected time in the system (W)\n\n \n \nThe Expected time in the Queue (w )\nq\nW =\n=\nL\n1\n−\n\n1\nW = W −\nq\n\n\n=  \n(−)\n53"
        }
      ],
      "summary": "Introduction to Queuing Theory\nA queuing system is a system in which customers arrive,\nwait if that service is not immediately available,\nreceive the necessary service, and then depart.\nCustomers Service Customers\narriving facility departing\nCharacteristics of any queuing system\n(A) The arrival pattern (distribution of arriving\ncustomers)\n(B) The service process (distribution of service time)\n(C) The number of parall"
    },
    {
      "id": "random-generation",
      "title": "5. Random Numbers and Random Observations",
      "pages": [
        54,
        61
      ],
      "topics": [
        "Pseudo-random numbers",
        "Congruential generators",
        "Allocation method",
        "Inverse transform method",
        "Insurance sales simulation"
      ],
      "pageRefs": [
        {
          "page": 54,
          "text": "Random Number Generation (Pseudo R.N.)\nThere are many algorithms for random number\ngenerations, but we are going to emphasize on the most\ncommon one which is known as a Congruential method.\nR = ( a R + c ) modulo T\ni+1 i\nwhere\nR is the new uniform random number\ni+1 ,\nR is the previous uniform random number\ni\na, c, and T are arbitrary constants\n54"
        },
        {
          "page": 55,
          "text": "Example\nFor a = 1, c = 4, T = 5, R0= 2(seed); generate 10 random\nnumbers.\nSolution\nR0 = 2\nR1= Rem[ {(1)(2) + 4}/5 ] = 1\nR2= Rem[ {(1)(1) + 4}/5 ] = 0\nR3= Rem[ {(1)(0) + 4}/5 ] = 4\nR4= Rem[ {(1)(4) + 4}/5 ] = 3\nR5= Rem[ {(1)(3) + 4}/5 ] = 2\nR6= Rem[ {(1)(2) + 4}/5 ] = 1\nR7= Rem[ {(1)(1) + 4}/5 ] = 0\nR8= Rem[ {(1)(0) + 4}/5 ] = 4\nR9= Rem[ {(1)(4) + 4}/5 ] = 3\nR10= Rem[ {(1)(3) + 4}/5 ] = 2\n55"
        },
        {
          "page": 56,
          "text": "Generation of a Random Observation\nFollowing a certain distribution\n1- For a Simple Discrete Distribution we use the\nallocation method, see the previous examples.\n2- For continuous Distribution we use the inverse method\nif and only if the distribution is reversible, see the\nfollowing examples.\nExample 1\nGenerate a random observation from the uniform\ndistribution between a and b, i;, e.,U(a,b)\n1 f(x)\nf (x) =\nb − a\nx − a\nF(x) =\nb − a\na\nx\nU (0,1) ⎯⎯→U (a,b)\nx − a\nR = F(x) = F(x)\nb − a\n1\n x = a + R(b − a)\nR\n1\ni.,e.x = F −1(R) R 2\nR\n3\n0\nx x x\na 1 2 3 b\nx\n56"
        },
        {
          "page": 57,
          "text": "Most important Example:\nGenerate Random Observations from Exponential\ndistribution with mean μ\nf (x) = e−x\nF(x) =1+ e−x\nR = F(x) =1+ e−x\nln(1− R)\nx =\n−\nln(1− R )\nso x = 1\n1 −\nln(1− R )\nx = 2\nf(x) 2 −\n.....\nwhereR ,R ,..., are U(0,1)\n1 2\nx\n1\nF(x)\nR1\nR2\nRR33\n00\nx\nx1 x2 x3\n57"
        },
        {
          "page": 58,
          "text": "Illustrative Example:\nSales of life insurance problem:\nFrom the previous sales history, each time a house call is\nmade:\n50% not interested in purchasing,\n50% willing for further discussions.\nAfter discussions ½ of time the visit will result in “No\nSale”, 1/3 of time will result in sale of 10,000 L.E. policy,\n1/6 of time will result in sale of 20,000 L.E. policy. Using\na simulated sample of 20 visits, determine the probability\nthat a sale is made and the expected policy value for\neach policy, assuming a sale is made.\n58"
        },
        {
          "page": 59,
          "text": "Insurance Example\n50% not interest 50% for further discussion\nGiven sale\n½ of time no sale\n0 ) 0 )\n0 0\n0 0\n0 0\nf\n3\no( e\nm\n1 f\n6\no( e\nm\n2\n1/it 1/it\nProbability of No sale=0.75\nProb. of sale=0.25\nTheoretical Solution:\nProbability of No Sale = 0.75\nProbability of Sale = 0.25\nPro(10000 policy | sale) =2/3 = 0.667\nPro(20000 policy | sale) =1/3 = 0.333\nExpected value = 0.667x10000 + 0.333x20000\n= 13333 L.E.\n59"
        },
        {
          "page": 60,
          "text": "Simulation of 20 insurance calls\nTrial Flip Interest Not Roll 0 10 20 Value\nInterest\n1 H X 4 X 10,000\n2 H X 4 X 10,000\n3 T X\n4 H X 1 X\n5 H X 2 X\n6 T X\n7 H X 3 X\n8 H X 6 X 20,000\n9 T X\n10 T X\n11 H X 2 X\n12 T X\n13 H X 3 X\n14 T X\n15 H X 6 X 20,000\n16 H X 4 X 10,000\n17 H X 2 X\n18 H X 4 X 10,000\n19 T X\n20 H X 6 X 20,000\n60"
        },
        {
          "page": 61,
          "text": "From the table, 13 of the visits will result in a “No sale”.\nP (No sale) = 13/20 = 0.65\nGiven Sale, we have 4x10,000 and 3x20,000 policies\nsoled so\nP(10000) = 4/7 = 0.5714\nP(20000) = 3/7 = 0.4286\nThe Expected Vale = 0.5714 x 10000 + 0.4286 x 20000\n= 14,286 L.E.\nComparison between Theoretical & Simulation\n(Validation):\nProb.of Prob.of Prob.of Prob.of Expected\nNo Sale Sale 10,000 20,000 Value\nSimulation 0.65 0.35 0.5714 0.4286 14,285\nTheoretical 0.75 0.25 0.667 0.3333 13,333\n61"
        }
      ],
      "summary": "Random Number Generation (Pseudo R.N.)\nThere are many algorithms for random number\ngenerations, but we are going to emphasize on the most\ncommon one which is known as a Congruential method.\nR = ( a R + c ) modulo T\ni+1 i\nwhere\nR is the new uniform random number\ni+1 ,\nR is the previous uniform random number\ni\na, c, and T are arbitrary constants\n54 Example\nFor a = 1, c = 4, T = 5, R0= 2(seed); generate 10 random\nnumber"
    },
    {
      "id": "discrete-simulation",
      "title": "6. Discrete-System Simulation",
      "pages": [
        62,
        73
      ],
      "topics": [
        "Simulation time and clock management",
        "Time-scan method",
        "Event-scan method",
        "Manufacturing and M/M/1 examples",
        "Collecting and recording simulation data"
      ],
      "pageRefs": [
        {
          "page": 62,
          "text": "Time Management Methods\nThere are two time references used in simulation:\n1) Simulation Time: The period of time simulated by\nthe model – 30min., 5years, 100 years whatever\ninterval the researcher is interested in. This time is\nreset to zero at the beginning of the simulation run\nand acts as a counter to the number of simulation\ntime units.\n2) Run time: The time that the computer takes to\nsimulate the period of interest.\nWe have two ways for time changes\n(periodic &Event Scan):\ni) The Periodic Scan or Fixed time increment\ntechnique: In this technique the simulation clock is\nadjusted by one predetermined uniform unit and\nthen examines the system to determine whether any\nevents occurred during that interval. If any occurred,\nthe event or events are simulated; otherwise no\naction is taken.\n62"
        },
        {
          "page": 63,
          "text": "The simulation clock is then advanced another unit,\nand the process is repeated. In this technique, the\nexact time of the occurrence of particular event is\nlargely ignored. All events that occur during a given\ninterval are treated as if these events occurred at the\nend of that interval.\nExample :\nConsider the simulation of a single-bay-\nservice station for a period of ten minutes. Assume\nthat the system is empty at the beginning and at the\nend of the period. Assume also that four customers\nare serviced, their arrivals occur at simulation times\n1.8, 3.2, 6.1 and 7.4, and that service completions\noccur at simulation times 2.6, 4.8, 7.3 and 8.1.\nIf a time interval of one minute is used, arrival events\nare denoted by A , A , A and A . While completion\n1 2 3 4\nevents are denoted by C , C , C and C (see the\n1 2 3 4\nfollowing figure.).\n63"
        },
        {
          "page": 64,
          "text": "A C A C A C A C\n1 1 2 2 3 3 4 4\n1.8 2.6 3.2 4.8 6.1 7.3 7.4 8.1\nS S S S S S S S S\nS S\n0 1 2 3 4 5 6 7 8\n9 10\nC and A are both considered to have occurred at clock\n3 4\ntime 8.0; although C actually occurred before A .\n3 4\nThe problem of periodic scan is that events\nseparated in time appear to occur simultaneously. In this\nexample at time period S – S the system appears to be\n7 8\nidle while actually it is not.\n• The big problem is to determine the length of the\ninterval to be used.\n• The time increment used in the periodic scan\napproach should be as small as possible to minimize\nthe possibility of lost information. But the smaller\nthe time unit, the longer the number of calculation\nnecessary to complete the simulation.\n64"
        },
        {
          "page": 65,
          "text": "Thus the actual run time of the simulation and hence\nthe cost of simulation is increased. So there is a trade-\noff between the precision and maximum run time.\nii ) The Event Scan\nIn this technique the clock is advanced by\nthe amount necessary to trigger the occurrence of the\nnext event. Thus the time advance intervals are of\nvariable lengths.\nWhile some information can be lost in the\nperiodic scan, the event scan avoids this problem;\nbecause the clock is advanced only to the next\noccurrence time.\nIn periodic scan, the exact occurrence time\nof events is not known, because each event is treated\nas if occurred at the end of the time interval in which\nit occurred.. This problem is overcome in Event Scan\napproach.\n65"
        },
        {
          "page": 66,
          "text": "Example\nA bank of machines in a manufacturing shop breaks down according to the\nfollowing inter arrival time distribution. The time it takes one repair person\nto complete the repair of a machine is given in the service time distribution.\nInter arrival P(X) Mapping Service P(X) Mapping\ntime (hours) of R.N. Time (hours) of R.N.\n0.5 0.30 00 – 29 0.5 0.25 00 – 24\n1.0 0.22 30 – 51 1.0 0.20 25 – 44\n1.5 0.16 52 – 67 2.0 0.25 45 – 69\n2.0 0.10 68 – 77 3.0 0.15 70 – 84\n3.0 0.14 78 – 91 4.0 0.10 85 – 94\n4.0 0.08 92 – 99 5.0 0.05 95 – 99\n1.00 1.00\nSimulate the breakdown of 5 machines. Calculate the average machine\ndowntime using two repair persons and the following random numbers\nsequence. Both repair persons cannot work on the same machine.\nR.N.: 30, 81, 02, 91, 51, 08, 28, 44, 86, 84, 29, 08, 37, 34, 99.\n66"
        },
        {
          "page": 67,
          "text": "Solution\nRN Interarrival Time of RN Service Repair Man1 Repair Man2 Waiting Down\nTime Arrival Time On Off On Off Time Time\n30 1.0 + 1.0 81 3 1 4 0 3\n02 0.5 1.5 91 4 1.5 5.5 0 4\n+\n51 1.0 + 2.5 08 0.5 4 4.5 1.5 2\n28 0.5 3.0 44 1 4.5 5.5 1.5 2.5\n+\n86 3.0 6.0 84 3 6 9 0 3\nTotal Down Time 14.5\nAverage Down Time = 14.5 / 5 = 2.9 hours.\n67"
        },
        {
          "page": 68,
          "text": "Example for a continuous distribution:\nSimulate a system M/M/1 with arrival rate λ = 20/h\nand service rate μ = 25/h. Assuming system\nempty at time zero.\n•Using time scan (periodic scan)\n•Event scan\nSolution:\n1. Using Time Scan :\nP (arrival in one minute period) = 1 – e-λt\n= 1 – e-1/3(1)\n= 0.281\nP (departure in one minute period) = 1 – e-5/12(1)\n= 0.341\nSo let 0 ≤ R.N. ≤ 0.281\nArrival,\n0 ≤ R.N. ≤ 0.341 Departure.\n68"
        },
        {
          "page": 69,
          "text": "Time Customer Random number Arrival Departure\nin min. In system Arrival Departure Yes/No Yes/No\n0 0 0.096 - Yes -\n1 1 0.569 0.665 No No\n2 1 0.764 0.842 No No\n3 1 0.492 0.224 No Yes\n4 0 0.950 - No -\n5 0 0.610 - No -\n6 0 0.145 - Yes -\n7 1 0.484 0.552 No No\n8 1 0.350 0.59 No No\n9 1 0.450 0.410 No Yes\n10 0 0.802 - No -\n69"
        },
        {
          "page": 70,
          "text": "2. Using Event Scan (Event Driven):\nThe time until next arrival is given by\n.\n.\n=\n=\n=\n−\n−\n− 1\nl\n3\nn\n2\nl\n( 1\nn\nl\n(\nn\n−\n1\n(\n5\n1\n−\n−\n)\n)\n)\n=\n=\n1\n3\n1\nm\n5\n2\ni n\nm\n.\ni n .\n\n\n\nX\nX\na\nd\nr\ne\nr\np\nR\nR\nR\nThe time until next departure is given by\n70"
        },
        {
          "page": 71,
          "text": "Time in Event Customer Random Number Min. until next Next\nmin. In system Arrival Departure Arr. Dep. Event\n0 0 0.096 - 0.303 - A\n0.303 A 1 0.569 0.665 2.525 2.625 A\n2.828 A 2 0.764 - 4.332 0.1 C\n2.928 C 1 - 0.842 4.232 4.428 A\n7.160 A 2 0.492 - 2.032 0.196 C\n7.356 C 1 - 0.224 1.836 0.609 C\n71"
        },
        {
          "page": 72,
          "text": "Example for discrete distribution:\nTwo-stage assembly line are producing a large product. There\nis no room in between the two line ; so the output of the first\nline is fed to the second line directly else the first line must\nwait until second line to be free. The service distribution for\nboth line are given below:\nService Time Freq. R.N. Time Freq. R.N\nseconds for 1st line Allocation for 2nd line Allocation\n10 4 00 – 03 4 00 - 07\n20 6 04 - 09 5 08 - 17\n30 10 10 – 19 6 18 - 29\n40 20 20 – 39 7 30 - 43\n50 40 40 – 79 10 44 - 63\n60 11 80 – 90 8 64 - 79\n70 5 91 – 95 6 80 - 91\n80 4 96 - 99 4 92 - 99\n50\n100\n72"
        },
        {
          "page": 73,
          "text": "Item First Line Waiting Second Line\nTime\nNo. R.N. Start Service Finish R.N. Start Service Finish\nTime Time Time Time Time Time\n1 56 00 50 50 83 50 70 120\n2 55 50 50 100 20 47 120 50 170\n3 84 120 60 180 08 180 20 200\n4 36 180 40 220 05 220 10 230\n5 26 220 40 260 42 260 40 300\n6 95 260 70 330 95 330 80 410\n7 66 330 50 380 30 17 410 20 430\n8 03 410 10 420 10 21 430 30 460\n9 57 430 50 480 31 480 40 520\n10 69 480 50 530 90 530 70 600\n470 60\n•The output rate average = 600/10 = 60 seconds\n•Utilization of 1st line = 470/530 = 88.7%\n•Utilization of 1nd line = 430/550 = 78.2%\n73"
        }
      ],
      "summary": "Time Management Methods\nThere are two time references used in simulation:\n1) Simulation Time: The period of time simulated by\nthe model – 30min., 5years, 100 years whatever\ninterval the researcher is interested in. This time is\nreset to zero at the beginning of the simulation run\nand acts as a counter to the number of simulation\ntime units.\n2) Run time: The time that the computer takes to\nsimulate the period of inter"
    }
  ],
  "sections": [
    {
      "id": "section-1",
      "title": "Section 1: Simulation Foundations",
      "kind": "pptx",
      "material": "materials/sim-week-1-section.pptx",
      "theme": "Introductory section deck covering simulation meaning, grading, and why simulation is useful.",
      "contentLabel": "slides",
      "itemCount": 16,
      "searchableCount": 16,
      "entries": [
        {
          "slide": 1,
          "text": "System modeling&simulation\nPrepared by:\nEng. Hossam Badran",
          "wordCount": 7
        },
        {
          "slide": 2,
          "text": "Grading\n4th week – lecture (10 marks)\n7th week – lecture (15 marks)\n7th week – section (5 marks)\nAssignments – section (5 marks)",
          "wordCount": 24
        },
        {
          "slide": 3,
          "text": "What is simulation?\nSimulation is a problem-solving technique that builds a model of a real system and uses experiments on that model to understand system behavior and predict future performance safely, without risking the real system.",
          "wordCount": 36
        },
        {
          "slide": 4,
          "text": "Why simulation?\nSimulation is a powerful problem-solving and analysis technique especially when:\n1. Real experimentation is impractical or impossible\nSome systems are too expensive, risky, dangerous, slow, or complex to test with real prototypes. Simulation lets you experiment virtually instead.\nExamples:\naircraft in dangerous conditions\nnuclear processes",
          "wordCount": 47
        },
        {
          "slide": 5,
          "text": "Why simulation?\n2. There’s uncertainty or randomness\nWhen a system involves random variables or complex interactions (like traffic flow, weather patterns, or human behavior), classical mathematics may not work. Simulation can still produce useful approximate insights.\n3. We want control over time\nSimulations can compress or expand time. For example, months of aircraft operation can be simulated in minutes, enabling rapid analysis.",
          "wordCount": 62
        },
        {
          "slide": 6,
          "text": "Why simulation?\n4. Safe “what-if” analysis\nSimulation lets you test multiple scenarios to see the effects of changes (e.g., adjusting parameters like speed, load, rules) without any real-world risk.",
          "wordCount": 29
        },
        {
          "slide": 7,
          "text": "Real-World Example: Crash Simulation\nThe Problem:\nTesting how a vehicle performs in a crash traditionally involved building multiple physical prototypes and crashing them with dummies. This is:\nexpensive\ntime-consuming\ndestructive to the prototype.\nMoreover, real crash tests can only explore a limited set of scenarios and conditions.",
          "wordCount": 47
        },
        {
          "slide": 8,
          "text": "The Simulation Solution\nModern automotive engineers use computer-based crash simulation software (e.g., tools like PAM-CRASH) to model the physics of a car and occupants under collision conditions. The software:\nuses a virtual model of the car with all relevant physics (materials, structures, joints),\nruns numerous simulated crash scenarios,\nmeasures predicted forces, deformation, and injury outcomes, and\nallows engineers to change design parameters and rerun simulations quickly.",
          "wordCount": 66
        },
        {
          "slide": 9,
          "text": "How It Helps\nBefore building any physical prototypes, simulation enables engineers to:\n-evaluate dozens or hundreds of crash scenarios\n-spot weak points in design\n-improve structural safety features (e.g., crumple zones)\n-reduce development costs\n-shorten the design cycle\n-enhance occupant protection and meet safety standards without as many real crashes.\nThis method has been widely adopted in the automotive industry globally and is now a key part of safety certification and design optimization.",
          "wordCount": 73
        },
        {
          "slide": 10,
          "text": "Problem 1\nUse the one-digit random number (6,3,5,0,8) to generate Random observations for:\n1-Throwing a fair coin\n2-Throwing a biased coin to head by 20%",
          "wordCount": 25
        },
        {
          "slide": 11,
          "text": "Solution-1\nOne digit RN 09 (10 numbers)\nS={H,T}\nSince coin is fair\nTherefore \t\tAllocation\nP(H)=0.5\t\t0,1,2,3,4\nP(T)=0.5\t\t5,6,7,8,9\nNo.of trials=no.of random numbers=5\nThen\n(6,3,5,0,8)---R.O--->(T,H,T,H,T)\nTheo.\nProb.",
          "wordCount": 26
        },
        {
          "slide": 12,
          "text": "Solution-1\nSimulated prob. of H=no. of repeating of H/no. of trials=2/5=0.4\nSimulated prob. of T=no. of repeating of T/no. of trials=3/5=0.6\nRelative Error=\nE(H)=\nE(T)=\nMeaning of 20%\nprobability increased or decreased by 20% of the theoritical probability\n(simulated probability is smaller or larger than theoritical prob. By 20%)",
          "wordCount": 49
        },
        {
          "slide": 13,
          "text": "Solution-2\nOne digit RN 09 (10 numbers)\nS={H,T}\nSince coin is unfair\nTherefore \t\tAllocation\nP(H)=0.7\t\t0,1,2,3,4,5,6\nP(T)=0.3\t\t7,8,9\nNo.of trials=no.of random numbers=5\nThen\n(6,3,5,0,8)---R.O--->(H,H,H,H,T)",
          "wordCount": 24
        },
        {
          "slide": 14,
          "text": "Solution-2\nSimulated prob. of H=no. of repeating of H/no. of trials=4/5=0.8\nSimulated prob. of T=no. of repeating of T/no. of trials=1/5=0.2\nRelative Error=\nE(H)=\nE(T)=",
          "wordCount": 25
        },
        {
          "slide": 15,
          "text": "Let’s try a Fair coin simulation program",
          "wordCount": 7
        },
        {
          "slide": 16,
          "text": "assignment\nWrite a \tC or C++ program to simulate the following and write an observation",
          "wordCount": 15
        }
      ],
      "summary": "System modeling&simulation\nPrepared by:\nEng. Hossam Badran Grading\n4th week – lecture (10 marks)\n7th week – lecture (15 marks)\n7th week – section (5 marks)\nAssignments – section (5 marks) What is simulation?\nSimulation is a problem-solving technique that builds a model of a real system and uses experiments on that model to understand system behavior and predict future performance safely, without risking the real syst"
    },
    {
      "id": "section-2",
      "title": "Section 2: Simulation Exercises",
      "kind": "pdf",
      "material": "materials/simulation-week-2-section.pdf",
      "theme": "Scanned section sheet for early simulation exercises.",
      "contentLabel": "pages",
      "itemCount": 5,
      "searchableCount": 0,
      "entries": [
        {
          "page": 1,
          "text": "",
          "wordCount": 0
        },
        {
          "page": 2,
          "text": "",
          "wordCount": 0
        },
        {
          "page": 3,
          "text": "",
          "wordCount": 0
        },
        {
          "page": 4,
          "text": "",
          "wordCount": 0
        },
        {
          "page": 5,
          "text": "",
          "wordCount": 0
        }
      ],
      "summary": "Scanned section sheet for early simulation exercises."
    },
    {
      "id": "section-3",
      "title": "Section 3: Newsboy Problem",
      "kind": "pdf",
      "material": "materials/simulation-section-3.pdf",
      "theme": "Demand distributions, random-number mapping, and profit analysis for the newsboy model.",
      "contentLabel": "pages",
      "itemCount": 2,
      "searchableCount": 2,
      "entries": [
        {
          "page": 1,
          "text": "Arab Academy for Science, Technology & Maritime Transport\nCollege of Computing and Information Technology\nCourse: System modelling and Simulation\nTeaching Assistant:Eng. Hossam Badran\nSection # 3\nProblem 1\nA news boy buys paperfor 15P.T.each and sells them for 25P.T.each unsold papers have no value in analyzing\npast sells it is found that three demand distribution exist, depending on news events in the papers. A good\ninteresting news day yield to many potential customer, typical and poor days yield to less interest. Historically\n20% of days have been“good”, 50%“typical”, 30%“Poor”,The demand distributions are summarized :\nTypesofnewdays\nDemand Good00-->19 Typical 20-->69 Poor70--> 99\n40 0.05 00 --> 04\n50 0.2 05 --> 24 0.03 00 -->02\n60 0.41 25 --> 65 0.07 03 -->09\n70 0.26 66 --> 91 0.28 10 -->37\n80 0.08 92-->99 0.3 38-->67 0.02 00 --> 01\n90 0.25 68-->92 0.15 02 --> 16\n100 0.07 93-->99 0.28 17 --> 44\n110 0.24 45 --> 68\n120 0.12 69 --> 80\n130 0.09 81 --> 89\n140 0.06 90 --> 95\n150 0.04 96 --> 99\nSimulate 10 days period and determine mean daily profit, max profit, min profit if he decides to buy 80\npapers each day. Use the following R.N :-\n09 65 69 66 57 64 84 24 92 22 49 50 61 01 45 48 48 45 52 35\nAnswer\nNote : We have two digit random numbers that means that range of numbers 00 →99\nGood take numbers from 00 → 19 ,Typical take numbers from 20 → 69 Poor take numbers\nfrom 70 → 99, 80 paper each day → Max buy 80 paper per day\nNote: we take 2 Random number first one to determine the type of new day , The second one to\ndetermine demand “ how much he sell in that day “.\n1st Day :\nRN =09 → Good\nRN= 65 → demand = 60\nSimulation (Section (3)) Page 1 of 2",
          "wordCount": 325
        },
        {
          "page": 2,
          "text": "Profit = 60*25 – 80*15 = 300 P.T\n2nd Day :\nRN= 69 → Typical\nRN = 66 →demand = 80\nProfit = 80*25 – 80*15 = 800 P.T\n3rd Day\nRN = 57 → Typical\nRN = 64 → demand = 80\nProfit = 80*25 – 80*15 = 800 P.T\n4th Day :\nRN= 84 → poor\nRN =24 → demand = 100 = 80 → because max of buy is 80 paper each day\nProfit = 80*25 – 80*15 = 800 P.T ; we calculate with demand 80 NOT 100.\n5th Day :\nRN= 92 → poor\nRN = 22→ demand = 100 = 80 → because max of buy is 80 paper each day\nProfit = 80*25 – 80*15 = 800 P.T ; we calculate with demand 80 NOT 100.\n6th Day :\nRN= 49 → Typical RN =50 →\ndemand = 80 Profit = 80*25 –\n80*15 = 800 P.T\n7th Day :\nRN= 61 → Typical\nRN= 01 → demand = 50\nProfit = 50*25 – 80*15 = 50 P.T\n8th Day :\nRN = 45 → Typical\nRN= 48 → demand = 80\nProfit = 80*25 – 80*15 = 800 P.T\n9th Day :\nRN = 48 → Typical\nRN= 45 → demand = 80\nProfit = 80*25 – 80*15 = 800 P.T\n10th Day :\nRN= 52 → Typical\nRN= 35 → demand = 70\nProfit = 70*25 – 80*15 = 550 P.T\n• MIN profit we found it in 7th day which is 50 P.T\n• MAX profit is 800 P.T\n• Mean daily profit 300+800+800+800+800+800+50+800+800+550/10=650 PT\nSimulation (Section (3)) Page 2 of 2",
          "wordCount": 272
        }
      ],
      "summary": "Arab Academy for Science, Technology & Maritime Transport\nCollege of Computing and Information Technology\nCourse: System modelling and Simulation\nTeaching Assistant:Eng. Hossam Badran\nSection # 3\nProblem 1\nA news boy buys paperfor 15P.T.each and sells them for 25P.T.each unsold papers have no value in analyzing\npast sells it is found that three demand distribution exist, depending on news events in the papers. A good"
    },
    {
      "id": "accident-problem",
      "title": "Section 4: Accident Penalty Problem",
      "kind": "pdf",
      "material": "materials/accident-problem.pdf",
      "theme": "Daily accident occurrence and penalty simulation over 12 days.",
      "contentLabel": "pages",
      "itemCount": 6,
      "searchableCount": 6,
      "entries": [
        {
          "page": 1,
          "text": "Computer Modeling & Simulation Problems\nThe owner of car renting company, pays a penalty for each accident according\nto the following distribution:-\nAmount of money/accident Probability\n50 L.E 0.30\n100 L.E 0.30\n150 L.E 0.25\n200 L.E 0.15\nThe accidents occur with the probability of 30% (number of accidents per day\nis up to 6). Number of accidents per day has the following distribution:-\nNumber of accidents Probability\n2 0.05\n3 0.15\n4 0.40\n5 0.25\n6 0.15\n1",
          "wordCount": 79
        },
        {
          "page": 2,
          "text": "Simulate 12 days. Based on your simulation what is the minimum\nmoney the owner must have to cover the penalties occurred per day. Use the\nfollowing R.N:\n92 44 99 15 97 21 47 80 28 87 13 33 42 84 27 64 59 33 84 00 10 50\n51 09 31 12 94 96 97 77\n2",
          "wordCount": 58
        },
        {
          "page": 3,
          "text": "Solution:\nThe probability accidents occur is 30% è 00 --> 29\nThe probability accidents don’t occur is 70% è 30 --> 99\nNumber of accidents Probability\n2 0.05 00—04\n3 0.15 05—19\n4 0.40 20—59\n5 0.25 60—84\n6 0.15 85—99\nAmount of money/accident Probability\n50 L.E 0.30 00—29\n100 L.E 0.30 30—59\n150 L.E 0.25 60—84\n200 L.E 0.15 85—99\n3",
          "wordCount": 62
        },
        {
          "page": 4,
          "text": "92 44 99 15 97 21 47 80 28 87 13 33 42 84 27 64 59 33 84 00 10 50\n51 09 31 12 94 96 97 77\n1st Day:\nRN: 92 à NO ACCIDENT\n2ND Day:\nRN: 44 à NO ACCIDENT\n3RD Day:\nRN: 99 à NO ACCIDENT\n4TH Day:\nRN: 15 àACCIDENT\nRN: 97 à Number of accidents = 6 accidents.\nà 1th Accident:\nRN: 21 à Amount of money paid= 50 L.E\nà 2ND Accident:\nRN: 47 à Amount of money paid= 100 L.E\nà3rd Accident:\nRN: 80à Amount of money paid= 150 L.E\nà4th Accident:\nRN: 28 àAmount of money paid = 50 L.E\nà5th Accident:\nRN: 87 à Amount of money paid = 200 L.E\nà6th Accident:\n4",
          "wordCount": 125
        },
        {
          "page": 5,
          "text": "RN: 13 àAmount of money paid= 50 L.E\n• Then the total amount paid in this day = 50 + 100 + 150 + 50 + 200 + 50\n= 600 L.E\n5th Day:\nRN: 33 à NO ACCIDENT\n6TH Day:\nRN: 42 àNO ACCIDENT\n7th Day:\nRN: 84 à NO ACCIDENT\n8th Day:\nRN: 27 àACCIDENT.\nRN: 64 à Number of accidents = 5 accidents.\n1st Accident:\nRN: 59 àAmount of money paid = 100 L.E\n2nd Accident:\nRN: 33 à Amount of money paid = 100 L.E\n3rd Accident:\nRN: 84 à Amount of money paid = 150 L.E\n4th Accident:\nRN: 00 à Amount of money paid = 50 L.E\n5th Accident:\nRN: 10 à Amount of money paid = 50 L.E\n5",
          "wordCount": 126
        },
        {
          "page": 6,
          "text": "• Then the total amount paid in this day = 100 + 100 + 150 + 50 + 50 =\n450 L.E\n9TH Day:\nRN: 50 à NO ACCIDENT.\n10TH Day:\nRN: 51 à NO ACCIDENT.\n11TH Day:\nRN: 09 à ACCIDENT.\nRN: 31 à Number of accidents = 4 accidents\nà1st Accident:\nRN: 12 à Amount of money paid= 50 L.E\nà2nd Accident:\nRN: 94 à Amount of money paid= 200 L.E\nà3rd Accident:\nRN: 96 à Amount of money paid= 200 L.E\nà4th Accident:\nRN: 97 à Amount of money paid= 200 L.E\n• Then the total amount paid in this day = 50 + 200 + 200 + 200 = 650 L.E\n12th Day:\nRN: 77 à NO ACCIDENT\nØ Based on the above simulation :- The minimum money the owner must\nhave to cover the penalties occurred per day (The maximum paid\nmoney in all days)\n= 650 L.E\n6",
          "wordCount": 154
        }
      ],
      "summary": "Computer Modeling & Simulation Problems\nThe owner of car renting company, pays a penalty for each accident according\nto the following distribution:-\nAmount of money/accident Probability\n50 L.E 0.30\n100 L.E 0.30\n150 L.E 0.25\n200 L.E 0.15\nThe accidents occur with the probability of 30% (number of accidents per day\nis up to 6). Number of accidents per day has the following distribution:-\nNumber of accidents Probability"
    },
    {
      "id": "football-problem",
      "title": "Section 4: Football Injury Problem",
      "kind": "pdf",
      "material": "materials/football-problem.pdf",
      "theme": "Random major/minor injuries and running-back stock over a 10-game season.",
      "contentLabel": "pages",
      "itemCount": 2,
      "searchableCount": 2,
      "entries": [
        {
          "page": 1,
          "text": "Computer Modeling & Simulation Problems\nProfessional football coach has six running backs on his squad. He wants to\nevaluate how injuries might affect his stocks of running backs. A minor injury\ncauses a player to be removed from the game and miss only the next game. A\nmajor injury puts the player out of action for the rest of the season. The\nprobability of a major in a game is 0.05. There is at most one major injury per\ngame. The probability of minor injury per game is:\nNumber of injury Probability\n0 0.2\n1 0.5\n2 0.22\n3 0.05\n4 0.025\n5 0.005\nInjuries seem to happen in a completely random pattern over the season. A\nseason is 10 games. Using the following random number, simulate the\nfluctuating in the coach’s stock of running backs over the season. Assume that\nhe hires no additional running backs during the season:-\nR.N:\n044 392 898 615 986 959 558 353 577 866 305 813 024 189 878 023\n285 442 862 848 060 131 963 874 805 105 452 .\n1",
          "wordCount": 180
        },
        {
          "page": 2,
          "text": "Solution:\nNumber of injury Probability\n0 0.200 000 à 199\n1 0.500 200 à 699\n2 0.220 700 à 919\n3 0.050 920 à 969\n4 0.025 970 à 994\n5 0.005 995 à 999\n- Note we have three digit random numbers that means numbers range 000 à 999 (\n1000 integer numbers )\n- Probability of major 0.05 ( 000 à 049 ) take 50 number from 1000\nThen probability of not having major is the remaining numbers 050 à 999\n- There is at most one major injury per game.\nGame # No. of R.N YES/NO R.N No. of STOCK\nplayers major minor minor\n1 6 044 YES 392 1 4\n2 4 898 NO 615 1 3\n3 4 986 NO 959 3 1\n4 2 558 NO 353 1 1\n5 4 577 NO 866 2 2\n6 3 305 NO 813 2 1\n7 3 024 YES 189 0 2\n8 4 878 NO 023 0 4\n9 4 285 NO 442 1 3\n10 3 862 NO 848 2 1\n2",
          "wordCount": 178
        }
      ],
      "summary": "Computer Modeling & Simulation Problems\nProfessional football coach has six running backs on his squad. He wants to\nevaluate how injuries might affect his stocks of running backs. A minor injury\ncauses a player to be removed from the game and miss only the next game. A\nmajor injury puts the player out of action for the rest of the season. The\nprobability of a major in a game is 0.05. There is at most one major injury"
    },
    {
      "id": "section-5",
      "title": "Section 5: Mean, Variance, and CDF",
      "kind": "pdf",
      "material": "materials/simulation-section-5.pdf",
      "theme": "Expected value, variance, discrete distributions, CDF derivation, and random observations.",
      "contentLabel": "pages",
      "itemCount": 2,
      "searchableCount": 2,
      "entries": [
        {
          "page": 1,
          "text": "Simulation\nSection # 5\nProblem 1\nWrite down the mean and variance for discrete and continuous distributions.\nAnswer\n• Discrete distribution :-\nMean (Expected value) :- E(X) =\nVariance :- V(X) =\n1. Continuous distribution :-\nMean (Expected value) :- E(X) =\nVariance :- V(X) =\nProblem 2\nDetermine mean and variance for tossing a single die, let X a random variable that counts the spots of the side\nfacing up, it follows the following probability :\nX 1 2 3 4 5 6\nP(X=x) 1/21 2/21 3/21 4/21 5/21 6/21\nAnswer\nMean (Expected value):-\nE(X) = (1)(1/21) + (2)(2/21) + (3)(3/21) + (4)(4/21) + (5)(5/21) + (6)(6/21) = 91/21\nVariance V(X):-\n= (1)2(1/21) + (2)2(2/21) + (3)2(3/21) + (4)2(4/21) + (5)2(5/21) + (6)2(6/21) = 21\nV(X) = 21 – (91/21)2 = 2.222\nProblem 3\nDrive the CDF of a distribution whose p.d.f is given by\nf(x) = 1/200(x-20) 20<=x<=40\n0 otherwise\nAlso get 3 R.Os following the above distribution using the following R.N (0.49 , 0.64 , 0.25)\nAnswer\na-To get CDF :\nSimulation (Section (5)) Page 1 of 2",
          "wordCount": 181
        },
        {
          "page": 2,
          "text": "F(x)= f(x) dx\nF(x) = =\n2 x\n= .\n20\nF(x) when x=x 2\nF(x=x) =\nF(X) when x=20\nF(x = 20)= 0\n2\nF(x) = F(x) - F(20)=\n2\nF(x) =\nTo get random observation(R.O) R=F(X)\n2\nR = è 400 R = (x - 20)2 è 20 = x - 20\nx = 20 + 20\nWhen x = 20\n20=20 +20\n=0 ------> R = 0\nWhen x = 40\n40=20 +20 ------> R = 1 Then 0≤R≤1\nTo get R.O :-\nR.N : 0.49 -----> x = 20 + 20 = 34 , 0≤R≤1 20≤x≤40\n1\nR.N: 0.64 -----> x = 20 + 20 = 36 , 0≤R≤1 20≤x≤40\n2\nR.N: 0.25 -----> x = 20 + 20 = 30 , 0≤R≤1 20≤x≤40\n3\nà Note : X must be in that range 20≤x≤40\nSimulation (Section (5)) Page 2 of 2",
          "wordCount": 146
        }
      ],
      "summary": "Simulation\nSection # 5\nProblem 1\nWrite down the mean and variance for discrete and continuous distributions.\nAnswer\n• Discrete distribution :-\nMean (Expected value) :- E(X) =\nVariance :- V(X) =\n1. Continuous distribution :-\nMean (Expected value) :- E(X) =\nVariance :- V(X) =\nProblem 2\nDetermine mean and variance for tossing a single die, let X a random variable that counts the spots of the side\nfacing up, it follows t"
    },
    {
      "id": "section-5-scanned",
      "title": "Section 5: Additional Scanned Sheet",
      "kind": "pdf",
      "material": "materials/section-5-simulation-scanned.pdf",
      "theme": "Original scanned section material preserved as the source file.",
      "contentLabel": "pages",
      "itemCount": 8,
      "searchableCount": 0,
      "entries": [
        {
          "page": 1,
          "text": "",
          "wordCount": 0
        },
        {
          "page": 2,
          "text": "",
          "wordCount": 0
        },
        {
          "page": 3,
          "text": "",
          "wordCount": 0
        },
        {
          "page": 4,
          "text": "",
          "wordCount": 0
        },
        {
          "page": 5,
          "text": "",
          "wordCount": 0
        },
        {
          "page": 6,
          "text": "",
          "wordCount": 0
        },
        {
          "page": 7,
          "text": "",
          "wordCount": 0
        },
        {
          "page": 8,
          "text": "",
          "wordCount": 0
        }
      ],
      "summary": "Original scanned section material preserved as the source file."
    },
    {
      "id": "section-6-scanned",
      "title": "Section 6: Scanned Simulation Sheet",
      "kind": "pdf",
      "material": "materials/section-6-simulation-scanned.pdf",
      "theme": "Original scanned section material preserved as the source file.",
      "contentLabel": "pages",
      "itemCount": 4,
      "searchableCount": 0,
      "entries": [
        {
          "page": 1,
          "text": "",
          "wordCount": 0
        },
        {
          "page": 2,
          "text": "",
          "wordCount": 0
        },
        {
          "page": 3,
          "text": "",
          "wordCount": 0
        },
        {
          "page": 4,
          "text": "",
          "wordCount": 0
        }
      ],
      "summary": "Original scanned section material preserved as the source file."
    },
    {
      "id": "section-7",
      "title": "Section 7: Distribution-Based Random Observations",
      "kind": "pdf",
      "material": "materials/simulation-section-7.pdf",
      "theme": "Uniform and exponential CDF derivations plus mixed-distribution random observations.",
      "contentLabel": "pages",
      "itemCount": 3,
      "searchableCount": 3,
      "entries": [
        {
          "page": 1,
          "text": "Computer Modelling & Simulation\nSection # 6\nProblem 1\nDerive the CDF of Exp(µ) and U(a,b), also derive equation for the Random Observation (R.O) of above\ndistribution.\nAnswer\n• Uniform distribution U(a,b):\nCDF:-\npdf : f(x) = a ≤ x ≤ b\nThen CDF : F(X) = = = . x |\nF(x) – F(a) = –\nF(x) = a ≤ x ≤ b\n“CDF”\nR.O equation:-\nR=F(x)\nR =\nx – a = R(b – a)\nx = R ( b – a ) + a 0 ≤ R ≤ 1 “R.O”\n• Exponential distribution Exp(µ):\nCDF:-\npdf : f(x) = µe-µx 0≤ x ≤ ∞\nSimulation (Section (6)) Page 1 of 3",
          "wordCount": 114
        },
        {
          "page": 2,
          "text": "Then CDF : F(X) = = µ = µ . | = - e-µx |\nF( X ) = F(x) — F(0) = — e-µx — (— 1)= — e-µx +1 0≤ x ≤ ∞\n• TO get R.O equation:-\nF(x) = 1 — e-µx\n• R=F(x) “CDF”\nR = 1 — e-µx\ne-µx = 1 — R\nln e-µx = ln(1 — R)\n-µx = ln(1— R) ----->\n“R.O”\nx = , 0 ≤ R ≤ 1\nProblem 2\n• Generate 4 R.O from the following distribution: the random variables has p(x=0)=0.4,given x≠0 it has a\nuniform distribution between -25 and 20.Use the following Random Numbers 1,5,3,7,4,2,1,1\n• Generate 4 R.N observation from a variable follows a U(40,50) with probability 0.5 else it has a uniform\ndistribution between -25 and 25 . use the following R.N:125,505,553,997,117,009,888,444\nAnswer\n• R.N 0 à9\nP(x=0) = 0.4 0 à3\nP(x≠0) = 0.6 4 à9\nU(-25,20)\nX=R(b-a)+a 0≤R≤1\nX=R(20+25)-25\nX=45R-25 , 0≤R≤1\nà R.O:\n1) RN=1 , X1 = 0\n2) RN=5 , X2≠0\nRN=3, X2=45.3/10-25=-23/2=-11.5\n3) RN=7, X3≠0\nRN=4, X3=45.4/10-25=-7\n4) RN=2 , X4=0\n• U(40,50) 0.5 000 499 , U(-25,25) 0.5 500 999\nWhen U(40,50)\nSimulation (Section (6)) Page 2 of 3",
          "wordCount": 201
        },
        {
          "page": 3,
          "text": "X=R(b-a) + a a ≤x ≤ b\nX=R(50-40) + 40\nX=10R+40 0 ≤R ≤ 1 , 40 ≤x ≤ 50\nWhen U(-25,25)\nX=R(b-a) + a a ≤x ≤ b\nX=R(25 + 25) -25\nX=50R – 25 0 ≤R ≤ 1 , -25 ≤x ≤ 25\nTo get 4 random observations:\n1) R=125 000 499\nR= 505/1000 , R must be in that range 0 ≤R ≤ 1\nX=10R+40\nX1= (10 *505/1000) + 40= 45.05\nx belongs to in that range 40 ≤x ≤ 50\n2) R=553 500 999\nR= 997/1000 , R must be in that range 0 ≤R ≤ 1\nX=50 R – 25\nX2=( 50 *997/1000 ) – 25= 24.85\nx belongs to that range -25 ≤x ≤ 25\n3) R=117 000 499\nR= 009/1000 , R must be in that range 0 ≤R ≤ 1\nX=10R+40\nX3=10* +40= 40.09\nx belongs to that range 40 ≤x ≤ 50\n4) R= 888\nR= 444/1000 R must be in that range 0 ≤R ≤ 1\nX=50R – 25\nX4= (50 * 444/1000) - 25 = -2.8\nx belongs to that range -25 ≤x ≤ 25\nSimulation (Section (6)) Page 3 of 3",
          "wordCount": 193
        }
      ],
      "summary": "Computer Modelling & Simulation\nSection # 6\nProblem 1\nDerive the CDF of Exp(µ) and U(a,b), also derive equation for the Random Observation (R.O) of above\ndistribution.\nAnswer\n• Uniform distribution U(a,b):\nCDF:-\npdf : f(x) = a ≤ x ≤ b\nThen CDF : F(X) = = = . x |\nF(x) – F(a) = –\nF(x) = a ≤ x ≤ b\n“CDF”\nR.O equation:-\nR=F(x)\nR =\nx – a = R(b – a)\nx = R ( b – a ) + a 0 ≤ R ≤ 1 “R.O”\n• Exponential distribution Exp(µ):\nCDF:"
    }
  ]
};
