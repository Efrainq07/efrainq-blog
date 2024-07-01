# Creating a (mostly) decentralized blog page with Lens Protocol
> This post referred to the building of an *old version* of this blog, as you can notice in this site no longer having Lens Protocol options, also it is not built with Svelte anymore.


Inspired by the wide community of mathematicians, physicists, and computer scientists with personal blogs in *math twitter*, and specifically by **Vitalik Buterin's** [personal blog](https://www.vitalik.ca) with its respective [ENS (Ethereum Name Service)](https://ens.domains/) [version](https://vitalik.eth.link), I decided to create **one of my own**. 
\
\
Indeed, during the writing of my [bachelor's thesis](https://tesiunam.dgb.unam.mx/F/EXUUGKQR33599LNN8A5LAJQJ5FLE5EK6T43SNUUK84DMC5A9CG-14113?func=full-set-set&set_number=097046&set_entry=000001&format=999) I often found myself in the situation where there was something I learned about that required quite a bit of research to understand, but **could not publish something about it** as I did not have anything particularly *new* to talk about. 
\
\
This is where a personal blog such as this one comes in. I don't have to go through much scrutiny to publish something here. I just have to write whatever I am working on or reading about, and it will be straightforward to **share with peers** and other interested parties. I encourage everyone in **Math, Physics, and any other academic subject** to do the same. The paper publishing system is quite outdated in my opinion, we should find a replacement for it, we should **do our own divulgation**.
\
\
Anyway, continuing with the technical details about this website. I thought this was the perfect opportunity to do an exploratory exercise to see how one would go about making a **fully decentralized website** with technologies such as [IPFS](https://ipfs.tech/), [Lens Protocol](https://www.lens.xyz/), and [Svelte](https://svelte.dev/).

<div style="display: flex; justify-content: center; gap: 10px;">
  <img src="https://gateway.pinata.cloud/ipfs/QmRK3T2QYYU5QpVMUjPxmLcSKq1VcHJRX1L8XCPiLj4bCx" alt="drawing" width="20%"/>
  <img src="https://gateway.pinata.cloud/ipfs/QmfKzX5WRz7PFHGHuv23EzyZSVoyFznpSJD4nv8jhmtNc5" alt="drawing" width="20%"/>
  <img src="https://gateway.pinata.cloud/ipfs/QmWbxzJQu7AttqCRpVHxPoghM42VfbWNUievWzcanY3uwk" alt="drawing" width="20%"/>
</div>

The choice to use these tools is not arbitrary:

- The most popular way to **publish** a site in a decentralized manner as of now is by first pinning the frontend with [IPFS (Inter-Planetary File System)](https://ipfs.tech/), and then sharing the CID (Content ID) manually or exposing it through either the usual **Web 2.0** domains, a **Web 3.0 [ENS domain](https://ens.domains/)**, or even an **[IPNS (Inter-Planetary Name System)](https://docs.ipfs.tech/concepts/ipns/) name**.


- In order to minimize the size of the site and make it more efficient, [Svelte](https://svelte.dev/) is used. Svelte is known for creating **lightweight bundled** website frontends.

- [Lens Protocol](https://www.lens.xyz/) is used to allow for the content of the website to be easily **updated**. Instead of changing the content of the website (and getting an entirely different CID every time), Lens Protocol allows the frontend to read an index with the CIDs to the content. This means that a [Polygon Chain](https://polygon.technology/) gas fee is required every time a new post is made, but this is a fair exchange when considering the costs of running or renting a server compared to Polygon gas fees.

\
There are some potential downsides to using these technologies:

- If you cannot run your own **IPFS node** (which requires a server running **24/7** and can be resource intensive), you will need to pay a **centralized** IPFS node provider such as [Pinata](https://www.pinata.cloud/), [Infura](https://www.infura.io/), or [Moralis](https://moralis.io/). However, there are potential solutions such as [Filecoin Deals](https://filecoin.io/) and [Pocket Network](https://www.pokt.network/).

- Svelte has a smaller community compared to more popular frameworks like [React.js](https://reactjs.org/) and [Angular](https://angular.io/), which can make it harder to find support for certain problems.

- Most people are not used to the decentralized way of doing things, and even if they are, most people don't have Lens Protocol **handles**, so it can be confusing for them to understand how to access and interact with this website.
\
\
These are problems I will try to solve in the future, but for the moment this is good and decentralized enough for me.
\
\
I will be making a series of articles with each part of the development process. I think this will not only make it easier for others to do the same as me in the future but also make me understand my own work much better, as Prof. Richard Feynman once said:
<img src="https://gateway.pinata.cloud/ipfs/QmdQpkN9z7qdu65x6qVh1LAzvYFDxcwGho63h8J5eWzm12" alt="drawing" width="80%"/>

*This article was proofread and improved with [ChatGPT](https://chat.openai.com/chat).*










