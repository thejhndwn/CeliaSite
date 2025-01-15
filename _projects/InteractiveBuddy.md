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
- [ X ] 12/30 get physical avatar
- [ X ] 1/2 add first weapon model
- [ X ] 1/4 release beta
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
This is how we create our joints and the `Params` object should explain the joint placement relative to the entity body. However changing these values is having no effect on the joint placement. Also, switching the entity in the `createImpulseJoint` *does* have an effect on the joint - the declaration of entities for the joint is not commutative. ARGH! [1/6. the issue....was that we were using the same params across the joints....]

But we can fix the joint problem another time, right now we have a (disabled) avatar and we can move on to making the rest of program work. Particularly, we need to move onto weapons: making the weapons colliders, creating the collider-money connection, and creating controls for the weapons. If we can get those three mostly working, and add avatar skins functionality I'd be happy releasing to the public this Saturday. It seems tomorrow will largely be spent figuring out the "money-maker", collisions, for the game. If we can figure this out the end will be in sight.

It's hard to imagine that this game will be in any form complete in a week. I can think of so many things to add. But our next project is much more exciting.

#### 1/3 7:54PM

Come see our "beta" at [buddy.lokispalace.com](buddy.lokispalace.com)!!! I'm hesitant to call it a beta since there's practically nothing there - no semblence of a game. I mean there's so much that needs to be done for it, but now we don't have to worry about how to deploy it :)

Next up we're going to create some WeaponsControls, which will allow you to shoot the weapons, after which we will create the collider-money interactions, and that would be considered a true "Beta". After which we just need users to test stuff out while we add more weapons. Anyways, cheers to all invaders!

...You know what? you can expect the WeaponsControls by tomorrow. And you know what? You can expect the colliders and money setup to work for the first weapon we release tomorrow too. Cheers :)

### 1/6 9:14PM

Okay so the WeaponsControls did NOT happen. In fact as you can tell from the last update, nothing happened on the weekend. Yikes, that won't happen again, especially considering my blocker was so asenine.

Today we connected the rigidBody to the existing missile mesh. We also decided to remove the planned complex WeaponsControls, replace it with automatic aiming, and instead focus on development of the firing and collisions systems. Also we introduced textures to the avatar. This should make the custom skins feature implementation quite trivial. 

Ultimately the blocker was that I didn't want to do the work and I didn't want to work around the work and lost all that time that could've been spent working. If there's a takeaway from this, it's that I knew that it was a big task with lots of unknowns, and instead should concentrate on smaller unknowns, but on different fronts.

OK if we can figure out firing and collisions tomorrow, then it's a matter of monkey grease to get the collisions-money system hooked up to the tweakpane. IF we can accomplish that tomorrow the schedule will be looking really good, and basically we'll have a working beta and just be working on adding stuff. I hope to come with good news. 

### 1/9 5:22PM
We have aiming and shooting, but having some trouble picking up the collisions. Not sure we're implementing it correctly from the documentation, but they are being consulted! This is definitely a blocker though. There are other cosmetic things to worry about as well. Once collisions are figured out we're going to complete the weapon cycle (once contact is made the weapon should reload) and also be able to integrate with the Tweakpane. The good news is that we've already seen that file upload plugin for Tweakpane AND looked at how to make unbounded ground (which we probably won't be using). There may be some missing features on Saturday, but I think we're going to have a good Beta release. 

### 1/14 9:02PM
OK I have been working dilligently. I'll be honest, the weekend was not that dilligent, some family matters (babysitting my niece) came up and I wasn't able to hit that 1/11 release that I wanted...but that's okay, because this thing plays WAY better than I thought.

I'm going to be releasing the Beta today. There are 3 weapons right now and even a bug with the missile weapon model that I wasn't able to solve but idc the rest of the game is so good. 

So, the future of this game. I mean this was only ever supposed to be an intro project and it's served its purpose. I DO intend to update the game however, at least in one iteration. I plan to:
- fix the weapons orientation issue
- add particle effects on impact
- add until 10 or 20 weapons models. 
- introduce some concept of weight to our physics (currently just velocity)

But past that I don't want to commit much more. There are many more features that could be implemented:
- camera tracking
- different weapons styles (melee, static environment aka god powers)
- adding specific effects to weapons like some that create fire or light
- Twitter skin lookup

But sadly I can't commit to those changes, unless I have spare time in the future. I can't even commit a timeframe to the next update. Sorry but we have to move on to generative modelling. But please, go try out the game. it's stored at the buddy prefix
