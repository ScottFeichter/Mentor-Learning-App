# COMPTIA CORE 1 AND CORE 2

[Core1	1](#core1)

[Interfaces, Ports, and Connectors	1](#interfaces,-ports,-and-connectors)

[Binary Data Storage and Transfer Units	2](#binary-data-storage-and-transfer-units)

[Video Cards	4](#video-cards)

[Capture Cards	5](#capture-cards)

[Core2	8](#core2)

# 

# Core1 {#core1}

Lessons 1 \- 8  
90 Questions  
90 Minutes  
Passing is 675 on a scale of 100-900

*DOMAIN PERCENTAGE OF EXAMINATION*  
*1.0 Mobile Devices 14%*  
*2.0 Networking 20%*  
*3.0 Hardware 27%*  
*4.0 Virtualization and Cloud Computing 12%*  
*5.0 Hardware and Network Troubleshooting 27%*  
*Total 100%*

### 

### **Interfaces, Ports, and Connectors** {#interfaces,-ports,-and-connectors}

A hardware port is the external connection point for a particular type of bus interface. A bus allows the transfer of data to and from devices. The connector is the part of a peripheral cable that can be inserted into a port with the same shape or form factor. Each bus interface type might use multiple connector form factors. Most connectors and ports now use edge contacts and either have an asymmetric design called *keying* to prevent them from being inserted the wrong way around or are reversible.

COM Port is Serial 

### **Binary Data Storage and Transfer Units** {#binary-data-storage-and-transfer-units}

When comparing bus interfaces, it is important to use appropriate units. Computers process binary data. Each binary digit or bit (b) can have the value one or zero. Storage is often measured in multiples of eight bits, referred to as a byte (B). A lowercase “b” unit refers to a bit, while uppercase means a byte.

Transfer rates are expressed in units per second of the following multiples of bits and bytes:

* 1000—Kilobits (Kb/s or Kbps) and kilobytes (KB/s and KBps).  
* 1000x1000—Megabits (Mb/s) or megabytes (MB/s).  
* 1000x1000x1000—Gigabits (Gb/s) and gigabytes (GB/s).

The Universal Serial Bus (USB) is the standard means of connecting most types of peripheral device to a computer. USB peripheral device functions are divided into classes, such as human interface (keyboards and mice), mass storage (disk drives), printer, audio device, and so on.

A USB is managed by a host controller. Each host controller supports multiple ports attached to the same bus. In theory, there could be up to 127 connected devices per controller, but to overcome the limitations of sharing bandwidth, most PC motherboards provision multiple USB controllers, each of which has three or four ports.

RAM \- non persistent  
Mass Storage \- presistaent (ROM?)  
REmoveable Storage \- persistent

*CPU, cache, and RAM are fast but volatile. Mass storage and removable storage devices provide slower but permanent data retrieval.* 

These processing and storage components are connected by bus interfaces implemented on the motherboard. The instructions and data are stored using transistors and capacitors and transmitted between components over the bus using electrical signals.

The motherboard’s system clock synchronizes the operation of all parts of the PC and provides the basic timing signal for the CPU. Clock speeds are measured in megahertz (MHz) or gigahertz (GHz). Clock multipliers take the timing signal produced by the generator and apply a multiplication factor to produce different timing signals for different types of buses. This means that one type of bus can work at a different speed (or frequency) to another type of bus.

ESD \- Electrostatic Discharge

SSD \- Solid State Drive  
HDD \- Hard Disk Drive

SATA \- Serial Advanced Technology Attachment  
eSATA \- external SATA

SATA data cable is 7 pin the power cable is 15 pin

In general most cables DO NOT use internal connection points.

An SSD can be provisioned in an adapter card form factor. These often use an M.2 interface. M.2 supplies power over the bus, so there is no need for a separate power cable.

The **Peripheral Component Interconnect Express (PCIe)** bus is the mainstream interface for modern adapter cards. It uses point-to-point serial communications, meaning that each component can have a dedicated link to any other component.

Mobo Form Factors:  
ATX  
mATX  
miniITX  
nanoITX  
picoITX  
mobileITX

Mobo *Fans with a 3-pin connector can usually be used with 4-pin headers, but the system may not be able to vary the fan speed (or may need special configuration to be able to do so). A fan with a 4-pin connector will usually work with a 3-pin header but will not be able to use PWM.*

### ***Video Cards*** {#video-cards}

*The **video card** (or graphics adapter) generates the signal to drive a monitor or projector. Low-end graphics adapters are likely to be included with the motherboard chipset or as part of the CPU itself. This is also referred to as an onboard adapter or onboard graphics. If a computer is to be used for 3-D gaming, computer-aided design (CAD), or digital artwork, a more powerful video adapter is required. This can be installed as an add-on card via a PCIe slot. Most graphics adapters are based on chipsets by ATI/AMD, NVIDIA, and Intel. Video cards are distinguished by the following features:*

* ***Graphics Processing Unit (GPU)**—A microprocessor designed and optimized for processing instructions that render 2-D and 3-D images and effects on-screen. The basic test for a GPU is the frame rate it can produce for a particular game or application. Other performance characteristics include support for levels of texture and lighting effects.*  
* ***Graphics memory**—3-D cards need a substantial amount of memory for processing and texture effects. A dedicated card may be fitted with up to 12 GB GDDR RAM at the high end; around 4–6 GB would be more typical of current mid-range performance cards. Low-end cards use shared memory (that is, the adapter uses the system RAM). Some cards may use a mix of dedicated and shared memory.*  
* ***Video ports**—The type and number of connectors, such as HDMI, DisplayPort, and Thunderbolt.*

*Graphics Double Data Rate (GDDR) memory technology is similar to the DDR modules used for system RAM.*

*Most modern cards use a PCIe x16 interface. Dual cards, using two (or more) slots, are also available.*

### ***Capture Cards*** {#capture-cards}

*Where a graphics card generates an output video signal to drive a monitor, a capture card is used to record video input and save it as a type of movie or streaming media file. Many capture cards are designed to record footage from computer games. Some are designed to work with PC games, while others record from game console HDMI sources or from a live camera HDMI source, such as a camcorder or security camera. Another class of capture card can act as a TV tuner and record video from broadcast TV sources.*

*A capture card can be fitted as an internal PCIe or as an external unit connected via USB/Thunderbolt.*

*Audio hardware built into a computer may be susceptible to noise from other internal components when using recording functionality. Consequently, most audio interfaces designed for professional use are external units connected via USB or Thunderbolt.*

NETWORK INTERFACE CARDS

Most computers have an Ethernet network adapter already installed as part of the motherboard chipset. However, there may be occasions when you need to install an add-on **network interface card (NIC)** or need to upgrade an adapter to use a different type of network or cabling/connector, such as copper cable versus fiber optic. A dedicated NIC may also provision multiple ports. These can be bonded into a single higher bandwidth link.

A Wi-Fi adapter can be added to connect to a wireless network. Wi-Fi adapters are developed to different 802.11 standards. There are also cards that can connect to cellular data networks.

SCSI \- Small Computer System Interface

IDE \- Integrated Drive Electronics aka PATA  
PATA \- Parallel Advanced Technology Attachment  
EIDE \- Extension IDE

WHEN YOU PRESS POWER  
PSU sends 12v to Fans and HDD  
It checks 5v and 3v power if good sends power good signal  
Firmware performs POST to check hardware components are present and working  
If POST passes then firmware searches devices for boot sector  
Two ways of formatting boot sector: MBR and GPT  
Methods of booting: BCD, GRUB, LILO

There are two main scenarios for **RAID failure**: failure of a device within the array and failure of the whole array or volume.

If one of the underlying devices fails, the volume will be listed as "degraded," but the data on the volume will still be accessible and it should continue to function as a boot device if so configured.

Symptoms such as the system locking up, **intermittent shutdowns**, continuous rebooting, OS blue screen/Kernel panic errors, and **application crashes** are difficult to diagnose with a specific cause, especially if you are not able to witness the events directly. The most likely causes are software, disk/file corruption problems, or malware.

Performance issues are one of the hardest types of problem to diagnose and troubleshoot because the symptoms of poor performance have a wide variety of causes. Use a structured approach to try to compartmentalize the source of the performance issue.

*A bottleneck is an underpowered component that slows down the whole system. For example, a PC might have a fast CPU, dedicated graphics, and lots of system memory, but if the fixed disk is an HDD, then performance will be very slow.*

The real time clock (RTC) is a part of the chipset that keeps track of the calendar date and time. This component runs on battery power when the computer is turned off. The RTC battery is a coin cell lithium battery.

*The RTC battery is also often called the CMOS battery. On older computers, system firmware custom settings were saved to CMOS RAM. CMOS stands for complementary metal-oxide semiconductor, which describes the manufacturing process used to make the RAM chip. CMOS requires battery backup to save data. On current motherboards, configuration data is stored in a non-volatile RAM (NVRAM) chip (flash memory), rather than in CMOS RAM. Flash memory does not require battery backup.*

Most cabled LANs are based on the **802.3 Ethernet** standards and are designated *x* BASE- *Y* , where *x* is the nominal data rate and *Y* is the cable type.

A **wireless local area network (WLAN)** uses radios and antennas for data transmission and reception. Most WLANs are based on the IEEE 802.11 better known by its brand name, **Wi-Fi**. 

Where a LAN operates at a single site, a **wide area network (WAN)** spans multiple geographic locations. One example of a WAN is the Internet, a global network of networks. A company dedicated to facilitating access to the Internet from local networks is called an Internet Service Provider (ISP).

**Metropolitan area network (MAN)** can be used to mean a specific network type covering an area equivalent to a city or other municipality. It could mean a company with multiple connected networks within the same metropolitan area—so, larger than a LAN but smaller than a WAN.

A **small office home office (SOHO)** LAN is a business-oriented network possibly using a centralized server, in addition to client devices and printers, but often using a single networking appliance to provide LAN and Internet connectivity. This is often referred to as a "SOHO router," "Internet router," or "broadband router."

Most networks distinguish between two basic roles for the computers:

* A server computer is dedicated to running network applications and hosting shared resources.  
* A client computer allows end users to access the applications and resources to do work.

A **datacenter** is a whole site that is dedicated to provisioning server resources.

Within an enterprise LAN or datacenter, a **storage area network (SAN)** provisions access to a configurable pool of storage devices that can be used by application servers.

A **personal area network (PAN)** refers to using wireless connectivity to connect to devices at a range of a few meters. A PAN can be used to share data between a PC and mobile devices and wearable technology devices, such as smart watches.

# Core2 {#core2}

Bootrec is the cli cmnd to try to fix the boot sector

Bcdedit is the cli cmnd to try to fix the bcd

Start up repair will do both of these

Windows makes auto restore points but you should make your own as well

Use the create restore point wizard

Turn system protection on

Or create a new restore point and give it a name

It makes a snapshot of the registry

You can restore from safe mode

It is good practice to make a restore point before a major change

Restore points are basically backups of the registry, but not of data

Make a Recovery Image to back up, restore, create a system image

To roll back drivers go in Device Manager

To roll back updates go to programs and features  
