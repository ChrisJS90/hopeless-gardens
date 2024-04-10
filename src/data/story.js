const locations = [{
    id: 1,
    location: "opening",
    intro: "You park in the empty gravel parking lot and turn off the engine. \
    You grab your backpack from the back seat and lock the doors.\
    In front of you is a tall hedge wall with a large metal gate. \
    You are in front of the soon to reopen Hope Gardens. \
    Strewn around the entrance is a bunch of trash and a bench covered in rude graffiti. \
    The gate is open, with a cut chain hanging off one side. \
    The trail of rubbish continues inside. \
    You have been called to this place help repair the damage before the grand reopening in 3 days. \
    Good luck..." ,
    run: "This place gives you the creeps. Also, you remember that you find garden gnomes creepy. \
    Even the guy who hired you looked scared of this place. Why did you take this job? Fuck this. \
    You get back in the car and drive to the nearest pub. \
    At least you didn't notice what was lurking in the bushes as the garden gate was slowly devoured by blood red vines \
    THE END.",
    enter: "You enter the park. It's a mess. Plants ripped out at the roots and tossed aside. \
    Fences broken. The map at the entrance is smashed and covered in spray paint. \
    You seriously consider tracking down the vandals and burying them up to their necks in the garden. \
    You giggle when you imagine watering them like daisies."
},
{
    id: 2,
    location: "entrance",
    intro: "The entrance is a mess. Plants destroyed and fences broken. Such a shame...",
    afterPuz: "This place feels off. The gate is closed and covered in blood red vines. \
        You cannot leave this way.",
    poi: [
        {
            id: "main map",
            initial: "You can still make out the outer path of the garden, despite the damage. \
                Starting from the left path, it's the Rose path/sculptures, Doll House, Daisy Pots, \
                Fairy Tree, Wisteria Tunnel, Gnome Village, Tulip Path, and then back to the entrance. \
                There appears to be something at the centre, but you can't see what it is or how to get there. \
                You were also told about a Garden Shed and Pump House, both somewhere behind the tulip beds.",
            afterPuz: "The map is covered in blood. Some of the original map is still visible, but the centre \
                has been obscured by a bloody smiley face. Starting from the left path, it's the Rose path/sculptures, Doll House, Daisy Pots, \
                Fairy Tree, Wisteria Tunnel, Gnome Village, Tulip Path, and then back to the entrance. \
                There appears to be something at the centre, but you can't see what it is or how to get there. \
                You were also told about a Garden Shed and Pump House, both somewhere behind the tulip beds. "
        },
        {
            id: "gate",
            initial: "It is an historical wrought iron gate. It is mostly intact, thank goodness. \
                It seems the trespassers only needed to cut the lock off the chain to get in.",
            afterPuz: "The vines are so red they could almost be made of blood. They are covered in short, thick thorns. There is no escape."
        }
    ]
},
{
    id: 3,
    location: "rose path",
    intro: "Those vandals ripped the heads off of most of the bushes. You consider ripping bits off of them. The sculptures are in pieces, but still hold some hint of brilliance.",
    poi: [
        {
            id: "pots",
            initial: "You are careful not to cut yourself as you sift through the broken pottery and glass. You hope you can repair some of them. The pots that aren’t broken are shaped like cute animals holding bouquets. The sloth is particularly cute."
        },
        {
            id: "farther pot",
            search: "It’s drawing you in. It looks as if there’s something buried in it. You can’t resist shoving your hand in. The soil is wet, almost slimy. You keep putting your hand deeper. The pot didn’t look that deep. But you keep reaching in. You’re almost up to your elbow now. The pot definitely shouldn’t be this deep. You’re starting to panic now. You want to pull your hand out, but you know you must only push it in deeper. Finally, you grasp onto something. And now you know you are allowed to draw your arm out. You pull it out quickly, lest the pot changes its mind. OBTAINED: YELLOW HAT.",
            item: "yellow hat"
        }
    ],

}]

export default locations