//Enemies array is order from weakest to strongest
/*Slime count = 0-2, Animal count = 0-3, Undead count = 0-5, Beast count = 3-7, Dragon count = 5-9, Corrupted count = 7->10*/
export const enemies = [
  {
    name: ['Slime'],
    count: { min: 0, max: 2 },
    //Stat arrays are orderd by [HP, Power, Speed]
    statsBelowLevel5: [50, 3, 1.0],
    statsBelowLevel10: [100, 6, 1.5],
    statsElse: [150, 9, 2.0],
    sprites: [
      {
        name: 'Slime',
        backgroundImage: `url('../../../assets/images/slime.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        backgroundSize: [80, 100],
      },
    ],
  },
  {
    name: ['Bear', 'Tiger', 'Lion', 'Boar'],
    count: { min: 0, max: 3 },
    //Stat arrays are orderd by [HP, Power, Speed]
    statsBelowLevel5: [75, 5, 1.3],
    statsBelowLevel10: [100, 14, 1.0],
    statsElse: [150, 21, 2.3],
    sprites: [
      {
        name: 'Bear',
        backgroundImage: `url('../../../assets/images/bear.png')`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: [80, 80],
        backgroundPosition: 'right',
      },
      {
        name: 'Tiger',
        backgroundImage: `url('../../../assets/images/tiger.png')`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: [90, 90],
        backgroundPosition: 'right',
      },
      {
        name: 'Lion',
        backgroundImage: `url('../../../assets/images/lion.png')`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: [80, 80],
        backgroundPosition: 'right',
      },
      {
        name: 'Boar',
        backgroundImage: `url('../../../assets/images/boar.png')`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: [90, 95],
        backgroundPosition: 'right',
      },
    ],
  },
  {
    name: ['Wraith', 'Zombie', 'Lich', 'Vampire'],
    count: { min: 0, max: 5 },
    //Stat arrays are orderd by [HP, Power, Speed]
    statsBelowLevel5: [75, 15, 0.7],
    statsBelowLevel10: [150, 30, 1.2],
    statsElse: [225, 45, 1.7],
    sprites: [
      {
        name: 'Wraith',
        backgroundImage: `url('../../../assets/images/wraith.png')`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: [90, 90],
        backgroundPosition: 'right',
      },
      {
        name: 'Zombie',
        backgroundImage: `url('../../../assets/images/zombie.png')`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: [90, 100],
        backgroundPosition: 'right',
      },
      {
        name: 'Lich',
        backgroundImage: `url('../../../assets/images/lich.png')`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: [90, 100],
        backgroundPosition: 'right',
      },
      {
        name: 'Vampire',
        backgroundImage: `url('../../../assets/images/vampire.png')`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: [90, 100],
        backgroundPosition: 'right',
      },
    ],
  },
  {
    name: ['Yeti', 'Werewolf', 'Chimera', 'Chlorofiend'],
    count: { min: 3, max: 7 },
    //Stat arrays are orderd by [HP, Power, Speed]
    statsBelowLevel5: [75, 15, 1.3],
    statsBelowLevel10: [150, 30, 1.0],
    statsElse: [225, 45, 2.3],
    sprites: [
      {
        name: 'Yeti',
        backgroundImage: `url('../../../assets/images/yeti.png')`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: [90, 100],
        backgroundPosition: 'right',
      },
      {
        name: 'Werewolf',
        backgroundImage: `url('../../../assets/images/werewolf.png')`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: [90, 100],
        backgroundPosition: 'right',
      },
      {
        name: 'Chimera',
        backgroundImage: `url('../../../assets/images/chimera.png')`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: [110, 100],
        backgroundPosition: 'right',
      },
      {
        name: 'Chlorofiend',
        backgroundImage: `url('../../../assets/images/chlorofiend.png')`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: [90, 100],
        backgroundPosition: 'right',
      },
    ],
  },
  {
    name: ['Dragon'],
    count: { min: 5, max: 9 },
    //Stat arrays are orderd by [HP, Power, Speed]
    statsBelowLevel5: [150, 20, 1.1],
    statsBelowLevel10: [300, 40, 1.6],
    statsElse: [450, 60, 2.1],
    sprites: [
      {
        name: 'Dragon',
        backgroundImage: `url('../../../assets/images/dragon.png')`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: [110, 100],
        backgroundPosition: 'right',
      },
    ],
  },
  {
    name: ['Corrupted'],
    count: { min: 7, max: 1000 },
    //Stat arrays are orderd by [HP, Power, Speed]
    statsBelowLevel5: [150, 15, 1.0],
    statsBelowLevel10: [300, 30, 1.5],
    statsElse: [450, 45, 2.0],
    sprites: [
      {
        name: 'Corrupted',
        backgroundImage: `url('../../../assets/images/corrupted.png')`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: [90, 100],
        backgroundPosition: 'right',
      },
    ],
  },
  {
    name: ['Evil One'],
    //Stat arrays are orderd by [HP, Power, Speed]
    statsBelowLevel5: [900, 65, 2.2],
    statsBelowLevel10: [900, 65, 2.2],
    statsElse: [900, 65, 2.2],
  },
];
