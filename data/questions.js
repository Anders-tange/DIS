// data/questions.js
const questions = [
    {
      question: 'Hvad bør du gøre, hvis du modtager en mistænkelig e-mail fra en ukendt afsender?',
      options: [
        'Åbne e-mailen og klikke på linket',
        'Slette e-mailen uden at åbne den',
        'Videregive den til en kollega',
        'Besvare e-mailen og bede om flere detaljer',
      ],
      correctAnswer: 'Slette e-mailen uden at åbne den',
    },
    {
      question: 'Hvad er den bedste praksis for at oprette sikre adgangskoder?',
      options: [
        'Brug af personlige oplysninger som fødselsdato',
        'Genbrug af samme adgangskode på tværs af flere konti',
        'Brug af en kombination af bogstaver, tal og symboler',
        'Skrive adgangskoden ned på en note ved computeren',
      ],
      correctAnswer: 'Brug af en kombination af bogstaver, tal og symboler',
    },
    // Tilføj flere spørgsmål efter behov
    {
        question: 'Hvad er formålet med phishing-angreb?',
        options: [
            'At stjæle personlige oplysninger',
            'At teste sikkerheden i et netværk',
            'At sende spam-e-mails',
            'At opdatere softwaren på en computer',
        ],
        correctAnswer: 'At stjæle personlige oplysninger',
        },
        {
        question: 'Hvad er et almindeligt tegn på et malware-angreb?',
        options: [
            'Hurtigere computerhastighed',
            'Færre pop op-vinduer',
            'Mistænkelige filer eller programmer',
            'Bedre internetforbindelse',
        ],
        correctAnswer: 'Mistænkelige filer eller programmer',
        },
  ];
  
  export default questions;
  