//SUPLEMENTOS AGORA

const supAgora = {
  supAGOPT: [
    { material: "SERIE 1", precio: 371 },
    { material: "SERIE 2", precio: 384 },
    { material: "SERIE 3", precio: 398 },
    { material: "SERIE 4", precio: 412 },
    { material: "SERIE 5", precio: 432 },
    { material: "SERIE 6", precio: 451 },
    { material: "SERIE 7", precio: 479 },
  ],
};

const posapiesAgora = [
  {
    id: "None",
    title: "---Sin posapies seleccionado--",
    imageUrl: "..",
  },
  {
    id: "AGOPT",
    title: "AGOPT Posapiés terminal (108x60 cm) ",
    price: supAgora.supAGOPT,
    imageUrl:
      "https://francokohler.github.io/Presupuestadora/assets/MODELOS/AGORA/AGOPT.png",
    medida: 60,
  },
];

//SUPLEMENTOS ALPHA
const supAlpha = {
  supALPPG: [
    { material: "SERIE 1", precio: 327 },
    { material: "SERIE 2", precio: 341 },
    { material: "SERIE 3", precio: 356 },
    { material: "SERIE 4", precio: 369 },
    { material: "SERIE 5", precio: 390 },
    { material: "SERIE 6", precio: 410 },
    { material: "SERIE 7", precio: 435 },
    { material: "PIEL D", precio: 675 },
  ],
  supALPPMA: [
    { material: "SERIE 1", precio: 342 },
    { material: "SERIE 2", precio: 356 },
    { material: "SERIE 3", precio: 371 },
    { material: "SERIE 4", precio: 384 },
    { material: "SERIE 5", precio: 405 },
    { material: "SERIE 6", precio: 426 },
    { material: "SERIE 7", precio: 452 },
    { material: "PIEL D", precio: 688 },
  ],
  supALPPMD: [
    { material: "SERIE 1", precio: 317 },
    { material: "SERIE 2", precio: 331 },
    { material: "SERIE 3", precio: 345 },
    { material: "SERIE 4", precio: 359 },
    { material: "SERIE 5", precio: 380 },
    { material: "SERIE 6", precio: 401 },
    { material: "SERIE 7", precio: 425 },
    { material: "PIEL D", precio: 667 },
  ],
  supALPPXL: [
    { material: "SERIE 1", precio: 364 },
    { material: "SERIE 2", precio: 377 },
    { material: "SERIE 3", precio: 392 },
    { material: "SERIE 4", precio: 406 },
    { material: "SERIE 5", precio: 426 },
    { material: "SERIE 6", precio: 447 },
    { material: "SERIE 7", precio: 474 },
    { material: "PIEL D", precio: 706 },
  ],
};
const posapiesAlpha = [
  {
    id: "None",
    title: "---Sin suplemento seleccionado--",
  },
  {
    id: "ALPPG",
    title: "ALPPG POSAPIES GRANDE (80X60)",
    price: supAlpha.supALPPG,
  },
  {
    id: "ALPPMA",
    title: "ALPPMA POSAPIES MAXI (90X60)",
    price: supAlpha.supALPPMA,
  },
  {
    id: "ALPPMD",
    title: "ALPPMD POSAPIES MEDIANO (70X60)",
    price: supAlpha.supALPPMD,
  },
  {
    id: "ALPPXL",
    title: "ALPPXL POSAPIES XL (110X60)",
    price: supAlpha.supALPPXL,
  },
];

//POSAPIES BARINE
const supBarine = {
  supBARPR100: [
    { material: "SERIE 1", precio: 390 },
    { material: "SERIE 2", precio: 409 },
    { material: "SERIE 3", precio: 428 },
    { material: "SERIE 4", precio: 446 },
    { material: "SERIE 5", precio: 473 },
    { material: "SERIE 6", precio: 502 },
    { material: "SERIE 7", precio: 532 },
    { material: "PIEL B", precio: 531 },
    { material: "PIEL D", precio: 667 },
  ],
  supBARPR80: [
    { material: "SERIE 1", precio: 358 },
    { material: "SERIE 2", precio: 376 },
    { material: "SERIE 3", precio: 396 },
    { material: "SERIE 4", precio: 414 },
    { material: "SERIE 5", precio: 441 },
    { material: "SERIE 6", precio: 469 },
    { material: "SERIE 7", precio: 497 },
    { material: "PIEL B", precio: 470 },
    { material: "PIEL D", precio: 583 },
  ],
}; //POSAPIES BARINE
const posapiesBarine = [
  {
    id: "None",
    title: "---Sin suplemento seleccionado--",
  },
  {
    id: "BARPR100",
    title: "BARPR100 POSAPIES 100X60 ",
    price: supBarine.supBARPR100,
  },
  {
    id: "BARPR60",
    title: "BARPR60 POSAPIES 800X60 ",
    price: supBarine.supBARPR80,
  },
];

