# Networks Research and Cisco CCNA

[Questions](#questions)

[Preamble](#preamble)

[Internet Protocol (IP)](#internet-protocol-\(ip\))

[Internet Protocol](#internet-protocol)

[History of IP](#history-of-ip)

[The great divide](#the-great-divide)

[So what is the Internet, exactly?](#so-what-is-the-internet,-exactly?)

[Packet-Switching](#packet-switching)

[IP Versions](#ip-versions)

[IPv4](#ipv4)

[192.18.1.1](#192.18.1.1)

[IPv6](#ipv6)

[Special addresses](#special-addresses)

[TCP/UDP](#tcp/udp)

[Transport Protocols](#transport-protocols)

[What exactly are we transporting?](#what-exactly-are-we-transporting?)

[TCP](#tcp)

[UDP](#udp)

[Network Basics](#network-basics)

[Wired Networks](#wired-networks)

[Ethernet](#ethernet)

[Communication](#communication)

[Topology](#topology)

[Media](#media)

[Ports](#ports)

[Models](#models)

[https://www.guru99.com/layers-of-osi-model.html](#https://www.guru99.com/layers-of-osi-model.html)

[The Ethernet Frame](#the-ethernet-frame)

[Encapsulation](#encapsulation)

[Layer 1(?) The (Network?) Access Layer](#layer-1\(?\)-the-\(network?\)-access-layer)

[Ethernet Switches](#ethernet-switches)

[MAC Address Tables](#mac-address-tables)

[The Internet Protocol](#the-internet-protocol)

[IPv4 Unicast, Broadcast, and Multicast](#ipv4-unicast,-broadcast,-and-multicast)

[Types of IPv4 Addresses](#types-of-ipv4-addresses)

[Legacy Classful Addressing](#legacy-classful-addressing)

[Classless Addressing and Assignment of IP](#classless-addressing-and-assignment-of-ip)

[Network Segmentation](#network-segmentation)

[IPv6 Addressing Formats and Rules](#ipv6-addressing-formats-and-rules)

[Hexadecimal Number System](#hexadecimal-number-system)

[16-bit Segments or Hextets](#16-bit-segments-or-hextets)

[Static vs DHCP](#static-vs-dhcp)

[Gateways](#gateways)

[The ARP/ND Process](#the-arp/nd-process)

[Broadcast Containment](#broadcast-containment)

[Routing Between Networks](#routing-between-networks)

[Routing Table Entries](#routing-table-entries)

[Local Area Network](#local-area-network)

[Local and Remote Network Segments](#local-and-remote-network-segments)

[TCP and UDP](#tcp-and-udp)

[Transport Layer Port Numbers](#transport-layer-port-numbers)

[Sockets](#sockets)

[The netstat Command](#the-netstat-command)

[Client Server Interaction](#client-server-interaction)

[DNS](#dns)

[nslookup](#nslookup)

[HTTP and HTML](#http-and-html)

[XMPP](#xmpp)

[FTP Clients And Servers](#ftp-clients-and-servers)

[Virtual Terminals](#virtual-terminals)

[Email and Messaging](#email-and-messaging)

[Network Testing Utilities and Commands](#network-testing-utilities-and-commands)

[Wireless Networks](#wireless-networks)

[802.11 and Wi-Fi](#802.11-and-wi-fi)

[Understanding WLAN](#understanding-wlan)

[Other Wireless Technologies](#other-wireless-technologies)

[Security](#security)

[References](#references)

# Questions {#questions}

Why do we use IP Address at all \- why not just always use MAC?

How can a host use the subnet mask to determine if it shares the same network with another host? It would only tell it if the network portion size of the IP address matches the other host for example both 24 bits which is helpful perhaps but are they the same 24? 192.186.001 could have the same subnet mask 255.255.255 as 172.016.001 yes? But different networks. It must also compare the octets yes? In which case…I don’t see how the subnet mask helps much. 

Please explain more about logical vs physical \- does this mean the MAC address will not work programmatically in the application layer?

What is the difference between packet, segment, and frame?

Please clarify the terms local network, remote network and subnetwork. 

I thus far do not find the OSI and TCP/UDP models helpful in learning. We are given these models and told they are two ways of representing the communications process but they have similarities, overlap, and differences. But then we are not told in very good detail about what components hardware/software/protocol are categorized in each layer of each model. Therefore the models a bit mysterious and just a bit of intellectual clutter in my experience. It seems easier to just learn the process and then introduce the models afterwards or to more concretely integrate them in the communication steps as we learn them. 

# Preamble {#preamble}

# 

# Internet Protocol (IP) {#internet-protocol-(ip)}

## Internet Protocol {#internet-protocol}

As we dive deeper into understanding how computers communicate, a common question keeps coming up: what is "the Internet", exactly? To answer this, let's discuss the *Internet Protocol*, also known as *IP*.

We'll cover:

* What IP is and why it matters to us  
* IP addresses  
* and how to identify IP data by its formatting

## History of IP {#history-of-ip}

To understand where we are today, we need to look back to where we came from. Picture yourself in the United States in the late 1960s. The country is nearing the end of the "space race" and technology is booming. There are numerous technical teams and physical computer networks created as a result of recent research, but communication between them is limited. There's also a rise of different proprietary standards which are hampering growth. Many teams are writing their own different software and standards to get their computers to talk to one another\! How can we facilitate better collaboration with less investment required?

By 1974, two researchers working for [DARPA](https://en.wikipedia.org/wiki/DARPA)

[Links to an external site.](https://en.wikipedia.org/wiki/DARPA)

 think they have the answer. They propose something called the *Transmission Control Program*. It's a complex process that defines exactly how multiple networks can communicate with each other. This protocol stands out because it is:

* *fault tolerant*: data transmitted between networks can be cached and re-sent if it fails the first time.  
* *end-to-end*: there are no single central systems that can take the whole network down; each host can send/receive to others.

These highlights are critical because DARPA is a military organization. They're looking for technology that could theoretically withstand a nuclear attack \- and the Transmission Control Program fits the bill\!

#### The great divide {#the-great-divide}

It became quickly apparent that Transmission Control Program was too dense. The process was complicated and involved many moving parts, and some engineers raised concerns that it should be extracted into separate parts. Soon, the Transmission Control Program was divided into two separate sections: *Transmission Control Protocol (TCP)*, which was responsible for the fault-tolerance of joined networks, and *Internet Protocol (IP)*, which was responsible for the end-to-end nature of joined networks.

The protocols we use today have been improved over time, but the still carry the same names and general purposes. It's amazing to think that modern social media, video gaming, and streaming content is all dependent on 50+ year old technology\!

## So what is the Internet, exactly? {#so-what-is-the-internet,-exactly?}

The Internet can be loosely defined as "a series of *internetworked* systems".

The Internet Protocol opened the door for this internetworked model in computing by providing a framework for networks to communicate to one another. It's a shared language that everyone can "speak" and understand. Now, a network in New York City using one vendor's computers could seamlessly communicate with a network in London from a different vendor\! This connectivity led to the birth of the Internet, which is itself *a series of interconnected networks sharing data*.

## Packet-Switching {#packet-switching}

IP data is transmitted in a format known as a *packet*. A packet uses a data format we've seen before: metadata in *headers*, and a *body* with content. The headers are used to get the packet to its destination, while the body contains the information we'd like to transfer.

We refer to IP's communication style as *packet-switching*. A message is split up into separate "packets," delivered to a destination, and reassembled as appropriate. IP's primary responsibility as part of TCP/IP is maintaining an *end-to-end* state. Because the message is reassembled at the end, IP isn't concerned about whether packets are received by the client in sequential order. It can even withstand some situations where packets are lost in transit\!

## IP Versions {#ip-versions}

The Internet Protocol has evolved over time, but two versions stand out as the most used & important to us: version 4 and version 6\. We often refer to these as *IPv4*, and *IPv6*.

#### IPv4 {#ipv4}

The best known version of the Internet Protocol is *IPv4*. This version was used when TCP/IP was finalized by DARPA in 1983, and it's still the most-used protocol version online.

IPv4 addresses are composed of 4 *octets*, which are 8-bit binary numbers. We usually represent them in decimal like this:

## 192.18.1.1 {#192.18.1.1}

This is the same as 11000000.00010010.00000001.00000001 in binary notation, but that's a lot harder to read\! IPv4 supports around 4 billion unique addresses.

#### IPv6 {#ipv6}

The "4 billion unique address" limit seemed almost infinite in the earliest days of the Internet, but today it's easy to see how we might use up that few addresses\! Seeing this *address exhaustion* on the horizon, Internet researchers began concocting a new protocol version, one that would allow more addresses, in the mid 1990's. By 2017, the new protocol was an official standard: *IPv6*.

IPv6 supports **\~350 undecillion (3.5×1038)** addresses.

That's a billion times a billion more addresses\! It's even more addresses than grains of sand in all the world's beaches & deserts (7.5x1018, according to [the University of Hawaii](https://www.npr.org/sections/krulwich/2012/09/17/161096233/which-is-greater-the-number-of-sand-grains-on-earth-or-stars-in-the-sky)

).

It handles this by quadrupling the number of bits in an address. IPv4 uses 32 bits, while IPv6 uses 128 bits. Remember that these bits are binary, so adding additional bits exponentially increases the number of permutations.

This new address format also required a new notation. Instead of the "four dotted decimal" notation of IPv4, IPv6 uses "eight colon-ed hexadecimal". Here's an example IPv6 address:

##### 2600:6c5e:157f:d48c:138f:e0ba:6fa7:d859

The same address in binary is:

##### 0010011000000000:0110110001011110:0001010101111111:1101010010001100:0001001110001111:1110000010111010:0110111110100111:1101100001011001

It's easy to see how we added so many extra addresses\! That said, IPv6 is much more difficult to read by humans. You can read some neat rules for making IPv6 addresses easier to read on [Wikipedia](https://en.wikipedia.org/wiki/IPv6#Address_representation)

.

#### Special addresses {#special-addresses}

Both popular versions of the Internet Protocol include space for some special addresses that you should quickly recognize. The main one you'll encounter is called the *loopback* address. This is the identifier for your current machine. You'll see it repeatedly while developing because you'll navigate your browser there to access your own servers\! You may also hear this referred to as *localhost*.

In IPv4 the loopback address is 127.0.0.1. In IPv6, the loopback is ::1.

There's also an *"all interfaces"* address. This address is used to catch any incoming requests regardless of intended destination. It's only used by the local machine: you would never send a packet to the "all interfaces" address, but a server that is listening on that address would see all incoming packets.

For IPv4, the "all interfaces" address is 0.0.0.0. For IPv6, it's simply ::.

Remember that the loopback and "all interfaces" address are not interchangeable\! This is a common misconception you may encounter in tutorials online and might be a trick question during a technical interview. If you're ever asked to connect to localhost, make sure you use the loopback.

# TCP/UDP {#tcp/udp}

## Transport Protocols {#transport-protocols}

Between HTTP and IP, there is an extra layer of information called the *transport layer*. The protocols used in it are referred to as *transport protocols*.

Two of the most important transport protocols are *TCP* and *UDP*. You'll dive into:

* The purpose of transport protocols  
* The differences between TCP and UDP  
* Common uses for each of these protocols

## What exactly are we transporting? {#what-exactly-are-we-transporting?}

We've already briefly mentioned the *Transmission Control Protocol (TCP)* when discussing the history of the *Internet Protocol (IP)*. Both TCP & IP made up the original *Transmission Control Program* developed at DARPA in the 1970s. We've dug deep into IP now, and we have some understanding of HTTP. Why do we need more protocols?

Let's provide a practical example. Think about the process of delivering a package. Floor pickers take your package from a warehouse and put it in the back of a truck. Then, a dispatcher sends that truck to your house. Finally, there's a place on your porch just waiting for that package. How, then, does your package make it across the very last leg of its journey? You need a delivery person\!

Transport protocols act as the "delivery person." IP is concerned with machine-to-machine communication, and HTTP is designed for application-to-application communication. Transport protocols bridge the gap and help the data cover the last mile between the network and software.

## TCP {#tcp}

The most common transport protocol used is *TCP*. TCP is a connection-oriented protocol, meaning it establishes a connection between two sockets. This connection acts as safeguard from other error-prone protocols underneath it, including *IP* and *Ethernet*. Pieces of data sent via TCP (referred to as *segments*) respect a strict order and verify when they have been received. This means that data can't be "lost" across a TCP connection: if a segment is received out of order, the receiver will ask the transmitter to re-send the missing segment. This behavior makes TCP a *reliable* protocol.

Any time it's critical that data arrives ordered and in full, TCP's the way to go\! You'll see TCP used as the underlying connection for HTTP, file transfers, and anywhere else reliability is critical. In all of these cases, missing data would result in corrupt files and unreadable data.

Because of this guarantee of reliability, it's a relatively "heavy" protocol to use. Messages may take a bit longer to transfer than they would via other protocols, but you can be confident that your message has been received the way you intended it.

Common use cases for TCP include:

* File transfer  
* Web browsing  
* CRUD operations

## UDP {#udp}

The *User Datagram Protocol (UDP)* was developed a few years after TCP. Scientists working with TCP found that they sometimes didn't need all the order and reliability that TCP provided, and they were willing to trade that for raw speed. UDP is connection-less and provides no verification for whether data is received. Because of this, we refer to it as an *unreliable* protocol.

UDP is used in lots of familiar places: real-time video sharing, voice-over-IP phone calls, and DNS all rely on UDP as their transport protocol of choice. These services prioritize speed over reliability, so it makes sense that they would forego TCP's request to re-send missing packets. If some data is lost along the way, that's okay \- for example, you might just see lower-quality video for a moment. UDP also sends data unordered, which means that the packets may take a different path through the internet and arrive at different times. If the order matters, it's up to the application to sort things out.

Common use cases for UDP include:

* DNS  
* Discovery requests  
* Video game world state updates  
* Video and audio streaming  
* Continuous data broadcasts (smart home devices)  
* 

# 

# 

# Network Basics {#network-basics}

Three types of signal transmission:

1. Electrical: via electronic pulses on copper wire  
2. Optical: via light pulses on fiber cable (glass or plastic)  
3. Wireless: via infrared, microwave, or radio waves in air

The terms bandwidth and throughput are words used to describe the rate of data transfer, or the rate transmitting and receiving of bits. 

**Bandwidth** is the capacity of a medium to carry data. Digital bandwidth is usually measured by the theoretical amount of bits that can be sent across the medium in a second, or bps. 

* bps \- bits per second    
* kbps \- thousand (Kilobit) bits per second  
* Mbps \- million (Megabit) bits per second  
* Gbps \- billion (Gigabit) bits per second  
* Tbps \- trillion (Terabit) bits per second

NOTE: Bits are used to measure data speed whereas bytes are used to measure storage or file size. Therefore a gigabit and gigabyte are not the same amount and not used to measure the same concepts. 

**Throughput** is the measure of the transfer of bits across the media over a given period of time. However, due to a number of factors, throughput does not usually match the specified bandwidth. 

Many factors influence throughput including:

* Amount of data being sent and received over the connection  
* Types of data being transmitted  
* Latency created by the number of network devices encountered between source and destination

## Wired Networks {#wired-networks}

Wireless technologies tend to iterate the various kinds of networking technologies that people already need to use. Here we will compare different kinds of networks. 

PAN  
LAN  
MAN  
WAN

### Ethernet {#ethernet}

Ethernet is a technology commonly used in local area networks. Developed at Xerox PARC, Ethernet was commercially introduced in 1980 by Digital Equipment Corporation (DEC), Intel, and Xerox. Ethernet was later standardized in 1983 as IEEE 802.3. 

Devices access the Ethernet LAN using an Ethernet Network Interface Card (NIC). Each Ethernet NIC has a unique address permanently embedded on the card known as a Media Access Control (MAC) address.

## Communication {#communication}

In general there must be an agreement on the following things to facilitate communication:

- Method  
- Language  
- Confirmation

Some characteristics of protocols include:

- Message format  
- Message size  
- Timing  
- Encoding  
- Encapsulation  
- Message pattern

## Topology {#topology}

Topology diagrams help us to see the configuration of the network. 

Devices don’t see the network; they only know their own address.

The protocols inform the device of the necessary information. 

## Media {#media}

In this context it refers to the medium the signal uses to travel. 

This can be metal cabling or air (electromagnetic waves) or fiber optic cabling. 

## Ports {#ports}

A port is NOT a physical connection but rather a logical connection used by programs to exchange information. 

It determines which program on a computer is going to be used, as the port has a unique number, such as 80 for http. 

A port is always associated with an IP address. The unique port number will be added on to the IP address so the receiver knows which program to use. 

This is typically unseen but can be revealed using a tool such as netstat. 

The range for ports is 0 \- 65535\. They are assigned by IANA. 

They can be in three categories:

System aka Well-known ports: 0 \- 1023 (server side)

User aka Registered ports: 1024 \- 49151 (registered by companies for services) (server side)

Dynamic aka Private ports: 49152 \- 65535 (free to use client side ports) (computer self assigns)

## Models {#models}

TCP/IP \- 

Application Layer  
Transport Layer   
Internet Layer   
Network Access Layer

OSI \-

7 Application Layer  
6 Presentation Layer  
5 Session Layer  
4 Transport Layer  
3 Network Layer  
2 Data Link Layer  
1 Physical Layer

## [https://www.guru99.com/layers-of-osi-model.html](https://www.guru99.com/layers-of-osi-model.html) {#https://www.guru99.com/layers-of-osi-model.html}

Mac Addresses are Layer 2  
IP Addresses are Layer 3

## The Ethernet Frame {#the-ethernet-frame}

* Ethernet \- the NIC to NIC on the same network  
* Preamble \- get the receiving card in sync with the bits  
* Start Frame Delimiter \- indicates to the NIC that the next info will be the actual information  
* Destination MAC Address \- the destination device on the receiving network  
* Source MAC Address \- the sending device   
* Length/Type \- length in bytes of the data or the type of data it will be ie ipv4 packet or ipv6 packet  
* Data \- the actual data packet being delivered (could contain within different protocols)  
* Frame Check Sequence \- checks for no loss of data

## Encapsulation  {#encapsulation}

The process of placing one message format (the letter) inside another message format (the envelope). 

De-encapsulation is when the process is reversed by the recipient. 

Each computer message is encapsulated in a specific form called a frame. 

The frame is like the envelope as it provides the addresses. 

If it is not correctly formatted it is not successfully delivered. 

## Layer 1(?) The (Network?) Access Layer {#layer-1(?)-the-(network?)-access-layer}

The access layer is the part of the network in which people gain access to other hosts and to shared files and printers. The access layer provides the first line of networking devices that connect hosts to the wired Ethernet network. Within an Ethernet network, each host can connect directly to an access layer networking device using an Ethernet cable. Ethernet hubs contain multiple ports that are used to connect hosts to the network. Only one message can be sent through an Ethernet hub at a time. Two or more messages sent at the same time will cause a collision. Because excessive retransmissions can clog up the network and slow down network traffic, hubs are now considered obsolete and have been replaced by Ethernet switches.

## 

## Ethernet Switches  {#ethernet-switches}

Operate at Layer 2 Data Link of OSI

Switches use MAC address tables

It takes in the message on a port based on the sending MAC 

And uses an address table to send it out a different port based on the destination MAC

## MAC Address Tables {#mac-address-tables}

The switch makes its forwarding decision based on layer 2 information \- the Ethernet header information of the Ethernet Frame. 

It looks at the source MAC address and checks if it already exists on its table. If not, it adds it to its table. 

It then checks for the destination MAC address and if not it will send it out EVERY port except the incoming port. 

An unknown unicast is when it does not know where to send it. 

When it sends it to its known addresses they look at it and check if it is a match. If not, they ignore. 

As it receives an unknown source MAC it will add it to its table (keeps it for about 5 minutes). 

## The Internet Protocol {#the-internet-protocol}

Physical Address \- embedded unique MAC from the NIC  
Logical Address \- assigned unique IPv4 and/or IPv6

Sometimes a device will have multiple NIC and each will have its own MAC and be assigned its own IP for each NIC. 

Every packet sent across the internet has a source and destination IPv4. The devices need this to be sure information gets to the destination and replies get back to the source. 

IPv4 are 32 bits: 11010001101001011100100000000001

They are grouped into 4 octets for easier reading: 11010001.10100101.11001000.00000001

Then each octet is converted to its decimal value: 209.165.200.1

Each IP has a network component and a host component. 

The network component is the same but the host is unique for devices on a LAN. 

The subnet mask identifies which portion of the address is the network portion and is represented by 255\.  
   
This allows multiple logical networks to exist on one physical network. 

ROUTING vs SWITCH

Routing takes place on the Internet (WAN) and uses IP. 

Switching takes place on LAN and uses MAC. 

## IPv4 Unicast, Broadcast, and Multicast {#ipv4-unicast,-broadcast,-and-multicast}

**IPv4 Unicast** \- a packet which the IP addresses are single source single destination 

	IPv4 Unicast Range: 1.1.1.1 to 223.255.255.255

**IPv4 Broadcast** \- a packet whose IP addresses are single source to all destinations on the network (there are no broadcast packets in IPv6). Broadcasts are NOT forwarded by routers by default. 

	IPv4 Broadcast Range: 255.255.255.255 (entire network, not necessarily shown as subnet mask)

**IPv4 Multicast** \- a packet which the IP addresses are single source to multiple destinations but not all destinations on the network.

	IPv4 Range: 224.0.0.0 to 239.255.255.255

**Broadcast Domain** \- all hosts on the same network segment

## Types of IPv4 Addresses {#types-of-ipv4-addresses}

**IPv4 Public** \- globally routed between ISP routers

**IPv4 Private** \- blocks of addresses that cannot be used on the internet and are only used to assign addresses to internal hosts. These are also referred to as RFC 1918 address space. 

	10.0.0.0/8 prefix for 10.0.0.0 \- 10.255.255.255  
	172.16.0.0/12 prefix for 172.16.0.0 \- 172.31.255.255  
	192.168.0.0/16 prefix for 192.168.0.0- 192.168.255.255

**NAT**

Internal networks use private IPv4 for addressing all internal devices (intranet) but these addresses are NOT globally routable.  Therefore, when a packet is sent with a source private IP address and a public destination IP address the private address is filtered or translated to a public address before the forwarding of the packet to an ISP. This is done by NAT \- Network Address Translation. This is usually done on the router that connects the network to the ISP. 

**IPv4 Reserved**

**Special Use IPv4 Addresses** \- The network address and broadcast address cannot be assigned to hosts. There are other addresses that can be assigned to hosts but are restricted on how those hosts can interact within the network. 

	Loopback addresses \- special addresses used by a host to direct traffic to itself ie when using ping to test the IP configuration on your own device

		127.0.0.0/8 prefix for 127.0.0.1 to 127.255.255.254

	Link-Local addresses \- aka Automatic Private IP Addressing (APIPA) are self-assigned addresses used by a Windows client to self-configure if the client cannot obtain an IP addressing through other methods. These can be used in a P2P connection but are not commonly used for this purpose. 

	169.254.0.0/16 prefix for 169.254.0.1 to 169.254.255.254

## Legacy Classful Addressing {#legacy-classful-addressing}

**Legacy Classful Addressing** \- RFC 790 assigned numbers dividing the unicast ranges. This caused many IPv4 addresses to go unused and was deprecated in the 1990s in favor of classless addresses. 

	  Class A \- for extremely large networks 16 million or more host addresses

		0.0.0.0/8 to 127.0.0.0/8

	  Class B \- moderate to large networks up to 65k hosts

		128.0.0.0/16 to 191.255.0.0/16

	  Class C \- small networks maximum of 254 hosts

		192.0.0.0/24 to 223.255.255.0/24

	   Class D \- multiblock 

		224.0.0.0 to 239.0.0.0

	   Class E \- experimental 

		240.0.0.0 to 255.0.0.0

## Classless Addressing and Assignment of IP {#classless-addressing-and-assignment-of-ip}

**Classless Addressing** \- network addresses and subnet masks are allocated based on the number of addresses that can be justified

**Assignment of IP Addresses** \- 

Public IPv4 addresses are globally routed and must be unique. 

IANA manages and allocates blocks of IP addresses to the RIRs  
	IANA \- Internet Assigned Numbers Authority  
	RIR \- Regional Internet Registries (there are 5 regions)  
			AfriNIC  
			APNIC  
			ARIN  
			LACNIC  
			RIPE NCC  
			

In an Ethernet LAN devices use broadcasts and the Address Resolution Protocol to locate other devices. 

**ARP \-** Address Resolution Protocol \- ARP sends Layer 2 broadcasts to known IPv4 addresses on the local network to discover associated MAC addresses. 

**DHCP** \- Dynamic Host Configuration Protocol is typically how devices on Ethernet LANs acquire their IPv4 address configuration. They send a broadcast on the local network to locate a DHCP server. 

## Network Segmentation {#network-segmentation}

**Subnetting**

Switches broadcast out all interfaces except the interface on which it was received.  

Routers do not propagate broadcasts. 

Each router interface connects to a broadcast domain and broadcasts are only propagated within that specific broadcast domain. 

If a broadcast domain is very large with many hosts there may be excessive broadcasts that negatively affect the network. 

The solution is to reduce the size of the network to create smaller broadcast domains in a process called subnetting. 

The basis of subnetting is using host bits of the prefix to create additional subnets. 

Subnetting reduces overall network traffic and improves network performance. It also allows security policies governing which subnets are allowed to communicate together. And it reduces the number of devices affected by abnormal broadcast traffic. 

Devices can be separated by location, group of function, or device type, or whatever the administrator desires. 

# IPv6 Addressing Formats and Rules {#ipv6-addressing-formats-and-rules}

IPv4 is running out of addresses. 

IPv6 has 128 bit address space. 

The IETF created ICMPv6 \- Internet Control Message Protocol version 6 \- which includes address resolution and autoconfiguration. 

Most RIRs have already ran out of IPv4 addresses. 

NAT and Private addresses have slowed the depletion of IPv4 but this creates latency and has limitations that impede P2P communications. 

Mobile providers have been leading the way with transition to IPv6 as over 90% of their traffic is using it. 

Most top ISP and content providers have already transitioned. 

IoT is also using mostly IPv6. 

IPv4 and IPv6 may coexist for some time. IETF has developed some migrating techniques for administrators. 

**Dual Stack \-** IPv4 and IPv6 exist on the same network segment aka native IPv6  
**Tunneling \-** a method to transport an IPv6 packet over an IPv4 network (using encapsulation)  
**Translation \- NAT64** allows IPv6 to communicate with IPv4 using a technique similar to NAT

### Hexadecimal Number System {#hexadecimal-number-system}

Base 16: 0 1 2 3 4 5 6 7 8 9 A B C D E F

### 16-bit Segments or Hextets {#16-bit-segments-or-hextets}

128 bits in length is written such that every 4 bits is one hexadecimal for a total of 32 digits. 

The hex letters can be uppercase or lowercase. 

**Preferred Format:** The 32 digits are grouped in 4s and separated by a : and called a hextet. 

**Rule 1** for shortening: Remove leading zeros.

**Rule 2** for shortening: an all zero segment can be double colon :: but only once.

# Static vs DHCP {#static-vs-dhcp}

**Static IP address assignment \-** does not change and the admin must manually configure:

	IP address \- identifies the host on the network  
	Subnet mask \- identifies the network on which the host is connected  
Default gateway \- identifies the networking device the host uses to    access internet

	Static advantages:

		Useful for printers, servers, and devices accessible to clients  
		Can provide increased control of network resources

	Static disadvantages

		Can be time consuming  
		More prone to errors  
		Must maintain accurate list of addresses

**Dynamic IP address assignment** \- automatically assigned via a DHCP server

Various devices can be DHCP servers as long as they are running DHCP service software

For example a router is often a DHCP client and server \- client to ISP for its public address and servers its hosts to give them their private addresses

**Dynamic Host Control Protocol \-** a set of messages that go between the device wanting an IP address and the device that can assign it

*DHCP Discover* \- a broadcast to 255.255.255.255 from host looking for a DHCP server  
*DHCP Offer* \- reply from server with an IP address for offer with subnet and default gateway  
*DHCP Request* \- reply from host client that it is accepting  
*DHCP Acknowledgement* \- reply from host server that it has now updated address

# Gateways {#gateways}

**Gateway \-** the way traffic leaves a LAN and goes to other networks. It is like the exit door. 

**Default Gateway \-** on a host this is the first gateway it will try. The default gateway can be different for different hosts on the same network as long as both gateways are on the same network; however this is common because generally unnecessary. Often the router is the default gateway for all hosts on its network

Each interface on a router is connected to a separate network. The IPv4 address assigned to the interface identifies which local network is connected directly to it. Each host must know the IPv4 address of the router interface connected to the network it is attached to. This address is the default gateway of the host and it can be configured on the host statically or dynamically by DHCP. 

It is common for the router to also be the DHCP server. Therefore it is providing its own internal IPv4 address as the default gateway to DHCP clients and it is providing the clients own IPv4 address and subnet mask (when hosts are set to DHCP). 

Most DHCP servers (when it is the router) are configured to assign private addresses to the hosts on the internal network rather than public addresses. The default IPv4 address on the router is usually the first host address and it will provide hosts with addresses within the same network and within a range. The size of the range can be configured by the admin. 

Many ISPs also use DHCP servers to provide IPv4 addresses to the internet side of the routers. The network is referred to as the external or outside network. In this case the wireless router is in the role of the client to receive the correct external network IPv4 address for the internet interface. This is usually an internet routable address (public?) and thus the hosts connected to the router have a way to access the internet. 

The router is therefore the boundary or go between for the local network and the external internet. It is in the role of DHCP server and client. 

**NAT Network Address Translation \-** A private address of a host on the network can communicate on the public internet because the router keeps a table of the hosts private addresses and a public address for the hosts to use outside the LAN. The process of the router translating this for the incoming and outgoing packets is NAT. 

# The ARP/ND Process {#the-arp/nd-process}

**Physical address \-** MAC \- used for NIC to NIC on same ethernet network

**Logical address \-** IP address \- used to send from source device to destination on the same Ip network or different IP network. 

**Layer 2 (data link layer) (Physical) Address \-** another name for MAC addresses, aka physical addresses, aka burned in addresses. They are 48 bits. 

**Layer 3 (network layer) (Logical) Address \-** another name for a logical address pertaining to a single protocol such as IP, IPX, or Appletalk

**ARP \-** Address Resolution Protocol \- For IPv4, the process of associating IP addresses of IP packets in a data flow with the MAC addresses on each link along the path to the destination. 

**ND \-** Neighbor Discovery \- For IPv6, the process of associating IP addresses of IP packets in a data flow with the MAC addresses on each link along the path to the destination.

When the destination IP address is on a remote network the destination MAC address will be the address of the host default gateway. 

The IP address of the final device on a remote network is de-encapsulated by the router which then determines the next-hop device, and re-encapsulates the IP address in a new data link frame. 

Along each link in a path, an IP packet is encapsulated in a frame. The frame is specific to the data link technology that is associated with tha link, such as Ethernet. If the next hop device is the final destination, the destination MAC address will be that of the device Ethernet NIC. 

**PDU \-** Protocol Data Unit 

[https://www.geeksforgeeks.org/protocol-data-unit-pdu/](https://www.geeksforgeeks.org/protocol-data-unit-pdu/)

# Broadcast Containment {#broadcast-containment}

An Ethernet Broadcast is when the destination MAC address is all “f”s. 

When a switch receives the broadcast it will flood it to all ports except incoming. 

A router will receive the broadcast but will not forward it on to other networks. 

A host processes the broadcast as though the message was addressed to it. 

The LAN with one or more Ethernet switches is referred to as the broadcast domain. 

In other words, it is the devices that would “hear” a broadcast. 

On a LAN Ethernet a NIC only accepts a frame if the destination is the broadcast MAC or the NIC’s own MAC. 

Since applications use the logical destination IPv4, hosts can use ARP to discover the MAC address of any host on the same local network. IPv6 uses ND. 

The hosts have an ARP table. If the information is not in the table the host can send an ARP request broadcast. The device that recognizes it as their address replies back. 

The ARP processes is therefore a 3 step process:

1. Sending host creates and sends a frame addressed to broadcast MAC with a message of the IPv4 address of the intended destination host.   
2. Each host receives and compares and the match replies back to the sending.   
3. The sending host receives the reply and stores the MAC address and IPv4 in the ARP table. 

# Routing Between Networks {#routing-between-networks}

Routing is the process of identifying the best path to a remote destination device. 

Remote here is meaning a device not local to the sending device. 

A router is a networking device that connects multiple Layer 3 (IP) networks. 

Routers make their forwarding decisions based on the Layer 3 IP address. 

Anytime the network portion of the IP addresses of the source and destination hosts do not match a router must be used to forward the message. 

The router receives the message from sender, de-encapsulates the Ethernet frame to read the destination IP address in the IP packet. 

It determines where to forward the message, re-encapsulates the packet into a new frame, and forward the frame on to its destination. 

The router may have a number of subnets that it must intermediate when messages are sent from devices in different subnets. 

The router also must be able to forward messages to other networks across the internet. 

Messages Within The Same Network

When a message is being framed the sending host will check the IP of the receiving host and use the subnet mask to determine from the IP if they are on the same network. 

If yes, it will use the MAC address to send it directly, via a switch (since it is not directly connected to the destination host physically). 

If the host does not have the destination MAC address it will send an ARP to obtain it and continue with the process to send it directly. 

Messages Between Different Networks, Same Router

When a message is being framed the sending host will check the IP of the receiving host and use the subnet mask to determine from the IP if they are on the same network. 

If not, the sending host checks if it has the MAC of the Default Gateway (router), if not it sends ARP but it probably has it because it would have the IPv4 of Default Gateway. 

The router receives the frame and removes the ethernet header information (MAC addresses) and looks up the destination IPv4 in its routing table. 

If yes the router re-encapsulates the frame with the source MAC address of the router. 

The router must check if the destination IPv4 is on its network. 

If yes it must obtain the MAC address of the destination IPv4 so it checks its own ARP table. 

When it obtains the destination MAC the routing table will tell it which port to send it through and since this is a subnet still on its own network the frame is sent to the destination MAC. 

This method uses the Default Gateway (local router) and therefore it is critical that the correct default gateway be configured on each host on the local network. 

If no default gateway is configured in the host TCP/IP setting or if it is incorrect the host cannot communicate with remote network hosts. 

Remember though that a router is also able to segment a network into subnets and therefore the same physical router may have different Default Gateway addresses for the different subnets it facilitates. 

# Routing Table Entries {#routing-table-entries}

Routing tables are not concerned with the addresses of individual hosts. 

Routing tables contain addresses of networks and the best path to reach them. 

Entries can be made two ways:

	**Dynamically \-** receiving updated information from other routers

	**Manually \-**  entered by a network administrator

The tables are used to determine which interface to use to forward a message to its intended destination. 

If the router cannot determine where to forward a message IT WILL DROP IT\!	

Network administrators therefore configure a **static default route** into the routing table so that a packet is not dropped due to the destination network not being in the routing table. 

# Local Area Network {#local-area-network}

A LAN refers to a local network, or a group of interconnected local networks that are under the same administrative control. 

In the early days of networking, LANs were defined as small networks that existed in a single physical location. 

The definition has evolved to include interconnected local networks consisting of many hundreds of hosts, install in multiple buildings and locations. 

The important thing to remember is that all the local networks within a LAN are under one administrative control. 

LANs typically use Ethernet or wireless protocols and support high data rates.   
The term **intranet** is often used to refer to a private LAN that belongs to an organization and is designed to be accessible only to the members of the organization. 

# Local and Remote Network Segments {#local-and-remote-network-segments}

Within a LAN it is possible to place all hosts on a single local network or divide them up between multiple networks connected by a distribution layer device. 

The placement is determined by the desired results. 

All Hosts In One Local Segment \- one broadcast domain

Hosts On A Remote Segment \- multiple broadcast domains

# TCP and UDP {#tcp-and-udp}

These are the Transport Layer Protocols

**Transmission Control Protocol \-** has acknowledgement of receipt and lost packets are retransmitted (TCP uses sequence numbers on packets)

**User Datagram Protocol \-** no acknowledgement of receipt, lost packets are not retransmitted (UDP does not use sequence numbers on packets)

At the transport layer data gets broken down into segments. (packets?)

The segments have a source and destination port number. 

In TCP the segments have a sequence number. 

The receiving server will attempt to assemble the segments based on sequence number. 

It will send acknowledgements and requests for lost segments. 

# Transport Layer Port Numbers {#transport-layer-port-numbers}

Some Server Destination Ports

**21 \-** FTP  
**22 \-** SSH  
**23 \-** Telnet  
**25 \-** Mail  
**53 \-** DNS  
**67 \-**  DHCP Server  
**68 \-** DHCP Client  
**69 \-** TFTP  
**80 \-**  HTTP  
**110 \-** POP3  
**143 \-**  IMAP  
**161 \-** SNMP  
**443 \-**  HTTPS  
**3128 \-** Proxy

**Well-Known Ports \-** Destination ports in the range 1 \- 1023 that are associated with common network applications. 

**Registered Ports \-** Source or Destination ports in the range 1024 \- 49151 can be used by organizations to register specific applications such as IM. 

**Private Ports \-** Most often Source ports in the range 49152 \- 65535 and can be used by any application. 

Web servers listen on various destination ports at same time. 

This allows many services to run on the web server at the same time. 

[IANA Port Registry](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml)

Host source ports are dynamically assigned from the range \> 1024\. 

# Sockets {#sockets}

**Socket \-** the combination of the source IP address and source port OR the destination IP address and destination port ie 192.168.1.7:80

**Socket Pairs \-** the source and destination socket form a socket pair ie 192.168.1.7:80, 192.168.1.7:1099

# The netstat Command {#the-netstat-command}

Unexplained TCP connections can pose a major security threat. 

They can indicate something or someone is connected to the local host. 

Sometimes it is necessary to know which active TCP connections are open and running on a networked host. 

Netstat is an important network utility that can be used to verify those connections. 

The \-n option can be used to display IP addresses and port numbers in their numerical form. 

Works on MAC

# Client Server Interaction {#client-server-interaction}

Example of Server Software \- Apache (Web Server)

Example of Client Software \- Chrome (Web Browser)

# DNS {#dns}

1. DNS Lookup  
   1. Uniform Resource Name \- Identifies only the namespace of the resource without reference to the protocol. [www.google.com](http://www.google.com)   
   2. Uniform Resource Locator \- Defines the network location of a specific resource on the network. https://www.google.com   
      1. Protocol/scheme \- HTTPS, FTP, SFTP etc  
      2. Hostname \- [www.google.com](http://www.google.com)  
      3. Path and file name \- /author/book.html  
      4. Fragment \- \#page155  
   3. [More Info](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)

2. TCP Connection (Socket Pairs)

DNS Servers \- A host requests from the DNS server the IP address of a hostname. 

Syntax Checker \- a simulation tool that does not have all the functionality of real equipment. It does not allow for abbreviated commands as you would do on real equipment. 

When you manually configure a device for network connectivity you include a DNS server address. This is provided by the ISP to your home router and handled by DHCP to send the configuration to all network devices. 

# nslookup {#nslookup}

You can use this command to discover the IP addresses for any domain name. 

example: nslookup [www.google.com](http://www.google.com)

Works in Terminal

# HTTP and HTML {#http-and-html}

Client sends request to DNS to get the IP of the URL

Then it uses the IP to send a request via HTTP on port 80 

The response from the server is the web page using mark-up languages

Web pages are coded in HTML that the browser interprets

HTTP is not secure and can be easily intercepted by other users 

HTTPS is secure HTTP using port 443 and secure transport protocols

# XMPP {#xmpp}

# FTP Clients And Servers {#ftp-clients-and-servers}

FTP provides an easy method to transfer files from one computer to another. 

A host running FTP client software can access an FTP server to manage files. 

FTP client software is built into computer operating systems and most browsers. 

The FTP service uses two different ports to communicate:

- Control Connection: port 21 \- commands are sent on this connection  
- Data Connection: port 20 \- data is transferred on this connection

FTP is a client-server application that can either “get” or “put”. 

FTP can used in two modes:

- Active: The server takes an active role by approving a request for data. This can have problems with firewalls which block unauthorized sessions from third parties.   
    
- Passive: The server doesn’t actively maintain the connection but the user establishes both channels. The server merely “listens” but doesn’t actively participate. 

FTP is often used to handle large numbers of files. This is helpful in web development. Also IT professionals use FTP to transfer large batches of server files within a closed system. 

Pros:

- Can transfer multiple files at the same time.  
- Resume a transfer if connection lost.   
- Schedule transfers.   
- Has been around a long time.   
- There are many desktop FTP tools ie FileZilla, WinSCP etc.

Cons:

- Lack of security \- wasn’t designed to be a secure protocol.   
- Not encrypted.

FTP support is dropping because of these security concerns. Some alternatives are:

- SFTP  
- HTTPS  
- AS2  
- FTPS

SFTP aka SSH File Transfer Protocol works over SSH port 22\. 

# Virtual Terminals {#virtual-terminals}

You can use these to access a server remotely:

- SSH  
- Telnet 

Terminals were text based systems that consisted of a display attached to a central computer. 

When networks became available users needed a way to access systems remotely. 

Telnet was developed to meet this need in the 1970s. 

Telnet provides a standard method of emulating text-based terminal devices over a data network. 

Both the protocol itself and the client software that implements the protocol are commonly referred to as Telnet. 

Telnet servers listen for client requests on TCP port 23\. 

A connection using Telnet is called a **virtual terminal session** (vty) or connection. 

Telnet uses software to create a virtual device that provides the same features of a terminal session with access to the serfer’s command line interface. 

Telnet is not considered a secure protocol and SSH should be used in most environments instead. 

Telnet does not support transporting encrypted data. The data is transmitted as plaintext and is easily intercepted and understood. 

SSH provides the structure for secure remote login and other network services and has stronger authentication and encryption. 

# Email and Messaging {#email-and-messaging}

SMTP \- Simple Mail Transfer Protocol

- Used by email client to send messages to its local email server  
- Server decides if the message is destined for local mailbox or mailbox on another server  
- If different server SMTP is used between those two servers with requests on port 25

POP3 \- Post Office Protocol

- POP servers store messages address to its user clients  
- When client connects to the server the messages are downloaded by client  
- Messages are not kept on the server after client has them  
- Clients contact POP3 servers on port 110

IMAP4 \- Internet Message Access Protocol

- IMAP servers store messages address to its user clients  
- When client connects to the server the messages are downloaded by client  
- Unlike POP, IMAP keeps the messages on the server unless they are deleted by user  
- Servers listen for client requests on port 143

Text Messaging aka Instant Message, Direct Message, Private Message, Chat Message

- Allow real time communication  
- Usually accessed through a web based client integrated into social media  
- Can be standalone clients ie WhatsApp  
- Usually P2P

VoIP \- Voice over IP

- Uses peer-to-peer technology  
- Analog voice signals converted to digital data  
- The voice data is encapsulated into IP packets  
- Calls are made to other users of the same service on the internet  
- A call to a regular telephone requires using a gateway to access the PSTN  
- Public Switched Telephone Network  
- Protocols and ports vary by software

# Network Testing Utilities and Commands {#network-testing-utilities-and-commands}

Troubleshooting Commands

	ipconfig \- Displays IP configuration information.  
ping \- Tests connections to other IP hosts.  
netstat \- Displays network connections.  
tracert \- Displays the route taken to the destination.  
nslookup \- Directly queries the name server for information on a destination domain.  
The ipconfig command is used to display the current IP configuration information for a host. Issuing this command from the command prompt will display the basic configuration information including IP address, subnet mask, and default gateway.

The command ipconfig /all displays additional information including the MAC address, IP addresses of the default gateway, and the DNS servers. It also indicates if DHCP is enabled, the DHCP server address, and lease information.

If IP addressing information is assigned dynamically, the command ipconfig /release will release the current DHCP bindings. ipconfig /renew will request fresh configuration information from the DHCP server. A host may contain faulty or outdated IP configuration information and a simple renewal of this information is all that is required to regain connectivity.

Probably the most commonly used network utility is ping. Most IP enabled devices support some form of the ping command in order to test whether or not network devices are reachable through the IP network. When a ping is sent to an IP address, a packet known as an echo request is sent across the network to the IP address specified. If the destination host receives the echo request, it responds with a packet known as an echo reply. If the source receives the echo reply, connectivity is verified by the reply from the specific IP address.

## Wireless Networks {#wireless-networks}

### 802.11 and Wi-Fi {#802.11-and-wi-fi}

Wi-Fi is often used to refer to technology for transmitting information from computers and peripheral devices using radio waves instead of wires, and based on technical standards and protocols established by the Institute of Electrical and Electronics Engineers (IEEE). 

Since IEEE produces standards for hundreds of different technologies they label a standards family for a particular technology using numbers. 802 was an available number for a standards family first developed in February 1980 and is derived from the year (80) and the month (2).

IEEE 802 concerns networking protocols for Local Area Networks (LAN) and Metropolitan Area Networks (MAN). By promoting standards for vendors to follow IEEE 802 helps ensure interoperability between network devices so equipment can work well together.  

The number after the decimal, for example, 802.11 refers to a particular amendment to the IEEE 802 standards, applicable to a specific area of the technology. In the case of 802.11, the protocols concern Wireless Local Area Networks (WLAN). 

IEEE 802.11 came to be commonly referred to as Wi-Fi. However, Wi-Fi began as a trademarked term owned by the Wi-Fi Alliance. The Wi-Fi Alliance provides testing and certification for products to verify the product conforms as needed to IEEE 802.11. 

Wi-Fi is sometimes thought to be a portmanteau of the words Wireless and Fidelity. Hi-Fi, which stands for High Fidelity, was a term used in the 20th Century to refer to high-quality and faithful reproduction of audio by sound reproduction technologies. 

While Wi-Fi is reminiscent of Hi-Fi, Wireless Fidelity is not a term used for anything. The term Wi-Fi was only invented so that the industry can have a more simple and appealing name to brand products conforming to IEEE 802.11. 

Since technologies develop and change rapidly the IEEE may append the standards name with additional numbers or letters (for example 802.11b). This distinguishes revisions, expansions, or further specifications of a standard over time.

Some important 802.11 revisions still used today are:

* 802.11b (1999)  
* 802.11g (2003)  
* 802.11n (2009)  
* 802.11ac (2013)  
* 802.11ax (2020) (also known as WiFi 6\)

As several iterations of 802.11 have developed the Wi-Fi Alliance has dropped the IEEE designation on their branding in favor of a simpler labeling scheme. They now use Wi-Fi 6 when certifying for IEEE 802.11ax as opposed to Wi-Fi 802.11ax. 

### Understanding WLAN {#understanding-wlan}

One fundamental principle for WLAN to work is

The basic component behaviors identified by 802.11 are:

* Beacons  
* Probe  
* Authentication  
* Association

### Other Wireless Technologies {#other-wireless-technologies}

Because the most common WLAN is Wi-Fi, sometimes the term WLAN is also referred to as Wi-Fi. But it is important to note that Wi-Fi is only one kind of WLAN. Additionally, WLAN is only one kind of wireless networking technology. 

Now we compare WLAN with other common wireless technologies that also have IEEE standards associated with them:

WPAN \- Bluetooth short range

WLAN \- Wireless Local Area Network \- IEEE 802.11 

Radio waves are used to connect devices wirelessly for short-medium range connections to an access point for internet connectivity.

WMAN

WWAN \- Wireless Wide Area Network \- IEEE 802\.

Large range interconnected networks aka internetwork aka internet

Cell phones can connect wirelessly to many kinds of networks:

* 4G/5G  
* Wi-Fi  
* Bluetooth  
* GPS  
* NFC

Types of devices connected to LAN:

* Hosts (define)(Server vs Client, P2P)  
* Peripherals (shared peripherals)  
* Network Devices (Intermediary Devices)  
* Network Media (cables, wires, radio waves)


## Security {#security}

**What are the most common forms of wireless security?**

## References {#references}

**Links used in your research**

1. [https://ieeexplore.ieee.org/browse/standards/get-program/page/series?id=68\&utm\_source=lp\_wdw\&utm\_campaign=80211\&utm\_medium=std\&utm\_term=80211m%3Dstd\&utm\_term=80211](https://ieeexplore.ieee.org/browse/standards/get-program/page/series?id=68&utm_source=lp_wdw&utm_campaign=80211&utm_medium=std&utm_term=80211m%3Dstd&utm_term=80211)

2. [https://www.cisco.com/c/en/us/products/wireless/what-is-wifi.html](https://www.cisco.com/c/en/us/products/wireless/what-is-wifi.html)

3. [https://www.cisco.com/en/US/docs/wireless/wlan\_adapter/secure\_client/5.1.0/administration/guide/C1\_Network\_Security.html](https://www.cisco.com/en/US/docs/wireless/wlan_adapter/secure_client/5.1.0/administration/guide/C1_Network_Security.html)

4. [https://www.verizon.com/info/definitions/wifi/\#:\~:text=Wi%2DFi%2C%20often%20referred%20to,technology%20known%20as%20IEEE%20802.11](https://www.verizon.com/info/definitions/wifi/#:~:text=Wi%2DFi%2C%20often%20referred%20to,technology%20known%20as%20IEEE%20802.11).  
5. [https://www.britannica.com/topic/portmanteau-word](https://www.britannica.com/topic/portmanteau-word)

6. [https://www.britannica.com/technology/high-fidelity-sound-system](https://www.britannica.com/technology/high-fidelity-sound-system)

7. [https://twitter.com/IEEESA/status/400075754631086080](https://twitter.com/IEEESA/status/400075754631086080)

8. [https://www.techtarget.com/searchnetworking/reference/IEEE-802-Wireless-Standards-Fast-Reference](https://www.techtarget.com/searchnetworking/reference/IEEE-802-Wireless-Standards-Fast-Reference)  
9. [https://www.cdw.com/content/cdw/en/articles/datacenter/what-are-the-different-types-of-wireless-networks.html](https://www.cdw.com/content/cdw/en/articles/datacenter/what-are-the-different-types-of-wireless-networks.html)  
10. [https://www.wi-fi.org/who-we-are/our-brands](https://www.wi-fi.org/who-we-are/our-brands)  
11. [https://www.intel.com/content/www/us/en/gaming/resources/wifi-6.html](https://www.intel.com/content/www/us/en/gaming/resources/wifi-6.html)  
12. [https://www.comptia.org/content/guides/what-is-a-local-area-network\#:\~:text=A%20local%20area%20network%20](https://www.comptia.org/content/guides/what-is-a-local-area-network#:~:text=A%20local%20area%20network%20)

