**Über arc42**

arc42, das Template zur Dokumentation von Software- und
Systemarchitekturen.

Erstellt von Dr. Gernot Starke, Dr. Peter Hruschka und Mitwirkenden.

Template Revision: 7.0 DE (asciidoc-based), January 2017

© We acknowledge that this document uses material from the arc 42
architecture template, <http://www.arc42.de>. Created by Dr. Peter
Hruschka & Dr. Gernot Starke.

Einführung und Ziele {#section-introduction-and-goals}
====================

Aufgabenstellung {#_aufgabenstellung}
----------------

Qualitätsziele {#_qualit_tsziele}
--------------

Stakeholder {#_stakeholder}
-----------

+-----------------+-----------------+-----------------------------------+
| Rolle           | Kontakt         | Erwartungshaltung                 |
+=================+=================+===================================+
| *&lt;Rolle-1&gt | *&lt;Kontakt-1& | *&lt;Erwartung-1&gt;*             |
| ;*              | gt;*            |                                   |
+-----------------+-----------------+-----------------------------------+
| *&lt;Rolle-2&gt | *&lt;Kontakt-2& | *&lt;Erwartung-2&gt;*             |
| ;*              | gt;*            |                                   |
+-----------------+-----------------+-----------------------------------+

Randbedingungen {#section-architecture-constraints}
===============

Kontextabgrenzung {#section-system-scope-and-context}
=================

Fachlicher Kontext {#_fachlicher_kontext}
------------------

**&lt;Diagramm und/oder Tabelle&gt;**

**&lt;optional: Erläuterung der externen fachlichen Schnittstellen&gt;**

Technischer Kontext {#_technischer_kontext}
-------------------

![Kontextsicht](images/kontextsicht_1.png)

**&lt;optional: Erläuterung der externen technischen
Schnittstellen&gt;**

**&lt;Mapping fachliche auf technische Schnittstellen&gt;**

Lösungsstrategie {#section-solution-strategy}
================

Bausteinsicht {#section-building-block-view}
=============

Whitebox Gesamtsystem {#_whitebox_gesamtsystem}
---------------------

![Bausteinsicht Umfragen](images/bausteinsicht_1.png)

Begründung

:   *&lt;Erläuternder Text&gt;*

Enthaltene Bausteine

:   *&lt;Beschreibung der enhaltenen Bausteine (Blackboxen)&gt;*

Wichtige Schnittstellen

:   *&lt;Beschreibung wichtiger Schnittstellen&gt;*

### &lt;Name Blackbox 1&gt; {#__name_blackbox_1}

*&lt;Zweck/Verantwortung&gt;*

*&lt;Schnittstelle(n)&gt;*

*&lt;(Optional) Qualitäts-/Leistungsmerkmale&gt;*

*&lt;(Optional) Ablageort/Datei(en)&gt;*

*&lt;(Optional) Erfüllte Anforderungen&gt;*

*&lt;(optional) Offene Punkte/Probleme/Risiken&gt;*

### &lt;Name Blackbox 2&gt; {#__name_blackbox_2}

*&lt;Blackbox-Template&gt;*

### &lt;Name Blackbox n&gt; {#__name_blackbox_n}

*&lt;Blackbox-Template&gt;*

### &lt;Name Schnittstelle 1&gt; {#__name_schnittstelle_1}

…

### &lt;Name Schnittstelle m&gt; {#__name_schnittstelle_m}

Ebene 2 {#_ebene_2}
-------

### Whitebox *&lt;Baustein 1&gt;* {#_whitebox_emphasis_baustein_1_emphasis}

*&lt;Whitebox-Template&gt;*

### Whitebox *&lt;Baustein 2&gt;* {#_whitebox_emphasis_baustein_2_emphasis}

*&lt;Whitebox-Template&gt;*

…

### Whitebox *&lt;Baustein m&gt;* {#_whitebox_emphasis_baustein_m_emphasis}

*&lt;Whitebox-Template&gt;*

Ebene 3 {#_ebene_3}
-------

### Whitebox &lt;\_Baustein x.1\_&gt; {#_whitebox_baustein_x_1}

*&lt;Whitebox-Template&gt;*

### Whitebox &lt;\_Baustein x.2\_&gt; {#_whitebox_baustein_x_2}

*&lt;Whitebox-Template&gt;*

### Whitebox &lt;\_Baustein y.1\_&gt; {#_whitebox_baustein_y_1}

*&lt;Whitebox-Template&gt;*

Laufzeitsicht {#section-runtime-view}
=============

*&lt;Bezeichnung Laufzeitszenario 1&gt;* {#__emphasis_bezeichnung_laufzeitszenario_1_emphasis}
----------------------------------------

-   &lt;hier Laufzeitdiagramm oder Ablaufbeschreibung einfügen&gt;

-   &lt;hier Besonderheiten bei dem Zusammenspiel der Bausteine in
    diesem Szenario erläutern&gt;

*&lt;Bezeichnung Laufzeitszenario 2&gt;* {#__emphasis_bezeichnung_laufzeitszenario_2_emphasis}
----------------------------------------

…

*&lt;Bezeichnung Laufzeitszenario n&gt;* {#__emphasis_bezeichnung_laufzeitszenario_n_emphasis}
----------------------------------------

…

Verteilungssicht {#section-deployment-view}
================

Infrastruktur Ebene 1 {#_infrastruktur_ebene_1}
---------------------

***&lt;Übersichtsdiagramm&gt;***

Begründung

:   *&lt;Erläuternder Text&gt;*

Qualitäts- und/oder Leistungsmerkmale

:   *&lt;Erläuternder Text&gt;*

Zuordnung von Bausteinen zu Infrastruktur

:   *&lt;Beschreibung der Zuordnung&gt;*

Infrastruktur Ebene 2 {#_infrastruktur_ebene_2}
---------------------

### *&lt;Infrastrukturelement 1&gt;* {#__emphasis_infrastrukturelement_1_emphasis}

*&lt;Diagramm + Erläuterungen&gt;*

### *&lt;Infrastrukturelement 2&gt;* {#__emphasis_infrastrukturelement_2_emphasis}

*&lt;Diagramm + Erläuterungen&gt;*

…

### *&lt;Infrastrukturelement n&gt;* {#__emphasis_infrastrukturelement_n_emphasis}

*&lt;Diagramm + Erläuterungen&gt;*

Querschnittliche Konzepte {#section-concepts}
=========================

*&lt;Konzept 1&gt;* {#__emphasis_konzept_1_emphasis}
-------------------

*&lt;Erklärung&gt;*

*&lt;Konzept 2&gt;* {#__emphasis_konzept_2_emphasis}
-------------------


*&lt;Erklärung&gt;*

…

*&lt;Konzept n&gt;* {#__emphasis_konzept_n_emphasis}
-------------------

*&lt;Erklärung&gt;*

Entwurfsentscheidungen {#section-design-decisions}
======================

Qualitätsanforderungen {#section-quality-scenarios}
======================

Qualitätsbaum {#_qualit_tsbaum}
![Kontextsicht](images/qualitaetsbaum.png)
-------------

Qualitätsszenarien {#_qualit_tsszenarien}
------------------

Risiken und technische Schulden {#section-technical-risks}
===============================

Glossar {#section-glossary}
=======

+----------------------+----------------------------------------------+
| Begriff              | Definition                                   |
+======================+==============================================+
| *&lt;Begriff-1&gt;*  | *&lt;Definition-1&gt;*                       |
+----------------------+----------------------------------------------+
| *&lt;Begriff-2*      | *&lt;Definition-2&gt;*                       |
+----------------------+----------------------------------------------+