//POSAPIES MEMPHIS
const supMemphis = {
  supMEMPXL: [
    { material: "SERIE 1", precio: 316 },
    { material: "SERIE 2", precio: 328 },
    { material: "SERIE 3", precio: 341 },
    { material: "SERIE 4", precio: 353 },
    { material: "SERIE 5", precio: 372 },
    { material: "SERIE 6", precio: 391 },
    { material: "SERIE 7", precio: 414 },
    { material: "PIEL D", precio: 640 },
  ],
  supMEMPMA: [
    { material: "SERIE 1", precio: 295 },
    { material: "SERIE 2", precio: 308 },
    { material: "SERIE 3", precio: 320 },
    { material: "SERIE 4", precio: 333 },
    { material: "SERIE 5", precio: 351 },
    { material: "SERIE 6", precio: 371 },
    { material: "SERIE 7", precio: 393 },
    { material: "PIEL D", precio: 621 },
  ],
}; //POSAPIES MEMPHIS
const posapiesMemphis = [
  {
    id: "None",
    title: "---Sin suplemento seleccionado--",
  },
  {
    id: "MEMPXL",
    title: "MEMPXL Posapiés XL (110 x 60 cm) ",
    price: supMemphis.supMEMPXL,
  },
  {
    id: "MEMPMA",
    title: "MEMPMA Posapiés maxi (90 x 60 cm) ",
    price: supMemphis.supMEMPMA,
  },
  {
    id: "MEMPGR",
    title: "MEMPGR Posapiés grande (80 x 60 cm) ",
    price: supMemphis.supMEMPMA,
  },
];

/*----------------POSAPIES TUCSON--------------*/
//POSAPIES TUCSON
const supTUCSON = {
  comunTUCPOSXL: [
    { material: "SERIE 1", precio: 388 },
    { material: "SERIE 2", precio: 402 },
    { material: "SERIE 3", precio: 417 },
    { material: "SERIE 4", precio: 432 },
    { material: "SERIE 5", precio: 455 },
    { material: "SERIE 6", precio: 478 },
    { material: "SERIE 7", precio: 506 },
    { material: "PROMO", precio: 561 },
    { material: "PIEL A", precio: 593 },
    { material: "PIEL B", precio: 638 },
    { material: "PIEL C", precio: 715 },
    { material: "PIEL D", precio: 804 },
  ],
  comunTUCPOS104: [
    { material: "SERIE 1", precio: 470 },
    { material: "SERIE 2", precio: 494 },
    { material: "SERIE 3", precio: 518 },
    { material: "SERIE 4", precio: 541 },
    { material: "SERIE 5", precio: 578 },
    { material: "SERIE 6", precio: 613 },
    { material: "SERIE 7", precio: 650 },
    { material: "PROMO", precio: 719 },
    { material: "PIEL A", precio: 772 },
    { material: "PIEL B", precio: 841 },
    { material: "PIEL C", precio: 959 },
    { material: "PIEL D", precio: 1088 },
  ],
  comunTUCPOS114: [
    { material: "SERIE 1", precio: 500 },
    { material: "SERIE 2", precio: 525 },
    { material: "SERIE 3", precio: 551 },
    { material: "SERIE 4", precio: 577 },
    { material: "SERIE 5", precio: 615 },
    { material: "SERIE 6", precio: 654 },
    { material: "SERIE 7", precio: 693 },
    { material: "PROMO", precio: 735 },
    { material: "PIEL A", precio: 812 },
    { material: "PIEL B", precio: 885 },
    { material: "PIEL C", precio: 1010 },
    { material: "PIEL D", precio: 1156 },
  ],
  comunTUCPOS124: [
    { material: "SERIE 1", precio: 536 },
    { material: "SERIE 2", precio: 563 },
    { material: "SERIE 3", precio: 590 },
    { material: "SERIE 4", precio: 616 },
    { material: "SERIE 5", precio: 657 },
    { material: "SERIE 6", precio: 697 },
    { material: "SERIE 7", precio: 738 },
    { material: "PROMO", precio: 748 },
    { material: "PIEL A", precio: 860 },
    { material: "PIEL B", precio: 936 },
    { material: "PIEL C", precio: 1067 },
    { material: "PIEL D", precio: 1212 },
  ],
};
const posapiesTucson = [
  {
    id: "None",
    title: "---Sin posapies seleccionado--",
    imageUrl: "..",
  },
  {
    id: "TUCPOSXL",
    title: "TUCPOSXL POSAPIES XL (110X60)",
    price: supTUCSON.comunTUCPOSXL,
    medida: 110,
  },
  {
    id: "TUCPOS104",
    title: "TUCPOS104 POSAPIES MEDIANO (104) CON BRAZO",
    price: supTUCSON.comunTUCPOS104,
    medida: 104,
  },
  {
    id: "TUCPOS114",
    title: "TUCPOS114 POSAPIES GRANDE (114) CON BRAZO",
    price: supTUCSON.comunTUCPOS114,
    medida: 114,
  },
  {
    id: "TUCPOS124",
    title: "TUCPOS124 POSAPIES MAXI (124) CON BRAZO",
    price: supTUCSON.comunTUCPOS124,
    medida: 124,
  },
];

