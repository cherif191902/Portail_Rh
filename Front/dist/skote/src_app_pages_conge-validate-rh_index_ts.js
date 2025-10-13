"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_conge-validate-rh_index_ts"],{

/***/ 2362:
/*!************************************************************************!*\
  !*** ./src/app/pages/conge-validate-rh/conge-validate-rh.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CongeValidateRhComponent": () => (/* binding */ CongeValidateRhComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _pages_conges_conge_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/conges/conge-api.service */ 98435);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);




function CongeValidateRhComponent_span_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.demandes.length, " demande(s) en attente ");
} }
function CongeValidateRhComponent_span_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Aucune demande en attente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CongeValidateRhComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Chargement...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Chargement des demandes en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CongeValidateRhComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CongeValidateRhComponent_div_64_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.actualiserListe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "R\u00E9essayer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.errorMessage, " ");
} }
function CongeValidateRhComponent_div_65_table_1_tr_20_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const demande_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Mat: ", demande_r10.personnel.matricule, " ");
} }
function CongeValidateRhComponent_div_65_table_1_tr_20_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const demande_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("title", demande_r10.commentaire);
} }
function CongeValidateRhComponent_div_65_table_1_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h6", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CongeValidateRhComponent_div_65_table_1_tr_20_p_12_Template, 2, 1, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Du:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Au:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "small", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](40, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CongeValidateRhComponent_div_65_table_1_tr_20_Template_button_click_43_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const demande_r10 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r16.validerDemande(demande_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Valider ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CongeValidateRhComponent_div_65_table_1_tr_20_Template_button_click_46_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const demande_r10 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r18.refuserDemande(demande_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Refuser ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, CongeValidateRhComponent_div_65_table_1_tr_20_div_49_Template, 4, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const demande_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("#", demande_r10.id == null ? null : demande_r10.id.toString().padStart(4, "0"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.getEmployeeName(demande_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", demande_r10.personnel == null ? null : demande_r10.personnel.matricule);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", demande_r10.typeConge, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](23, 14, demande_r10.dateDebut, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](29, 17, demande_r10.dateFin, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", demande_r10.duree, " jour(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r9.getStatutBadgeClass(demande_r10.statut));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r9.getStatutIcon(demande_r10.statut));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", demande_r10.statut, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](40, 20, demande_r10.dateDemande, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", demande_r10.commentaire);
} }
function CongeValidateRhComponent_div_65_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "thead", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Employ\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Type de cong\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "P\u00E9riode");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Dur\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Date demande");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, CongeValidateRhComponent_div_65_table_1_tr_20_Template, 50, 23, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r7.demandes);
} }
function CongeValidateRhComponent_div_65_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Aucune demande en attente !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Toutes les demandes de cong\u00E9s ont \u00E9t\u00E9 trait\u00E9es.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Les nouvelles demandes valid\u00E9es par les chefs appara\u00EEtront ici. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CongeValidateRhComponent_div_65_div_2_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r19.actualiserListe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Actualiser la liste ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CongeValidateRhComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CongeValidateRhComponent_div_65_table_1_Template, 21, 1, "table", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CongeValidateRhComponent_div_65_div_2_Template, 13, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.demandes.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.demandes.length === 0);
} }
class CongeValidateRhComponent {
    constructor(congeApiService) {
        this.congeApiService = congeApiService;
        this.demandes = [];
        this.isLoading = false;
        this.errorMessage = '';
    }
    ngOnInit() {
        this.loadDemandesEnAttenteRh();
    }
    /**
     * Charge les demandes de congés en attente de validation RH
     */
    loadDemandesEnAttenteRh() {
        this.isLoading = true;
        this.errorMessage = '';
        console.log('🔄 Chargement des demandes RH en attente...');
        this.congeApiService.getDemandesEnAttenteRh().subscribe({
            next: (demandes) => {
                this.demandes = demandes;
                this.isLoading = false;
                console.log('✅ Demandes RH chargées:', this.demandes.length);
                console.log('📋 Détail des demandes:', this.demandes);
            },
            error: (error) => {
                console.error('❌ Erreur lors du chargement des demandes RH:', error);
                this.errorMessage = 'Erreur lors du chargement des demandes de congés.';
                this.isLoading = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Erreur',
                    text: error.message || 'Impossible de charger les demandes de congés',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        });
    }
    /**
     * Valide une demande de congé
     */
    validerDemande(demande) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Valider cette demande ?',
            html: `
        <div class="text-start">
          <strong>Employé:</strong> ${this.getEmployeeName(demande)}<br>
          <strong>Type:</strong> ${demande.typeConge}<br>
          <strong>Période:</strong> du ${demande.dateDebut} au ${demande.dateFin}<br>
          <strong>Durée:</strong> ${demande.duree} jour(s)
        </div>
      `,
            input: 'textarea',
            inputLabel: 'Commentaire de validation (optionnel)',
            inputPlaceholder: 'Ajouter un commentaire...',
            showCancelButton: true,
            confirmButtonText: '✅ Valider',
            cancelButtonText: '❌ Annuler',
            confirmButtonColor: '#28a745',
            preConfirm: (commentaire) => {
                const validationData = {
                    action: 'VALIDER',
                    commentaire: commentaire || 'Demande validée par RH'
                };
                console.log('✅ Validation de la demande ID:', demande.id);
                return this.congeApiService.validerConge(demande.id, validationData).toPromise()
                    .then(response => {
                    console.log('✅ Demande validée avec succès:', response);
                    return response;
                })
                    .catch(error => {
                    console.error('❌ Erreur lors de la validation:', error);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().showValidationMessage(`Erreur: ${error.message || 'Une erreur est survenue'}`);
                });
            }
        }).then((result) => {
            if (result.isConfirmed && result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Validé !',
                    text: `Demande approuvée avec succès. Nouveau statut: ${result.value.statut}`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                // Recharger la liste
                this.loadDemandesEnAttenteRh();
            }
        });
    }
    /**
     * Refuse une demande de congé
     */
    refuserDemande(demande) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Refuser cette demande ?',
            html: `
        <div class="text-start">
          <strong>Employé:</strong> ${this.getEmployeeName(demande)}<br>
          <strong>Type:</strong> ${demande.typeConge}<br>
          <strong>Période:</strong> du ${demande.dateDebut} au ${demande.dateFin}<br>
          <strong>Durée:</strong> ${demande.duree} jour(s)
        </div>
      `,
            input: 'textarea',
            inputLabel: 'Motif du refus (obligatoire)',
            inputPlaceholder: 'Veuillez préciser le motif du refus...',
            inputValidator: (value) => {
                if (!value || !value.trim()) {
                    return 'Le motif du refus est obligatoire !';
                }
            },
            showCancelButton: true,
            confirmButtonText: '🚫 Refuser',
            cancelButtonText: '❌ Annuler',
            confirmButtonColor: '#dc3545',
            preConfirm: (motifRefus) => {
                const validationData = {
                    action: 'REFUSER',
                    commentaire: motifRefus
                };
                console.log('❌ Refus de la demande ID:', demande.id);
                return this.congeApiService.refuserConge(demande.id, validationData).toPromise()
                    .then(response => {
                    console.log('❌ Demande refusée avec succès:', response);
                    return response;
                })
                    .catch(error => {
                    console.error('❌ Erreur lors du refus:', error);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().showValidationMessage(`Erreur: ${error.message || 'Une erreur est survenue'}`);
                });
            }
        }).then((result) => {
            if (result.isConfirmed && result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Refusé !',
                    text: `Demande refusée. Nouveau statut: ${result.value.statut}`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                // Recharger la liste
                this.loadDemandesEnAttenteRh();
            }
        });
    }
    /**
     * Obtient le nom complet de l'employé
     */
    getEmployeeName(demande) {
        var _a, _b;
        return ((_a = demande.personnel) === null || _a === void 0 ? void 0 : _a.nom) && ((_b = demande.personnel) === null || _b === void 0 ? void 0 : _b.prenom)
            ? `${demande.personnel.nom} ${demande.personnel.prenom}`
            : 'Nom non disponible';
    }
    /**
     * Détermine la classe CSS pour le badge de statut
     */
    getStatutBadgeClass(statut) {
        return this.congeApiService.getStatutBadgeClass(statut);
    }
    /**
     * Détermine l'icône pour le statut
     */
    getStatutIcon(statut) {
        return this.congeApiService.getStatutIcon(statut);
    }
    /**
     * Actualise la liste (méthode publique pour bouton refresh)
     */
    actualiserListe() {
        this.loadDemandesEnAttenteRh();
    }
}
CongeValidateRhComponent.ɵfac = function CongeValidateRhComponent_Factory(t) { return new (t || CongeValidateRhComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_pages_conges_conge_api_service__WEBPACK_IMPORTED_MODULE_1__.CongeApiService)); };
CongeValidateRhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CongeValidateRhComponent, selectors: [["app-conge-validate-rh"]], decls: 66, vars: 9, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "page-title-box", "d-sm-flex", "align-items-center", "justify-content-between"], [1, "mb-sm-0", "font-size-18"], [1, "bx", "bx-check-circle", "me-2"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "col-xl-4", "col-md-6"], [1, "card", "mini-stats-wid"], [1, "card-body"], [1, "media"], [1, "media-body"], [1, "text-muted", "fw-medium"], [1, "mb-0", "text-primary"], [1, "mini-stat-icon", "avatar-sm", "rounded-circle", "bg-primary", "align-self-center"], [1, "avatar-title"], [1, "bx", "bx-time", "font-size-24"], [1, "mb-0", "text-success"], [1, "mini-stat-icon", "avatar-sm", "rounded-circle", "bg-success", "align-self-center"], [1, "bx", "bx-check-shield", "font-size-24"], [1, "d-flex"], [1, "flex-grow-1"], [1, "text-muted", "fw-medium", "mb-2"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "disabled", "click"], [1, "bx", "bx-refresh", "me-1"], [1, "align-self-center"], [1, "bx", "bx-cog", "font-size-24", "text-muted"], [1, "card"], [1, "card-header"], [1, "d-flex", "align-items-center"], [1, "card-title", "mb-0", "flex-grow-1"], [1, "bx", "bx-list-ul", "me-2"], [1, "flex-shrink-0"], ["class", "badge bg-warning fs-12", 4, "ngIf"], ["class", "badge bg-success fs-12", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [1, "badge", "bg-warning", "fs-12"], [1, "badge", "bg-success", "fs-12"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "sr-only"], [1, "mt-3", "text-muted"], ["role", "alert", 1, "alert", "alert-danger"], [1, "bx", "bx-error-circle", "me-2"], [1, "btn", "btn-outline-danger", "btn-sm", "ms-3", 3, "click"], [1, "table-responsive"], ["class", "table table-hover align-middle mb-0", 4, "ngIf"], [1, "table", "table-hover", "align-middle", "mb-0"], [1, "table-light"], ["scope", "col"], ["scope", "col", 1, "text-center"], ["class", "align-middle", 4, "ngFor", "ngForOf"], [1, "align-middle"], [1, "text-primary"], [1, "avatar-xs", "me-3"], [1, "avatar-title", "rounded-circle", "bg-soft-primary", "text-primary"], [1, "bx", "bx-user", "font-size-16"], [1, "mb-0", "font-size-14"], ["class", "text-muted font-size-12 mb-0", 4, "ngIf"], [1, "badge", "bg-soft-info", "text-info"], [1, "bx", "bx-calendar", "me-1"], [1, "text-muted"], [1, "badge", "bg-soft-secondary", "text-secondary"], [1, "me-1"], [1, "text-center"], ["role", "group", 1, "btn-group"], ["type", "button", "title", "Valider cette demande", 1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "bx", "bx-check", "me-1"], ["type", "button", "title", "Refuser cette demande", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "bx", "bx-x", "me-1"], ["class", "mt-2", 4, "ngIf"], [1, "text-muted", "font-size-12", "mb-0"], [1, "mt-2"], ["data-bs-toggle", "tooltip", 1, "btn", "btn-outline-info", "btn-xs"], [1, "bx", "bx-info-circle"], [1, "avatar-md", "mx-auto", "mb-4"], [1, "avatar-title", "bg-light", "rounded-circle", "text-success", "h1"], [1, "bx", "bx-check-double"], [1, "text-success"], [1, "btn", "btn-outline-primary", 3, "click"]], template: function CongeValidateRhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Validation RH des Cong\u00E9s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "RH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Validation Cong\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Demandes en attente RH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Validation finale");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "RH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Actions rapides");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CongeValidateRhComponent_Template_button_click_46_listener() { return ctx.actualiserListe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " Actualiser ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "h4", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, " Demandes de cong\u00E9s en attente de validation RH ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, CongeValidateRhComponent_span_60_Template, 2, 1, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, CongeValidateRhComponent_span_61_Template, 2, 0, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, CongeValidateRhComponent_div_63_Template, 6, 0, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, CongeValidateRhComponent_div_64_Template, 6, 1, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, CongeValidateRhComponent_div_65_Template, 3, 2, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.demandes.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("bx-spin", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.demandes.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.demandes.length === 0 && !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage && !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.errorMessage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: [".mini-stats-wid[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.mini-stats-wid[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.table[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.table[_ngcontent-%COMP%]   .avatar-xs[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\n.table[_ngcontent-%COMP%]   .avatar-xs[_ngcontent-%COMP%]   .avatar-title[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.table[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n}\n.table[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.badge.fs-12[_ngcontent-%COMP%] {\n  font-size: 0.75rem !important;\n}\n.spinner-border[_ngcontent-%COMP%] {\n  animation: spinner-border 0.75s linear infinite;\n}\n@keyframes spinner-border {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.table-responsive[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #dee2e6;\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  letter-spacing: 0.5px;\n  color: #495057;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background-color 0.15s ease-in-out;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 123, 255, 0.05);\n}\n.text-center.py-5[_ngcontent-%COMP%] {\n  padding: 3rem 1rem !important;\n}\n.text-center[_ngcontent-%COMP%]   .avatar-md[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n}\n.text-center[_ngcontent-%COMP%]   .avatar-md[_ngcontent-%COMP%]   .avatar-title[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n}\n@media (max-width: 768px) {\n  .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    padding: 0.25rem 0.5rem;\n  }\n\n  .table[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .table[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmdlLXZhbGlkYXRlLXJoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UseUJBQUE7QUFGSjtBQUlJO0VBQ0UsMkJBQUE7RUFDQSx3Q0FBQTtBQUZOO0FBT0E7RUFDRSxnQkFBQTtBQUpGO0FBTUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUpKO0FBTUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSk47QUFTSTtFQUNFLHlCQUFBO0FBUE47QUFTTTtFQUNFLDJCQUFBO0FBUFI7QUFjRTtFQUNFLDZCQUFBO0FBWEo7QUFnQkE7RUFDRSwrQ0FBQTtBQWJGO0FBZ0JBO0VBQ0U7SUFDRSx5QkFBQTtFQWJGO0FBQ0Y7QUFpQkE7RUFDRSx1QkFBQTtBQWZGO0FBa0JJO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFoQk47QUFtQkk7RUFDRSw4Q0FBQTtBQWpCTjtBQW1CTTtFQUNFLHlDQUFBO0FBakJSO0FBeUJFO0VBQ0UsNkJBQUE7QUF0Qko7QUF5QkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQXZCSjtBQXlCSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBdkJOO0FBNkJBO0VBRUk7SUFDRSxrQkFBQTtJQUNBLHVCQUFBO0VBM0JKOztFQStCQTtJQUNFLG1CQUFBO0VBNUJGO0VBOEJFO0lBQ0UsaUJBQUE7RUE1Qko7QUFDRiIsImZpbGUiOiJjb25nZS12YWxpZGF0ZS1yaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFN0eWxlcyBwb3VyIGxhIHBhZ2UgZGUgdmFsaWRhdGlvbiBSSCBkZXMgY29uZ8Opc1xyXG5cclxuLm1pbmktc3RhdHMtd2lkIHtcclxuICAuY2FyZC1ib2R5IHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udGFibGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgXHJcbiAgLmF2YXRhci14cyB7XHJcbiAgICB3aWR0aDogMnJlbTtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIFxyXG4gICAgLmF2YXRhci10aXRsZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuYnRuLWdyb3VwIHtcclxuICAgIC5idG4ge1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICBcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYmFkZ2Uge1xyXG4gICYuZnMtMTIge1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBbmltYXRpb24gcG91ciBsZSBzcGlubmVyIGRlIGNoYXJnZW1lbnRcclxuLnNwaW5uZXItYm9yZGVyIHtcclxuICBhbmltYXRpb246IHNwaW5uZXItYm9yZGVyIDAuNzVzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGlubmVyLWJvcmRlciB7XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFtw6lsaW9yYXRpb24gZGUgbGEgbGlzaWJpbGl0w6kgZGVzIHRhYmxlYXV4XHJcbi50YWJsZS1yZXNwb25zaXZlIHtcclxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxuICBcclxuICAudGFibGUge1xyXG4gICAgdGhlYWQgdGgge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RlZTJlNjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0Ym9keSB0ciB7XHJcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyMywgMjU1LCAwLjA1KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gTWVzc2FnZXMgdmlkZXMgZXQgZXJyZXVyc1xyXG4udGV4dC1jZW50ZXIge1xyXG4gICYucHktNSB7XHJcbiAgICBwYWRkaW5nOiAzcmVtIDFyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmF2YXRhci1tZCB7XHJcbiAgICB3aWR0aDogNHJlbTtcclxuICAgIGhlaWdodDogNHJlbTtcclxuICAgIFxyXG4gICAgLmF2YXRhci10aXRsZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSZXNwb25zaXZlIGltcHJvdmVtZW50c1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuYnRuLWdyb3VwIHtcclxuICAgIC5idG4ge1xyXG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAudGFibGUge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIFxyXG4gICAgLmJhZGdlIHtcclxuICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 68303:
/*!*********************************************************************!*\
  !*** ./src/app/pages/conge-validate-rh/conge-validate-rh.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CongeValidateRhModule": () => (/* binding */ CongeValidateRhModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _conge_validate_rh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conge-validate-rh.component */ 2362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);





class CongeValidateRhModule {
}
CongeValidateRhModule.ɵfac = function CongeValidateRhModule_Factory(t) { return new (t || CongeValidateRhModule)(); };
CongeValidateRhModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CongeValidateRhModule });
CongeValidateRhModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{ path: '', component: _conge_validate_rh_component__WEBPACK_IMPORTED_MODULE_0__.CongeValidateRhComponent }])]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CongeValidateRhModule, { declarations: [_conge_validate_rh_component__WEBPACK_IMPORTED_MODULE_0__.CongeValidateRhComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 89414:
/*!**************************************************!*\
  !*** ./src/app/pages/conge-validate-rh/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CongeValidateRhModule": () => (/* reexport safe */ _conge_validate_rh_module__WEBPACK_IMPORTED_MODULE_0__.CongeValidateRhModule)
/* harmony export */ });
/* harmony import */ var _conge_validate_rh_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conge-validate-rh.module */ 68303);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_conge-validate-rh_index_ts.js.map