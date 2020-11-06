# CAPS

A real-time service that allows for vendors, such as flower shops or restaurants, to alert a system of a package needing to be delivered, for drivers to instantly see what’s in their pickup queue, and then to alert the vendors as to the state of the deliveries (in transit, and then delivered).

### Business Requirements

As a business, our primary goal is to increase the visibility on the state of packages in the delivery process.

We have 2 major clients for this service: Vendors and Drivers. Each need to have full and live visibility into the state of a package as it’s being delivered to a customer

### From the Vendor (store owner) perspective

As products are sold that need to be delivered, we need to alert the drivers that a package is ready for pickup/delivery
As a driver picks up a package, the store owner should know that the package is now “in transit”
Once the driver delivers a package, the store owner should know that the package has been delivered
Ideally, these notifications should be visible in real time on any device (screen, app, browser, etc)


### From the Driver’s perspective
* As stores sell product and need a package delivered, Drivers need an instant notification to pick the package up

* Drivers need a way to scan a package and alert the vendors that the package is in transit

* Drivers need a way to scan a package and alert the vendors that the package has been delivered


### From the perspective of our company
Essential to this system working is that we have to operate in real time. As things happen with the packages, everyone needs to know at that moment, with a guarantee that every state change is visible even if they

* We don’t want our clients having to refresh their browser to get the latest status updates

* We also are aware that they will not always have their browser open …

* So, if they leave & come back, it’s imperative that they can the state of things since they last logged in




### Phase 1 Requirements

CAPS Phase 1: Begin the build of an application for a company called CAPS - The Code Academy Parcel Service. In this sprint, we’ll build out a system that emulates a real world supply chain. CAPS will simulate a delivery service where vendors (such a flower shops) will ship products using our delivery service and when our drivers deliver them, be notified that their customers received what they purchased.

Tactically, this will be an event driven application that “distributes” the responsibility for logging to separate modules, using only events to trigger logging based on activity.

Today, we begin the first of a 4-Phase build of the CAPS system, written in Node.js. In this first phase, our goal is to setup a system of events and handlers, with the intent being to change out the eventing system as we go, but keeping the handlers themselves largely the same. The task of “delivering a package” doesn’t change (the handler), even if the mechanism for triggering that task (the event) does.

The following user/developer stories detail the major functionality for this phase of the project.

As a vendor, I want to alert the system when I have a package to be picked up
As a driver, I want to be notified when there is a package to be delivered
As a driver, I want to alert the system when I have picked up a package and it is in transit
As a driver, I want to alert the system when a package has been delivered
As a vendor, I want to be notified when my package has been delivered
And as developers, here are some of the development stories that are relevant to the above

As a developer, I want to use industry standards for managing the state of each package
As a developer, I want to create an event driven system so that I can write code that happens in response to events, in real time
Technical Requirements / Note

### Phase 4 Requirements

Build a set of applications to manage deliveries made by CAPS Drivers. This will simulate a delivery driver delivering a package and scanning the package code. Retailers will be able to see in their dashboard or log, a list of all packages delivered in real time. Should a delivery driver deliver many packages while the retailer is not connected to the dashboard, the retailer should be able to “catch up” and see a list of all missed events before resuming real-time monitoring.