/*-------POSAPIES BERTINA y LT--------*/
const supBertina = {
  comunBERPG: [
    { material: "SERIE 1", precio: 345 },
    { material: "SERIE 2", precio: 363 },
    { material: "SERIE 3", precio: 381 },
    { material: "SERIE 4", precio: 400 },
    { material: "SERIE 5", precio: 427 },
    { material: "SERIE 6", precio: 454 },
    { material: "SERIE 7", precio: 481 },
  ],
  comunBERP80CB: [
    { material: "SERIE 1", precio: 450 },
    { material: "SERIE 2", precio: 476 },
    { material: "SERIE 3", precio: 503 },
    { material: "SERIE 4", precio: 530 },
    { material: "SERIE 5", precio: 570 },
    { material: "SERIE 6", precio: 609 },
    { material: "SERIE 7", precio: 646 },
  ],
  comunBERP8060: [
    { material: "SERIE 1", precio: 315 },
    { material: "SERIE 2", precio: 332 },
    { material: "SERIE 3", precio: 349 },
    { material: "SERIE 4", precio: 367 },
    { material: "SERIE 5", precio: 393 },
    { material: "SERIE 6", precio: 420 },
    { material: "SERIE 7", precio: 445 },
  ],
};
const posapiesBertinas = [
  {
    id: "None",
    title: "---Sin pieza seleccionada--",
    imageUrl: "..",
  },
  {
    id: "BERPG",
    title: "BERPG POSAPIES GRANDE 80X80",
    price: preciosBertina.comunBERPG,
  },
  {
    id: "BERP80CB",
    title: "BERP80CB POSAPIES GRANDE CON BRAZO",
    price: preciosBertina.comunBERP80CB,
  },
  {
    id: "BERP8060",
    title: "BERP8060 POSAPIES GRANDE 80X60",
    price: preciosBertina.comunBERP8060,
  },
];

/*-------POSAPIES GAMMA--------*/
//PRECIOS SUPLEMENTOS GAMMA
const supGamma = {
  supGAMPL: [
    { material: "SERIE 1", precio: 425 },
    { material: "SERIE 2", precio: 445 },
    { material: "SERIE 3", precio: 464 },
    { material: "SERIE 4", precio: 483 },
    { material: "SERIE 5", precio: 512 },
    { material: "SERIE 6", precio: 542 },
    { material: "SERIE 7", precio: 574 },
  ],
};
const posapiesGamma = [
  {
    id: "None",
    title: "---Sin pieza seleccionada--",
  },
  {
    id: "GAMPL",
    title: "GAMPL POSAPIES L (100X70)",
    price: supGamma.supGAMPL,
  },
];

