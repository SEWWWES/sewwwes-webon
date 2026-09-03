/**
 *  ============================================================================================
 *  👑 SeWWWeS SYSTEM-CORE: DIE HEILIGE SCHRIFT DER MATRIX (m001)
 *  ============================================================================================
 *  DATEI:         sewwwes-sys-m001-master-header.js
 *  VERSION:       v570002.6 - NODELINK INTEGRATION EDITION
 *  ARCHITEKT:     Dirk Gampe | Lead Technosophischer System-Architekt
 *  DNA:           FID 9999999999 (Souveräner Ursprung)
 *  STATUS:        100% SÄTTIGUNG | RYZEN & NATIVE MOBILE OPTIMIZED
 *  FOKUS:         NODELINK COUPLING | 2x2 SYMMETRIC ACTION BUTTONS | NATIVE SCANNER COUPLING
 *  ============================================================================================ */

(function() {
    "use strict";

    // 📜 SYSTEM-REGISTRY (Lexikalisch deklariert)
    const registry = [
        {id:1, BRAND:"SEWWWES", SID:"7829104736", ICON:"sewwwes-logo.png", HEX:"0x7E28CAb3978Baf2F5d3C5d5b58f0Bf1e979f707E"},
        {id:2, BRAND:"WORLD", SID:"3939041100", ICON:"globus-world.png", HEX:"0x3e39dbD7EE545904E428E6f624d9FFEA507Ae11E"},
        {id:3, BRAND:"FAMILY", SID:"6198104200", ICON:"kyc-token-logo.png", HEX:"0xa6a19eA8a2cFf2e8740981AfA3BbCd7E0D9342Fd"},
        {id:4, BRAND:"GOLD", SID:"1532048750", ICON:"gold.png", HEX:"0x1532b66B43b9Fa9ef5F22c3eFdeBbed9023D4875"},
        {id:5, BRAND:"COPPER", SID:"4231000570", ICON:"gold.png", HEX:"0x4c23c114EB6929AbD3CE74bE211Aea4E91adec57"},
        {id:6, BRAND:"BLOCKCHAIN", SID:"9219090810", ICON:"spc-seal.png", HEX:"0x9CD219F884e8118109D5c68A9bedf2e94b5e081F"},
        {id:7, BRAND:"DOMAIN", SID:"3920150140", ICON:"nomo-id.png", HEX:"0xaaE3f920BDB8Fa6a8D2cb150289326CB6f5fC14E"},
        {id:8, BRAND:"INTERNET", SID:"5883108969", ICON:"nx1.png", HEX:"0x5dEB831774b1C86fCeEe81a03959F4C284878F69"}
    ];

    const SeWWMeSHeader = {
        state: Object.seal({
            morphoseLevel: 2,           // Deep-Link Morphose aktiv
            version: "v570002.6",
            fid: "9999999999",          // DNA Match Verified
            znqCourse: 0.024,           // Fixed Gravitation
            networkStatus: "CONNECTED",
            locationAnchor: "Lehmergrund | 727m über NN"
        }),

        familyDefaults: {
            primary: "157866",            // Neuer kaiserlicher Familien-Sponsorlink v2.9.9+
            legacy: "113438",             // Historischer Sponsorlink von Vater Dirk
            copper: "nh4ektwukwtrautjqmex", // Kupfer-Anker Voo.one
            nodelink: "NL8FH5525CWA"       // Netzknoten-Anker NodeLink
        },

        sidToTgiMap: {
            "1532048750": "157866", // SmartEarthGold SID -> Familien-Sponsorlink
            "7829104736": "113438"  // SeWWWeS Core SID -> Dirk Sponsorlink
        },

        sidToCopperMap: {
            "4231000570": "nh4ektwukwtrautjqmex",
            "7829104736": "nh4ektwukwtrautjqmex"
        },

        sidToNodeLinkMap: {
            "5883108969": "NL8FH5525CWA", // Internet SID -> Default NodeLink
            "7829104736": "NL8FH5525CWA"  // SeWWWeS Core SID -> Default NodeLink
        },

        init: function() {
            console.log("🌀 Master-Header " + this.state.version + " (Level 2): Zünde State-Engine...");
            this.startClock();
            this.renderNavigation();
            this.detectLocation();
            if (!window.nomo) {
                setTimeout(() => { this.showNomoDownloadReveal(); }, 4000);
            }
        },

        startClock: function() {
            setInterval(() => {
                const now = new Date();
                document.getElementById('clock-date').innerText = now.toLocaleDateString('de-DE');
                document.getElementById('clock-local').innerText = now.toLocaleTimeString('de-DE');
                document.getElementById('clock-utc').innerText = "UTC: " + now.getUTCHours().toString().padStart(2,'0') + ":" + now.getUTCMinutes().toString().padStart(2,'0');
                document.getElementById('clock-be').innerText = "B.E. 2569: " + now.getUTCHours().toString().padStart(2,'0') + ":" + now.getUTCMinutes().toString().padStart(2,'0') + " B.E.";
            }, 1000);
        },

        detectLocation: function() {
            const loc = document.getElementById('dynamic-location');
            if (loc) {
                loc.innerText = window.nomo ? "SmartEarthLand: Nomo-Node Active" : "SmartEarthLand: Sachsen | Lehmergrund 727m";
            }
        },

        focusToken: function(id) {
            const el = document.getElementById(id);
            if (el) {
                el.classList.add('orbit-focus');
                setTimeout(() => el.classList.remove('orbit-focus'), 3000);
            }
        },

        renderNavigation: function() {
            const nav = document.getElementById('path-navigation-band');
            if (!nav) return;
            nav.innerHTML = registry.slice(0, 8).map(p => `
            <div style="display:flex; flex-direction:column; align-items:center; margin: 0 10px;">
                <div class="mandala-tile nav-mandala" id="tile-${p.id}" onclick="SeWWMeSHeader.openFullView(${p.id})">
                    <div class="tile-field btn-hover-label" data-label="OPENSEA ORIGINAL" onclick="event.stopPropagation(); window.open('https://opensea.io/' + p.HEX, '_blank')"><span class="field-icon">🌊</span></div>
                    <div class="tile-field btn-hover-label" data-label="WISSEN & INFO" onclick="event.stopPropagation(); alert('${p.BRAND} INFO:\\nSID: ${p.SID}\\nHEX: ${p.HEX}')"><span>i</span></div>
                    <div class="tile-field btn-hover-label" data-label="LIMO GATEWAY" onclick="event.stopPropagation(); window.open('https://' + p.BRAND.toLowerCase() + '.nft.limo', '_blank')"><span>🌐</span></div>
                    <div class="tile-field btn-hover-label" data-label="SID: ${p.SID}" onclick="event.stopPropagation(); SeWWMeSHeader.copySovereignty('SID', '${p.SID}', 'tile-' + p.id)"><span class="field-icon">📋</span></div>
                    <div class="tile-center"><img src="assets/images/${p.ICON}" style="width:85%;"></div>
                    <div class="tile-field btn-hover-label" data-label="HEX: ${p.HEX}" onclick="event.stopPropagation(); SeWWMeSHeader.copySovereignty('HEX', '${p.HEX}', 'tile-' + p.id)"><span class="field-icon">🔗</span></div>
                    <div class="tile-field f-guard-altar btn-hover-label" data-label="INHALE NOW" onclick="event.stopPropagation(); SeWWMeSHeader.executeAltarNexus()"><span>🌀</span></div>
                    <div class="tile-field btn-hover-label" data-label="FID: 9999999999" onclick="event.stopPropagation(); SeWWMeSHeader.copySovereignty('FID', '9999999999', 'tile-' + p.id)"><span>👤</span></div>
                    <div class="tile-field f-guard-vault btn-hover-label" data-label="CHAT & P2P" onclick="event.stopPropagation(); window.open('https://nomo.id/chat', '_blank')"><span>💬</span></div>
                </div>
                <div style="color:var(--sewwwes-gold); font-size:0.55rem; font-weight:950; margin-top:5px; letter-spacing:1px;">${p.BRAND}</div>
            </div>`).join('');
        },

        openFullView: function(id) {
            const target = document.getElementById('modal-target');
            const p = registry.find(item => item.id === id);
            if (!p) return;
            target.innerHTML = `
            <h2 style="color:var(--sewwwes-gold); letter-spacing:12px; margin-bottom:2vh; font-weight:900;">${p.BRAND} BLOOM</h2>
            <div class="mandala-tile" style="margin:auto; transform:none !important;">
                <div class="tile-field btn-hover-label" data-label="OPENSEA STARTEN" onclick="window.open('https://opensea.io/' + p.HEX, '_blank')"><span style="font-size:7vmin;">🌊</span><br>SEA</div>
                <div class="tile-field btn-hover-label" data-label="INFO EXTRAKT" onclick="alert('${p.BRAND} SID is ${p.SID}')"><span style="font-size:7vmin;">i</span><br>INFO</div>
                <div class="tile-field btn-hover-label" data-label="LIMO-GATEWAY ÖFFNEN" onclick="window.open('https://' + p.BRAND.toLowerCase() + '.nft.limo', '_blank')"><span style="font-size:7vmin;">🌐</span><br>LIMO</div>
                <div class="tile-field btn-hover-label" data-label="SID KOPIEREN" onclick="SeWWMeSHeader.copySovereignty('SID', '${p.SID}', 'modal-content-root')"><span style="font-size:7vmin;">📋</span><br>SID</div>
                <div class="tile-center"><img src="assets/images/${p.ICON}" width="85%"></div>
                <div class="tile-field btn-hover-label" data-label="HEX KOPIEREN" onclick="SeWWMeSHeader.copySovereignty('HEX', '${p.HEX}', 'modal-content-root')"><span style="font-size:7vmin;">🔗</span><br>HEX</div>
                <div class="tile-field f-guard-altar btn-hover-label" data-label="INHALE STARTEN" onclick="SeWWMeSHeader.executeAltarNexus()"><span style="font-size:7vmin;">🌀</span><br>INHALE</div>
                <div class="tile-field btn-hover-label" data-label="FID KOPIEREN" onclick="SeWWMeSHeader.copySovereignty('FID', '9999999999', 'modal-content-root')"><span style="font-size:7vmin;">👤</span><br>FID</div>
                <div class="tile-field f-guard-vault btn-hover-label" data-label="P2P CHAT ÖFFNEN" onclick="window.open('https://nomo.id/chat', '_blank')"><span style="font-size:7vmin;">💬</span><br>CHAT</div>
            </div>
            <button class="majesty-btn" style="margin-top:4vh;" onclick="SeWWMeSHeader.closeFullView()">Souveränität schließen</button>`;
            document.getElementById('sewwwes-2ss-modal').classList.add('active');
        },

        openTGIRegistrationGate: function() {
            const target = document.getElementById('modal-target');
            target.innerHTML = `
                <h2 style="color:var(--sewwwes-gold); letter-spacing:12px; font-weight:900; margin-bottom:3vh;">TGI GOLD ECOSYSTEM</h2>
                <p style="color:var(--sewwwes-skyblue); font-family:'Roboto Mono', monospace; font-size:0.9rem; margin-bottom:25px;">
                    Tritt ein in das eiserne Werte-Reservat der Familie.<br>
                    Gib die 10-stellige SID deines Mentors ein (oder lass das Feld leer für den Familien-Sponsor).
                </p>
                <div style="margin: 20px 0;">
                    <input type="text" id="tgi-sponsor-input" 
                           style="background:#000; border:2px solid var(--sewwwes-copper); color:#FFF; padding:15px; width:320px; border-radius:15px; text-align:center; font-family:'Roboto Mono', monospace; font-size:1.1rem;" 
                           placeholder="PARTNER-SID / ID">
                </div>
                <button class="majesty-btn" onclick="SeWWMeSHeader.executeTGIReferral()">Registrierung Zünden</button>
                <button class="majesty-btn" style="background:#333; color:#FFF; margin-left:10px;" onclick="SeWWMeSHeader.closeFullView()">Abbrechen</button>
            `;
            document.getElementById('sewwwes-2ss-modal').classList.add('active');
        },

        executeTGIReferral: function() {
            const inputField = document.getElementById('tgi-sponsor-input');
            if (!inputField) return;

            let rawInput = inputField.value.trim();
            let targetID = "";

            if (rawInput === "") {
                targetID = this.familyDefaults.primary;
            } else if (this.sidToTgiMap[rawInput]) {
                targetID = this.sidToTgiMap[rawInput];
            } else {
                targetID = rawInput;
            }

            const finalUrl = "https://my.trustgold.international/r/" + targetID;
            window.open(finalUrl, '_blank');
        },

        openCopperRegistrationGate: function() {
            const target = document.getElementById('modal-target');
            target.innerHTML = `
                <h2 style="color:var(--sewwwes-copper); letter-spacing:12px; font-weight:900; margin-bottom:3vh;">COPPERONE ECOSYSTEM</h2>
                <p style="color:var(--sewwwes-skyblue); font-family:'Roboto Mono', monospace; font-size:0.9rem; margin-bottom:25px;">
                    Tritt ein in das eiserne Kupfer-Reservat der Familie.<br>
                    Gib die 10-stellige SID deines Mentors ein (oder lass das Feld leer für den Familien-Sponsor).
                </p>
                <div style="margin: 20px 0;">
                    <input type="text" id="copper-sponsor-input" 
                           style="background:#000; border:2px solid var(--sewwwes-copper); color:#FFF; padding:15px; width:320px; border-radius:15px; text-align:center; font-family:'Roboto Mono', monospace; font-size:1.1rem;" 
                           placeholder="PARTNER-SID / ID">
                </div>
                <button class="majesty-btn" onclick="SeWWMeSHeader.executeCopperReferral()">Registrierung Zünden</button>
                <button class="majesty-btn" style="background:#333; color:#FFF; margin-left:10px;" onclick="SeWWMeSHeader.closeFullView()">Abbrechen</button>
            `;
            document.getElementById('sewwwes-2ss-modal').classList.add('active');
        },

        executeCopperReferral: function() {
            const inputField = document.getElementById('copper-sponsor-input');
            if (!inputField) return;

            let rawInput = inputField.value.trim();
            let targetID = "";

            if (rawInput === "") {
                targetID = this.familyDefaults.copper;
            } else if (this.sidToCopperMap[rawInput]) {
                targetID = this.sidToCopperMap[rawInput];
            } else {
                targetID = rawInput;
            }

            const finalUrl = "https://nomo.app/webon/voo.one?ref=" + targetID;
            window.open(finalUrl, '_blank');
        },

        /* 🌐 NODELINK SOUVERÄNITÄTS GATE (v2.9.9+ fixed Link Integration) */
        openNodeLinkRegistrationGate: function() {
            const target = document.getElementById('modal-target');
            target.innerHTML = `
                <h2 style="color:var(--sewwwes-skyblue); letter-spacing:8px; font-weight:900; margin-bottom:3vh;">NODELINK NETZKNOTEN</h2>
                <p style="color:var(--sewwwes-gold); font-family:'Roboto Mono', monospace; font-size:0.9rem; margin-bottom:25px;">
                    Zünde deinen dezentralen Netzknoten.<br>
                    Gib die 10-stellige SID deines Mentors ein (oder lass das Feld leer für den Familien-Sponsor).
                </p>
                <div style="margin: 20px 0;">
                    <input type="text" id="nodelink-sponsor-input" 
                           style="background:#000; border:2px solid var(--sewwwes-skyblue); color:#FFF; padding:15px; width:320px; border-radius:15px; text-align:center; font-family:'Roboto Mono', monospace; font-size:1.1rem;" 
                           placeholder="PARTNER-SID / ID">
                </div>
                <button class="majesty-btn" onclick="SeWWMeSHeader.executeNodeLinkReferral()">Registrierung Zünden</button>
                <button class="majesty-btn" style="background:#333; color:#FFF; margin-left:10px;" onclick="SeWWMeSHeader.closeFullView()">Abbrechen</button>
            `;
            document.getElementById('sewwwes-2ss-modal').classList.add('active');
        },

        executeNodeLinkReferral: function() {
            const inputField = document.getElementById('nodelink-sponsor-input');
            if (!inputField) return;

            let rawInput = inputField.value.trim();
            let targetID = "";

            if (rawInput === "") {
                targetID = this.familyDefaults.nodelink;
            } else if (this.sidToNodeLinkMap[rawInput]) {
                targetID = this.sidToNodeLinkMap[rawInput];
            } else {
                targetID = rawInput;
            }

            const finalUrl = "https://app.nodelink.now/auth/signup?ref=" + targetID;
            window.open(finalUrl, '_blank');
        },

        triggerSearch: function() {
            const i = document.getElementById('spcl-input').value.toUpperCase().trim();
            const el = document.getElementById('spcl-gate-aura');
            if (i) { el.classList.add('flash-active'); setTimeout(() => el.classList.remove('flash-active'), 800); }
            if (["BUCH", "M400", "GOLDEN", "LIBRARY"].some(k => i.includes(k))) { this.openMediaMandala(); return; }
            if (["SCAN", "SCANNER", "NFT"].some(k => i.includes(k))) { this.triggerScanner(); return; }
            const f = registry.find(p => p.SID === i || p.BRAND === i);
            if (f) this.openFullView(f.id); else alert("🔍 SPCL Audit: Information nicht arretiert.");
        },

        triggerScanner: function() {
            if (window.nomo && typeof window.nomo.scanQRCode === 'function') {
                console.log("📸 Nomo WebOn API: Zünde nativen Kamera-Scanner...");
                window.nomo.scanQRCode().then(result => {
                    if (result && result.qrCode) {
                        document.getElementById('spcl-input').value = result.qrCode;
                        this.triggerSearch();
                    }
                }).catch(err => {
                    console.error("📸 Scanner Error:", err);
                    this.showSimulatedScannerModal();
                });
            } else {
                this.showSimulatedScannerModal();
            }
        },

        showSimulatedScannerModal: function() {
            const target = document.getElementById('modal-target');
            target.innerHTML = `
                <h2 style="color:var(--sewwwes-emerald); letter-spacing:8px; font-weight:900; margin-bottom:3vh;">
                    © ScanMe.NFT GATEWAY
                </h2>
                <div style="width:40vmin; height:40vmin; background:#FFF; padding:15px; border-radius:35px; margin:auto; box-shadow: 0 0 50px var(--sewwwes-emerald); position:relative; display:flex; align-items:center; justify-content:center;">
                    <div style="width:100%; height:100%; border:5px dashed var(--sewwwes-emerald); border-radius:25px; display:flex; align-items:center; justify-content:center; background:#000;">
                        <span style="color:var(--sewwwes-emerald); font-family:'Roboto Mono', monospace; font-size:1rem; font-weight:900; animation: blink 1.5s infinite;">
                            🔴 SIMULATION BEREIT
                        </span>
                    </div>
                </div>
                <p style="color:var(--sewwwes-skyblue); font-family:'Roboto Mono', monospace; font-size:0.85rem; margin-top:20px;">
                    Simuliert das Scannen des physischen ©️ MyQR.NFT Master-Siegels.
                </p>
                <div style="margin-top:4vh;">
                    <button class="majesty-btn" onclick="SeWWMeSHeader.executeSimulatedScan('7829104736')">
                        Master-Core scannen
                    </button>
                    <button class="majesty-btn" style="background:#222; color:#FFF; margin-left:10px;" onclick="SeWWMeSHeader.closeFullView()">
                        Abbrechen
                    </button>
                </div>
            `;
            document.getElementById('sewwwes-2ss-modal').classList.add('active');
        },

        executeSimulatedScan: function(scannedSID) {
            this.closeFullView();
            const inputField = document.getElementById('spcl-input');
            const auraFrame = document.getElementById('spcl-gate-aura');
            
            if (inputField && auraFrame) {
                inputField.value = scannedSID;
                auraFrame.classList.add('flash-active');
                setTimeout(() => {
                    auraFrame.classList.remove('flash-active');
                    this.triggerSearch();
                }, 800);
            }
        },

        showNomoDownloadReveal: function() {
            const target = document.getElementById('modal-target');
            target.innerHTML = `<h2 style="color:var(--sewwwes-gold);">NOMOAPP GATEWAY</h2><p style="color:var(--sewwwes-skyblue); font-family:'Roboto Mono'; font-size:0.9rem; margin-bottom:20px;">Sichere dir die NomoAppWallet für die volle SeWWMeS Souveränität.</p><div style="width:45vmin; height:45vmin; background:#FFF; padding:15px; border-radius:35px; margin:auto;"><img src="assets/images/qr-nomo-download.png" style="width:100%;"></div><button class="majesty-btn" style="margin-top:3vh;" onclick="SeWWMeSHeader.closeFullView()">Matrix betreten</button>`;
            document.getElementById('sewwwes-2ss-modal').classList.add('active');
        },

        openMediaMandala: function() {
            const target = document.getElementById('modal-target');
            const lib = [{ icon: "📚", type: "PRINT", label: "GOLDENE BÜCHER (PDF)", act: "SeWWMeSHeader.openVersionMandala()" }, { icon: "🎙️", type: "RADIO", label: "BROADCAST ARCHIV", act: "alert('Radio lädt...')" }, { icon: "🎥", type: "VIDEO", label: "VIDEO AKADEMIE", act: "alert('Video lädt...')" }];
            let html = `<h2 style="color:var(--sewwwes-gold); letter-spacing:12px; margin-bottom:4vh;">KNOWLEDGE CENTER</h2><div class="mandala-tile" style="margin:auto; transform:none !important;">`;
            for (let i = 1; i <= 9; i++) { 
                if (i === 5) html += `<div class="tile-center"><img src="assets/images/sewwwes-logo.png" style="width:85%;"></div>`; 
                else { 
                    const m = lib[i > 5 ? i - 2 : i - 1]; 
                    html += m ? `<div class="tile-field btn-hover-label" data-label="${m.label}" onclick="${m.act}"><span style="font-size:5vmin;">${m.icon}</span><br>${m.type}</div>` : `<div class="tile-field" style="opacity:0.1;"></div>`; 
                } 
            }
            html += `</div><button class="majesty-btn" style="margin-top:4vh;" onclick="SeWWMeSHeader.closeFullView()">ZURÜCK</button>`;
            target.innerHTML = html; document.getElementById('sewwwes-2ss-modal').classList.add('active');
        },

        openVersionMandala: function() {
            const target = document.getElementById('modal-target');
            const versions = [{ icon: "🆕", type: "v2.1.2", label: "GOLDENES BUCH v2.1.2", act: "window.open('assets/docs/SeWWWeS-GoldenBook-v2.1.2.pdf')" }, { icon: "📜", type: "v2.1.1", label: "Sonntags-Manifest", act: "alert('Lade v2.1.1...')" }];
            let html = `<h2 style="color:var(--sewwwes-gold); letter-spacing:12px;">VERSIONEN WÄHLEN</h2><div class="mandala-tile" style="width:60vmin; height:60vmin; margin:auto; transform:none !important; border-width:4px;">`;
            for (let i = 1; i <= 9; i++) { 
                if (i === 5) html += `<div class="tile-center"><img src="assets/images/kyc-token-logo.png" style="width:85%;"></div>`; 
                else { 
                    const v = versions[i > 5 ? i - 2 : i - 1]; 
                    html += v ? `<div class="tile-field btn-hover-label" data-label="${v.label}" onclick="${v.act}"><span style="font-size:5vmin;">${v.icon}</span><br>${v.type}</div>` : `<div class="tile-field" style="opacity:0.1;"></div>`; 
                } 
            }
            html += `</div><button class="majesty-btn" style="margin-top:4vh;" onclick="SeWWMeSHeader.openMediaMandala()">ZURÜCK</button>`;
            target.innerHTML = html;
        },

        copySovereignty: function(l, d, e) { 
            navigator.clipboard.writeText(d).then(() => { 
                alert("🛡️ SeWWMeS SECURED: " + l + "\n\n" + d); 
                const el = document.getElementById(e); 
                if (el) { 
                    el.classList.add('flash-active'); 
                    setTimeout(() => el.classList.remove('flash-active'), 800); 
                } 
            }); 
        },

        showOrbitalReveal: function(tokenSymbol) {
            const target = document.getElementById('modal-target');
            let tokenName = "";
            let contract = "";
            let price = "";
            let desc = "";

            if (tokenSymbol === 'WWW') {
                tokenName = "World Wide Wealth (WWW)";
                contract = "0x3e39dbD7EE545904E428E6f624d9FFEA507Ae11E";
                price = "$1.00 USD";
                desc = "Der unbestechliche Treibstoff der Schöpfung. Er transformiert digitale Absicht direkt in physische Schöpfung und ökologische Heilung.";
            } else if (tokenSymbol === 'ZENIQ') {
                tokenName = "ZENIQ Token (ZENIQ)";
                contract = "0x9CD219F884e8118109D5c68A9bedf2e94b5e081F";
                price = "$0.024 USD";
                desc = "Der unerschütterliche Gravitations-Anker des Systems. Ein Fixed-Status-Token, der Systemstabilität garantiert und den Zen20-Bonus für Eigenspenden freischaltet.";
            } else if (tokenSymbol === 'LYK') {
                tokenName = "LAYERK Token (LYK)";
                contract = "0xF50441d584D435e5F917c8201F72CA2b1B7f1d04";
                price = "$0.15 USD";
                desc = "Inscript & Quell-Integrität. Sichert die unzensierte Schöpferquelle und dient als Gas-Treibstoff für das LayerK-Netzwerk.";
            } else if (tokenSymbol === 'KYC') {
                tokenName = "KYC Zündschlüssel (KYC)";
                contract = "0xa6a19eA8a2cFf2e8740981AfA3BbCd7E0D9342Fd";
                price = "Verified / Seelengebunden";
                desc = "Der Zündschlüssel der Tat. Das kaiserliche Siegel zur Anerkennung des lebendigen Geistes innerhalb der dezentralen Matrix.";
            }

            target.innerHTML = `
                <h2 style="color:var(--sewwwes-gold); letter-spacing:10px; font-weight:900;">TOKEN SPEZIFIKATION</h2>
                <div style="background:var(--sewwwes-copper); color:#000; padding:15px; border-radius:15px; font-weight:950; margin:20px 0; font-family:'Roboto Mono';">
                    ${tokenName}
                </div>
                <div style="text-align:left; background:#111; padding:25px; border-radius:20px; border:1px solid var(--sewwwes-skyblue); margin:20px 0; font-family:'Roboto Mono'; font-size:0.9rem; line-height:1.6;">
                    <p><strong>Arretierter Wert:</strong> <span style="color:var(--sewwwes-emerald); font-weight:900;">${price}</span></p>
                    <p><strong>Contract-DNA:</strong> <span style="color:var(--sewwwes-skyblue); word-break:break-all;">${contract}</span></p>
                    <p style="margin-top:15px; color:#ccc;">${desc}</p>
                </div>
                <button class="majesty-btn" onclick="SeWWMeSHeader.closeFullView()">Souveränität schließen</button>
            `;
            document.getElementById('sewwwes-2ss-modal').classList.add('active');
        },

        closeFullView: function() { 
            const modal = document.getElementById('sewwwes-2ss-modal');
            if (modal) modal.classList.remove('active'); 
        },
        executeAltarNexus: function() { this.openFullView(1); }
    };

    window.SeWWMeSHeader = window.SeWWWeSHeader = SeWWMeSHeader;
    SeWWMeSHeader.init();
})();
