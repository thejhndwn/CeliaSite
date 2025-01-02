---
projectId: 3DBUDDY
title: 3D Interactive Buddy
details: ThreeJS port of the Interactive Buddy flash game
maintainer: Lil Jon
contributors: [Lil Jon]
status: Releasing 1/11
quote: "'Miniclip changed my life. Just that one website alone, I could spend the entire day on. 8 ball pool, Gravity Guy, Fireboy & Watergirl, and Free Running. I will never forget you' -@stqrace, X.com"

---

### abstract
The 2000s were the age of browser flash games, which were unceremoniosuly lost by the turn of the 2020s.


> In July 2017, Adobe deprecated Flash, and announced its End-Of-Life (EOL) at the end of 2020, and will cease support, distribution, and security updates for Flash Player.
>
> -- Wikipedia (https://en.wikipedia.org/wiki/Adobe_Flash#End_of_life)


So many online game portals alike y8.com, miniclip, amazinggames, left without a purpose and forced to pivot. So many great games lost (Age of War, Swords and Sandals, Raft Wars, BTD, and the Impossible Quiz) and without anything to remember them by except late night reminiscences.

We've decided to bring back one of Flash's most iconic games Interactive Buddy written entirely in JS. Let's hope it stays this time.

### project statement
We hope this project brings people to interact with our site and learn about who we are. Additionally serves as an introduction to the 3D space, specifically current browser rendering technologies and 3D scene physics. This will position us to create dynamic environments in the future. 


### timeline
- [ X ] 12/28 figure out ball and joint issue
- [ ] 12/30 get physical avatar
- [ ] 1/2 add first weapon model
- [ ] 1/4 release beta
- [ ] 1/5 add collisions and money system
- [ ] 1/7 integrate money with tweakpane and collisions
- [ ] 1/9 add more weapons
- [ ] 1/10 tweak physics and add more weapons
- [ ] 1/11 release

### updates
#### 1/1 2:59AM
We were having trouble making the sphere and ball in the buddy avatar. Turns out it was due to translating the rigidBody after adding it to the world...you should create the bodyDesc with the translation, then add to the world. I believe Rapier is not happy with the teleportation physics.

So now we have two spheres which are connected by some magical joint. Today will be spent creating the class for the buddy avatar, and looking for some simple 3D model for a weapon that I can use for the missile.

That introduces the problem on what we should make for the other weapons. Luckily there aren't an infinite amount of them, but each would require their coding and I'm not that motivated to even make 30 of them. 

At some point we will have to add new skins and custom skins. 

The good news is that we should be able to make something fairly working for the beta release this weekend. The bad news is that I doubt I'll be able to release the beta on Saturday, with making the subdomain and running my first 3D site.

#### 1/2 5:48PM
Today we were able to add the first model for a weapon, albeit without the surrounding colliders. The joints are also nearly done, but there's an issue with the placement of the joints and it's not clear why. 

```
let paramsRightArm = RAPIER.JointData.spherical(
    { x: 0, y: 0, z: 0 },
    { x: 0, y: 0, z: 0 });
  let jointRightArm = world.createImpulseJoint(params, ball.rigid, rightArm.rigid, true);

```
This is how we create our joints and the `Params` object should explain the joint placement relative to the entity body. However changing these values is having no effect on the joint placement. Also, switching the entity in the `createImpulseJoint` *does* have an effect on the joint - the declaration of entities for the joint is not commutative. ARGH! 

But we can fix the joint problem another time, right now we have a (disabled) avatar and we can move on to making the rest of program work. Particularly, we need to move onto weapons: making the weapons colliders, creating the collider-money connection, and creating controls for the weapons. If we can get those three mostly working, and add avatar skins functionality I'd be happy releasing to the public this Saturday. It seems tomorrow will largely be spent figuring out the "money-maker", collisions, for the game. If we can figure this out the end will be in sight.

It's hard to imagine that this game will be in any form complete in a week. I can think of so many things to add. But our next project is much more exciting.