/*-----------POSAPIES GIANTS-------*/
//PRECIOS SUPLEMENTOS GIANT TMB PARA LITTLE
const supGiant = {
  supGIAPG: [
    { material: "SERIE 1", precio: 356 },
    { material: "SERIE 2", precio: 373 },
    { material: "SERIE 3", precio: 390 },
    { material: "SERIE 4", precio: 407 },
    { material: "SERIE 5", precio: 433 },
    { material: "SERIE 6", precio: 459 },
    { material: "SERIE 7", precio: 487 },
  ],
  supGIAP80CB: [
    { material: "SERIE 1", precio: 456 },
    { material: "SERIE 2", precio: 481 },
    { material: "SERIE 3", precio: 506 },
    { material: "SERIE 4", precio: 531 },
    { material: "SERIE 5", precio: 570 },
    { material: "SERIE 6", precio: 608 },
    { material: "SERIE 7", precio: 644 },
  ],
  supGIAP8060: [
    { material: "SERIE 1", precio: 331 },
    { material: "SERIE 2", precio: 348 },
    { material: "SERIE 3", precio: 366 },
    { material: "SERIE 4", precio: 383 },
    { material: "SERIE 5", precio: 409 },
    { material: "SERIE 6", precio: 435 },
    { material: "SERIE 7", precio: 462 },
  ],
};
//SUPLEMENTOS GIANT
const posapiesGiant = [
  {
    id: "None",
    title: "--Sin suplemento seleccionado--",
  },
  {
    id: "GIAPG",
    title: "GIAPG POSAPIES GRANDE 80X80",
    price: supGiant.supGIAPG,
  },
  {
    id: "GIAP80CB",
    title: "GIAP80CB POSAPIES GRANDE CON BRAZO",
    price: supGiant.supGIAP80CB,
  },
  {
    id: "GIAP8060",
    title: "GIAP8060 POSAPIES GRANDE 80X60",
    price: supGiant.supGIAP8060,
  },
];

/*-----------POSAPIES NADIR-------*/
const supNadir = {
  comunNADPG: [
    { material: "SERIE 1", precio: 279 },
    { material: "SERIE 2", precio: 292 },
    { material: "SERIE 3", precio: 305 },
    { material: "SERIE 4", precio: 317 },
    { material: "SERIE 5", precio: 337 },
    { material: "SERIE 6", precio: 357 },
    { material: "SERIE 7", precio: 379 },
    { material: "PROMO", precio: 406 },
    { material: "PIEL A", precio: 432 },
    { material: "PIEL B", precio: 469 },
    { material: "PIEL C", precio: 532 },
    { material: "PIEL D", precio: 605 },
  ],
  comunNADPMA: [
    { material: "SERIE 1", precio: 290 },
    { material: "SERIE 2", precio: 303 },
    { material: "SERIE 3", precio: 315 },
    { material: "SERIE 4", precio: 328 },
    { material: "SERIE 5", precio: 348 },
    { material: "SERIE 6", precio: 367 },
    { material: "SERIE 7", precio: 389 },
    { material: "PROMO", precio: 416 },
    { material: "PIEL A", precio: 443 },
    { material: "PIEL B", precio: 479 },
    { material: "PIEL C", precio: 542 },
    { material: "PIEL D", precio: 616 },
  ],
  comunNADPMD: [
    { material: "SERIE 1", precio: 269 },
    { material: "SERIE 2", precio: 283 },
    { material: "SERIE 3", precio: 296 },
    { material: "SERIE 4", precio: 309 },
    { material: "SERIE 5", precio: 329 },
    { material: "SERIE 6", precio: 350 },
    { material: "SERIE 7", precio: 371 },
    { material: "PROMO", precio: 389 },
    { material: "PIEL A", precio: 415 },
    { material: "PIEL B", precio: 452 },
    { material: "PIEL C", precio: 515 },
    { material: "PIEL D", precio: 588 },
  ],
  comunNADPXL: [
    { material: "SERIE 1", precio: 269 },
    { material: "SERIE 2", precio: 283 },
    { material: "SERIE 3", precio: 296 },
    { material: "SERIE 4", precio: 309 },
    { material: "SERIE 5", precio: 329 },
    { material: "SERIE 6", precio: 350 },
    { material: "SERIE 7", precio: 371 },
    { material: "PROMO", precio: 389 },
    { material: "PIEL A", precio: 415 },
    { material: "PIEL B", precio: 452 },
    { material: "PIEL C", precio: 515 },
    { material: "PIEL D", precio: 588 },
  ],
};
const posapiesNadir = [
  {
    id: "None",
    title: "---Sin suplemento seleccionado--",
    imageUrl: "..",
  },
  {
    id: "NADPG",
    title: "NADPG POSAPIES GRANDE (80)",
    price: supNadir.comunNADPG,
    medida: 80,
  },
  {
    id: "NADPMA",
    title: "NADPMA POSAPIES MAXI (90)",
    price: supNadir.comunNADPMA,
    medida: 90,
  },
  {
    id: "NADPMD",
    title: "NADPMD POSAPIES MEDIANO (70)",
    price: supNadir.comunNADPMD,
    medida: 70,
  },
  {
    id: "NADPXL",
    title: "NADPXL POSAPIES XL (110)",
    price: supNadir.comunNADPXL,
    medida: 110,
  },
];

