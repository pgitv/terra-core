(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{4305:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.messages=t.locale=t.areTranslationsLoaded=void 0;var i,r=a(91),n=a(4324),s=(i=n)&&i.__esModule?i:{default:i};(0,r.addLocaleData)(s.default);t.areTranslationsLoaded=!0,t.locale="fi-FI",t.messages={"Terra.actionHeader.back":"Takaisin","Terra.actionHeader.close":"Kiinni","Terra.actionHeader.maximize":"Maksimoida","Terra.actionHeader.minimize":"Minimoida","Terra.actionHeader.next":"Seuraava","Terra.actionHeader.previous":"Edellinen","Terra.ajax.error":"Tämän sisällön lataaminen epäonnistui.","Terra.alert.advisory":"Neuvoa-antava.","Terra.alert.alert":"Hälytys.","Terra.alert.dismiss":"Hylkää","Terra.alert.error":"Virhe.","Terra.alert.info":"Tiedot.","Terra.alert.success":"Menestys.","Terra.alert.warning":"Varoitus.","Terra.application.tabs.more":"More","Terra.application.utility.back":"Back","Terra.application.utility.button":"Utility Button","Terra.application.utility.close":"Close","Terra.application.utility.menu":"Utility Menu","Terra.ApplicationHeaderLayout.SkipToContent":"skiiippp~~~","Terra.applicationLayout.applicationHeader.menuToggleLabel":"Toggle Menu","Terra.applicationLayout.utilityDefaults.about":"About","Terra.applicationLayout.utilityDefaults.appearance":"Appearance","Terra.applicationLayout.utilityDefaults.changePhoto":"Change Photo","Terra.applicationLayout.utilityDefaults.gettingStarted":"Getting Started","Terra.applicationLayout.utilityDefaults.help":"Help","Terra.applicationLayout.utilityDefaults.logOut":"Log Out","Terra.applicationLayout.utilityDefaults.menu":"Menu","Terra.applicationLayout.utilityDefaults.security":"Security","Terra.applicationLayout.utilityDefaults.settings":"Settings","Terra.applicationLayout.utilityDefaults.termsOfUse":"Terms of Use","Terra.applicationLayout.utilityDefaults.userInformation":"User Information","Terra.collapsibleMenuView.more":"Lisää","Terra.datePicker.dateFormat":"DD.MM.YYYY","Terra.datePicker.openCalendar":"Avaa Kalenteri","Terra.datePicker.today":"Tänään","Terra.dateTimePicker.timeClarification.button.daylightSaving":"Ennen (Kesäaika)","Terra.dateTimePicker.timeClarification.button.standardTime":"Jälkeen (Normaaliaika)","Terra.dateTimePicker.timeClarification.message":"Valittu aika tapahtuu siirryttäessä kesäaikaa Standardin Aikaa. Haluaisitko tulla tämän ennen tai jälkeen kun muutos kesäaikaa Standardin aikaa?","Terra.dateTimePicker.timeClarification.title":"Aika Selvennys","Terra.demographicsBanner.dateOfBirth":"DOB","Terra.demographicsBanner.dateOfBirthFullText":"Syntymäaika","Terra.demographicsBanner.deceased":"Kuolleen","Terra.demographicsBanner.gestationalAge":"GA","Terra.demographicsBanner.gestationalAgeFullText":"Sikiöikä","Terra.demographicsBanner.noDataProvided":"--","Terra.demographicsBanner.postMenstrualAge":"PMA","Terra.demographicsBanner.postMenstrualAgeFullText":"Post Kuukautiskierron Ikä","Terra.devSiteRoutingMenu.filter":"Suodattaa","Terra.dialog.close":"Kiinni","Terra.form.field.optional":"(valinnainen)","Terra.form.select.add":'Lisätä "{text}"',"Terra.form.select.defaultDisplay":"- Valitat -","Terra.form.select.noResults":'Ei ole vastaavia tuloksia "{text}"',"Terra.menu.back":"Takaisin","Terra.menu.close":"Kiinni","Terra.Overlay.loading":"Lastaus...","Terra.searchField.search":"Haku","Terra.searchField.submit-search":"Lähetä Haku","Terra.showhide.hide":"Piilottaa","Terra.showhide.showmore":"Näytä lisää","Terra.status-view.error":"Virhe","Terra.status-view.no-data":"Ei tuloksia","Terra.status-view.no-matching-results":"Ei vastaavia tuloksia","Terra.status-view.not-authorized":"Ei sallittu","Terra.tabs.more":"Lisää","Terra.timeInput.am":"a.m.","Terra.timeInput.display.meridiem":"","Terra.timeInput.hh":"HH","Terra.timeInput.hours":"Tuntia","Terra.timeInput.minutes":"Minuuttia","Terra.timeInput.mm":"mm","Terra.timeInput.pm":"p.m.","Terra.timeInput.select.meridiem":""}},4324:function(e,t,a){e.exports=function(){"use strict";return[{locale:"fi",pluralRuleFunction:function(e,t){var a=!String(e).split(".")[1];return t?"other":1==e&&a?"one":"other"},fields:{year:{displayName:"vuosi",relative:{0:"tänä vuonna",1:"ensi vuonna","-1":"viime vuonna"},relativeTime:{future:{one:"{0} vuoden päästä",other:"{0} vuoden päästä"},past:{one:"{0} vuosi sitten",other:"{0} vuotta sitten"}}},"year-short":{displayName:"v",relative:{0:"tänä v",1:"ensi v","-1":"viime v"},relativeTime:{future:{one:"{0} v päästä",other:"{0} v päästä"},past:{one:"{0} v sitten",other:"{0} v sitten"}}},month:{displayName:"kuukausi",relative:{0:"tässä kuussa",1:"ensi kuussa","-1":"viime kuussa"},relativeTime:{future:{one:"{0} kuukauden päästä",other:"{0} kuukauden päästä"},past:{one:"{0} kuukausi sitten",other:"{0} kuukautta sitten"}}},"month-short":{displayName:"kk",relative:{0:"tässä kk",1:"ensi kk","-1":"viime kk"},relativeTime:{future:{one:"{0} kk päästä",other:"{0} kk päästä"},past:{one:"{0} kk sitten",other:"{0} kk sitten"}}},day:{displayName:"päivä",relative:{0:"tänään",1:"huomenna",2:"ylihuomenna","-2":"toissa päivänä","-1":"eilen"},relativeTime:{future:{one:"{0} päivän päästä",other:"{0} päivän päästä"},past:{one:"{0} päivä sitten",other:"{0} päivää sitten"}}},"day-short":{displayName:"pv",relative:{0:"tänään",1:"huom.",2:"ylihuom.","-2":"toissap.","-1":"eilen"},relativeTime:{future:{one:"{0} pv päästä",other:"{0} pv päästä"},past:{one:"{0} pv sitten",other:"{0} pv sitten"}}},hour:{displayName:"tunti",relative:{0:"tämän tunnin aikana"},relativeTime:{future:{one:"{0} tunnin päästä",other:"{0} tunnin päästä"},past:{one:"{0} tunti sitten",other:"{0} tuntia sitten"}}},"hour-short":{displayName:"t",relative:{0:"tunnin sisällä"},relativeTime:{future:{one:"{0} t päästä",other:"{0} t päästä"},past:{one:"{0} t sitten",other:"{0} t sitten"}}},minute:{displayName:"minuutti",relative:{0:"tämän minuutin aikana"},relativeTime:{future:{one:"{0} minuutin päästä",other:"{0} minuutin päästä"},past:{one:"{0} minuutti sitten",other:"{0} minuuttia sitten"}}},"minute-short":{displayName:"min",relative:{0:"minuutin sisällä"},relativeTime:{future:{one:"{0} min päästä",other:"{0} min päästä"},past:{one:"{0} min sitten",other:"{0} min sitten"}}},second:{displayName:"sekunti",relative:{0:"nyt"},relativeTime:{future:{one:"{0} sekunnin päästä",other:"{0} sekunnin päästä"},past:{one:"{0} sekunti sitten",other:"{0} sekuntia sitten"}}},"second-short":{displayName:"s",relative:{0:"nyt"},relativeTime:{future:{one:"{0} s päästä",other:"{0} s päästä"},past:{one:"{0} s sitten",other:"{0} s sitten"}}}}}]}()}}]);
//# sourceMappingURL=fi-FI-translations-2d4eae7f13628a297b13.js.map