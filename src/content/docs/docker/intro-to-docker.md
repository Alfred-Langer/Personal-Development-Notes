---
title: "Intro to Docker"
description: "General introduction of Docker"
---

## What is Docker?

Docker is a platform that uses container technology. It allows users to easily build and manage containers on their system.

Note: Containers as a technology exist outside of Docker. So you could use Containers without Docker, however Docker is the industry standard for creating and managing Containers.

## What is a Container?

"Officially"
Container: A container is a standardized unit of software that packages an application’s code along with its dependencies (such as runtimes, libraries, and system tools) so it can run reliably on any system.

"Unofficially"
Conceptually, you can think of a container as a virtual mini computer that only contains the absolute necessities to run an application. This includes, your application's code, any runtimes that are required to execute your application, as well as any modules, packages, or any other system dependecies required for the application to run. 

Note: Don't confuse Containers with VMs. They have distinct differences that we will cover over later. The virtual mini computer analogy is just to understand the concept of Containers from a high-level. 

## "If it runs on my machine, then it can run on any machine"

The primary benefit of using Docker is the ability to deploy your application onto various systems, regardless of the OS. This means that if you can package your application into a Docker container and run it on your system, then you'll be able to send that container to another system and run it there as well. 


### Analogy of the Concept (Cooking Example 🍲):

Imagine you want to share your grandmother’s soup recipe with a friend.

#### Without Docker (just a recipe card):
You write the recipe on a piece of paper and hand it to your friend. But when they try to cook it, they realize they don’t have the same spices, their stove heats differently, and their measuring cups aren’t the same as yours. The soup tastes different than yours.

#### With Docker (containerized recipe box):
Instead of just giving the recipe, you hand over a pre-packed box that includes all the ingredients, the exact spices, the pot, the utensils, even a little portable stove that heats the same way. Now, no matter where your friend lives, when they open the box and cook, the soup will turn out exactly the same as it does in your kitchen.


That’s the essence of “If it runs on my machine, it runs anywhere” — you’re packaging not just the instructions, but everything needed so there are no surprises on someone else’s system.