/*----------------POSAPIES PLATEA ALTA--------------*/
/*----------------RESPALDOS PA PRECIOS----------------*/
const supPA = {
  comunPLAAPG: [
    { material: "SERIE 1", precio: 351 },
    { material: "SERIE 2", precio: 364 },
    { material: "SERIE 3", precio: 376 },
    { material: "SERIE 4", precio: 390 },
    { material: "SERIE 5", precio: 409 },
    { material: "SERIE 6", precio: 429 },
    { material: "SERIE 7", precio: 454 },
  ],
  comunPLAAP8060: [
    { material: "SERIE 1", precio: 335 },
    { material: "SERIE 2", precio: 344 },
    { material: "SERIE 3", precio: 353 },
    { material: "SERIE 4", precio: 364 },
    { material: "SERIE 5", precio: 377 },
    { material: "SERIE 6", precio: 392 },
    { material: "SERIE 7", precio: 410 },
  ],
};
const posapiesPA = [
  {
    id: "None",
    title: "---Sin posapies seleccionado--",
    imageUrl: "..",
  },
  {
    id: "PLAAPG",
    title: "PLAAPG POSAPIES GRANDE 80X80",
    price: supPA.comunPLAAPG,
    medida: 80,
  },
  {
    id: "PLAAP8060",
    title: "PLAAP8060 POSAPIES GRANDE 80X60",
    price: supPA.comunPLAAP8060,
  },
];

/*----------------POSAPIES PLATEA BAJA--------------*/
const supPB = {
  comunPLAPG: [
    { material: "SERIE 1", precio: 353 },
    { material: "SERIE 2", precio: 369 },
    { material: "SERIE 3", precio: 384 },
    { material: "SERIE 4", precio: 399 },
    { material: "SERIE 5", precio: 422 },
    { material: "SERIE 6", precio: 445 },
    { material: "SERIE 7", precio: 474 },
  ],
  comunPLAP8060: [
    { material: "SERIE 1", precio: 324 },
    { material: "SERIE 2", precio: 334 },
    { material: "SERIE 3", precio: 345 },
    { material: "SERIE 4", precio: 357 },
    { material: "SERIE 5", precio: 374 },
    { material: "SERIE 6", precio: 390 },
    { material: "SERIE 7", precio: 413 },
  ],
};
const posapiesPB = [
  {
    id: "None",
    title: "---Sin posapies seleccionado--",
    imageUrl: "..",
  },
  {
    id: "PLAPG",
    title: "PLAPG CHAISELONGUE GRANDE (99) DERECHA",
    price: supPB.comunPLAPG,
  },
  {
    id: "PLAP8060",
    title: "PLAP8060 POSAPIES GRANDE 80X60",
    price: supPB.comunPLAP8060,
  },
  {
    id: "PLAP8060",
    title: "PLAP8060 POSAPIES GRANDE 80X60",
    price: supPB.comunPLAP8060,
  },
];
