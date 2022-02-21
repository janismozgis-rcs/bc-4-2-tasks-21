import { useState } from "react";

function Article() {
    const [image, setImage] = useState('https://icatcare.org/app/uploads/2018/06/Layer-1704-1200x630.jpg')
    const images = [
        'https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8&w=1000&q=80',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*',
        'https://icatcare.org/app/uploads/2018/06/Layer-1704-1200x630.jpg',
        'https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8&w=1000&q=80',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*',
        'https://icatcare.org/app/uploads/2018/06/Layer-1704-1200x630.jpg',
    ];

    const imageElements = images.map((image, index) => {
        return (<div className="col-4" key={index} onMouseOver={() => setImage(image)}>
            <img src={image} className="w-100 mt-3" />
        </div>)
    })

    return (
        <div className="row pt-5 mt-5">
            <div className="col-12">
                <h2>Super amazing page</h2>
            </div>
            <div className="col-4">
                <div className="row">
                    <div className="col">
                        <img src={image} className="w-100"/>
                    </div>
                </div>
                <div className="row">
                    {imageElements}
                </div>
            </div>
            <div className="col-8">
                <p>Ccccccccccccaaaaaaaaaaaaaaatttttttttttttttttssssssssssssssss steal mom's crouton while she is in the bathroom so intently stare at the same spot poop in litter box, scratch the walls. Pee on walls it smells like breakfast bite the neighbor's bratty kid spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce. Pee in human's bed until he cleans the litter box pretend not to be evil naughty running cat for sleep all day whilst slave is at work, play all night whilst slave is sleeping. White cat sleeps on a black shirt have a lot of grump in yourself because you can't forget to be grumpy and not be like king grumpy cat meowwww for run around the house at 4 in the morning lick master's hand at first then bite because im moody or find a way to fit in tiny box and dead stare with ears cocked. Give attitude leave buried treasure in the sandbox for the toddlers meow meow you are my owner so here is a dead bird rub face on owner for cats making all the muffins, chew master's slippers but there's a forty year old lady there let us feast. Hide when guests come over as lick i the shoes hit you unexpectedly the dog smells bad and headbutt owner's knee. </p>
                <p>at walks in keyboard terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry. X wake up human for food at 4am, chase little red dot someday it will be mine! jump on fridge litter kitter kitty litty little kitten big roar roar feed me but leave buried treasure in the sandbox for the toddlers, so mew. Hopped up on catnip get away from me stupid dog cough hairball, eat toilet paper, demand to be let outside at once, and expect owner to wait for me as i think about it bite plants.</p>
                <p>I show my fluffy belly but it's a trap! if you pet it i will tear up your hand eat an easter feather as if it were a bird then burp victoriously, but tender am in trouble, roll over, too cute for human to get mad for refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am but i could pee on this if i had the energy for lie on your belly and purr when you are asleep but leave fur on owners clothes.</p>
                <p>My left donut is missing, as is my right you call this cat food so lick sellotape but morning beauty routine of licking self and spill litter box, scratch at owner, destroy all furniture, especially couch yet trip owner up in kitchen i want food yet chase after silly colored fish toys around the house. Bite off human's toes i love cuddles or catch small lizards, bring them into house, then unable to find them on carpet meow loudly just to annoy owners so pushed the mug off the table love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125 sweater) lick yarn hanging out of own butt.</p>
            </div>
        </div>
    )
}
export default Article;