"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_espaceRh_rh_module_ts"],{

/***/ 11555:
/*!************************************************************************!*\
  !*** ./src/app/pages/affectation-table/affectation-table.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AffectationTableComponent": () => (/* binding */ AffectationTableComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 86888);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_affectation_table_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/affectation-table.service */ 48519);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);






function AffectationTableComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AffectationTableComponent_div_10_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.clearMessages(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
} }
function AffectationTableComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AffectationTableComponent_div_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.clearMessages(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.successMessage, " ");
} }
function AffectationTableComponent_div_12_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", service_r14.idService);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", service_r14.nomService, " - ", service_r14.libService, " ");
} }
function AffectationTableComponent_div_12_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Service requis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AffectationTableComponent_div_12_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chef_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", chef_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", chef_r15.prenom, " ", chef_r15.nom, " (", chef_r15.matriculeP, ") ");
} }
function AffectationTableComponent_div_12_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chef_r16 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", chef_r16.id)("disabled", chef_r16.id === ((tmp_1_0 = ctx_r13.newAffectationForm.get("chefAId")) == null ? null : tmp_1_0.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", chef_r16.prenom, " ", chef_r16.nom, " (", chef_r16.matriculeP, ") ");
} }
function AffectationTableComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Nouvelle Affectation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AffectationTableComponent_div_12_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.saveNewAffectation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Service *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "S\u00E9lectionner un service");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AffectationTableComponent_div_12_option_14_Template, 2, 3, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AffectationTableComponent_div_12_div_15_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Chef A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Aucun chef");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AffectationTableComponent_div_12_option_22_Template, 2, 4, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Chef B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Aucun chef");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AffectationTableComponent_div_12_option_29_Template, 2, 5, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Enregistrer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AffectationTableComponent_div_12_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.cancelNewAffectation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.newAffectationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_1_0 = ctx_r2.newAffectationForm.get("serviceId")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.newAffectationForm.get("serviceId")) == null ? null : tmp_1_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.services);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r2.newAffectationForm.get("serviceId")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r2.newAffectationForm.get("serviceId")) == null ? null : tmp_3_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.availableChefs);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.availableChefs);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.loading || ctx_r2.newAffectationForm.invalid);
} }
function AffectationTableComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Chargement...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Chargement des donn\u00E9es...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AffectationTableComponent_div_20_tr_13_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const affectation_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", affectation_r22.chefA.prenom, " ", affectation_r22.chefA.nom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](affectation_r22.chefA.matriculeP);
} }
function AffectationTableComponent_div_20_tr_13_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Non assign\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AffectationTableComponent_div_20_tr_13_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AffectationTableComponent_div_20_tr_13_div_7_div_1_Template, 8, 3, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AffectationTableComponent_div_20_tr_13_div_7_div_2_Template, 3, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const affectation_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", affectation_r22.chefA);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !affectation_r22.chefA);
} }
function AffectationTableComponent_div_20_tr_13_div_8_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chef_r34 = ctx.$implicit;
    const affectation_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", chef_r34.id)("disabled", (affectation_r22.chefB == null ? null : affectation_r22.chefB.id) === chef_r34.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", chef_r34.prenom, " ", chef_r34.nom, " (", chef_r34.matriculeP, ") ");
} }
function AffectationTableComponent_div_20_tr_13_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "select", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AffectationTableComponent_div_20_tr_13_div_8_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const affectation_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r36.onChefAChange(affectation_r22, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Aucun chef");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AffectationTableComponent_div_20_tr_13_div_8_option_4_Template, 2, 5, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const affectation_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (affectation_r22.chefA == null ? null : affectation_r22.chefA.id) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r24.getAvailableChefsForService(affectation_r22.serviceId));
} }
function AffectationTableComponent_div_20_tr_13_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const affectation_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", affectation_r22.chefB.prenom, " ", affectation_r22.chefB.nom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](affectation_r22.chefB.matriculeP);
} }
function AffectationTableComponent_div_20_tr_13_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Non assign\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AffectationTableComponent_div_20_tr_13_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AffectationTableComponent_div_20_tr_13_div_10_div_1_Template, 8, 3, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AffectationTableComponent_div_20_tr_13_div_10_div_2_Template, 3, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const affectation_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", affectation_r22.chefB);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !affectation_r22.chefB);
} }
function AffectationTableComponent_div_20_tr_13_div_11_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chef_r45 = ctx.$implicit;
    const affectation_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", chef_r45.id)("disabled", (affectation_r22.chefA == null ? null : affectation_r22.chefA.id) === chef_r45.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", chef_r45.prenom, " ", chef_r45.nom, " (", chef_r45.matriculeP, ") ");
} }
function AffectationTableComponent_div_20_tr_13_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "select", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AffectationTableComponent_div_20_tr_13_div_11_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49); const affectation_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r47.onChefBChange(affectation_r22, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Aucun chef");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AffectationTableComponent_div_20_tr_13_div_11_option_4_Template, 2, 5, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const affectation_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (affectation_r22.chefB == null ? null : affectation_r22.chefB.id) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r26.getAvailableChefsForService(affectation_r22.serviceId));
} }
function AffectationTableComponent_div_20_tr_13_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AffectationTableComponent_div_20_tr_13_div_13_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53); const affectation_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r51.editAffectation(affectation_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Modifier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AffectationTableComponent_div_20_tr_13_div_13_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53); const affectation_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r54.deleteAffectation(affectation_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Supprimer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r27.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r27.loading);
} }
function AffectationTableComponent_div_20_tr_13_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AffectationTableComponent_div_20_tr_13_div_14_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58); const affectation_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r56.saveAffectation(affectation_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Sauvegarder ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AffectationTableComponent_div_20_tr_13_div_14_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58); const affectation_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r59.cancelEdit(affectation_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r28.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r28.loading);
} }
function AffectationTableComponent_div_20_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AffectationTableComponent_div_20_tr_13_div_7_Template, 3, 2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AffectationTableComponent_div_20_tr_13_div_8_Template, 5, 2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AffectationTableComponent_div_20_tr_13_div_10_Template, 3, 2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AffectationTableComponent_div_20_tr_13_div_11_Template, 5, 2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AffectationTableComponent_div_20_tr_13_div_13_Template, 7, 2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AffectationTableComponent_div_20_tr_13_div_14_Template, 7, 2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const affectation_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](affectation_r22.nomService);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](affectation_r22.libService);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !affectation_r22.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", affectation_r22.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !affectation_r22.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", affectation_r22.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !affectation_r22.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", affectation_r22.isEditing);
} }
function AffectationTableComponent_div_20_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Aucune affectation trouv\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Cliquez sur \"Nouvelle affectation\" pour commencer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AffectationTableComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Nom du Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Chef A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Chef B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AffectationTableComponent_div_20_tr_13_Template, 15, 8, "tr", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AffectationTableComponent_div_20_tr_14_Template, 8, 0, "tr", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.affectations)("ngForTrackBy", ctx_r4.trackByServiceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.affectations.length === 0 && !ctx_r4.loading);
} }
function AffectationTableComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Services totaux");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h5", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Chefs disponibles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h5", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Chef A assign\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h5", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Chef B assign\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.services.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.allChefs.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.getChefACount());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.getChefBCount());
} }
class AffectationTableComponent {
    constructor(affectationService, fb) {
        this.affectationService = affectationService;
        this.fb = fb;
        this.affectations = [];
        this.services = [];
        this.allChefs = [];
        this.availableChefs = [];
        this.showNewForm = false;
        this.loading = false;
        this.error = null;
        this.successMessage = null;
        this.newAffectationForm = this.fb.group({
            serviceId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            chefAId: [''],
            chefBId: ['']
        });
    }
    ngOnInit() {
        this.loadData();
    }
    /**
     * Charge toutes les données nécessaires
     */
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            this.error = null;
            try {
                // Charger les services et leurs affectations
                const [affectationsData, servicesData, chefsData] = yield Promise.all([
                    this.affectationService.getAllAffectations().toPromise(),
                    this.affectationService.getServices().toPromise(),
                    this.affectationService.getAllChefs().toPromise()
                ]);
                this.services = servicesData || [];
                this.allChefs = chefsData || [];
                // Transformer les données pour le tableau
                this.affectations = (affectationsData || []).map(aff => ({
                    id: aff.id,
                    serviceId: aff.serviceId,
                    nomService: aff.nomService,
                    libService: aff.libService,
                    chefA: aff.chefA,
                    chefB: aff.chefB,
                    isEditing: false,
                    isNew: false
                }));
                this.updateAvailableChefs();
            }
            catch (error) {
                console.error('Erreur lors du chargement des données:', error);
                this.error = 'Erreur lors du chargement des données';
            }
            finally {
                this.loading = false;
            }
        });
    }
    /**
     * Met à jour la liste des chefs disponibles
     */
    updateAvailableChefs(excludeServiceId) {
        this.availableChefs = this.allChefs.filter(chef => {
            // Vérifier si le chef est disponible (pas affecté ailleurs)
            const isAffectedElsewhere = this.affectations.some(aff => aff.serviceId !== excludeServiceId &&
                ((aff.chefA && aff.chefA.id === chef.id) ||
                    (aff.chefB && aff.chefB.id === chef.id)));
            return !isAffectedElsewhere;
        });
    }
    /**
     * Récupère les chefs disponibles pour un service spécifique
     */
    getAvailableChefsForService(serviceId, excludeCurrentChefs) {
        return this.allChefs.filter(chef => {
            // Trouver l'affectation actuelle
            const currentAffectation = this.affectations.find(aff => aff.serviceId === serviceId);
            // Permettre les chefs actuels
            if (currentAffectation && !excludeCurrentChefs) {
                if ((currentAffectation.chefA && currentAffectation.chefA.id === chef.id) ||
                    (currentAffectation.chefB && currentAffectation.chefB.id === chef.id)) {
                    return true;
                }
            }
            // Vérifier si le chef n'est pas affecté ailleurs
            const isAffectedElsewhere = this.affectations.some(aff => aff.serviceId !== serviceId &&
                ((aff.chefA && aff.chefA.id === chef.id) ||
                    (aff.chefB && aff.chefB.id === chef.id)));
            return !isAffectedElsewhere;
        });
    }
    /**
     * Ajouter une nouvelle ligne d'affectation
     */
    addNewAffectation() {
        this.showNewForm = true;
        this.newAffectationForm.reset();
        this.updateAvailableChefs();
    }
    /**
     * Annuler l'ajout
     */
    cancelNewAffectation() {
        this.showNewForm = false;
        this.newAffectationForm.reset();
    }
    /**
     * Sauvegarder la nouvelle affectation
     */
    saveNewAffectation() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.newAffectationForm.invalid) {
                this.error = 'Veuillez sélectionner un service';
                return;
            }
            const formValue = this.newAffectationForm.value;
            const request = {
                serviceId: parseInt(formValue.serviceId),
                chefAId: formValue.chefAId ? parseInt(formValue.chefAId) : undefined,
                chefBId: formValue.chefBId ? parseInt(formValue.chefBId) : undefined
            };
            // Validation : Chef A et Chef B ne peuvent pas être identiques
            if (request.chefAId && request.chefBId && request.chefAId === request.chefBId) {
                this.error = 'Chef A et Chef B ne peuvent pas être la même personne';
                return;
            }
            try {
                this.loading = true;
                const response = yield this.affectationService.saveAffectation(request).toPromise();
                if (response === null || response === void 0 ? void 0 : response.success) {
                    this.successMessage = 'Affectation enregistrée avec succès';
                    this.showNewForm = false;
                    this.newAffectationForm.reset();
                    yield this.loadData(); // Recharger les données
                }
                else {
                    this.error = (response === null || response === void 0 ? void 0 : response.error) || 'Erreur lors de l\'enregistrement';
                }
            }
            catch (error) {
                console.error('Erreur lors de la sauvegarde:', error);
                this.error = ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message) || (error === null || error === void 0 ? void 0 : error.message) || 'Erreur lors de l\'enregistrement';
            }
            finally {
                this.loading = false;
            }
        });
    }
    /**
     * Activer le mode édition pour une ligne
     */
    editAffectation(affectation) {
        affectation.isEditing = true;
    }
    /**
     * Annuler l'édition
     */
    cancelEdit(affectation) {
        affectation.isEditing = false;
        // Recharger pour annuler les changements
        this.loadData();
    }
    /**
     * Sauvegarder les modifications
     */
    saveAffectation(affectation) {
        var _a, _b, _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const request = {
                serviceId: affectation.serviceId,
                chefAId: (_a = affectation.chefA) === null || _a === void 0 ? void 0 : _a.id,
                chefBId: (_b = affectation.chefB) === null || _b === void 0 ? void 0 : _b.id
            };
            // Validation
            if (request.chefAId && request.chefBId && request.chefAId === request.chefBId) {
                this.error = 'Chef A et Chef B ne peuvent pas être la même personne';
                return;
            }
            try {
                this.loading = true;
                const response = yield this.affectationService.updateAffectation(affectation.serviceId, request).toPromise();
                if (response === null || response === void 0 ? void 0 : response.success) {
                    this.successMessage = 'Affectation modifiée avec succès';
                    affectation.isEditing = false;
                    yield this.loadData();
                }
                else {
                    this.error = (response === null || response === void 0 ? void 0 : response.error) || 'Erreur lors de la modification';
                }
            }
            catch (error) {
                console.error('Erreur lors de la modification:', error);
                this.error = ((_c = error === null || error === void 0 ? void 0 : error.error) === null || _c === void 0 ? void 0 : _c.message) || (error === null || error === void 0 ? void 0 : error.message) || 'Erreur lors de la modification';
            }
            finally {
                this.loading = false;
            }
        });
    }
    /**
     * Supprimer une affectation
     */
    deleteAffectation(affectation) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (!confirm('Êtes-vous sûr de vouloir supprimer cette affectation ?')) {
                return;
            }
            try {
                this.loading = true;
                const response = yield this.affectationService.deleteAffectation(affectation.serviceId).toPromise();
                if (response === null || response === void 0 ? void 0 : response.success) {
                    this.successMessage = 'Affectation supprimée avec succès';
                    yield this.loadData();
                }
                else {
                    this.error = (response === null || response === void 0 ? void 0 : response.error) || 'Erreur lors de la suppression';
                }
            }
            catch (error) {
                console.error('Erreur lors de la suppression:', error);
                this.error = ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message) || (error === null || error === void 0 ? void 0 : error.message) || 'Erreur lors de la suppression';
            }
            finally {
                this.loading = false;
            }
        });
    }
    /**
     * Mettre à jour la sélection de Chef A
     */
    onChefAChange(affectation, chefId) {
        if (chefId) {
            const chef = this.allChefs.find(c => c.id === parseInt(chefId));
            affectation.chefA = chef || null;
        }
        else {
            affectation.chefA = null;
        }
    }
    /**
     * Mettre à jour la sélection de Chef B
     */
    onChefBChange(affectation, chefId) {
        if (chefId) {
            const chef = this.allChefs.find(c => c.id === parseInt(chefId));
            affectation.chefB = chef || null;
        }
        else {
            affectation.chefB = null;
        }
    }
    /**
     * Effacer les messages d'erreur/succès
     */
    clearMessages() {
        this.error = null;
        this.successMessage = null;
    }
    /**
     * Récupérer le nom du service par ID
     */
    getServiceName(serviceId) {
        const service = this.services.find(s => s.idService === serviceId);
        return service ? service.nomService : '';
    }
    /**
     * Vérifier si un chef peut être sélectionné
     */
    canSelectChef(chef, affectation, position) {
        var _a, _b;
        // Permettre le chef actuel
        if (position === 'A' && ((_a = affectation.chefA) === null || _a === void 0 ? void 0 : _a.id) === chef.id)
            return true;
        if (position === 'B' && ((_b = affectation.chefB) === null || _b === void 0 ? void 0 : _b.id) === chef.id)
            return true;
        // Vérifier si le chef n'est pas déjà affecté ailleurs
        const isAffectedElsewhere = this.affectations.some(aff => aff.serviceId !== affectation.serviceId &&
            ((aff.chefA && aff.chefA.id === chef.id) ||
                (aff.chefB && aff.chefB.id === chef.id)));
        return !isAffectedElsewhere;
    }
    /**
     * TrackBy function pour optimiser les performances du ngFor
     */
    trackByServiceId(index, affectation) {
        return affectation.serviceId;
    }
    /**
     * Compter les chefs A assignés
     */
    getChefACount() {
        return this.affectations.filter(a => a.chefA).length;
    }
    /**
     * Compter les chefs B assignés
     */
    getChefBCount() {
        return this.affectations.filter(a => a.chefB).length;
    }
}
AffectationTableComponent.ɵfac = function AffectationTableComponent_Factory(t) { return new (t || AffectationTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_affectation_table_service__WEBPACK_IMPORTED_MODULE_0__.AffectationTableService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
AffectationTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AffectationTableComponent, selectors: [["app-affectation-table"]], decls: 22, vars: 7, consts: [[1, "container-fluid"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "h4", "mb-1"], [1, "text-muted", "mb-0"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "fas", "fa-plus", "me-2"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "card mb-4", 4, "ngIf"], [1, "card"], [1, "card-header", "bg-primary", "text-white"], [1, "card-title", "mb-0"], [1, "fas", "fa-table", "me-2"], [1, "card-body", "p-0"], ["class", "text-center p-4", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["class", "row mt-4", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "fas", "fa-exclamation-triangle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "fas", "fa-check-circle", "me-2"], [1, "card", "mb-4"], [1, "card-header", "bg-light"], [1, "fas", "fa-plus-circle", "me-2"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-3"], [1, "form-label"], ["formControlName", "serviceId", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "chefAId", 1, "form-select"], ["formControlName", "chefBId", 1, "form-select"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [1, "col-md-3", "d-flex", "align-items-end"], ["type", "submit", 1, "btn", "btn-success", "me-2", 3, "disabled"], [1, "fas", "fa-save", "me-1"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-times", "me-1"], [3, "value"], [1, "invalid-feedback"], [3, "value", "disabled"], [1, "text-center", "p-4"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2", "text-muted"], [1, "table-responsive"], [1, "table", "table-striped", "table-hover", "mb-0"], [1, "table-dark"], ["scope", "col"], ["class", "align-middle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [1, "align-middle"], [1, "fw-bold"], [1, "text-muted"], ["class", "btn-group btn-group-sm", 4, "ngIf"], ["class", "d-flex align-items-center", 4, "ngIf"], ["class", "text-muted fst-italic", 4, "ngIf"], [1, "d-flex", "align-items-center"], [1, "avatar-sm", "bg-success", "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "me-2"], [1, "fas", "fa-user", "text-white"], [1, "text-muted", "fst-italic"], [1, "fas", "fa-user-slash", "me-1"], [1, "form-select", "form-select-sm", 3, "value", "change"], [1, "avatar-sm", "bg-info", "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "me-2"], [1, "btn-group", "btn-group-sm"], [1, "btn", "btn-outline-primary", 3, "disabled", "click"], [1, "fas", "fa-edit"], [1, "btn", "btn-outline-danger", 3, "disabled", "click"], [1, "fas", "fa-trash"], [1, "btn", "btn-success", 3, "disabled", "click"], [1, "fas", "fa-save"], [1, "btn", "btn-secondary", 3, "disabled", "click"], [1, "fas", "fa-times"], ["colspan", "4", 1, "text-center", "py-4"], [1, "fas", "fa-inbox", "fa-2x", "mb-3", "d-block"], [1, "mb-0"], [1, "small"], [1, "row", "mt-4"], [1, "card", "border-primary"], [1, "card-body", "text-center"], [1, "fas", "fa-building", "text-primary", "fa-2x", "mb-2"], [1, "card-title"], [1, "card-text", "text-muted"], [1, "card", "border-success"], [1, "fas", "fa-users", "text-success", "fa-2x", "mb-2"], [1, "card", "border-info"], [1, "fas", "fa-user-check", "text-info", "fa-2x", "mb-2"], [1, "card", "border-warning"], [1, "fas", "fa-user-plus", "text-warning", "fa-2x", "mb-2"]], template: function AffectationTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Gestion des Affectations RH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Liaison des services avec leurs chefs A et B pour la validation des cong\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AffectationTableComponent_Template_button_click_7_listener() { return ctx.addNewAffectation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Nouvelle affectation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AffectationTableComponent_div_10_Template, 4, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AffectationTableComponent_div_11_Template, 4, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AffectationTableComponent_div_12_Template, 37, 8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Tableau des Affectations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AffectationTableComponent_div_19_Template, 6, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AffectationTableComponent_div_20_Template, 15, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AffectationTableComponent_div_21_Template, 33, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showNewForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: ["@charset \"UTF-8\";\n\n.avatar-sm[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  font-size: 14px;\n}\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n  border-radius: 0.375rem;\n}\n.card-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: calc(0.375rem - 1px) calc(0.375rem - 1px) 0 0;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  letter-spacing: 0.05em;\n  padding: 1rem 0.75rem;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.875rem 0.75rem;\n  vertical-align: middle;\n}\n.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 123, 255, 0.05);\n}\n.btn-group-sm[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  font-size: 0.875rem;\n  border-radius: 0.25rem;\n}\n.form-select-sm[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem;\n}\n\n.alert[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0.375rem;\n  padding: 0.75rem 1.25rem;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background-color: #d1e7dd;\n  color: #0f5132;\n}\n.alert-danger[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n\n.spinner-border[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n}\n\n.card.border-primary[_ngcontent-%COMP%] {\n  border-color: #0d6efd !important;\n}\n.card.border-success[_ngcontent-%COMP%] {\n  border-color: #198754 !important;\n}\n.card.border-info[_ngcontent-%COMP%] {\n  border-color: #0dcaf0 !important;\n}\n.card.border-warning[_ngcontent-%COMP%] {\n  border-color: #ffc107 !important;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #0b5ed7;\n  border-color: #0a58ca;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n@media (max-width: 768px) {\n  .table-responsive[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n\n  .btn-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .btn-group[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n    border-radius: 0.25rem !important;\n    margin-bottom: 0.25rem;\n  }\n\n  .avatar-sm[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n    font-size: 12px;\n  }\n}\n\n.alert[_ngcontent-%COMP%] {\n  animation: slideInDown 0.3s ease-out;\n}\n@keyframes slideInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.btn[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);\n}\n\n.btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n\noption[_ngcontent-%COMP%]:disabled {\n  color: #6c757d;\n  background-color: #f8f9fa;\n}\n\n.form-select[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 6 7 7 7-7'/%3e%3c/svg%3e\");\n}\n\n.text-muted[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.btn[_ngcontent-%COMP%]   [data-bs-toggle=tooltip][_ngcontent-%COMP%] {\n  cursor: help;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFmZmVjdGF0aW9uLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQix3REFBQTtBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFFQTtFQUNFLFlBQUE7RUFDQSxtREFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFFQTtFQUNFLDZDQUFBO0VBQ0EsNERBQUE7QUFDRjtBQUVBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFFQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUVBO0VBQ0UseUNBQUE7QUFDRjtBQUVBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUNGO0FBRUEsb0NBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0FBQ0Y7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBRUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFDRjtBQUVBLG9CQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGO0FBRUEsd0JBQUE7QUFDQTtFQUNFLGdDQUFBO0FBQ0Y7QUFFQTtFQUNFLGdDQUFBO0FBQ0Y7QUFFQTtFQUNFLGdDQUFBO0FBQ0Y7QUFFQTtFQUNFLGdDQUFBO0FBQ0Y7QUFFQSwwQkFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQUNGO0FBRUE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBQ0Y7QUFFQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFDRjtBQUVBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQUNGO0FBRUEsc0JBQUE7QUFDQTtFQUNFO0lBQ0UsbUJBQUE7RUFDRjs7RUFFQTtJQUNFLHNCQUFBO0VBQ0Y7O0VBRUE7SUFDRSxpQ0FBQTtJQUNBLHNCQUFBO0VBQ0Y7O0VBRUE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUFDRjtBQUNGO0FBRUEsK0JBQUE7QUFDQTtFQUNFLG9DQUFBO0FBQUY7QUFHQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLG1DQUFBO0VBQUY7RUFFQTtJQUNFLFVBQUE7SUFDQSwrQkFBQTtFQUFGO0FBQ0Y7QUFHQSxvQ0FBQTtBQUNBOzs7RUFHRSxpREFBQTtBQURGO0FBSUEsNkNBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQURGO0FBSUEsdUNBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQURGO0FBSUEseUNBQUE7QUFDQTtFQUNFLGlQQUFBO0FBREY7QUFJQSwwQkFBQTtBQUNBO0VBQ0UsWUFBQTtBQURGO0FBSUEseUNBQUE7QUFDQTtFQUNFLFlBQUE7QUFERiIsImZpbGUiOiJhZmZlY3RhdGlvbi10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIFN0eWxlcyBwZXJzb25uYWxpc8OpcyBwb3VyIGxlIHRhYmxlYXUgZCdhZmZlY3RhdGlvbnMgKi9cbi5hdmF0YXItc20ge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4zNzVyZW0gLSAxcHgpIGNhbGMoMC4zNzVyZW0gLSAxcHgpIDAgMDtcbn1cblxuLnRhYmxlIHRoIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBwYWRkaW5nOiAxcmVtIDAuNzVyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi50YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDAuODc1cmVtIDAuNzVyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi50YWJsZS1ob3ZlciB0Ym9keSB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTIzLCAyNTUsIDAuMDUpO1xufVxuXG4uYnRuLWdyb3VwLXNtID4gLmJ0biB7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5mb3JtLXNlbGVjdC1zbSB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG59XG5cbi8qIE1lc3NhZ2VzIGQnYWxlcnRlIHBlcnNvbm5hbGlzw6lzICovXG4uYWxlcnQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XG59XG5cbi5hbGVydC1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxZTdkZDtcbiAgY29sb3I6ICMwZjUxMzI7XG59XG5cbi5hbGVydC1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xuICBjb2xvcjogIzcyMWMyNDtcbn1cblxuLyogTG9hZGluZyBzcGlubmVyICovXG4uc3Bpbm5lci1ib3JkZXIge1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xufVxuXG4vKiBDYXJ0ZXMgc3RhdGlzdGlxdWVzICovXG4uY2FyZC5ib3JkZXItcHJpbWFyeSB7XG4gIGJvcmRlci1jb2xvcjogIzBkNmVmZCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC5ib3JkZXItc3VjY2VzcyB7XG4gIGJvcmRlci1jb2xvcjogIzE5ODc1NCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC5ib3JkZXItaW5mbyB7XG4gIGJvcmRlci1jb2xvcjogIzBkY2FmMCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC5ib3JkZXItd2FybmluZyB7XG4gIGJvcmRlci1jb2xvcjogI2ZmYzEwNyAhaW1wb3J0YW50O1xufVxuXG4vKiBCb3V0b25zIHBlcnNvbm5hbGlzw6lzICovXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ2ZWZkO1xuICBib3JkZXItY29sb3I6ICMwZDZlZmQ7XG59XG5cbi5idG4tcHJpbWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjVlZDc7XG4gIGJvcmRlci1jb2xvcjogIzBhNThjYTtcbn1cblxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ2ZWZkO1xuICBib3JkZXItY29sb3I6ICMwZDZlZmQ7XG59XG5cbi5idG4tb3V0bGluZS1kYW5nZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG59XG5cbi8qIFJlc3BvbnNpdmUgZGVzaWduICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIH1cblxuICAuYnRuLWdyb3VwIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmJ0bi1ncm91cCA+IC5idG4ge1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICB9XG5cbiAgLmF2YXRhci1zbSB7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuLyogQW5pbWF0aW9uIHBvdXIgbGVzIGFsZXJ0ZXMgKi9cbi5hbGVydCB7XG4gIGFuaW1hdGlvbjogc2xpZGVJbkRvd24gMC4zcyBlYXNlLW91dDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZUluRG93biB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLyogQW3DqWxpb3JhdGlvbiBkZSBsJ2FjY2Vzc2liaWxpdMOpICovXG4uYnRuOmZvY3VzLFxuLmZvcm0tc2VsZWN0OmZvY3VzLFxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDEzLCAxMTAsIDI1MywgMC4yNSk7XG59XG5cbi8qIEluZGljYXRldXIgZGUgY2hhcmdlbWVudCBzdXIgbGVzIGJvdXRvbnMgKi9cbi5idG5bZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC42NTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLyogU3R5bGUgcG91ciBsZXMgb3B0aW9ucyBkw6lzYWN0aXbDqWVzICovXG5vcHRpb246ZGlzYWJsZWQge1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn1cblxuLyogQW3DqWxpb3JhdGlvbiB2aXN1ZWxsZSBkZXMgc8OpbGVjdGV1cnMgKi9cbi5mb3JtLXNlbGVjdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnJTNlJTNjcGF0aCBmaWxsPSdub25lJyBzdHJva2U9JyUyMzM0M2E0MCcgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzInIGQ9J20xIDYgNyA3IDctNycvJTNlJTNjL3N2ZyUzZVwiKTtcbn1cblxuLyogTWVzc2FnZXMgZCfDqXRhdCB2aWRlcyAqL1xuLnRleHQtbXV0ZWQgLmZhcyB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLyogQW3DqWxpb3JhdGlvbiBkZXMgdG9vbHRpcHMgc2kgYWpvdXTDqXMgKi9cbi5idG4gW2RhdGEtYnMtdG9nZ2xlPXRvb2x0aXBdIHtcbiAgY3Vyc29yOiBoZWxwO1xufSJdfQ== */"] });


/***/ }),

/***/ 11926:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/espaceRh/affectation-chefs/affectation-chefs.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AffectationChefsComponent": () => (/* binding */ AffectationChefsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 99457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_affectation_simple_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/affectation-simple.service */ 29168);
/* harmony import */ var src_app_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/tokenservice.service */ 73565);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);






function AffectationChefsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AffectationChefsComponent_div_12_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.clearMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("alert-success", ctx_r0.messageType === "success")("alert-danger", ctx_r0.messageType === "error")("alert-warning", ctx_r0.messageType === "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("bx-check-circle", ctx_r0.messageType === "success")("bx-error-circle", ctx_r0.messageType === "error")("bx-info-circle", ctx_r0.messageType === "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.message, " ");
} }
function AffectationChefsComponent_button_46_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AffectationChefsComponent_button_46_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.annulerOperation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AffectationChefsComponent_div_47_option_18_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chef_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" (", chef_r15.email, ")");
} }
function AffectationChefsComponent_div_47_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AffectationChefsComponent_div_47_option_18_span_2_Template, 2, 1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chef_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", chef_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", chef_r15.prenom, " ", chef_r15.nom, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chef_r15.email);
} }
function AffectationChefsComponent_div_47_option_29_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" - ", service_r18.libService, "");
} }
function AffectationChefsComponent_div_47_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AffectationChefsComponent_div_47_option_29_small_2_Template, 2, 1, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", service_r18.idService);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", service_r18.nomService, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", service_r18.libService);
} }
function AffectationChefsComponent_div_47_option_54_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" - ", service_r21.libService, "");
} }
function AffectationChefsComponent_div_47_option_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AffectationChefsComponent_div_47_option_54_small_2_Template, 2, 1, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", service_r21.idService);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", service_r21.nomService, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", service_r21.libService);
} }
function AffectationChefsComponent_div_47_option_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chef_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", chef_r24.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", chef_r24.prenom, " ", chef_r24.nom, " ");
} }
function AffectationChefsComponent_div_47_option_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chef_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", chef_r25.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", chef_r25.prenom, " ", chef_r25.nom, " ");
} }
function AffectationChefsComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Nouvelle Affectation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AffectationChefsComponent_div_47_Template_form_ngSubmit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.onSubmitAffectation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Chef ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AffectationChefsComponent_div_47_Template_select_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r28.affectationForm.chefId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "-- S\u00E9lectionner un Chef --");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AffectationChefsComponent_div_47_option_18_Template, 3, 4, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Service ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "select", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AffectationChefsComponent_div_47_Template_select_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r29.affectationForm.serviceId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "-- S\u00E9lectionner un Service --");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, AffectationChefsComponent_div_47_option_29_Template, 3, 3, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AffectationChefsComponent_div_47_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r30.resetForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " R\u00E9initialiser ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "h5", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Affectation Chef A & Chef B ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Service ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "select", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AffectationChefsComponent_div_47_Template_select_ngModelChange_51_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r31.affectationChefForm.serviceId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "-- S\u00E9lectionner un Service --");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, AffectationChefsComponent_div_47_option_54_Template, 3, 3, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Chef A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "select", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AffectationChefsComponent_div_47_Template_select_ngModelChange_58_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r32.affectationChefForm.chefAId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "-- S\u00E9lectionner Chef A --");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, AffectationChefsComponent_div_47_option_61_Template, 2, 3, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AffectationChefsComponent_div_47_Template_button_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r33.affecterChefA(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, " Affecter Chef A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Chef B");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "select", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AffectationChefsComponent_div_47_Template_select_ngModelChange_68_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r34.affectationChefForm.chefBId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "-- S\u00E9lectionner Chef B --");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, AffectationChefsComponent_div_47_option_71_Template, 2, 3, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AffectationChefsComponent_div_47_Template_button_click_72_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r35.affecterChefB(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " Affecter Chef B ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AffectationChefsComponent_div_47_Template_button_click_76_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r36.resetAffectationChefForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, " R\u00E9initialiser ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.affectationForm.chefId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.getChefsLibres());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Chefs libres disponibles: ", ctx_r2.getChefsLibres().length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.affectationForm.serviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.getServicesLibres());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Services sans chef: ", ctx_r2.getServicesLibres().length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.loadingAction);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.loadingAction || !_r9.form.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("bx-check", !ctx_r2.loadingAction)("bx-loader-alt", ctx_r2.loadingAction)("bx-spin", ctx_r2.loadingAction);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.loadingAction ? "Cr\u00E9ation..." : "Cr\u00E9er Affectation", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.affectationChefForm.serviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.services);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.affectationChefForm.chefAId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.getChefsLibres());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r2.affectationChefForm.serviceId || !ctx_r2.affectationChefForm.chefAId || ctx_r2.loadingAction);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.affectationChefForm.chefBId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.getChefsLibres());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r2.affectationChefForm.serviceId || !ctx_r2.affectationChefForm.chefBId || ctx_r2.loadingAction);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.loadingAction);
} }
function AffectationChefsComponent_div_48_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r37.selectedAffectation.chefA.prenom, " ", ctx_r37.selectedAffectation.chefA.nom, " ");
} }
function AffectationChefsComponent_div_48_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Non assign\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AffectationChefsComponent_div_48_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r39.selectedAffectation.chefB.prenom, " ", ctx_r39.selectedAffectation.chefB.nom, " ");
} }
function AffectationChefsComponent_div_48_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Non assign\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AffectationChefsComponent_div_48_option_32_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chef_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" (", chef_r43.email, ")");
} }
function AffectationChefsComponent_div_48_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AffectationChefsComponent_div_48_option_32_span_2_Template, 2, 1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chef_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", chef_r43.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", chef_r43.prenom, " ", chef_r43.nom, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chef_r43.email);
} }
function AffectationChefsComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Modifier Affectation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Service:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Chef A:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AffectationChefsComponent_div_48_span_15_Template, 2, 2, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AffectationChefsComponent_div_48_span_16_Template, 2, 0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Chef B:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, AffectationChefsComponent_div_48_span_20_Template, 2, 2, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, AffectationChefsComponent_div_48_span_21_Template, 2, 0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "form", 43, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AffectationChefsComponent_div_48_Template_form_ngSubmit_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r46.onSubmitModification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Nouveau Chef ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "select", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AffectationChefsComponent_div_48_Template_select_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r47); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r48.modificationForm.nouveauChefId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "-- S\u00E9lectionner un nouveau Chef --");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, AffectationChefsComponent_div_48_option_32_Template, 3, 4, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AffectationChefsComponent_div_48_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r47); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r49.annulerOperation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](23);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedAffectation.nomService, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.selectedAffectation.chefA);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.selectedAffectation.chefA);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.selectedAffectation.chefB);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.selectedAffectation.chefB);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.modificationForm.nouveauChefId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.getChefsLibres());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.loadingAction);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.loadingAction || !_r41.form.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("bx-save", !ctx_r3.loadingAction)("bx-loader-alt", ctx_r3.loadingAction)("bx-spin", ctx_r3.loadingAction);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.loadingAction ? "Modification..." : "Modifier Affectation", " ");
} }
function AffectationChefsComponent_div_49_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Chargement...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Chargement des affectations...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AffectationChefsComponent_div_49_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Aucune affectation trouv\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AffectationChefsComponent_div_49_div_15_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r53.activerModeCreation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Cr\u00E9er la premi\u00E8re affectation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AffectationChefsComponent_div_49_div_16_tr_17_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h6", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "small", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const affectation_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", affectation_r56.chefA.prenom.charAt(0), "", affectation_r56.chefA.nom.charAt(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", affectation_r56.chefA.prenom, " ", affectation_r56.chefA.nom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](affectation_r56.chefA.email);
} }
function AffectationChefsComponent_div_49_div_16_tr_17_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Non assign\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AffectationChefsComponent_div_49_div_16_tr_17_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h6", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "small", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const affectation_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", affectation_r56.chefB.prenom.charAt(0), "", affectation_r56.chefB.nom.charAt(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", affectation_r56.chefB.prenom, " ", affectation_r56.chefB.nom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](affectation_r56.chefB.email);
} }
function AffectationChefsComponent_div_49_div_16_tr_17_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Non assign\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AffectationChefsComponent_div_49_div_16_tr_17_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u00C9quipe compl\u00E8te ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AffectationChefsComponent_div_49_div_16_tr_17_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Chef A assign\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AffectationChefsComponent_div_49_div_16_tr_17_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Chef B assign\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AffectationChefsComponent_div_49_div_16_tr_17_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Sans chef ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AffectationChefsComponent_div_49_div_16_tr_17_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AffectationChefsComponent_div_49_div_16_tr_17_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r72); const affectation_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r71.affectationChefForm.serviceId = affectation_r56.serviceId; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r65.loadingAction);
} }
function AffectationChefsComponent_div_49_div_16_tr_17_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AffectationChefsComponent_div_49_div_16_tr_17_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r76); const affectation_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r74.supprimerChefA(affectation_r56.serviceId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r66.loadingAction);
} }
function AffectationChefsComponent_div_49_div_16_tr_17_button_31_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AffectationChefsComponent_div_49_div_16_tr_17_button_31_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r78); const affectation_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r77.affectationChefForm.serviceId = affectation_r56.serviceId; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r67.loadingAction);
} }
function AffectationChefsComponent_div_49_div_16_tr_17_button_32_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AffectationChefsComponent_div_49_div_16_tr_17_button_32_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r82); const affectation_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r80.supprimerChefB(affectation_r56.serviceId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r68.loadingAction);
} }
function AffectationChefsComponent_div_49_div_16_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h6", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "small", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AffectationChefsComponent_div_49_div_16_tr_17_div_10_Template, 9, 5, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AffectationChefsComponent_div_49_div_16_tr_17_span_11_Template, 3, 0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AffectationChefsComponent_div_49_div_16_tr_17_div_13_Template, 9, 5, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AffectationChefsComponent_div_49_div_16_tr_17_span_14_Template, 3, 0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, AffectationChefsComponent_div_49_div_16_tr_17_span_17_Template, 3, 0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AffectationChefsComponent_div_49_div_16_tr_17_span_18_Template, 3, 0, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AffectationChefsComponent_div_49_div_16_tr_17_span_19_Template, 3, 0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, AffectationChefsComponent_div_49_div_16_tr_17_span_20_Template, 3, 0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Chef A:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, AffectationChefsComponent_div_49_div_16_tr_17_button_26_Template, 2, 1, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, AffectationChefsComponent_div_49_div_16_tr_17_button_27_Template, 2, 1, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Chef B:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, AffectationChefsComponent_div_49_div_16_tr_17_button_31_Template, 2, 1, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, AffectationChefsComponent_div_49_div_16_tr_17_button_32_Template, 2, 1, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const affectation_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](affectation_r56.nomService);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("ID: ", affectation_r56.serviceId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](affectation_r56.libService || "Aucune description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", affectation_r56.chefA);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !affectation_r56.chefA);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", affectation_r56.chefB);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !affectation_r56.chefB);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", affectation_r56.hasChefA && affectation_r56.hasChefB);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", affectation_r56.hasChefA && !affectation_r56.hasChefB);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !affectation_r56.hasChefA && affectation_r56.hasChefB);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !affectation_r56.hasChefA && !affectation_r56.hasChefB);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !affectation_r56.hasChefA);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", affectation_r56.hasChefA);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !affectation_r56.hasChefB);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", affectation_r56.hasChefB);
} }
function AffectationChefsComponent_div_49_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "thead", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Chef A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Chef B");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, AffectationChefsComponent_div_49_div_16_tr_17_Template, 33, 15, "tr", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r52.affectations);
} }
function AffectationChefsComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AffectationChefsComponent_div_49_div_14_Template, 6, 0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AffectationChefsComponent_div_49_div_15_Template, 7, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AffectationChefsComponent_div_49_div_16_Template, 18, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Gestion des Affectations (", ctx_r4.affectations.length, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r4.getAffectationsCompletes(), " Affect\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r4.getAffectationsEnAttente(), " En attente");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.loading && ctx_r4.affectations.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.loading && ctx_r4.affectations.length > 0);
} }
class AffectationChefsComponent {
    constructor(affectationService, tokenStorage) {
        this.affectationService = affectationService;
        this.tokenStorage = tokenStorage;
        // Données principales
        this.services = [];
        this.chefsDisponibles = [];
        this.affectations = [];
        // Formulaires
        this.affectationForm = {
            chefId: null,
            serviceId: null
        };
        this.modificationForm = {
            serviceId: null,
            nouveauChefId: null
        };
        // Nouveau formulaire pour Chef A et Chef B
        this.affectationChefForm = {
            serviceId: null,
            chefAId: null,
            chefBId: null
        };
        // État de l'interface
        this.loading = false;
        this.loadingAction = false;
        this.message = '';
        this.messageType = 'success';
        this.currentUser = null;
        this.modeOperation = 'view';
        this.selectedAffectation = null;
    }
    ngOnInit() {
        this.currentUser = this.tokenStorage.getUser();
        const token = this.tokenStorage.getToken();
        // Vérifier si on a un token
        if (!token) {
            // Chercher dans d'autres endroits
            const sessionToken = sessionStorage.getItem('auth-token');
            const localToken = localStorage.getItem('accessToken');
            if (!sessionToken && !localToken) {
                this.showMessage('❌ Aucune session trouvée. Veuillez vous reconnecter.', 'error');
                return;
            }
        }
        this.loadData();
    }
    /**
     * Charger toutes les données nécessaires
     */
    loadData() {
        this.loading = true;
        this.clearMessage();
        console.log('📊 Chargement des données...');
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)({
            services: this.affectationService.getServices(),
            chefsDisponibles: this.affectationService.getChefsDisponibles(),
            affectations: this.affectationService.getAllAffectations()
        }).subscribe({
            next: (data) => {
                this.services = data.services;
                this.chefsDisponibles = data.chefsDisponibles;
                this.affectations = data.affectations;
                this.loading = false;
                console.log('✅ Données chargées:');
                console.log('📋 Services:', this.services.length);
                console.log('👥 Chefs disponibles:', this.chefsDisponibles.length);
                console.log('🔗 Affectations:', this.affectations.length);
                if (this.chefsDisponibles.length === 0) {
                    this.showMessage('Aucun chef disponible pour affectation.', 'warning');
                }
            },
            error: (error) => {
                console.error('❌ Erreur lors du chargement:', error);
                this.showMessage('Erreur lors du chargement des données. Vérifiez votre connexion.', 'error');
                this.loading = false;
            }
        });
    }
    // ===== CRUD OPERATIONS =====
    /**
     * Créer une nouvelle affectation
     */
    onSubmitAffectation() {
        if (!this.affectationForm.chefId || !this.affectationForm.serviceId) {
            this.showMessage('Veuillez sélectionner un chef et un service.', 'error');
            return;
        }
        // Vérifications côté client
        if (this.isChefAlreadyAssigned(this.affectationForm.chefId)) {
            this.showMessage('❌ Ce chef est déjà affecté à un service.', 'error');
            return;
        }
        if (this.isServiceAlreadyAssigned(this.affectationForm.serviceId)) {
            this.showMessage('❌ Ce service a déjà un chef assigné.', 'error');
            return;
        }
        this.loadingAction = true;
        this.clearMessage();
        const request = {
            chefId: this.affectationForm.chefId,
            serviceId: this.affectationForm.serviceId
        };
        this.affectationService.creerAffectation(request).subscribe({
            next: (response) => {
                this.loadingAction = false;
                if (response.success) {
                    this.showMessage('✅ ' + response.message, 'success');
                    this.resetForm();
                    this.loadData();
                }
                else {
                    this.showMessage('❌ ' + response.message, 'error');
                }
            },
            error: (error) => {
                this.loadingAction = false;
                console.error('❌ Erreur création affectation:', error);
                let errorMessage = 'Erreur lors de la création de l\'affectation';
                if (error.error && error.error.message) {
                    errorMessage = error.error.message;
                }
                else if (error.status === 401) {
                    errorMessage = 'Session expirée. Veuillez vous reconnecter.';
                }
                this.showMessage('❌ ' + errorMessage, 'error');
            }
        });
    }
    /**
     * Modifier une affectation existante
     */
    onSubmitModification() {
        if (!this.modificationForm.serviceId || !this.modificationForm.nouveauChefId) {
            this.showMessage('Veuillez sélectionner un service et un nouveau chef.', 'error');
            return;
        }
        this.loadingAction = true;
        this.clearMessage();
        this.affectationService.modifierAffectation(this.modificationForm.serviceId, this.modificationForm.nouveauChefId).subscribe({
            next: (response) => {
                this.loadingAction = false;
                if (response.success) {
                    this.showMessage('✅ ' + response.message, 'success');
                    this.resetModificationForm();
                    this.modeOperation = 'view';
                    this.loadData();
                }
                else {
                    this.showMessage('❌ ' + response.message, 'error');
                }
            },
            error: (error) => {
                this.loadingAction = false;
                console.error('❌ Erreur modification affectation:', error);
                let errorMessage = 'Erreur lors de la modification de l\'affectation';
                if (error.error && error.error.message) {
                    errorMessage = error.error.message;
                }
                this.showMessage('❌ ' + errorMessage, 'error');
            }
        });
    }
    /**
     * Supprimer une affectation
     */
    supprimerAffectation(serviceId) {
        if (!confirm('Êtes-vous sûr de vouloir supprimer cette affectation ?')) {
            return;
        }
        this.loadingAction = true;
        this.clearMessage();
        this.affectationService.supprimerAffectation(serviceId).subscribe({
            next: (response) => {
                this.loadingAction = false;
                if (response.success) {
                    this.showMessage('✅ ' + response.message, 'success');
                    this.loadData();
                }
                else {
                    this.showMessage('❌ ' + response.message, 'error');
                }
            },
            error: (error) => {
                this.loadingAction = false;
                console.error('❌ Erreur suppression affectation:', error);
                let errorMessage = 'Erreur lors de la suppression de l\'affectation';
                if (error.error && error.error.message) {
                    errorMessage = error.error.message;
                }
                this.showMessage('❌ ' + errorMessage, 'error');
            }
        });
    }
    // ===== NOUVELLES MÉTHODES CHEF A / CHEF B =====
    /**
     * Affecter un Chef A à un service
     */
    affecterChefA() {
        if (!this.affectationChefForm.serviceId || !this.affectationChefForm.chefAId) {
            this.showMessage('Veuillez sélectionner un service et un Chef A.', 'error');
            return;
        }
        this.loadingAction = true;
        this.clearMessage();
        const request = {
            serviceId: this.affectationChefForm.serviceId,
            chefId: this.affectationChefForm.chefAId,
            typeChef: 'CHEF_A'
        };
        this.affectationService.affecterChef(request).subscribe({
            next: (response) => {
                this.loadingAction = false;
                if (response.success) {
                    this.showMessage('✅ ' + response.message, 'success');
                    this.resetAffectationChefForm();
                    this.loadData();
                }
                else {
                    this.showMessage('❌ ' + response.message, 'error');
                }
            },
            error: (error) => {
                this.loadingAction = false;
                console.error('❌ Erreur affectation Chef A:', error);
                let errorMessage = 'Erreur lors de l\'affectation du Chef A';
                if (error.error && error.error.message) {
                    errorMessage = error.error.message;
                }
                this.showMessage('❌ ' + errorMessage, 'error');
            }
        });
    }
    /**
     * Affecter un Chef B à un service
     */
    affecterChefB() {
        if (!this.affectationChefForm.serviceId || !this.affectationChefForm.chefBId) {
            this.showMessage('Veuillez sélectionner un service et un Chef B.', 'error');
            return;
        }
        this.loadingAction = true;
        this.clearMessage();
        const request = {
            serviceId: this.affectationChefForm.serviceId,
            chefId: this.affectationChefForm.chefBId,
            typeChef: 'CHEF_B'
        };
        this.affectationService.affecterChef(request).subscribe({
            next: (response) => {
                this.loadingAction = false;
                if (response.success) {
                    this.showMessage('✅ ' + response.message, 'success');
                    this.resetAffectationChefForm();
                    this.loadData();
                }
                else {
                    this.showMessage('❌ ' + response.message, 'error');
                }
            },
            error: (error) => {
                this.loadingAction = false;
                console.error('❌ Erreur affectation Chef B:', error);
                let errorMessage = 'Erreur lors de l\'affectation du Chef B';
                if (error.error && error.error.message) {
                    errorMessage = error.error.message;
                }
                this.showMessage('❌ ' + errorMessage, 'error');
            }
        });
    }
    /**
     * Supprimer l'affectation d'un Chef A
     */
    supprimerChefA(serviceId) {
        if (!confirm('Êtes-vous sûr de vouloir supprimer l\'affectation du Chef A ?')) {
            return;
        }
        this.loadingAction = true;
        this.clearMessage();
        this.affectationService.supprimerAffectationChef(serviceId, 'CHEF_A').subscribe({
            next: (response) => {
                this.loadingAction = false;
                if (response.success) {
                    this.showMessage('✅ ' + response.message, 'success');
                    this.loadData();
                }
                else {
                    this.showMessage('❌ ' + response.message, 'error');
                }
            },
            error: (error) => {
                this.loadingAction = false;
                console.error('❌ Erreur suppression Chef A:', error);
                let errorMessage = 'Erreur lors de la suppression du Chef A';
                if (error.error && error.error.message) {
                    errorMessage = error.error.message;
                }
                this.showMessage('❌ ' + errorMessage, 'error');
            }
        });
    }
    /**
     * Supprimer l'affectation d'un Chef B
     */
    supprimerChefB(serviceId) {
        if (!confirm('Êtes-vous sûr de vouloir supprimer l\'affectation du Chef B ?')) {
            return;
        }
        this.loadingAction = true;
        this.clearMessage();
        this.affectationService.supprimerAffectationChef(serviceId, 'CHEF_B').subscribe({
            next: (response) => {
                this.loadingAction = false;
                if (response.success) {
                    this.showMessage('✅ ' + response.message, 'success');
                    this.loadData();
                }
                else {
                    this.showMessage('❌ ' + response.message, 'error');
                }
            },
            error: (error) => {
                this.loadingAction = false;
                console.error('❌ Erreur suppression Chef B:', error);
                let errorMessage = 'Erreur lors de la suppression du Chef B';
                if (error.error && error.error.message) {
                    errorMessage = error.error.message;
                }
                this.showMessage('❌ ' + errorMessage, 'error');
            }
        });
    }
    // ===== UTILITY METHODS =====
    /**
     * Vérifier si un chef est déjà affecté
     */
    isChefAlreadyAssigned(chefId) {
        return this.affectationService.isChefAlreadyAssigned(chefId, this.affectations);
    }
    /**
     * Vérifier si un service a déjà un chef
     */
    isServiceAlreadyAssigned(serviceId) {
        return this.affectations.some(affectation => affectation.serviceId === serviceId && affectation.hasChef);
    }
    // ===== UI MANAGEMENT METHODS =====
    /**
     * Passer en mode création
     */
    activerModeCreation() {
        this.modeOperation = 'create';
        this.selectedAffectation = null;
        this.resetForm();
        this.clearMessage();
    }
    /**
     * Passer en mode création avec service pré-sélectionné
     */
    activerModeCreationPourService(serviceId) {
        this.activerModeCreation();
        this.affectationForm.serviceId = serviceId;
    }
    /**
     * Passer en mode modification
     */
    activerModeModification(affectation) {
        this.modeOperation = 'edit';
        this.selectedAffectation = affectation;
        this.modificationForm = {
            serviceId: affectation.serviceId,
            nouveauChefId: null
        };
        this.clearMessage();
    }
    /**
     * Revenir au mode visualisation
     */
    annulerOperation() {
        this.modeOperation = 'view';
        this.selectedAffectation = null;
        this.resetForm();
        this.resetModificationForm();
        this.clearMessage();
    }
    /**
     * Obtenir le nom du service par son ID
     */
    getServiceName(serviceId) {
        const service = this.services.find(s => s.idService === serviceId);
        return service ? service.nomService : 'Service inconnu';
    }
    /**
     * Obtenir le nom complet d'un chef par son ID
     */
    getChefName(chefId) {
        const chef = this.chefsDisponibles.find(c => c.id === chefId);
        return chef ? `${chef.prenom} ${chef.nom}` : 'Chef inconnu';
    }
    /**
     * Obtenir les chefs vraiment disponibles (pas déjà affectés)
     */
    getChefsLibres() {
        return this.chefsDisponibles.filter(chef => !chef.dejaAffecte);
    }
    /**
     * Obtenir les services sans chef
     */
    getServicesLibres() {
        return this.services.filter(service => !service.hasChef);
    }
    /**
     * Compter les affectations complètes
     */
    getAffectationsCompletes() {
        return this.affectations.filter(a => a.hasChef).length;
    }
    /**
     * Compter les affectations en attente
     */
    getAffectationsEnAttente() {
        return this.affectations.filter(a => !a.hasChef).length;
    }
    /**
     * Réinitialiser le formulaire de création
     */
    resetForm() {
        this.affectationForm = {
            chefId: null,
            serviceId: null
        };
    }
    /**
     * Réinitialiser le formulaire de modification
     */
    resetModificationForm() {
        this.modificationForm = {
            serviceId: null,
            nouveauChefId: null
        };
    }
    /**
     * Réinitialiser le formulaire d'affectation Chef A/B
     */
    resetAffectationChefForm() {
        this.affectationChefForm = {
            serviceId: null,
            chefAId: null,
            chefBId: null
        };
    }
    // ===== UTILITY AND DEBUG METHODS =====
    /**
     * Actualiser les données
     */
    refreshData() {
        console.log('🔄 Actualisation des données...');
        this.loadData();
    }
    /**
     * Afficher un message
     */
    showMessage(message, type) {
        this.message = message;
        this.messageType = type;
        // Auto-effacer le message après 5 secondes pour les messages de succès
        if (type === 'success') {
            setTimeout(() => {
                this.clearMessage();
            }, 5000);
        }
    }
    /**
     * Effacer le message
     */
    clearMessage() {
        this.message = '';
    }
    /**
     * Diagnostic de l'authentification
     */
    diagnoseAuth() {
        console.log('🔍 === DIAGNOSTIC D\'AUTHENTIFICATION ===');
        const localToken = localStorage.getItem('accessToken');
        console.log('🗂️ localStorage accessToken:', !!localToken);
        const sessionToken = sessionStorage.getItem('auth-token');
        const storageToken = this.tokenStorage.getToken();
        const storageUser = this.tokenStorage.getUser();
        // Logs supprimés pour éviter le spam dans la console
    }
    /**
     * Test des endpoints disponibles
     */
    testEndpoints() {
        console.log('🧪 Test de connexion au backend...');
        this.affectationService.testEndpoints().subscribe({
            next: (results) => {
                console.log('✅ Tests terminés avec succès:', results);
                this.showMessage('✅ Connexion au backend réussie ! Vérifiez la console.', 'success');
            },
            error: (error) => {
                console.error('❌ Erreur de connexion au backend:', error);
                let errorMsg = 'Erreur de connexion';
                if (error.status === 0) {
                    errorMsg = '❌ Impossible de joindre le backend. Vérifiez que le serveur est démarré sur http://localhost:8089';
                }
                else if (error.status === 401) {
                    errorMsg = '❌ Erreur d\'authentification. Token JWT manquant ou invalide.';
                }
                else if (error.status === 403) {
                    errorMsg = '❌ Accès interdit. Rôle RH/ADMIN requis.';
                }
                else if (error.error && error.error.message) {
                    errorMsg = `❌ ${error.error.message}`;
                }
                this.showMessage(errorMsg, 'error');
            }
        });
    }
    /**
     * Test simple de connectivité
     */
    testBackendConnection() {
        this.showMessage('🔄 Test de connexion en cours...', 'warning');
        this.affectationService.getServices().subscribe({
            next: (services) => {
                console.log('✅ Connexion backend réussie, services reçus:', services);
                this.showMessage(`✅ Backend accessible ! ${services.length} services trouvés.`, 'success');
            },
            error: (error) => {
                console.error('❌ Échec de connexion:', error);
                this.showMessage('❌ Échec de connexion au backend. Vérifiez la console.', 'error');
            }
        });
    }
}
AffectationChefsComponent.ɵfac = function AffectationChefsComponent_Factory(t) { return new (t || AffectationChefsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_affectation_simple_service__WEBPACK_IMPORTED_MODULE_0__.AffectationSimpleService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorage)); };
AffectationChefsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AffectationChefsComponent, selectors: [["app-affectation-chefs"]], decls: 50, vars: 21, consts: [[1, "row"], [1, "col-12"], [1, "page-title-box", "d-sm-flex", "align-items-center", "justify-content-between"], [1, "mb-sm-0"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], ["class", "row", 4, "ngIf"], [1, "row", "mb-3"], [1, "card", "border-primary", "border-opacity-25"], [1, "card-body"], [1, "card-title", "text-primary", "mb-3"], [1, "bx", "bx-info-circle", "me-2"], [1, "row", "g-2"], [1, "col-lg-3"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", "w-100", 3, "click"], [1, "bx", "bx-search-alt", "me-1"], ["type", "button", 1, "btn", "btn-outline-info", "btn-sm", "w-100", 3, "click"], [1, "bx", "bx-test-tube", "me-1"], ["type", "button", 1, "btn", "btn-outline-success", "btn-sm", "w-100", 3, "click"], [1, "bx", "bx-wifi", "me-1"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", "w-100", 3, "disabled", "click"], ["aria-hidden", "true", 1, "bx"], [1, "col-12", "mb-3"], ["role", "group", 1, "btn-group"], ["type", "button", 1, "btn", 3, "click"], [1, "bx", "bx-list-ul", "me-1"], [1, "bx", "bx-plus", "me-1"], ["type", "button", "class", "btn btn-secondary ms-2", 3, "click", 4, "ngIf"], ["class", "row mt-4", 4, "ngIf"], ["role", "alert", 1, "alert"], [1, "d-flex", "align-items-center"], [1, "bx", "me-2"], ["type", "button", "aria-label", "Close", 1, "btn-close", "ms-auto", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "ms-2", 3, "click"], [1, "bx", "bx-x", "me-1"], [1, "col-lg-6"], [1, "card", "border-success"], [1, "card-header", "bg-success-subtle"], [1, "card-title", "mb-0", "text-success"], [1, "bx", "bx-plus-circle", "me-2"], [3, "ngSubmit"], ["createForm", "ngForm"], [1, "mb-3"], ["for", "create-chef", 1, "form-label"], [1, "text-danger"], ["id", "create-chef", "name", "chefId", "required", "", 1, "form-select", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "form-text"], ["for", "create-service", 1, "form-label"], ["id", "create-service", "name", "serviceId", "required", "", 1, "form-select", 3, "ngModel", "ngModelChange"], [1, "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-light", 3, "disabled", "click"], [1, "bx", "bx-reset", "me-1"], ["type", "submit", 1, "btn", "btn-success", "flex-fill", 3, "disabled"], [1, "me-2"], [1, "card", "border-info"], [1, "card-header", "bg-info-subtle"], [1, "card-title", "mb-0", "text-info"], [1, "bx", "bx-group", "me-2"], ["for", "chef-service", 1, "form-label"], ["id", "chef-service", "name", "serviceId", 1, "form-select", 3, "ngModel", "ngModelChange"], ["for", "chef-a", 1, "form-label"], ["id", "chef-a", "name", "chefAId", 1, "form-select", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-outline-success", "btn-sm", "mt-2", 3, "disabled", "click"], [1, "bx", "bx-check", "me-1"], ["for", "chef-b", 1, "form-label"], ["id", "chef-b", "name", "chefBId", 1, "form-select", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", "mt-2", 3, "disabled", "click"], [4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "text-muted"], [1, "card", "border-warning"], [1, "card-header", "bg-warning-subtle"], [1, "card-title", "mb-0", "text-warning"], [1, "bx", "bx-edit", "me-2"], [1, "alert", "alert-info", "mb-3"], ["editForm", "ngForm"], ["for", "edit-chef", 1, "form-label"], ["id", "edit-chef", "name", "nouveauChefId", "required", "", 1, "form-select", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-warning", "flex-fill", 3, "disabled"], [1, "row", "mt-4"], [1, "card"], [1, "card-header"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "mb-0"], [1, "bx", "bx-list-ul", "me-2"], [1, "badge", "bg-success"], [1, "badge", "bg-warning"], ["class", "text-center p-4", 4, "ngIf"], ["class", "text-center p-4 text-muted", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [1, "text-center", "p-4"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2", "text-muted"], [1, "text-center", "p-4", "text-muted"], [1, "bx", "bx-info-circle", "display-4", "mb-3", "d-block"], [1, "btn", "btn-primary", 3, "click"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "table-light"], ["width", "250"], [4, "ngFor", "ngForOf"], [1, "mb-1"], ["class", "d-flex align-items-center", 4, "ngIf"], ["class", "badge badge-soft-success mb-1 d-block", 4, "ngIf"], ["class", "badge badge-soft-info mb-1 d-block", 4, "ngIf"], ["class", "badge badge-soft-primary mb-1 d-block", 4, "ngIf"], ["class", "badge badge-soft-warning mb-1 d-block", 4, "ngIf"], [1, "d-flex", "flex-column", "gap-1"], ["role", "group", 1, "btn-group", "btn-group-sm"], [1, "badge", "badge-outline-success", "me-1"], ["type", "button", "class", "btn btn-outline-success btn-sm", "title", "Affecter Chef A", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-danger btn-sm", "title", "Supprimer Chef A", 3, "disabled", "click", 4, "ngIf"], [1, "badge", "badge-outline-info", "me-1"], ["type", "button", "class", "btn btn-outline-info btn-sm", "title", "Affecter Chef B", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-danger btn-sm", "title", "Supprimer Chef B", 3, "disabled", "click", 4, "ngIf"], [1, "avatar-xs", "me-2"], [1, "avatar-title", "rounded-circle", "bg-success-subtle", "text-success"], [1, "mb-0", "font-size-14"], [1, "bx", "bx-user-x", "me-1"], [1, "avatar-title", "rounded-circle", "bg-info-subtle", "text-info"], [1, "badge", "badge-soft-success", "mb-1", "d-block"], [1, "bx", "bx-check-double", "me-1"], [1, "badge", "badge-soft-info", "mb-1", "d-block"], [1, "badge", "badge-soft-primary", "mb-1", "d-block"], [1, "badge", "badge-soft-warning", "mb-1", "d-block"], [1, "bx", "bx-time-five", "me-1"], ["type", "button", "title", "Affecter Chef A", 1, "btn", "btn-outline-success", "btn-sm", 3, "disabled", "click"], [1, "bx", "bx-plus"], ["type", "button", "title", "Supprimer Chef A", 1, "btn", "btn-outline-danger", "btn-sm", 3, "disabled", "click"], [1, "bx", "bx-trash"], ["type", "button", "title", "Affecter Chef B", 1, "btn", "btn-outline-info", "btn-sm", 3, "disabled", "click"], ["type", "button", "title", "Supprimer Chef B", 1, "btn", "btn-outline-danger", "btn-sm", 3, "disabled", "click"]], template: function AffectationChefsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Affectation des Chefs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "RH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Affectations");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AffectationChefsComponent_div_12_Template, 7, 13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Informations de session ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AffectationChefsComponent_Template_button_click_22_listener() { return ctx.diagnoseAuth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Debug Auth ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AffectationChefsComponent_Template_button_click_26_listener() { return ctx.testEndpoints(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Test API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AffectationChefsComponent_Template_button_click_30_listener() { return ctx.testBackendConnection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Test Connexion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AffectationChefsComponent_Template_button_click_34_listener() { return ctx.refreshData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AffectationChefsComponent_Template_button_click_40_listener() { return ctx.modeOperation = "view"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " Visualiser ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AffectationChefsComponent_Template_button_click_43_listener() { return ctx.activerModeCreation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " Cr\u00E9er ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, AffectationChefsComponent_button_46_Template, 3, 0, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, AffectationChefsComponent_div_47_Template, 79, 29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, AffectationChefsComponent_div_48_Template, 40, 17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, AffectationChefsComponent_div_49_Template, 17, 6, "div", 31);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("bx-refresh", !ctx.loading)("bx-loader-alt", ctx.loading)("bx-spin", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Chargement..." : "Actualiser", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("btn-primary", ctx.modeOperation === "view")("btn-outline-primary", ctx.modeOperation !== "view");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("btn-success", ctx.modeOperation === "create")("btn-outline-success", ctx.modeOperation !== "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.modeOperation !== "view");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.modeOperation === "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.modeOperation === "edit" && ctx.selectedAffectation);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.modeOperation === "view");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZmZlY3RhdGlvbi1jaGVmcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1456:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/espaceRh/configuration-rh/configuration-rh.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationRhComponent": () => (/* binding */ ConfigurationRhComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _rh_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rh.service */ 23155);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);





function ConfigurationRhComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMsg);
} }
function ConfigurationRhComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.message);
} }
function ConfigurationRhComponent_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", cat_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cat_r7);
} }
function ConfigurationRhComponent_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", type_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](type_r8);
} }
function ConfigurationRhComponent_div_40_tr_17_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const config_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", config_r10.valeur, " ");
} }
function ConfigurationRhComponent_div_40_tr_17_input_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConfigurationRhComponent_div_40_tr_17_input_6_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const config_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; return config_r10.valeur = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const config_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", config_r10.valeur)("disabled", !config_r10.modifiable);
} }
function ConfigurationRhComponent_div_40_tr_17_div_19_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfigurationRhComponent_div_40_tr_17_div_19_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r22.onSaveConfig(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ConfigurationRhComponent_div_40_tr_17_div_19_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfigurationRhComponent_div_40_tr_17_div_19_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r24.onCancelEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ConfigurationRhComponent_div_40_tr_17_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfigurationRhComponent_div_40_tr_17_div_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const config_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r26.onEditConfig(config_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ConfigurationRhComponent_div_40_tr_17_div_19_button_3_Template, 2, 0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ConfigurationRhComponent_div_40_tr_17_div_19_button_4_Template, 2, 0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfigurationRhComponent_div_40_tr_17_div_19_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const config_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r29.onResetConfig(config_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const config_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r13.editingConfig && ctx_r13.editingConfig.id !== config_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.editingConfig && ctx_r13.editingConfig.id === config_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.editingConfig && ctx_r13.editingConfig.id === config_r10.id);
} }
function ConfigurationRhComponent_div_40_tr_17_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Verrouill\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ConfigurationRhComponent_div_40_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "code", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ConfigurationRhComponent_div_40_tr_17_span_5_Template, 2, 1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ConfigurationRhComponent_div_40_tr_17_input_6_Template, 1, 2, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ConfigurationRhComponent_div_40_tr_17_div_19_Template, 7, 3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ConfigurationRhComponent_div_40_tr_17_span_20_Template, 3, 0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const config_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](config_r10.cle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r9.editingConfig || ctx_r9.editingConfig.id !== config_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.editingConfig && ctx_r9.editingConfig.id === config_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](config_r10.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("badge bg-", ctx_r9.getCategorieColor(config_r10.categorie), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", config_r10.categorie, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("mdi ", ctx_r9.getTypeIcon(config_r10.type), " me-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](config_r10.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", config_r10.modifiable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !config_r10.modifiable);
} }
function ConfigurationRhComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Cl\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Valeur");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Cat\u00E9gorie");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ConfigurationRhComponent_div_40_tr_17_Template, 21, 14, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.filteredConfigurations);
} }
function ConfigurationRhComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Aucune configuration trouv\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ConfigurationRhComponent {
    constructor(rhService, fb) {
        this.rhService = rhService;
        this.fb = fb;
        this.configurations = [];
        this.filteredConfigurations = [];
        this.loading = false;
        this.message = '';
        this.errorMsg = '';
        this.editingConfig = null;
        // Filtres
        this.searchTerm = '';
        this.categorieFilter = '';
        this.typeFilter = '';
        this.configForm = this.fb.group({
            cle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            valeur: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            description: [''],
            categorie: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
        });
    }
    ngOnInit() {
        this.loadConfigurations();
    }
    loadConfigurations() {
        this.loading = true;
        this.errorMsg = '';
        // Simulation de données - remplacer par l'appel API réel
        this.configurations = [
            {
                id: 1,
                cle: 'MAX_CONGES_ANNUELS',
                valeur: '25',
                description: 'Nombre maximum de jours de congés annuels autorisés',
                categorie: 'Congés',
                type: 'Nombre',
                modifiable: true
            },
            {
                id: 2,
                cle: 'DELAI_VALIDATION_CHEF',
                valeur: '48',
                description: 'Délai en heures pour la validation par le chef',
                categorie: 'Validation',
                type: 'Nombre',
                modifiable: true
            },
            {
                id: 3,
                cle: 'NOTIFICATION_EMAIL',
                valeur: 'true',
                description: 'Activer les notifications par email',
                categorie: 'Notifications',
                type: 'Booléen',
                modifiable: true
            },
            {
                id: 4,
                cle: 'SYSTEM_VERSION',
                valeur: '2.1.0',
                description: 'Version actuelle du système',
                categorie: 'Système',
                type: 'Texte',
                modifiable: false
            },
            {
                id: 5,
                cle: 'BACKUP_FREQUENCY',
                valeur: 'daily',
                description: 'Fréquence des sauvegardes',
                categorie: 'Système',
                type: 'Liste',
                modifiable: true
            }
        ];
        this.filteredConfigurations = [...this.configurations];
        this.loading = false;
    }
    applyFilters() {
        let filtered = [...this.configurations];
        if (this.searchTerm) {
            filtered = filtered.filter(config => config.cle.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                config.description.toLowerCase().includes(this.searchTerm.toLowerCase()));
        }
        if (this.categorieFilter) {
            filtered = filtered.filter(config => config.categorie === this.categorieFilter);
        }
        if (this.typeFilter) {
            filtered = filtered.filter(config => config.type === this.typeFilter);
        }
        this.filteredConfigurations = filtered;
    }
    onEditConfig(config) {
        this.editingConfig = config;
        this.configForm.patchValue({
            cle: config.cle,
            valeur: config.valeur,
            description: config.description,
            categorie: config.categorie,
            type: config.type
        });
    }
    onSaveConfig() {
        if (this.configForm.valid && this.editingConfig) {
            const updatedConfig = Object.assign(Object.assign({}, this.editingConfig), this.configForm.value);
            const index = this.configurations.findIndex(c => c.id === updatedConfig.id);
            if (index !== -1) {
                this.configurations[index] = updatedConfig;
                this.applyFilters();
                this.editingConfig = null;
                this.configForm.reset();
                this.message = 'Configuration mise à jour avec succès';
                setTimeout(() => this.message = '', 3000);
            }
        }
    }
    onCancelEdit() {
        this.editingConfig = null;
        this.configForm.reset();
    }
    onResetConfig(config) {
        if (confirm(`Êtes-vous sûr de vouloir réinitialiser la configuration "${config.cle}" ?`)) {
            // Logique de réinitialisation
            this.message = `Configuration "${config.cle}" réinitialisée`;
            setTimeout(() => this.message = '', 3000);
        }
    }
    getTypeIcon(type) {
        switch (type) {
            case 'Nombre': return 'mdi-numeric';
            case 'Texte': return 'mdi-text';
            case 'Booléen': return 'mdi-toggle-switch';
            case 'Liste': return 'mdi-format-list-bulleted';
            default: return 'mdi-cog';
        }
    }
    getCategorieColor(categorie) {
        switch (categorie) {
            case 'Congés': return 'primary';
            case 'Validation': return 'success';
            case 'Notifications': return 'info';
            case 'Système': return 'secondary';
            default: return 'light';
        }
    }
    clearFilters() {
        this.searchTerm = '';
        this.categorieFilter = '';
        this.typeFilter = '';
        this.applyFilters();
    }
    getUniqueCategories() {
        return [...new Set(this.configurations.map(c => c.categorie))];
    }
    getUniqueTypes() {
        return [...new Set(this.configurations.map(c => c.type))];
    }
    getModifiableCount() {
        return this.configurations.filter(c => c.modifiable).length;
    }
    getLockedCount() {
        return this.configurations.filter(c => !c.modifiable).length;
    }
    getCategoriesCount() {
        return this.getUniqueCategories().length;
    }
}
ConfigurationRhComponent.ɵfac = function ConfigurationRhComponent_Factory(t) { return new (t || ConfigurationRhComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rh_service__WEBPACK_IMPORTED_MODULE_0__.RhService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
ConfigurationRhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConfigurationRhComponent, selectors: [["app-configuration-rh"]], decls: 88, vars: 14, consts: [[1, "container-fluid"], [1, "row", "mb-4"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "mb-1"], [1, "text-muted", "mb-0"], [1, "btn", "btn-outline-primary", 3, "disabled", "click"], [1, "mdi", "mdi-refresh"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "row", "mb-3"], [1, "col-md-4"], [1, "search-box"], [1, "position-relative"], ["type", "text", "placeholder", "Rechercher une configuration...", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], [1, "mdi", "mdi-magnify", "search-icon"], [1, "col-md-3"], [1, "form-select", 3, "ngModel", "ngModelChange", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "btn", "btn-outline-secondary", "w-100", 3, "click"], [1, "mdi", "mdi-filter-remove"], [1, "row"], [1, "card"], [1, "card-body"], [1, "card-title"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noConfigs", ""], [1, "row", "mt-4"], [1, "card", "bg-primary", "text-white"], [1, "d-flex", "justify-content-between"], [1, "align-self-center"], [1, "mdi", "mdi-cog", "display-4"], [1, "card", "bg-success", "text-white"], [1, "mdi", "mdi-pencil", "display-4"], [1, "card", "bg-warning", "text-white"], [1, "mdi", "mdi-lock", "display-4"], [1, "card", "bg-info", "text-white"], [1, "mdi", "mdi-tag", "display-4"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], [3, "value"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "table-light"], [4, "ngFor", "ngForOf"], [1, "text-primary"], ["class", "fw-bold", 4, "ngIf"], ["type", "text", "class", "form-control form-control-sm", 3, "ngModel", "disabled", "ngModelChange", 4, "ngIf"], [1, "text-muted"], [1, "d-flex", "align-items-center"], ["class", "btn-group", "role", "group", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "fw-bold"], ["type", "text", 1, "form-control", "form-control-sm", 3, "ngModel", "disabled", "ngModelChange"], ["role", "group", 1, "btn-group"], ["title", "Modifier", 1, "btn", "btn-warning", "btn-sm", 3, "disabled", "click"], [1, "mdi", "mdi-pencil"], ["class", "btn btn-success btn-sm", "title", "Sauvegarder", 3, "click", 4, "ngIf"], ["class", "btn btn-secondary btn-sm", "title", "Annuler", 3, "click", 4, "ngIf"], ["title", "R\u00E9initialiser", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["title", "Sauvegarder", 1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "mdi", "mdi-check"], ["title", "Annuler", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "mdi", "mdi-close"], [1, "mdi", "mdi-lock"], [1, "text-center", "py-4"], [1, "mdi", "mdi-cog", "display-4", "text-muted"], [1, "text-muted", "mt-2"]], template: function ConfigurationRhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Configuration RH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Gestion des param\u00E8tres et configurations du syst\u00E8me RH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfigurationRhComponent_Template_button_click_9_listener() { return ctx.loadConfigurations(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Actualiser ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ConfigurationRhComponent_div_12_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ConfigurationRhComponent_div_13_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConfigurationRhComponent_Template_input_ngModelChange_18_listener($event) { return ctx.searchTerm = $event; })("input", function ConfigurationRhComponent_Template_input_input_18_listener() { return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConfigurationRhComponent_Template_select_ngModelChange_21_listener($event) { return ctx.categorieFilter = $event; })("change", function ConfigurationRhComponent_Template_select_change_21_listener() { return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Toutes les cat\u00E9gories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ConfigurationRhComponent_option_24_Template, 2, 2, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConfigurationRhComponent_Template_select_ngModelChange_26_listener($event) { return ctx.typeFilter = $event; })("change", function ConfigurationRhComponent_Template_select_change_26_listener() { return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Tous les types");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ConfigurationRhComponent_option_29_Template, 2, 2, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfigurationRhComponent_Template_button_click_31_listener() { return ctx.clearFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Effacer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Param\u00E8tres de Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, ConfigurationRhComponent_div_40_Template, 18, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ConfigurationRhComponent_ng_template_41_Template, 4, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h6", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Total Configurations");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "h6", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Modifiables");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "h6", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Verrouill\u00E9es");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "h6", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Cat\u00E9gories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.categorieFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getUniqueCategories());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.typeFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getUniqueTypes());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filteredConfigurations == null ? null : ctx.filteredConfigurations.length)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.configurations.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getModifiableCount());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getLockedCount());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getCategoriesCount());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: [".search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0.5rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n\n.card.bg-primary[_ngcontent-%COMP%], .card.bg-success[_ngcontent-%COMP%], .card.bg-info[_ngcontent-%COMP%], .card.bg-warning[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.card.bg-primary[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .card.bg-success[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .card.bg-info[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .card.bg-warning[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n\n.card.bg-primary[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .card.bg-success[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .card.bg-info[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .card.bg-warning[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  opacity: 0.9;\n}\n\n.card.bg-primary[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .card.bg-success[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .card.bg-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .card.bg-warning[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0;\n}\n\n.card.bg-primary[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%], .card.bg-success[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%], .card.bg-info[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%], .card.bg-warning[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  opacity: 0.8;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 2px solid #dee2e6;\n  font-weight: 600;\n  color: #495057;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.375rem;\n}\n\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n  border-radius: 0.375rem;\n}\n\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  border: 1px solid #ced4da;\n}\n\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus {\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n\n.alert[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  border: none;\n}\n\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n\n.alert.alert-success[_ngcontent-%COMP%] {\n  background-color: #d1e7dd;\n  color: #0f5132;\n}\n\n.text-center[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #6c757d;\n}\n\nh2[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 700;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n}\n\ncode[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n  font-size: 0.875rem;\n  color: #e83e8c;\n}\n\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n@keyframes pulse {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.loading[_ngcontent-%COMP%] {\n  animation: pulse 1.5s ease-in-out infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24tcmguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBSUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHlCQUFBO0FBREY7O0FBR0U7RUFDRSx5Q0FBQTtBQURKOztBQUtBOzs7O0VBSUUsWUFBQTtBQUZGOztBQUlFOzs7O0VBQ0UsZUFBQTtBQUNKOztBQUVFOzs7O0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUdKOztBQUFFOzs7O0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFLSjs7QUFGRTs7OztFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQU9KOztBQUZFO0VBQ0UseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUtKOztBQUZFO0VBQ0Usc0JBQUE7QUFJSjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBQUdGOztBQUNFO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtBQUVKOztBQUFJO0VBQ0UsZUFBQTtBQUVOOztBQUdBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBRUU7RUFDRSwyQkFBQTtBQUFKOztBQUlBO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtBQURGOztBQUdFO0VBQ0UscUJBQUE7RUFDQSxrREFBQTtBQURKOztBQUtBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FBRkY7O0FBSUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFLRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUhKOztBQVFFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFMSjs7QUFTQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVNBO0VBQ0UseUJBQUE7QUFORjs7QUFTQTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQU5GOztBQVNBO0VBQ0UsZ0JBQUE7QUFORjs7QUFVQTtFQUNFO0lBQUssVUFBQTtFQU5MO0VBT0E7SUFBTSxZQUFBO0VBSk47RUFLQTtJQUFPLFVBQUE7RUFGUDtBQUNGOztBQUlBO0VBQ0UsMENBQUE7QUFGRiIsImZpbGUiOiJjb25maWd1cmF0aW9uLXJoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1ib3gge1xyXG4gIC5zZWFyY2gtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLDAsMCwwLjE1KTtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLmJnLXByaW1hcnksXHJcbi5jYXJkLmJnLXN1Y2Nlc3MsXHJcbi5jYXJkLmJnLWluZm8sXHJcbi5jYXJkLmJnLXdhcm5pbmcge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBcclxuICAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgfVxyXG4gIFxyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgLmRpc3BsYXktNCB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgdGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gIH1cclxuICBcclxuICB0ZCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxufVxyXG5cclxuLmJhZGdlIHtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxufVxyXG5cclxuLmJ0bi1ncm91cCB7XHJcbiAgLmJ0biB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxuICAgIFxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wsIC5mb3JtLXNlbGVjdCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICBcclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzg2YjdmZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMjVyZW0gcmdiYSgxMywgMTEwLCAyNTMsIDAuMjUpO1xyXG4gIH1cclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIFxyXG4gICYuYWxlcnQtZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XHJcbiAgICBjb2xvcjogIzcyMWMyNDtcclxuICB9XHJcbiAgXHJcbiAgJi5hbGVydC1zdWNjZXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWU3ZGQ7XHJcbiAgICBjb2xvcjogIzBmNTEzMjtcclxuICB9XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgLmRpc3BsYXktNCB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICB9XHJcbn1cclxuXHJcbmgyIHtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4udGV4dC1tdXRlZCB7XHJcbiAgY29sb3I6ICM2Yzc1N2QgIWltcG9ydGFudDtcclxufVxyXG5cclxuY29kZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgY29sb3I6ICNlODNlOGM7XHJcbn1cclxuXHJcbi5mdy1ib2xkIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4vLyBBbmltYXRpb24gcG91ciBsZSBjaGFyZ2VtZW50XHJcbkBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gIDAlIHsgb3BhY2l0eTogMTsgfVxyXG4gIDUwJSB7IG9wYWNpdHk6IDAuNTsgfVxyXG4gIDEwMCUgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbi5sb2FkaW5nIHtcclxuICBhbmltYXRpb246IHB1bHNlIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 68293:
/*!*************************************************************************!*\
  !*** ./src/app/pages/espaceRh/employes-info/employes-info.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployesInfoComponent": () => (/* binding */ EmployesInfoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 86888);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/tokenservice.service */ 73565);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);







function EmployesInfoComponent_div_17_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Conseil : Essayez de vous d\u00E9connecter puis reconnecter, ou actualisez la page. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EmployesInfoComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, EmployesInfoComponent_div_17_div_3_Template, 4, 0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployesInfoComponent_div_17_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.error = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.error.includes("Session expir\u00E9e") || ctx_r0.error.includes("connect\u00E9"));
} }
function EmployesInfoComponent_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", service_r9.idService);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", service_r9.nomService, " ");
} }
function EmployesInfoComponent_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", role_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", role_r10, " ");
} }
function EmployesInfoComponent_div_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Chargement...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Chargement des donn\u00E9es des employ\u00E9s...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EmployesInfoComponent_div_108_tr_25_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employe_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](employe_r13.service.nomService);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](employe_r13.service.libService);
} }
function EmployesInfoComponent_div_108_tr_25_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Non assign\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EmployesInfoComponent_div_108_tr_25_div_17_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r21 = ctx.$implicit;
    const employe_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r20.getRoleBadgeClass(employe_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", role_r21.replace("ROLE_", ""), " ");
} }
function EmployesInfoComponent_div_108_tr_25_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployesInfoComponent_div_108_tr_25_div_17_span_1_Template, 2, 2, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employe_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", employe_r13.roles);
} }
function EmployesInfoComponent_div_108_tr_25_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Aucun r\u00F4le ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EmployesInfoComponent_div_108_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h6", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, EmployesInfoComponent_div_108_tr_25_div_14_Template, 8, 2, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, EmployesInfoComponent_div_108_tr_25_div_15_Template, 3, 0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, EmployesInfoComponent_div_108_tr_25_div_17_Template, 2, 1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, EmployesInfoComponent_div_108_tr_25_div_18_Template, 3, 0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployesInfoComponent_div_108_tr_25_Template_button_click_28_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const employe_r13 = restoredCtx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r25.voirDetails(employe_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployesInfoComponent_div_108_tr_25_Template_button_click_30_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const employe_r13 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r27.modifierEmploye(employe_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployesInfoComponent_div_108_tr_25_Template_button_click_32_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const employe_r13 = restoredCtx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r28.supprimerEmploye(employe_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employe_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx_r11.currentPage - 1) * ctx_r11.itemsPerPage + i_r14 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", employe_r13.prenom.charAt(0), "", employe_r13.nom.charAt(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.getFullName(employe_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](employe_r13.matriculeP);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", employe_r13.service);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !employe_r13.service);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", employe_r13.roles && employe_r13.roles.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !employe_r13.roles || employe_r13.roles.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", employe_r13.matriculeP, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "mailto:" + employe_r13.email, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", employe_r13.email, " ");
} }
function EmployesInfoComponent_div_108_tr_26_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Aucun employ\u00E9 ne correspond aux crit\u00E8res de recherche. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EmployesInfoComponent_div_108_tr_26_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Aucun employ\u00E9 n'est enregistr\u00E9 dans le syst\u00E8me. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EmployesInfoComponent_div_108_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Aucun employ\u00E9 trouv\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, EmployesInfoComponent_div_108_tr_26_span_7_Template, 2, 0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, EmployesInfoComponent_div_108_tr_26_span_8_Template, 2, 0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.searchText || ctx_r12.selectedService || ctx_r12.selectedRole);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r12.searchText && !ctx_r12.selectedService && !ctx_r12.selectedRole);
} }
function EmployesInfoComponent_div_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Nom complet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Service ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " R\u00F4le(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Matricule ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, EmployesInfoComponent_div_108_tr_25_Template, 34, 12, "tr", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, EmployesInfoComponent_div_108_tr_26_Template, 9, 2, "tr", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.getPaginatedEmployes())("ngForTrackBy", ctx_r4.trackByEmploye);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.filteredEmployes.length === 0 && !ctx_r4.loading);
} }
function EmployesInfoComponent_div_109_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployesInfoComponent_div_109_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r36.onPageChange(ctx_r36.currentPage - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EmployesInfoComponent_div_109_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EmployesInfoComponent_div_109_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployesInfoComponent_div_109_li_11_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const pageNum_r38 = restoredCtx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r39.onPageChange(pageNum_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageNum_r38 = ctx.$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", pageNum_r38 === ctx_r33.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](pageNum_r38);
} }
function EmployesInfoComponent_div_109_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployesInfoComponent_div_109_a_13_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r41.onPageChange(ctx_r41.currentPage + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EmployesInfoComponent_div_109_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EmployesInfoComponent_div_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, EmployesInfoComponent_div_109_a_9_Template, 2, 0, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, EmployesInfoComponent_div_109_span_10_Template, 2, 0, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, EmployesInfoComponent_div_109_li_11_Template, 3, 3, "li", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, EmployesInfoComponent_div_109_a_13_Template, 2, 0, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, EmployesInfoComponent_div_109_span_14_Template, 2, 0, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" Affichage ", (ctx_r5.currentPage - 1) * ctx_r5.itemsPerPage + 1, " \u00E0 ", ctx_r5.getMaxDisplayed(), " sur ", ctx_r5.filteredEmployes.length, " employ\u00E9(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx_r5.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.currentPage > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.getPageNumbers());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx_r5.currentPage === ctx_r5.getTotalPages());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.currentPage < ctx_r5.getTotalPages());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.currentPage === ctx_r5.getTotalPages());
} }
class EmployesInfoComponent {
    constructor(fb, http, tokenStorage) {
        this.fb = fb;
        this.http = http;
        this.tokenStorage = tokenStorage;
        this.employes = [];
        this.filteredEmployes = [];
        this.services = [];
        this.roles = [];
        this.loading = false;
        this.error = null;
        // Pagination
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.totalItems = 0;
        // Filtres
        this.selectedService = '';
        this.selectedRole = '';
        this.searchText = '';
        // Colonnes du tableau
        this.displayedColumns = ['nomComplet', 'service', 'roles', 'matricule', 'email', 'actions'];
        this.baseUrl = 'http://localhost:8089/api';
        this.searchForm = this.fb.group({
            searchText: [''],
            filterService: [''],
            filterRole: ['']
        });
    }
    ngOnInit() {
        // Vérifier d'abord l'authentification
        if (this.checkAuthentication()) {
            this.loadData();
            this.setupFormSubscriptions();
        }
    }
    /**
     * Configuration des souscriptions aux changements du formulaire
     */
    setupFormSubscriptions() {
        var _a, _b, _c;
        // Recherche en temps réel
        (_a = this.searchForm.get('searchText')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe(value => {
            this.searchText = value || '';
            this.applyFilters();
        });
        // Filtre par service
        (_b = this.searchForm.get('filterService')) === null || _b === void 0 ? void 0 : _b.valueChanges.subscribe(value => {
            this.selectedService = value || '';
            this.applyFilters();
        });
        // Filtre par rôle
        (_c = this.searchForm.get('filterRole')) === null || _c === void 0 ? void 0 : _c.valueChanges.subscribe(value => {
            this.selectedRole = value || '';
            this.applyFilters();
        });
    }
    /**
     * Headers avec token d'authentification
     */
    getHttpHeaders() {
        const token = this.tokenStorage.getToken();
        console.log('Token récupéré:', token ? 'Token présent' : 'Aucun token');
        if (!token) {
            console.warn('Aucun token d\'authentification trouvé');
        }
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': token ? `Bearer ${token}` : ''
        });
    }
    /**
     * Charge toutes les données nécessaires
     */
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            this.error = null;
            try {
                // Vérifier d'abord si l'utilisateur est connecté
                const token = this.tokenStorage.getToken();
                if (!token) {
                    throw new Error('Utilisateur non authentifié. Veuillez vous reconnecter.');
                }
                console.log('Chargement des données employés et services...');
                // Charger les employés, services et extraire les rôles
                const [employesData, servicesData] = yield Promise.all([
                    this.http.get(`${this.baseUrl}/users/all`, { headers: this.getHttpHeaders() }).toPromise(),
                    this.http.get(`${this.baseUrl}/services`, { headers: this.getHttpHeaders() }).toPromise()
                ]);
                this.employes = employesData || [];
                this.services = servicesData || [];
                // Extraire tous les rôles uniques
                const allRoles = new Set();
                this.employes.forEach(emp => {
                    if (emp.roles) {
                        emp.roles.forEach(role => {
                            // Nettoyer le nom du rôle (enlever ROLE_ si présent)
                            const cleanRole = role.replace('ROLE_', '');
                            allRoles.add(cleanRole);
                        });
                    }
                });
                this.roles = Array.from(allRoles).sort();
                // Associer les services aux employés
                this.associateServicesWithEmployees();
                // Appliquer les filtres initiaux
                this.applyFilters();
            }
            catch (error) {
                console.error('Erreur lors du chargement des données:', error);
                if (error.status === 401) {
                    this.error = 'Session expirée. Veuillez vous reconnecter.';
                    // Optionnel : rediriger vers la page de login
                    // this.router.navigate(['/auth/login']);
                }
                else if (error.status === 403) {
                    this.error = 'Accès non autorisé. Vous n\'avez pas les permissions nécessaires.';
                }
                else if (error.status === 0) {
                    this.error = 'Erreur de connexion au serveur. Vérifiez que le backend est démarré.';
                }
                else {
                    this.error = error.message || 'Erreur lors du chargement des données des employés';
                }
            }
            finally {
                this.loading = false;
            }
        });
    }
    /**
     * Associe les services aux employés (si cette info n'est pas directement fournie par l'API)
     */
    associateServicesWithEmployees() {
        // Cette méthode peut être étendue si l'API ne fournit pas directement l'info du service
        // Pour l'instant, on suppose que l'info est déjà incluse dans la réponse de l'API
    }
    /**
     * Vérifie l'état de l'authentification
     */
    checkAuthentication() {
        const token = this.tokenStorage.getToken();
        const user = this.tokenStorage.getUser();
        if (!token || !user) {
            this.error = 'Vous devez être connecté pour accéder à cette page.';
            return false;
        }
        // Vérifier si l'utilisateur a les permissions RH
        const userRoles = user.roles || [];
        const hasRhPermission = userRoles.some((role) => ['ROLE_ADMIN', 'ROLE_RH', 'ADMIN', 'RH'].includes(role));
        if (!hasRhPermission) {
            this.error = 'Vous n\'avez pas les permissions nécessaires pour accéder aux informations des employés.';
            return false;
        }
        return true;
    }
    /**
     * Applique tous les filtres actifs
     */
    applyFilters() {
        let filtered = [...this.employes];
        // Filtre par texte de recherche (nom, prénom, matricule, email)
        if (this.searchText.trim()) {
            const searchLower = this.searchText.toLowerCase();
            filtered = filtered.filter(emp => emp.nom.toLowerCase().includes(searchLower) ||
                emp.prenom.toLowerCase().includes(searchLower) ||
                emp.matriculeP.toLowerCase().includes(searchLower) ||
                emp.email.toLowerCase().includes(searchLower));
        }
        // Filtre par service
        if (this.selectedService) {
            filtered = filtered.filter(emp => emp.service && emp.service.idService.toString() === this.selectedService);
        }
        // Filtre par rôle
        if (this.selectedRole) {
            filtered = filtered.filter(emp => emp.roles && emp.roles.some(role => role.replace('ROLE_', '') === this.selectedRole));
        }
        this.filteredEmployes = filtered;
        this.totalItems = filtered.length;
        this.currentPage = 1; // Reset à la première page lors du filtrage
    }
    /**
     * Réinitialise tous les filtres
     */
    resetFilters() {
        this.searchForm.reset();
        this.searchText = '';
        this.selectedService = '';
        this.selectedRole = '';
        this.applyFilters();
    }
    /**
     * Obtient les employés pour la page actuelle
     */
    getPaginatedEmployes() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.filteredEmployes.slice(startIndex, endIndex);
    }
    /**
     * Change de page
     */
    onPageChange(page) {
        this.currentPage = page;
    }
    /**
     * Calcule le nombre total de pages
     */
    getTotalPages() {
        return Math.ceil(this.totalItems / this.itemsPerPage);
    }
    /**
     * Obtient les numéros de pages à afficher
     */
    getPageNumbers() {
        const totalPages = this.getTotalPages();
        const pages = [];
        const maxPagesToShow = 5;
        let startPage = Math.max(1, this.currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
        // Ajuster si on est près du début
        if (endPage - startPage + 1 < maxPagesToShow) {
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    }
    /**
     * Formate les rôles pour l'affichage
     */
    formatRoles(roles) {
        if (!roles || roles.length === 0)
            return 'Aucun rôle';
        return roles
            .map(role => role.replace('ROLE_', ''))
            .join(', ');
    }
    /**
     * Obtient le nom complet de l'employé
     */
    getFullName(employe) {
        return `${employe.prenom} ${employe.nom}`;
    }
    /**
     * Obtient le nom du service
     */
    getServiceName(employe) {
        return employe.service ? employe.service.nomService : 'Non assigné';
    }
    /**
     * Obtient la classe CSS pour le badge du rôle principal
     */
    getRoleBadgeClass(employe) {
        if (!employe.roles || employe.roles.length === 0)
            return 'badge-secondary';
        const mainRole = employe.roles[0].replace('ROLE_', '');
        switch (mainRole) {
            case 'ADMIN': return 'badge-danger';
            case 'RH': return 'badge-primary';
            case 'CHEF_SERVICE':
            case 'CHEF_A':
            case 'CHEF_B': return 'badge-warning';
            case 'USER': return 'badge-success';
            default: return 'badge-secondary';
        }
    }
    /**
     * Actions sur les employés
     */
    voirDetails(employe) {
        console.log('Voir détails:', employe);
        // TODO: Implémenter la modal de détails
    }
    modifierEmploye(employe) {
        console.log('Modifier employé:', employe);
        // TODO: Implémenter la modal de modification
    }
    supprimerEmploye(employe) {
        if (confirm(`Êtes-vous sûr de vouloir supprimer l'employé ${this.getFullName(employe)} ?`)) {
            console.log('Supprimer employé:', employe);
            // TODO: Implémenter la suppression
        }
    }
    /**
     * Export des données
     */
    exportToCSV() {
        const headers = ['Nom complet', 'Service', 'Rôles', 'Matricule', 'Email'];
        const data = this.filteredEmployes.map(emp => [
            this.getFullName(emp),
            this.getServiceName(emp),
            this.formatRoles(emp.roles),
            emp.matriculeP,
            emp.email
        ]);
        const csvContent = [
            headers.join(','),
            ...data.map(row => row.join(','))
        ].join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'employes-info.csv';
        link.click();
        window.URL.revokeObjectURL(url);
    }
    /**
     * Rafraîchit les données
     */
    refresh() {
        this.error = null; // Réinitialiser l'erreur
        if (this.checkAuthentication()) {
            this.loadData();
        }
    }
    /**
     * TrackBy function pour optimiser les performances du ngFor
     */
    trackByEmploye(index, employe) {
        return employe.id;
    }
    /**
     * Calcule le nombre minimum d'éléments affichés
     */
    getMaxDisplayed() {
        return Math.min(this.currentPage * this.itemsPerPage, this.filteredEmployes.length);
    }
}
EmployesInfoComponent.ɵfac = function EmployesInfoComponent_Factory(t) { return new (t || EmployesInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorage)); };
EmployesInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EmployesInfoComponent, selectors: [["app-employes-info"]], decls: 110, vars: 16, consts: [[1, "container-fluid"], [1, "row", "mb-4"], [1, "col-12"], [1, "page-title-box", "d-sm-flex", "align-items-center", "justify-content-between"], [1, "mb-sm-0", "font-size-18"], [1, "fas", "fa-users", "me-2", "text-primary"], [1, "text-muted", "mb-0"], [1, "page-title-right"], [1, "btn", "btn-success", "me-2", 3, "disabled", "click"], [1, "fas", "fa-sync-alt", "me-1"], [1, "btn", "btn-outline-primary", 3, "disabled", "click"], [1, "fas", "fa-download", "me-1"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "card", "mb-4"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "fas", "fa-filter", "me-2"], [1, "card-body"], [1, "row", "g-3", 3, "formGroup"], [1, "col-md-4"], [1, "form-label"], [1, "fas", "fa-search", "me-1"], ["type", "text", "formControlName", "searchText", "placeholder", "Nom, pr\u00E9nom, matricule ou email...", 1, "form-control"], [1, "col-md-3"], [1, "fas", "fa-building", "me-1"], ["formControlName", "filterService", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "fas", "fa-user-tag", "me-1"], ["formControlName", "filterRole", 1, "form-select"], [1, "col-md-2", "d-flex", "align-items-end"], ["type", "button", 1, "btn", "btn-outline-secondary", "w-100", 3, "click"], [1, "fas", "fa-eraser", "me-1"], [1, "col-xl-3", "col-md-6"], [1, "card", "border-primary"], [1, "d-flex"], [1, "flex-grow-1"], [1, "text-truncate", "font-size-14", "mb-2"], [1, "mb-2", "text-primary"], [1, "avatar-sm"], [1, "avatar-title", "bg-light", "text-primary", "rounded-3"], [1, "fas", "fa-users", "font-size-24"], [1, "card", "border-success"], [1, "mb-2", "text-success"], [1, "avatar-title", "bg-light", "text-success", "rounded-3"], [1, "fas", "fa-building", "font-size-24"], [1, "card", "border-info"], [1, "mb-2", "text-info"], [1, "avatar-title", "bg-light", "text-info", "rounded-3"], [1, "fas", "fa-filter", "font-size-24"], [1, "card", "border-warning"], [1, "mb-2", "text-warning"], [1, "avatar-title", "bg-light", "text-warning", "rounded-3"], [1, "fas", "fa-user-tag", "font-size-24"], [1, "card"], [1, "fas", "fa-table", "me-2"], [1, "badge", "bg-primary", "ms-2"], [1, "card-body", "p-0"], ["class", "text-center p-4", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["class", "card-footer", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "fas", "fa-exclamation-triangle", "me-2"], ["class", "mt-2", 4, "ngIf"], ["type", "button", 1, "btn-close", 3, "click"], [1, "mt-2"], [1, "fas", "fa-info-circle", "me-1"], [3, "value"], [1, "text-center", "p-4"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2", "text-muted"], [1, "table-responsive"], [1, "table", "table-striped", "table-hover", "mb-0"], [1, "table-dark"], ["scope", "col", 1, "text-center"], ["scope", "col"], [1, "fas", "fa-user", "me-1"], [1, "fas", "fa-id-card", "me-1"], [1, "fas", "fa-envelope", "me-1"], [1, "fas", "fa-cogs", "me-1"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [1, "text-center", "text-muted"], [1, "d-flex", "align-items-center"], [1, "avatar-xs", "me-3"], [1, "avatar-title", "bg-primary", "rounded-circle", "text-white"], [1, "mb-0"], [1, "text-muted", "mb-0", "small"], ["class", "d-flex align-items-center", 4, "ngIf"], ["class", "text-muted fst-italic", 4, "ngIf"], [1, "badge", "bg-light", "text-dark", "font-monospace"], [1, "text-decoration-none", 3, "href"], [1, "fas", "fa-envelope", "me-1", "text-primary"], [1, "text-center"], ["role", "group", 1, "btn-group", "btn-group-sm"], ["title", "Voir les d\u00E9tails", 1, "btn", "btn-outline-info", 3, "click"], [1, "fas", "fa-eye"], ["title", "Modifier", 1, "btn", "btn-outline-warning", 3, "click"], [1, "fas", "fa-edit"], ["title", "Supprimer", 1, "btn", "btn-outline-danger", 3, "click"], [1, "fas", "fa-trash"], [1, "fas", "fa-building", "text-primary", "me-2"], [1, "fw-bold"], [1, "text-muted"], [1, "text-muted", "fst-italic"], [1, "fas", "fa-building-slash", "me-1"], ["class", "badge me-1 mb-1", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "badge", "me-1", "mb-1", 3, "ngClass"], [1, "fas", "fa-user-slash", "me-1"], ["colspan", "7", 1, "text-center", "py-4"], [1, "fas", "fa-users-slash", "fa-3x", "mb-3", "d-block", "text-secondary"], [1, "card-footer"], [1, "row", "align-items-center"], [1, "col-sm-6"], [1, "dataTables_info"], [1, "dataTables_paginate", "paging_simple_numbers", "float-end"], [1, "pagination", "pagination-rounded", "mb-0"], [1, "page-item"], ["class", "page-link", 3, "click", 4, "ngIf"], ["class", "page-link", 4, "ngIf"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "page-link", 3, "click"], [1, "mdi", "mdi-chevron-left"], [1, "page-link"], [1, "mdi", "mdi-chevron-right"]], template: function EmployesInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Informations des Employ\u00E9s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Vue d'ensemble du personnel et de leurs affectations");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployesInfoComponent_Template_button_click_11_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Actualiser ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployesInfoComponent_Template_button_click_14_listener() { return ctx.exportToCSV(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Exporter CSV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, EmployesInfoComponent_div_17_Template, 5, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Recherche et Filtres ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "form", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Recherche ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Service ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Tous les services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, EmployesInfoComponent_option_37_Template, 2, 2, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " R\u00F4le ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Tous les r\u00F4les");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, EmployesInfoComponent_option_45_Template, 2, 2, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployesInfoComponent_Template_button_click_47_listener() { return ctx.resetFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Total Employ\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "h4", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "h4", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "R\u00E9sultats filtr\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "h4", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "R\u00F4les diff\u00E9rents");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "h4", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, " Liste des Employ\u00E9s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](107, EmployesInfoComponent_div_107_Template, 6, 0, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](108, EmployesInfoComponent_div_108_Template, 27, 3, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](109, EmployesInfoComponent_div_109_Template, 15, 12, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("fa-spin", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.services);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.employes.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.services.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.filteredEmployes.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.roles.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.filteredEmployes.length, " r\u00E9sultat(s)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filteredEmployes.length > 0 && !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass], styles: ["@charset \"UTF-8\";\n\n.page-title-box[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  border-bottom: 1px solid #f0f0f0;\n  margin-bottom: 1rem;\n}\n.avatar-xs[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\n.avatar-sm[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n}\n.avatar-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n\n.badge-primary[_ngcontent-%COMP%] {\n  background-color: #556ee6;\n}\n.badge-success[_ngcontent-%COMP%] {\n  background-color: #34c38f;\n}\n.badge-warning[_ngcontent-%COMP%] {\n  background-color: #f1b44c;\n}\n.badge-danger[_ngcontent-%COMP%] {\n  background-color: #f46a6a;\n}\n.badge-secondary[_ngcontent-%COMP%] {\n  background-color: #74788d;\n}\n.badge-info[_ngcontent-%COMP%] {\n  background-color: #50a5f1;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.375rem;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n}\n.card.border-primary[_ngcontent-%COMP%] {\n  border-color: #556ee6 !important;\n}\n.card.border-success[_ngcontent-%COMP%] {\n  border-color: #34c38f !important;\n}\n.card.border-info[_ngcontent-%COMP%] {\n  border-color: #50a5f1 !important;\n}\n.card.border-warning[_ngcontent-%COMP%] {\n  border-color: #f1b44c !important;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 0.875rem 0.75rem;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.875rem 0.75rem;\n  vertical-align: middle;\n}\n.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: rgba(85, 110, 230, 0.05);\n}\n.table-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #495057;\n  border-color: #6c757d;\n}\n\n.btn-group-sm[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.75rem;\n  border-radius: 0.25rem;\n}\n.btn-outline-info[_ngcontent-%COMP%]:hover {\n  background-color: #50a5f1;\n  border-color: #50a5f1;\n}\n.btn-outline-warning[_ngcontent-%COMP%]:hover {\n  background-color: #f1b44c;\n  border-color: #f1b44c;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background-color: #f46a6a;\n  border-color: #f46a6a;\n}\n\n.pagination-rounded[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border-radius: 50% !important;\n  margin: 0 2px;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n.pagination-rounded[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background-color: #556ee6;\n  border-color: #556ee6;\n}\n\n.spinner-border[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n}\n\n.alert[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0.375rem;\n}\n.alert-danger[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.875rem;\n  margin-bottom: 0.5rem;\n}\n.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.875rem;\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus {\n  border-color: #556ee6;\n  box-shadow: 0 0 0 0.2rem rgba(85, 110, 230, 0.25);\n}\n\n@media (max-width: 768px) {\n  .table-responsive[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n\n  .btn-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    border-radius: 0.25rem !important;\n    margin-bottom: 0.25rem;\n  }\n\n  .avatar-xs[_ngcontent-%COMP%] {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n\n  .page-title-box[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .page-title-right[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    text-align: center;\n  }\n\n  .card-body[_ngcontent-%COMP%]   .row.g-3[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n}\n@media (max-width: 576px) {\n  .btn-group-sm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 0.125rem 0.25rem;\n    font-size: 0.7rem;\n  }\n\n  .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.25rem;\n    font-size: 0.75rem;\n  }\n\n  .badge[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n\n  .avatar-title[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n}\n\n.card[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease-in-out;\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.btn[_ngcontent-%COMP%] {\n  transition: all 0.15s ease-in-out;\n}\n.alert[_ngcontent-%COMP%] {\n  animation: slideInDown 0.3s ease-out;\n}\n@keyframes slideInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.font-monospace[_ngcontent-%COMP%] {\n  font-family: \"Courier New\", monospace;\n  font-size: 0.8rem;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  color: #556ee6 !important;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #34c38f !important;\n}\n.text-info[_ngcontent-%COMP%] {\n  color: #50a5f1 !important;\n}\n.text-warning[_ngcontent-%COMP%] {\n  color: #f1b44c !important;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #f46a6a !important;\n}\n\n.btn[_ngcontent-%COMP%]:focus, .form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.sr-only[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n@media (max-width: 992px) {\n  .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .table-responsive[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n\n  .table-responsive[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border: 1px solid #ccc;\n    margin-bottom: 0.625rem;\n    border-radius: 0.25rem;\n    padding: 0.625rem;\n    background: white;\n  }\n\n  .table-responsive[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: none;\n    position: relative;\n    padding-left: 50% !important;\n    text-align: left;\n    white-space: normal;\n  }\n\n  .table-responsive[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before {\n    content: attr(data-label) \": \";\n    position: absolute;\n    left: 6px;\n    width: 45%;\n    padding-right: 10px;\n    white-space: nowrap;\n    font-weight: bold;\n    color: #556ee6;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVzLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCLG1EQUFBO0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQUNGO0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGO0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGO0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUVBLDBCQUFBO0FBQ0E7RUFDRSx5QkFBQTtBQUNGO0FBRUE7RUFDRSx5QkFBQTtBQUNGO0FBRUE7RUFDRSx5QkFBQTtBQUNGO0FBRUE7RUFDRSx5QkFBQTtBQUNGO0FBRUE7RUFDRSx5QkFBQTtBQUNGO0FBRUE7RUFDRSx5QkFBQTtBQUNGO0FBRUEsMkJBQUE7QUFDQTtFQUNFLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSxtREFBQTtBQUNGO0FBRUE7RUFDRSxnQ0FBQTtBQUNGO0FBRUE7RUFDRSxnQ0FBQTtBQUNGO0FBRUE7RUFDRSxnQ0FBQTtBQUNGO0FBRUE7RUFDRSxnQ0FBQTtBQUNGO0FBRUEsWUFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFFQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUVBO0VBQ0UsMENBQUE7QUFDRjtBQUVBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQUNGO0FBRUEscUJBQUE7QUFDQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUNGO0FBRUE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBQ0Y7QUFFQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFDRjtBQUVBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQUNGO0FBRUEsZUFBQTtBQUNBO0VBQ0UsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUFDRjtBQUVBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQUNGO0FBRUEsb0JBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFFQSxzQkFBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBRUEsNEJBQUE7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUNGO0FBRUE7O0VBRUUseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUVBOztFQUVFLHFCQUFBO0VBQ0EsaURBQUE7QUFDRjtBQUVBLHNCQUFBO0FBQ0E7RUFDRTtJQUNFLGlCQUFBO0VBQ0Y7O0VBRUE7SUFDRSxzQkFBQTtFQUNGOztFQUVBO0lBQ0UsaUNBQUE7SUFDQSxzQkFBQTtFQUNGOztFQUVBO0lBQ0UsYUFBQTtJQUNBLGNBQUE7RUFDRjs7RUFFQTtJQUNFLGtCQUFBO0VBQ0Y7O0VBRUE7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0VBQ0Y7O0VBRUE7SUFDRSxtQkFBQTtFQUNGO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UseUJBQUE7SUFDQSxpQkFBQTtFQUFGOztFQUdBOztJQUVFLHVCQUFBO0lBQ0Esa0JBQUE7RUFBRjs7RUFHQTtJQUNFLGlCQUFBO0VBQUY7O0VBR0E7SUFDRSxpQkFBQTtFQUFGO0FBQ0Y7QUFHQSxlQUFBO0FBQ0E7RUFDRSxzQ0FBQTtBQURGO0FBSUE7RUFDRSwyQkFBQTtBQURGO0FBSUE7RUFDRSxpQ0FBQTtBQURGO0FBSUE7RUFDRSxvQ0FBQTtBQURGO0FBSUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQ0FBQTtFQURGO0VBR0E7SUFDRSxVQUFBO0lBQ0EsK0JBQUE7RUFERjtBQUNGO0FBSUEsb0JBQUE7QUFDQTtFQUNFLHFDQUFBO0VBQ0EsaUJBQUE7QUFGRjtBQUtBLHVCQUFBO0FBQ0E7RUFDRSx5QkFBQTtBQUZGO0FBS0E7RUFDRSx5QkFBQTtBQUZGO0FBS0E7RUFDRSx5QkFBQTtBQUZGO0FBS0E7RUFDRSx5QkFBQTtBQUZGO0FBS0E7RUFDRSx5QkFBQTtBQUZGO0FBS0Esb0NBQUE7QUFDQTs7O0VBR0UsYUFBQTtBQUZGO0FBS0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBRkY7QUFLQSxnQ0FBQTtBQUNBO0VBQ0U7Ozs7OztJQU1FLGNBQUE7RUFGRjs7RUFLQTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7RUFGRjs7RUFLQTtJQUNFLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxzQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUFGRjs7RUFLQTtJQUNFLFlBQUE7SUFDQSxrQkFBQTtJQUNBLDRCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQUZGOztFQUtBO0lBQ0UsOEJBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtFQUZGO0FBQ0YiLCJmaWxlIjoiZW1wbG95ZXMtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIFN0eWxlcyBwb3VyIGxlIGNvbXBvc2FudCBFbXBsb3llc0luZm9Db21wb25lbnQgKi9cbi5wYWdlLXRpdGxlLWJveCB7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5hdmF0YXIteHMge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xufVxuXG4uYXZhdGFyLXNtIHtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbn1cblxuLmF2YXRhci10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuXG4vKiBCYWRnZXMgcG91ciBsZXMgcsO0bGVzICovXG4uYmFkZ2UtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTZlZTY7XG59XG5cbi5iYWRnZS1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0YzM4Zjtcbn1cblxuLmJhZGdlLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFiNDRjO1xufVxuXG4uYmFkZ2UtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NmE2YTtcbn1cblxuLmJhZGdlLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NDc4OGQ7XG59XG5cbi5iYWRnZS1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwYTVmMTtcbn1cblxuLyogQ2FydGVzIGRlIHN0YXRpc3RpcXVlcyAqL1xuLmNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMC4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcbn1cblxuLmNhcmQuYm9yZGVyLXByaW1hcnkge1xuICBib3JkZXItY29sb3I6ICM1NTZlZTYgIWltcG9ydGFudDtcbn1cblxuLmNhcmQuYm9yZGVyLXN1Y2Nlc3Mge1xuICBib3JkZXItY29sb3I6ICMzNGMzOGYgIWltcG9ydGFudDtcbn1cblxuLmNhcmQuYm9yZGVyLWluZm8ge1xuICBib3JkZXItY29sb3I6ICM1MGE1ZjEgIWltcG9ydGFudDtcbn1cblxuLmNhcmQuYm9yZGVyLXdhcm5pbmcge1xuICBib3JkZXItY29sb3I6ICNmMWI0NGMgIWltcG9ydGFudDtcbn1cblxuLyogVGFibGVhdSAqL1xuLnRhYmxlIHRoIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIHBhZGRpbmc6IDAuODc1cmVtIDAuNzVyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi50YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDAuODc1cmVtIDAuNzVyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi50YWJsZS1ob3ZlciB0Ym9keSB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODUsIDExMCwgMjMwLCAwLjA1KTtcbn1cblxuLnRhYmxlLWRhcmsgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3O1xuICBib3JkZXItY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi8qIEJvdXRvbnMgZCdhY3Rpb24gKi9cbi5idG4tZ3JvdXAtc20gPiAuYnRuIHtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cblxuLmJ0bi1vdXRsaW5lLWluZm86aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTBhNWYxO1xuICBib3JkZXItY29sb3I6ICM1MGE1ZjE7XG59XG5cbi5idG4tb3V0bGluZS13YXJuaW5nOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxYjQ0YztcbiAgYm9yZGVyLWNvbG9yOiAjZjFiNDRjO1xufVxuXG4uYnRuLW91dGxpbmUtZGFuZ2VyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NmE2YTtcbiAgYm9yZGVyLWNvbG9yOiAjZjQ2YTZhO1xufVxuXG4vKiBQYWdpbmF0aW9uICovXG4ucGFnaW5hdGlvbi1yb3VuZGVkIC5wYWdlLWxpbmsge1xuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIDJweDtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5wYWdpbmF0aW9uLXJvdW5kZWQgLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTZlZTY7XG4gIGJvcmRlci1jb2xvcjogIzU1NmVlNjtcbn1cblxuLyogTG9hZGluZyBzcGlubmVyICovXG4uc3Bpbm5lci1ib3JkZXIge1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xufVxuXG4vKiBNZXNzYWdlcyBkJ2FsZXJ0ZSAqL1xuLmFsZXJ0IHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbn1cblxuLmFsZXJ0LWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XG4gIGNvbG9yOiAjNzIxYzI0O1xufVxuXG4vKiBGb3JtdWxhaXJlIGRlIHJlY2hlcmNoZSAqL1xuLmZvcm0tbGFiZWwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi5mb3JtLWNvbnRyb2wsXG4uZm9ybS1zZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyxcbi5mb3JtLXNlbGVjdDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzU1NmVlNjtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoODUsIDExMCwgMjMwLCAwLjI1KTtcbn1cblxuLyogUmVzcG9uc2l2ZSBkZXNpZ24gKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cblxuICAuYnRuLWdyb3VwIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmJ0bi1ncm91cCAuYnRuIHtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgfVxuXG4gIC5hdmF0YXIteHMge1xuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gIH1cblxuICAucGFnZS10aXRsZS1ib3gge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5wYWdlLXRpdGxlLXJpZ2h0IHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5jYXJkLWJvZHkgLnJvdy5nLTMgPiBkaXYge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuYnRuLWdyb3VwLXNtIC5idG4ge1xuICAgIHBhZGRpbmc6IDAuMTI1cmVtIDAuMjVyZW07XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gIH1cblxuICAudGFibGUgdGQsXG4udGFibGUgdGgge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgfVxuXG4gIC5iYWRnZSB7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG4gIH1cblxuICAuYXZhdGFyLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgfVxufVxuLyogQW5pbWF0aW9ucyAqL1xuLmNhcmQge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5cbi5idG4ge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5hbGVydCB7XG4gIGFuaW1hdGlvbjogc2xpZGVJbkRvd24gMC4zcyBlYXNlLW91dDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZUluRG93biB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLyogQmFkZ2UgbWF0cmljdWxlICovXG4uZm9udC1tb25vc3BhY2Uge1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4vKiBJbmRpY2F0ZXVycyBkJ8OpdGF0ICovXG4udGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6ICM1NTZlZTYgIWltcG9ydGFudDtcbn1cblxuLnRleHQtc3VjY2VzcyB7XG4gIGNvbG9yOiAjMzRjMzhmICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWluZm8ge1xuICBjb2xvcjogIzUwYTVmMSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC13YXJuaW5nIHtcbiAgY29sb3I6ICNmMWI0NGMgIWltcG9ydGFudDtcbn1cblxuLnRleHQtZGFuZ2VyIHtcbiAgY29sb3I6ICNmNDZhNmEgIWltcG9ydGFudDtcbn1cblxuLyogQW3DqWxpb3JhdGlvbiBkZSBsJ2FjY2Vzc2liaWxpdMOpICovXG4uYnRuOmZvY3VzLFxuLmZvcm0tY29udHJvbDpmb2N1cyxcbi5mb3JtLXNlbGVjdDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zci1vbmx5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAtMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXI6IDA7XG59XG5cbi8qIFRhYmxlcyByZXNwb25zaXZlcyBhdmFuY8OpZXMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAudGFibGUtcmVzcG9uc2l2ZSB0YWJsZSxcbi50YWJsZS1yZXNwb25zaXZlIHRoZWFkLFxuLnRhYmxlLXJlc3BvbnNpdmUgdGJvZHksXG4udGFibGUtcmVzcG9uc2l2ZSB0aCxcbi50YWJsZS1yZXNwb25zaXZlIHRkLFxuLnRhYmxlLXJlc3BvbnNpdmUgdHIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnRhYmxlLXJlc3BvbnNpdmUgdGhlYWQgdHIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC05OTk5cHg7XG4gICAgbGVmdDogLTk5OTlweDtcbiAgfVxuXG4gIC50YWJsZS1yZXNwb25zaXZlIHRyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgcGFkZGluZzogMC42MjVyZW07XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cblxuICAudGFibGUtcmVzcG9uc2l2ZSB0ZCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwJSAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgfVxuXG4gIC50YWJsZS1yZXNwb25zaXZlIHRkOmJlZm9yZSB7XG4gICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKSBcIjogXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDZweDtcbiAgICB3aWR0aDogNDUlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzU1NmVlNjtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 75457:
/*!*****************************************************************!*\
  !*** ./src/app/pages/espaceRh/espace-rh/espace-rh.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EspaceRhComponent": () => (/* binding */ EspaceRhComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _rh_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rh.service */ 23155);
/* harmony import */ var src_app_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/tokenservice.service */ 73565);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ 19746);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 24352);









function EspaceRhComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Mise \u00E0 jour demande");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EspaceRhComponent_ng_template_2_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const modal_r3 = restoredCtx.$implicit; return modal_r3.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Date demande");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Date d\u00E9but ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Date fin");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "R\u00E9ponse Rh");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Oui");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Non");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EspaceRhComponent_ng_template_2_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.updateDemande(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.demandeForm);
} }
function EspaceRhComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h5", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EspaceRhComponent_div_11_Template_a_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const data_r7 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3); return ctx_r9.openModal(_r0, data_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", data_r7.nom, " ", data_r7.prenom, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r7.typeConge.nomTypeconge);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r7.dateCng);
} }
const _c0 = function (a1) { return { itemsPerPage: 9, currentPage: a1 }; };
class EspaceRhComponent {
    constructor(rhServ, token, fb, modalService) {
        this.rhServ = rhServ;
        this.token = token;
        this.fb = fb;
        this.modalService = modalService;
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Projects' }, { label: 'Projects Grid', active: true }];
        this.getDemandeChef();
        this.demandeForm = this.fb.group({
            idConge: [""],
            dateCng: [""],
            dateDebut: [""],
            dateFin: [""],
            repRh: [""],
            statut: [""]
        });
    }
    getDemandeChef() {
        this.rhServ.getDemandeRh().subscribe((data) => {
            this.listDemande = data;
            console.log(this.listDemande);
        });
    }
    openModal(targetModal, user) {
        this.modalService.open(targetModal, {
            centered: true,
            backdrop: 'static'
        });
        this.demandeForm.patchValue({
            idConge: user.idConge,
            dateCng: user.dateCng,
            dateDebut: user.dateDebut,
            dateFin: user.dateFin,
            repRh: user.repRh,
            statut: user.statut,
        });
        // this.lib=this.userForm.get('lib_demande').value
        // console.log(this.lib)
    }
    updateDemande() {
        console.log(this.demandeForm.value);
        this.rhServ.UpdateDemandeRh(this.demandeForm.value)
            .subscribe({
            next: (res) => {
                if (res) {
                    if (res) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Votre Reponse à été bien enregistrer !',
                            showConfirmButton: false,
                            timer: 2000
                        });
                        // this.toastr.success(' agence updated!', 'update effectuée avec succés.');
                        //  this.userForm.reset();
                        this.getDemandeChef();
                        this.modalService.dismissAll();
                    }
                    else {
                        // this.toastr.error('Echec update', 'Problème de suppression.');
                    }
                }
            },
        });
    }
}
EspaceRhComponent.ɵfac = function EspaceRhComponent_Factory(t) { return new (t || EspaceRhComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_rh_service__WEBPACK_IMPORTED_MODULE_1__.RhService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorage), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal)); };
EspaceRhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EspaceRhComponent, selectors: [["app-espace-rh"]], decls: 18, vars: 10, consts: [[1, "container-fluid"], [1, "row"], ["role", "document"], ["content", ""], [1, "card-body", "p-4"], [1, "search-box"], [1, "text-muted"], [1, "position-relative"], ["type", "text", "placeholder", "Rechercher ..", 1, "form-control", "rounded", "bg-light", "border-light", 3, "ngModel", "ngModelChange"], [1, "mdi", "mdi-magnify", "search-icon"], ["class", "col-xl-2 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-12"], [1, "text-center", "my-3"], [3, "pageChange"], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup"], [1, "mb-3"], [1, "control-label"], ["placeholder", "Date demande", "type", "text", "name", "name", "formControlName", "dateCng", "readonly", "", 1, "form-control"], [1, "col-md-6"], ["placeholder", "Date d\u00E9but", "type", "text", "name", "email", "formControlName", "dateDebut", "readonly", "", 1, "form-control"], ["placeholder", "Date fin", "type", "text", "name", "email", "formControlName", "dateFin", "readonly", "", 1, "form-control"], ["aria-label", "Default select example", "formControlName", "repRh", 1, "form-select"], ["value", "O"], ["value", "N"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-success", 3, "click"], [1, "col-xl-2", "col-sm-4"], [1, "card", "text-center"], [1, "card-body"], [1, "font-size-15", "mb-0"], ["href", "javascript: void(0);", 1, "text-dark"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], [1, "flex-fill"], ["href", "javascript: void(0);", "ngbTooltip", "Visualiser demande", 3, "click"], [1, "bx", "bx-user-circle"]], template: function EspaceRhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, EspaceRhComponent_ng_template_2_Template, 33, 1, "ng-template", 2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Rechercher");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function EspaceRhComponent_Template_input_ngModelChange_9_listener($event) { return ctx.term = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, EspaceRhComponent_div_11_Template, 15, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "pagination-controls", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function EspaceRhComponent_Template_pagination_controls_pageChange_17_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.term);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](12, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](13, 5, ctx.listDemande, ctx.term), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c0, ctx.p)));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginationControlsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipe], styles: [".search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n}\n\n.card[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  border: 1px solid #e9ecef;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n\n.contact-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6c757d;\n  transition: color 0.3s ease;\n}\n\n.contact-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #007bff;\n}\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.375rem 0.75rem;\n}\n\n.avatar-xs[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\n\n.avatar-xs[_ngcontent-%COMP%]   .avatar-title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzcGFjZS1yaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFHRTtFQUNFLHdDQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFNRTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtBQUhKOztBQUtJO0VBQ0UsY0FBQTtBQUhOOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQUxGOztBQVFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFMRjs7QUFPRTtFQUNFLGtCQUFBO0FBTEoiLCJmaWxlIjoiZXNwYWNlLXJoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1ib3gge1xyXG4gIC5zZWFyY2gtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWN0LWxpbmtzIHtcclxuICBhIHtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYmFkZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xyXG59XHJcblxyXG4uYXZhdGFyLXhzIHtcclxuICB3aWR0aDogMnJlbTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgXHJcbiAgLmF2YXRhci10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 5361:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/espaceRh/gestion-service/gestion-service.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GestionServiceComponent": () => (/* binding */ GestionServiceComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _rh_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rh.service */ 23155);
/* harmony import */ var src_app_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/tokenservice.service */ 73565);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);










function GestionServiceComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GestionServiceComponent_div_2_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r5.router.navigate(["/account/login"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Se connecter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GestionServiceComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GestionServiceComponent_div_2_div_3_Template, 4, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMsg, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.errorMsg.includes("Session expir\u00E9e"));
} }
function GestionServiceComponent_tr_27_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GestionServiceComponent_tr_27_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29); return ctx_r10.openModalUpdate(_r2, i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GestionServiceComponent_tr_27_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GestionServiceComponent_tr_27_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.confirm(i_r7.idService); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GestionServiceComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, GestionServiceComponent_tr_27_button_11_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, GestionServiceComponent_tr_27_button_12_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r7.cod_serv);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r7.lib_serv);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r7.matriculeChef);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r7.repChef == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r7.repChef == null);
} }
function GestionServiceComponent_ng_template_28_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r17.formService.get("matriculeChef").errors == null ? null : ctx_r17.formService.get("matriculeChef").errors.serverError, " ");
} }
function GestionServiceComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Editer Cong\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GestionServiceComponent_ng_template_28_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const modal_r16 = restoredCtx.$implicit; return modal_r16.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Code service");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Libelle service");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Matricule chef");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, GestionServiceComponent_ng_template_28_div_22_Template, 2, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GestionServiceComponent_ng_template_28_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r20.ajoutservice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Enregistrer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r3.formService);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ctx_r3.formService.get("matriculeChef").errors && ctx_r3.formService.get("matriculeChef").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.formService.get("matriculeChef").errors);
} }
class GestionServiceComponent {
    constructor(modalService, formBuilder, congeService, token, router) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.congeService = congeService;
        this.token = token;
        this.router = router;
        this.dateCng = new Date();
        this.loading = false;
        this.errorMsg = '';
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Congé' }, { label: 'Gestion des congés', active: true }];
        // Vérifier l'authentification avant de charger les données
        const token = this.token.getToken();
        if (!token) {
            this.errorMsg = 'Session expirée. Redirection vers la page de connexion...';
            setTimeout(() => {
                this.router.navigate(['/account/login']);
            }, 2000);
            return;
        }
        this.getService();
        this.formService = this.formBuilder.group({
            idService: [''],
            cod_serv: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            lib_serv: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            matriculeChef: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        });
    }
    openModalAjout(content) {
        this.modalService.open(content, { size: 'lg', centered: true });
        this.formService.reset();
    }
    openModalUpdate(content, conge) {
        this.modalService.open(content, { size: 'lg', centered: true });
        this.formService.patchValue({
            idService: conge.idService,
            cod_serv: conge.cod_serv,
            lib_serv: conge.lib_serv,
            matriculeChef: conge.matriculeChef,
        });
        console.log(this.formService.value);
    }
    getService() {
        this.loading = true;
        this.errorMsg = '';
        console.log(this.token.getUser().matriculeP);
        this.congeService.getService().subscribe({
            next: (data) => {
                this.typeCng = data;
                this.loading = false;
            },
            error: (error) => {
                console.error('Erreur lors du chargement des services:', error);
                this.loading = false;
                if (error.status === 401) {
                    this.errorMsg = 'Session expirée. Redirection vers la page de connexion...';
                    setTimeout(() => {
                        this.router.navigate(['/account/login']);
                    }, 2000);
                }
                else {
                    this.errorMsg = 'Erreur lors du chargement des services. Veuillez réessayer.';
                }
            }
        });
    }
    // In gestion-service.component.ts - Update the ajoutservice() method
    ajoutservice() {
        console.log(this.formService.value);
        this.congeService.addService(this.formService.value).subscribe((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                position: 'top-end',
                icon: 'success',
                title: 'Service ajouté avec succès',
                showConfirmButton: false,
                timer: 3000
            });
            this.modalService.dismissAll();
            this.formService.reset();
            this.getService();
        }, (error) => {
            var _a;
            // Handle validation errors from backend
            const errorMessage = ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) || 'Erreur inconnue';
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: 'error',
                title: 'Erreur de validation',
                text: errorMessage,
                confirmButtonColor: '#34c38f'
            });
        });
    }
    confirm(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#34c38f',
            cancelButtonColor: '#f46a6a',
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.value) {
                this.congeService.DeleteService(id).subscribe((data) => {
                    this.getService();
                });
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
        this.getService();
    }
    deleteConge(id) {
        console.log(id);
        this.congeService.DeleteService(id).subscribe((data) => {
            this.getService();
            console.log("ok" + data);
            if (data == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Vous ne pouvez pas supprimer votre demande ',
                    showConfirmButton: false,
                    timer: 3000
                });
            }
            else {
                this.congeService.DeleteService(id).subscribe((data) => {
                    this.getService();
                });
            }
        });
    }
}
GestionServiceComponent.ɵfac = function GestionServiceComponent_Factory(t) { return new (t || GestionServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_rh_service__WEBPACK_IMPORTED_MODULE_1__.RhService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorage), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
GestionServiceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: GestionServiceComponent, selectors: [["app-gestion-service"]], decls: 30, vars: 3, consts: [[1, "container-fluid"], ["title", "Editer Service", 3, "breadcrumbItems"], ["class", "alert alert-warning", 4, "ngIf"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "text-end"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "table-responsive"], [1, "table", "mb-0"], [4, "ngFor", "ngForOf"], ["role", "document"], ["content", ""], [1, "alert", "alert-warning"], [1, "mdi", "mdi-alert-circle"], ["class", "mt-2", 4, "ngIf"], [1, "mt-2"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "mdi", "mdi-login"], ["scope", "row"], [1, "button-items"], ["type", "button", "class", "btn btn-warning", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-danger", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], [1, "bx", "bx-edit", "font-size-16", "align-items-center-2"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "bx", "bx-trash", "font-size-16", "align-items-center-2"], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup"], [1, "col-lg-2"], [1, "mb-3"], ["for", "email", 1, "form-label"], ["type", "text", "id", "name", "placeholder", "Code service", "formControlName", "cod_serv", 1, "form-control", "form-control-sm"], [1, "col-lg-3"], ["type", "text", "id", "name", "placeholder", "Libelle service", "formControlName", "lib_serv", 1, "form-control", "form-control-sm"], ["for", "password", 1, "form-label"], ["type", "text", "id", "name", "placeholder", "Matricule chef", "formControlName", "matriculeChef", 1, "form-control", "form-control-sm"], ["class", "invalid-feedback", 4, "ngIf"], [1, "invalid-feedback"]], template: function GestionServiceComponent_Template(rf, ctx) { if (rf & 1) {
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GestionServiceComponent_div_2_Template, 4, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Editer Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GestionServiceComponent_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29); return ctx.openModalAjout(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Ajout");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Matricule");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Date d\u00E9but");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Date reprise");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, GestionServiceComponent_tr_27_Template, 13, 5, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, GestionServiceComponent_ng_template_28_Template, 26, 4, "ng-template", 13, 14, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.errorMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.typeCng);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__.PagetitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName], styles: [".card-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 2px solid #dee2e6;\n  font-weight: 600;\n  color: #495057;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.button-items[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n  border-radius: 0.375rem;\n}\n\n.button-items[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  border: 1px solid #ced4da;\n}\n\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus {\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n\n.form-control.is-invalid[_ngcontent-%COMP%], .form-select.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n\n.form-control.is-invalid[_ngcontent-%COMP%]:focus, .form-select.is-invalid[_ngcontent-%COMP%]:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  font-weight: 500;\n}\n\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #0b5ed7;\n  border-color: #0a58ca;\n}\n\n.btn.btn-warning[_ngcontent-%COMP%] {\n  background-color: #ffc107;\n  border-color: #ffc107;\n  color: #000;\n}\n\n.btn.btn-warning[_ngcontent-%COMP%]:hover {\n  background-color: #ffca2c;\n  border-color: #ffc720;\n}\n\n.btn.btn-danger[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn.btn-danger[_ngcontent-%COMP%]:hover {\n  background-color: #bb2d3b;\n  border-color: #b02a37;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n\n.text-end[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlc3Rpb24tc2VydmljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUdFO0VBQ0UseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdFO0VBQ0Usc0JBQUE7QUFESjs7QUFNRTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7QUFISjs7QUFLSTtFQUNFLGVBQUE7QUFITjs7QUFRQTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7QUFMRjs7QUFPRTtFQUNFLHFCQUFBO0VBQ0Esa0RBQUE7QUFMSjs7QUFRRTtFQUNFLHFCQUFBO0FBTko7O0FBUUk7RUFDRSxxQkFBQTtFQUNBLGlEQUFBO0FBTk47O0FBV0E7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FBUkY7O0FBVUU7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBUko7O0FBVUk7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBUk47O0FBWUU7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQVZKOztBQVlJO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQVZOOztBQWNFO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQVpKOztBQWNJO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQVpOOztBQWlCQTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7QUFkRjs7QUFpQkE7RUFDRSxtQkFBQTtBQWRGIiwiZmlsZSI6Imdlc3Rpb24tc2VydmljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXRpdGxlIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gIHRoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RlZTJlNjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICB9XHJcbiAgXHJcbiAgdGQge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbn1cclxuXHJcbi5idXR0b24taXRlbXMge1xyXG4gIC5idG4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgICBcclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wsIC5mb3JtLXNlbGVjdCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICBcclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzg2YjdmZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMjVyZW0gcmdiYSgxMywgMTEwLCAyNTMsIDAuMjUpO1xyXG4gIH1cclxuICBcclxuICAmLmlzLWludmFsaWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjI1cmVtIHJnYmEoMjIwLCA1MywgNjksIDAuMjUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBcclxuICAmLmJ0bi1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDZlZmQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMwZDZlZmQ7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGI1ZWQ3O1xyXG4gICAgICBib3JkZXItY29sb3I6ICMwYTU4Y2E7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmYzEwNztcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2EyYztcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZmZjNzIwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAmLmJ0bi1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcclxuICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYjJkM2I7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2IwMmEzNztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi50ZXh0LWVuZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 27942:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/espaceRh/gestion-type-conge/gestion-type-conge.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GestionTypeCongeComponent": () => (/* binding */ GestionTypeCongeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _rh_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rh.service */ 23155);
/* harmony import */ var src_app_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/tokenservice.service */ 73565);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);










function GestionTypeCongeComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GestionTypeCongeComponent_div_2_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r5.router.navigate(["/account/login"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Se connecter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GestionTypeCongeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GestionTypeCongeComponent_div_2_div_3_Template, 4, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMsg, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.errorMsg.includes("Session expir\u00E9e"));
} }
function GestionTypeCongeComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GestionTypeCongeComponent_tr_25_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const i_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](27); return ctx_r8.openModalUpdate(_r2, i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GestionTypeCongeComponent_tr_25_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const i_r7 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.confirm(i_r7.idType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r7.nomTypeconge);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r7.maxAllowedDays);
} }
function GestionTypeCongeComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Editer Cong\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GestionTypeCongeComponent_ng_template_26_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const modal_r11 = restoredCtx.$implicit; return modal_r11.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Type Conge");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Jours Maximum Autoris\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GestionTypeCongeComponent_ng_template_26_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.ajoutservice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Enregistrer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r3.formType);
} }
class GestionTypeCongeComponent {
    constructor(modalService, formBuilder, congeService, token, router) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.congeService = congeService;
        this.token = token;
        this.router = router;
        this.dateCng = new Date();
        this.loading = false;
        this.errorMsg = '';
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Congé' }, { label: 'Gestion des congés', active: true }];
        // Vérifier l'authentification avant de charger les données
        const token = this.token.getToken();
        if (!token) {
            this.errorMsg = 'Session expirée. Redirection vers la page de connexion...';
            setTimeout(() => {
                this.router.navigate(['/account/login']);
            }, 2000);
            return;
        }
        this.getService();
        this.formType = this.formBuilder.group({
            idType: [''],
            nomTypeconge: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            maxAllowedDays: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(1)]],
        });
    }
    openModalAjout(content) {
        this.modalService.open(content, { size: 'lg', centered: true });
        this.formType.reset();
    }
    openModalUpdate(content, conge) {
        this.modalService.open(content, { size: 'lg', centered: true });
        this.formType.patchValue({
            idType: conge.idType,
            nomTypeconge: conge.nomTypeconge,
            maxAllowedDays: conge.maxAllowedDays,
        });
        console.log(this.formType.value);
    }
    getService() {
        this.loading = true;
        this.errorMsg = '';
        this.congeService.getTypeConge().subscribe({
            next: (data) => {
                this.typeCng = data;
                this.loading = false;
            },
            error: (error) => {
                console.error('Erreur lors du chargement des types de congés:', error);
                this.loading = false;
                if (error.status === 401) {
                    this.errorMsg = 'Session expirée. Redirection vers la page de connexion...';
                    setTimeout(() => {
                        this.router.navigate(['/account/login']);
                    }, 2000);
                }
                else {
                    this.errorMsg = 'Erreur lors du chargement des types de congés. Veuillez réessayer.';
                }
            }
        });
    }
    ajoutservice() {
        console.log(this.formType.value);
        this.congeService.addTypeConge(this.formType.value).subscribe((data) => {
            if (data) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Conge ajouté avec succés ',
                    showConfirmButton: false,
                    timer: 3000
                });
                this.modalService.dismissAll();
                this.formType.reset();
                this.getService();
            }
            else {
            }
        });
    }
    confirm(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#34c38f',
            cancelButtonColor: '#f46a6a',
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.value) {
                this.congeService.DeleteType(id).subscribe((data) => {
                    this.getService();
                });
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
        this.getService();
    }
    deleteConge(id) {
        console.log(id);
        this.congeService.DeleteType(id).subscribe((data) => {
            this.getService();
            console.log("ok" + data);
            if (data == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Vous ne pouvez pas supprimer votre demande ',
                    showConfirmButton: false,
                    timer: 3000
                });
            }
            else {
            }
        });
    }
}
GestionTypeCongeComponent.ɵfac = function GestionTypeCongeComponent_Factory(t) { return new (t || GestionTypeCongeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_rh_service__WEBPACK_IMPORTED_MODULE_1__.RhService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorage), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
GestionTypeCongeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: GestionTypeCongeComponent, selectors: [["app-gestion-type-conge"]], decls: 28, vars: 3, consts: [[1, "container-fluid"], ["title", "Gestion Types cong\u00E9s", 3, "breadcrumbItems"], ["class", "alert alert-warning", 4, "ngIf"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "text-end"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "table-responsive"], [1, "table", "mb-0"], [4, "ngFor", "ngForOf"], ["role", "document"], ["content", ""], [1, "alert", "alert-warning"], [1, "mdi", "mdi-alert-circle"], ["class", "mt-2", 4, "ngIf"], [1, "mt-2"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "mdi", "mdi-login"], ["scope", "row"], [1, "button-items"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], [1, "bx", "bx-edit", "font-size-16", "align-items-center-2"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "bx", "bx-trash", "font-size-16", "align-items-center-2"], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup"], [1, "mb-3"], ["for", "email", 1, "form-label"], ["type", "text", "id", "name", "placeholder", "Type Conge", "formControlName", "nomTypeconge", 1, "form-control", "form-control-sm"], [1, "col-md-6", "mb-3"], [1, "form-label"], ["type", "number", "formControlName", "maxAllowedDays", "min", "1", "max", "365", "placeholder", "Nombre de jours maximum", 1, "form-control"]], template: function GestionTypeCongeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GestionTypeCongeComponent_div_2_Template, 4, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Editer Type cong\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GestionTypeCongeComponent_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](27); return ctx.openModalAjout(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Ajout");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Jours Max");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Nom Type conge");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, GestionTypeCongeComponent_tr_25_Template, 13, 2, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, GestionTypeCongeComponent_ng_template_26_Template, 18, 1, "ng-template", 13, 14, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.errorMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.typeCng);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__.PagetitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxValidator], styles: [".card-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 2px solid #dee2e6;\n  font-weight: 600;\n  color: #495057;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.button-items[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n  border-radius: 0.375rem;\n}\n\n.button-items[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  border: 1px solid #ced4da;\n}\n\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus {\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  font-weight: 500;\n}\n\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #0b5ed7;\n  border-color: #0a58ca;\n}\n\n.btn.btn-warning[_ngcontent-%COMP%] {\n  background-color: #ffc107;\n  border-color: #ffc107;\n  color: #000;\n}\n\n.btn.btn-warning[_ngcontent-%COMP%]:hover {\n  background-color: #ffca2c;\n  border-color: #ffc720;\n}\n\n.btn.btn-danger[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn.btn-danger[_ngcontent-%COMP%]:hover {\n  background-color: #bb2d3b;\n  border-color: #b02a37;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n\n.text-end[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlc3Rpb24tdHlwZS1jb25nZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUdFO0VBQ0UseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdFO0VBQ0Usc0JBQUE7QUFESjs7QUFNRTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7QUFISjs7QUFLSTtFQUNFLGVBQUE7QUFITjs7QUFRQTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7QUFMRjs7QUFPRTtFQUNFLHFCQUFBO0VBQ0Esa0RBQUE7QUFMSjs7QUFTQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFORjs7QUFRRTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFOSjs7QUFRSTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFOTjs7QUFVRTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBUko7O0FBVUk7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBUk47O0FBWUU7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBVko7O0FBWUk7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBVk47O0FBZUE7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0FBWkY7O0FBZUE7RUFDRSxtQkFBQTtBQVpGIiwiZmlsZSI6Imdlc3Rpb24tdHlwZS1jb25nZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXRpdGxlIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gIHRoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RlZTJlNjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICB9XHJcbiAgXHJcbiAgdGQge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbn1cclxuXHJcbi5idXR0b24taXRlbXMge1xyXG4gIC5idG4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgICBcclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wsIC5mb3JtLXNlbGVjdCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICBcclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzg2YjdmZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMjVyZW0gcmdiYSgxMywgMTEwLCAyNTMsIDAuMjUpO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBcclxuICAmLmJ0bi1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDZlZmQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMwZDZlZmQ7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGI1ZWQ3O1xyXG4gICAgICBib3JkZXItY29sb3I6ICMwYTU4Y2E7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmYzEwNztcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2EyYztcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZmZjNzIwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAmLmJ0bi1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcclxuICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYjJkM2I7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2IwMmEzNztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi50ZXh0LWVuZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 18486:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/espaceRh/gestionutilisateur/gestionutilisateur.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GestionutilisateurComponent": () => (/* binding */ GestionutilisateurComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _rh_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rh.service */ 23155);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ 19746);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 24352);








function GestionutilisateurComponent_ng_template_2_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Niveau");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GestionutilisateurComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Changement de r\u00F4le");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GestionutilisateurComponent_ng_template_2_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const modal_r7 = restoredCtx.$implicit; return modal_r7.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function GestionutilisateurComponent_ng_template_2_Template_select_change_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.roleForm.patchValue({ niveau: null }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "RH");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "CHEF");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "UTILISATEUR");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, GestionutilisateurComponent_ng_template_2_div_18_Template, 10, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GestionutilisateurComponent_ng_template_2_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.updatRole(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Enregistrer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.roleForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.roleForm.get("role_id").value === "1");
} }
function GestionutilisateurComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Changement de mot de passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GestionutilisateurComponent_ng_template_4_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const modal_r13 = restoredCtx.$implicit; return modal_r13.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Nouveau mot de passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GestionutilisateurComponent_ng_template_4_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.updatePass(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Enregistrer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r3.userForm);
} }
function GestionutilisateurComponent_ng_template_6_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chef_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", chef_r20.matriculeP);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", chef_r20.prenom, " ", chef_r20.nom, " (", chef_r20.matriculeP, ") ");
} }
function GestionutilisateurComponent_ng_template_6_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", i_r21.idService);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", i_r21.lib_serv, " ");
} }
function GestionutilisateurComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Utilisateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GestionutilisateurComponent_ng_template_6_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const modal_r17 = restoredCtx.$implicit; return modal_r17.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Matricule");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Prenom");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "numTel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Responsable");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, GestionutilisateurComponent_ng_template_6_option_34_Template, 2, 4, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function GestionutilisateurComponent_ng_template_6_Template_select_change_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r24.onServiceChange($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, GestionutilisateurComponent_ng_template_6_option_39_Template, 2, 2, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GestionutilisateurComponent_ng_template_6_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r25.updateUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " Enregistrer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r5.userForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !((tmp_1_0 = ctx_r5.userForm.get("serv.idService")) == null ? null : tmp_1_0.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.chefsInService);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.serv);
} }
function GestionutilisateurComponent_tr_40_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r31.nomRole);
} }
function GestionutilisateurComponent_tr_40_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r26.niveau);
} }
function GestionutilisateurComponent_tr_40_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r26.serv.lib_serv);
} }
function GestionutilisateurComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " User ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, GestionutilisateurComponent_tr_40_div_12_Template, 3, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, GestionutilisateurComponent_tr_40_div_14_Template, 3, 1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, GestionutilisateurComponent_tr_40_div_16_Template, 3, 1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ul", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GestionutilisateurComponent_tr_40_Template_a_click_24_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35); const item_r26 = restoredCtx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3); return ctx_r34.openModalRole(_r0, item_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GestionutilisateurComponent_tr_40_Template_a_click_27_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35); const item_r26 = restoredCtx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5); return ctx_r36.openModalupdatePass(_r2, item_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GestionutilisateurComponent_tr_40_Template_a_click_30_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35); const item_r26 = restoredCtx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7); return ctx_r37.openModalModif(_r4, item_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", item_r26.prenom, " ", item_r26.nom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r26.matriculeP);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r26.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r26.niveau);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r26.serv.lib_serv);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r26.responsable == null ? null : item_r26.responsable.matriculeP);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r26.matriculeP, " ");
} }
const _c0 = function (a1) { return { itemsPerPage: 10, currentPage: a1 }; };
class GestionutilisateurComponent {
    constructor(adminServ, formBuilder, modalService) {
        this.adminServ = adminServ;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.chefsInService = [];
    }
    ngOnInit() {
        this.userForm = this.formBuilder.group({
            idEmploye: [''],
            // roles: this.formBuilder.array([
            // ]),
            password: [''],
            departement: [''],
            email: [''],
            matriculeP: [''],
            nom: [''],
            numTel: [''],
            poste: [''],
            prenom: [''],
            responsable: this.formBuilder.group({
                matriculeP: ['']
            }),
            serv: this.formBuilder.group({
                idService: ['']
            }),
            roles: this.formBuilder.array([
                this.formBuilder.group({
                    id: ['']
                })
            ])
        });
        this.modifForm = this.formBuilder.group({
            departement: [''],
            email: [''],
            idEmploye: [''],
            matriculeP: [''],
            nom: [''],
            numTel: [''],
            password: [''],
            poste: [''],
            prenom: [''],
            responsable: this.formBuilder.group({
                matriculeP: ['']
            }),
            serv: this.formBuilder.group({
                idService: ['']
            })
        });
        this.roleForm = this.formBuilder.group({
            user_id: [''],
            role_id: [],
            niveau: [null]
        });
        this.getUtilisateur();
        this.getService();
    }
    updateDemande() {
        console.log(this.userForm.value);
        this.adminServ.UpdateRole(this.userForm.value)
            .subscribe({
            next: (res) => {
                if (res) {
                    if (res) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'La demande est mise à jour avec succès !',
                            showConfirmButton: false,
                            timer: 2000
                        });
                        // this.toastr.success(' agence updated!', 'update effectuée avec succés.');
                        //  this.userForm.reset();
                        this.getUtilisateur();
                        this.modalService.dismissAll();
                    }
                    else {
                        // this.toastr.error('Echec update', 'Problème de suppression.');
                    }
                }
            },
        });
    }
    updatePass() {
        this.adminServ.UpdatePss(this.userForm.value)
            .subscribe({
            next: (res) => {
                if (res) {
                    if (res) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Mot de passe mis à jour avec succès !',
                            showConfirmButton: false,
                            timer: 2000
                        });
                        // this.toastr.success(' agence updated!', 'update effectuée avec succés.');
                        //  this.userForm.reset();
                        this.getUtilisateur();
                        this.modalService.dismissAll();
                    }
                    else {
                        // this.toastr.error('Echec update', 'Problème de suppression.');
                    }
                }
            },
        });
    }
    updatRole() {
        if (this.roleForm.invalid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: 'error',
                title: 'Erreur',
                text: 'Veuillez remplir tous les champs obligatoires'
            });
            return;
        }
        const formData = this.roleForm.value;
        // If not CHEF, set niveau to null
        if (formData.role_id !== "1") {
            formData.niveau = null;
        }
        // Debugging: Log request data
        console.log("Données envoyées au backend:", formData);
        this.adminServ.UpdateRole(formData).subscribe({
            next: (res) => {
                console.log("Réponse du backend:", res);
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Rôle mis à jour avec succès!',
                    showConfirmButton: false,
                    timer: 2000
                });
                this.getUtilisateur();
                this.modalService.dismissAll();
            },
            error: (err) => {
                console.error("Erreur de mise à jour du rôle:", err);
            }
        });
    }
    openModal(targetModal, user) {
        this.modalService.open(targetModal, {
            centered: true,
            backdrop: 'static'
        });
        this.userForm.patchValue({
            idEmploye: user.idEmploye,
            roles: user.roles.id,
        });
        this.lib = this.userForm.get('idEmploye').value;
        console.log(this.lib);
    }
    openModalRole(targetModal, user) {
        var _a;
        this.modalService.open(targetModal, {
            centered: true,
            backdrop: 'static'
        });
        // Initialize niveau if user is CHEF
        const isChef = user.roles.some(r => r.id === 1);
        const roleId = isChef ? '1' : String((_a = user.roles[0]) === null || _a === void 0 ? void 0 : _a.id);
        this.roleForm.patchValue({
            user_id: user.idEmploye,
            role_id: roleId,
            niveau: isChef ? user.niveau : null
        });
    }
    openModalupdatePass(targetModal, user) {
        this.modalService.open(targetModal, {
            centered: true,
            backdrop: 'static'
        });
        this.userForm.patchValue({
            idEmploye: user.idEmploye,
            password: user.password,
        });
        this.lib = this.userForm.get('idEmploye').value;
        console.log(this.lib);
    }
    get roles() {
        return this.userForm.get('roles');
    }
    openModalModif(targetModal, user) {
        var _a, _b;
        this.modalService.open(targetModal, {
            centered: true,
            backdrop: 'static'
        });
        const role = this.roles.at(0).get('id');
        role.patchValue(user.roles[0].id);
        this.userForm.patchValue({
            departement: user.departement,
            email: user.email,
            idEmploye: user.idEmploye,
            matriculeP: user.matriculeP,
            nom: user.nom,
            numTel: user.numTel,
            password: user.password,
            poste: user.poste,
            responsable: {
                matriculeP: (_a = user.responsable) === null || _a === void 0 ? void 0 : _a.matriculeP // Patch nested field
            },
            prenom: user.prenom,
            serv: {
                idService: user.serv.idService
            },
        });
        if ((_b = user.serv) === null || _b === void 0 ? void 0 : _b.idService) {
            this.onServiceChange(user.serv.idService);
        }
        this.lib = this.userForm.get('matriculeP').value;
        console.log(this.lib);
        console.log(this.userForm.value);
    }
    getUtilisateur() {
        this.adminServ.GetUser().subscribe((data) => {
            this.list = data;
            console.log("********************", this.list);
        }, (error) => {
            console.log(error);
        });
    }
    getService() {
        this.adminServ.getService().subscribe((data) => {
            this.serv = data;
            console.log("********************", this.serv);
        }, (error) => {
            console.log(error);
        });
    }
    updateUser() {
        const formData = Object.assign({}, this.userForm.value);
        console.log("Data sent:", this.userForm.value);
        this.adminServ.Updatepers(this.userForm.value).subscribe(data => {
            if (data) {
                if (data) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Utilisateur est modifier avec succées !',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    // this.toastr.success(' agence updated!', 'update effectuée avec succés.');
                    //  this.userForm.reset();
                    this.getUtilisateur();
                    this.modalService.dismissAll();
                }
                else {
                    // this.toastr.error('Echec update', 'Problème de suppression.');
                }
            }
        });
    }
    // In gestionutilisateur.component.ts
    onServiceChange(serviceId) {
        if (serviceId) {
            this.adminServ.getChefsByService(serviceId).subscribe((chefs) => {
                this.chefsInService = chefs;
                // Auto-select if only one chef exists
                if (chefs.length === 1) {
                    this.userForm.patchValue({
                        nomResponsable: `${chefs[0].prenom} ${chefs[0].nom}`
                    });
                }
            }, (error) => console.error('Error fetching chefs:', error));
        }
        else {
            this.chefsInService = [];
        }
    }
}
GestionutilisateurComponent.ɵfac = function GestionutilisateurComponent_Factory(t) { return new (t || GestionutilisateurComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_rh_service__WEBPACK_IMPORTED_MODULE_1__.RhService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal)); };
GestionutilisateurComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GestionutilisateurComponent, selectors: [["app-gestionutilisateur"]], decls: 47, vars: 10, consts: [[1, "container-fluid"], [1, "row"], ["role", "document"], ["content", ""], ["contentt", ""], ["modif", ""], [1, "card-body", "p-4"], [1, "search-box"], [1, "position-relative"], ["type", "text", "placeholder", "Rechercher ..", 1, "form-control", "rounded", "bg-light", "border-light", 3, "ngModel", "ngModelChange"], [1, "mdi", "mdi-magnify", "search-icon"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "table-responsive"], [1, "table", "align-middle", "table-nowrap", "table-hover"], [1, "table-light"], ["scope", "col", 2, "width", "70px"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "text-center", "my-3"], [3, "pageChange"], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup"], [1, "mb-3"], [1, "control-label"], ["aria-label", "Default select example", "formControlName", "role_id", 1, "form-select", 3, "change"], ["value", "2"], ["value", "1"], ["value", "3"], ["class", "mb-3", 4, "ngIf"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-success", 2, "float", "right", 3, "click"], ["formControlName", "niveau", 1, "form-select"], ["type", "text", "formControlName", "password", 1, "form-control"], ["type", "text", "formControlName", "email", 1, "form-control"], ["type", "text", "formControlName", "matriculeP", 1, "form-control"], ["type", "text", "formControlName", "nom", 1, "form-control"], ["type", "text", "formControlName", "prenom", 1, "form-control"], ["type", "text", "formControlName", "numTel", 1, "form-control"], ["formControlName", "responsable.matriculeP", 1, "form-select", 3, "disabled"], [3, "value", 4, "ngFor", "ngForOf"], ["formGroupName", "serv", 1, "mb-3"], ["aria-label", "Default select example", "formControlName", "idService", 1, "form-select", 3, "change"], [3, "value"], [1, "avatar-xs"], [1, "avatar-title", "rounded-circle"], [1, "font-size-14", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark"], [4, "ngIf"], [1, "list-inline", "font-size-20", "contact-links", "mb-0"], [1, "list-inline-item", "px-2"], ["href", "javascript: void(0);", "ngbTooltip", "Mettre \u00E0 jour r\u00F4le", 3, "click"], [1, "bx", "bx-shield-alt"], ["href", "javascript: void(0);", "ngbTooltip", "Mettre \u00E0 jour mot de passe", 3, "click"], [1, "bx", "bx-key"], ["href", "javascript: void(0);", "ngbTooltip", "Mettre \u00E0 jour utilisateur", 3, "click"], [1, "bx", "bx-user-circle"], ["href", "javascript: void(0);", 1, "badge", "badge-soft-primary", "font-size-11", "m-1"], [1, "badge", "badge-soft-info", "font-size-11"]], template: function GestionutilisateurComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, GestionutilisateurComponent_ng_template_2_Template, 21, 2, "ng-template", 2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, GestionutilisateurComponent_ng_template_4_Template, 14, 1, "ng-template", 2, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, GestionutilisateurComponent_ng_template_6_Template, 42, 4, "ng-template", 2, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function GestionutilisateurComponent_Template_input_ngModelChange_11_listener($event) { return ctx.term = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "thead", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Nom et prenom");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Matricule");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Niveau");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Responsable");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, GestionutilisateurComponent_tr_40_Template, 32, 8, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](41, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](42, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "pagination-controls", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChange", function GestionutilisateurComponent_Template_pagination_controls_pageChange_46_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.term);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](41, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](42, 5, ctx.list, ctx.term), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, ctx.p)));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginationControlsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTooltip], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipe], styles: [".search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 2px solid #dee2e6;\n  font-weight: 600;\n  color: #495057;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.375rem 0.75rem;\n}\n\n.avatar-xs[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\n\n.avatar-xs[_ngcontent-%COMP%]   .avatar-title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n\n.contact-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6c757d;\n  transition: color 0.3s ease;\n  padding: 0.25rem;\n}\n\n.contact-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #007bff;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n\n.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  border: 1px solid #ced4da;\n}\n\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus {\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  font-weight: 500;\n}\n\n.btn.btn-success[_ngcontent-%COMP%] {\n  background-color: #198754;\n  border-color: #198754;\n}\n\n.btn.btn-success[_ngcontent-%COMP%]:hover {\n  background-color: #157347;\n  border-color: #146c43;\n}\n\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #0b5ed7;\n  border-color: #0a58ca;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlc3Rpb251dGlsaXNhdGV1ci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFLRTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFLRTtFQUNFLHNCQUFBO0FBSEo7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBSkY7O0FBT0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUpGOztBQU1FO0VBQ0Usa0JBQUE7QUFKSjs7QUFTRTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBTko7O0FBUUk7RUFDRSxjQUFBO0FBTk47O0FBV0E7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0FBUkY7O0FBV0E7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0FBUkY7O0FBVUU7RUFDRSxxQkFBQTtFQUNBLGtEQUFBO0FBUko7O0FBWUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBV0U7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBVEo7O0FBV0k7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBVE47O0FBYUU7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBWEo7O0FBYUk7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBWE4iLCJmaWxlIjoiZ2VzdGlvbnV0aWxpc2F0ZXVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1ib3gge1xyXG4gIC5zZWFyY2gtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgfVxyXG59XHJcblxyXG4udGFibGUge1xyXG4gIHRoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RlZTJlNjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICB9XHJcbiAgXHJcbiAgdGQge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbn1cclxuXHJcbi5hdmF0YXIteHMge1xyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBcclxuICAuYXZhdGFyLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWN0LWxpbmtzIHtcclxuICBhIHtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xyXG4gICAgcGFkZGluZzogMC4yNXJlbTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCwgLmZvcm0tc2VsZWN0IHtcclxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gIFxyXG4gICY6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjODZiN2ZlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4yNXJlbSByZ2JhKDEzLCAxMTAsIDI1MywgMC4yNSk7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIFxyXG4gICYuYnRuLXN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5ODc1NDtcclxuICAgIGJvcmRlci1jb2xvcjogIzE5ODc1NDtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTczNDc7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzE0NmM0MztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgJi5idG4tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ2ZWZkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMGQ2ZWZkO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBiNWVkNztcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjMGE1OGNhO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 7664:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/espaceRh/historique-decisions/historique-decisions.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoriqueDecisionsComponent": () => (/* binding */ HistoriqueDecisionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _rh_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rh.service */ 23155);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/tokenservice.service */ 73565);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);






function HistoriqueDecisionsComponent_div_38_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HistoriqueDecisionsComponent_div_38_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r9.router.navigate(["/account/login"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Se connecter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriqueDecisionsComponent_div_38_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HistoriqueDecisionsComponent_div_38_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r11.router.navigate(["/account/login"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Se connecter pour les vraies donn\u00E9es ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriqueDecisionsComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HistoriqueDecisionsComponent_div_38_div_3_Template, 4, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, HistoriqueDecisionsComponent_div_38_div_4_Template, 4, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMsg, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.errorMsg.includes("Session expir\u00E9e"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.errorMsg.includes("d\u00E9monstration"));
} }
function HistoriqueDecisionsComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.message);
} }
function HistoriqueDecisionsComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Approuv\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Refus\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "En attente");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.totalItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.getApprovedCount());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.getRejectedCount());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.getPendingCount());
} }
function HistoriqueDecisionsComponent_div_41_tr_25_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const decision_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 2, decision_r14.dateDecision, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 5, decision_r14.dateDecision, "HH:mm"));
} }
function HistoriqueDecisionsComponent_div_41_tr_25_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriqueDecisionsComponent_div_41_tr_25_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const decision_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](decision_r14.decisionBy);
} }
function HistoriqueDecisionsComponent_div_41_tr_25_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriqueDecisionsComponent_div_41_tr_25_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const decision_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", decision_r14.commentaire);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", decision_r14.commentaire, " ");
} }
function HistoriqueDecisionsComponent_div_41_tr_25_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriqueDecisionsComponent_div_41_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, HistoriqueDecisionsComponent_div_41_tr_25_div_32_Template, 8, 8, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, HistoriqueDecisionsComponent_div_41_tr_25_span_33_Template, 2, 0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, HistoriqueDecisionsComponent_div_41_tr_25_span_35_Template, 2, 1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, HistoriqueDecisionsComponent_div_41_tr_25_span_36_Template, 2, 0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, HistoriqueDecisionsComponent_div_41_tr_25_span_38_Template, 2, 2, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, HistoriqueDecisionsComponent_div_41_tr_25_span_39_Template, 2, 0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const decision_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](decision_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", decision_r14.personnel == null ? null : decision_r14.personnel.prenom, " ", decision_r14.personnel == null ? null : decision_r14.personnel.nom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](decision_r14.personnel == null ? null : decision_r14.personnel.matriculeP);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](14, 25, decision_r14.dateDeb, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("au ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](18, 28, decision_r14.dateFin, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", decision_r14.nbJours, " jours");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("badge bg-", ctx_r13.getBadgeClass(decision_r14.repChefsNiveau1), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r13.getStatusText(decision_r14.repChefsNiveau1), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("badge bg-", ctx_r13.getBadgeClass(decision_r14.repChefsNiveau2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r13.getStatusText(decision_r14.repChefsNiveau2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("badge bg-", ctx_r13.getBadgeClass(decision_r14.repRh), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r13.getStatusText(decision_r14.repRh), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", decision_r14.dateDecision);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !decision_r14.dateDecision);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", decision_r14.decisionBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !decision_r14.decisionBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", decision_r14.commentaire);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !decision_r14.commentaire);
} }
function HistoriqueDecisionsComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "thead", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Employ\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "P\u00E9riode");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Jours");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Chef Niveau 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Chef Niveau 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "D\u00E9cision RH");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Date d\u00E9cision");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "D\u00E9cid\u00E9 par");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Commentaire");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, HistoriqueDecisionsComponent_div_41_tr_25_Template, 40, 31, "tr", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.getPaginatedDecisions());
} }
function HistoriqueDecisionsComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Aucune d\u00E9cision trouv\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriqueDecisionsComponent_div_44_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HistoriqueDecisionsComponent_div_44_li_10_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const i_r26 = restoredCtx.index; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r27.onPageChange(i_r26 + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r26 = ctx.index;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r24.currentPage === i_r26 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r26 + 1);
} }
function HistoriqueDecisionsComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HistoriqueDecisionsComponent_div_44_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r29.onPageChange(ctx_r29.currentPage - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Pr\u00E9c\u00E9dent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, HistoriqueDecisionsComponent_div_44_li_10_Template, 3, 3, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HistoriqueDecisionsComponent_div_44_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r31.onPageChange(ctx_r31.currentPage + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Suivant");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" Affichage de ", ctx_r6.getStartIndex(), " \u00E0 ", ctx_r6.getEndIndex(), " sur ", ctx_r6.totalItems, " r\u00E9sultats ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("disabled", ctx_r6.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.getPageNumbers());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("disabled", ctx_r6.currentPage === ctx_r6.getTotalPages());
} }
class HistoriqueDecisionsComponent {
    constructor(rhService, fb, router, tokenStorage) {
        this.rhService = rhService;
        this.fb = fb;
        this.router = router;
        this.tokenStorage = tokenStorage;
        this.decisions = [];
        this.filteredDecisions = [];
        this.loading = false;
        this.message = '';
        this.errorMsg = '';
        this.searchTerm = '';
        this.statusFilter = '';
        this.dateFrom = '';
        this.dateTo = '';
        // Pagination
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.totalItems = 0;
        this.filterForm = this.fb.group({
            searchTerm: [''],
            statusFilter: [''],
            dateFrom: [''],
            dateTo: ['']
        });
    }
    ngOnInit() {
        // Vérifier l'authentification avant de charger les données
        const token = this.tokenStorage.getToken();
        if (!token) {
            this.errorMsg = 'Session expirée. Redirection vers la page de connexion...';
            setTimeout(() => {
                this.router.navigate(['/account/login']);
            }, 2000);
            return;
        }
        this.loadDecisions();
        this.setupFilterSubscription();
    }
    setupFilterSubscription() {
        this.filterForm.valueChanges.subscribe(() => {
            this.applyFilters();
        });
    }
    loadDecisions() {
        this.loading = true;
        this.errorMsg = '';
        this.rhService.getHistoriqueDecisions().subscribe({
            next: (data) => {
                this.decisions = data || [];
                this.applyFilters();
                this.loading = false;
            },
            error: (error) => {
                console.error('Erreur lors du chargement des décisions:', error);
                this.loading = false;
                if (error.status === 401) {
                    this.errorMsg = 'Session expirée. Redirection vers la page de connexion...';
                    setTimeout(() => {
                        this.router.navigate(['/account/login']);
                    }, 2000);
                }
                else {
                    // En cas d'erreur, charger des données de démonstration
                    this.loadDemoData();
                }
            }
        });
    }
    loadDemoData() {
        this.errorMsg = 'Mode démonstration - Données d\'exemple affichées';
        // Données de démonstration pour l'historique des décisions
        this.decisions = [
            {
                id: 1,
                personnel: {
                    nom: 'Dupont',
                    prenom: 'Marie',
                    matriculeP: 'EMP001'
                },
                dateDeb: '2024-12-01',
                dateFin: '2024-12-05',
                nbJours: 5,
                repChefsNiveau1: 'APPROUVE',
                repChefsNiveau2: 'APPROUVE',
                repRh: 'APPROUVE',
                motif: 'Congés annuels',
                dateDecision: '2024-11-28T10:30:00',
                decisionBy: 'Admin RH',
                commentaire: 'Demande approuvée'
            },
            {
                id: 2,
                personnel: {
                    nom: 'Martin',
                    prenom: 'Jean',
                    matriculeP: 'EMP002'
                },
                dateDeb: '2024-12-10',
                dateFin: '2024-12-12',
                nbJours: 3,
                repChefsNiveau1: 'APPROUVE',
                repChefsNiveau2: 'APPROUVE',
                repRh: 'REFUSE',
                motif: 'Congés maladie',
                dateDecision: '2024-12-05T14:15:00',
                decisionBy: 'Admin RH',
                commentaire: 'Justificatif médical manquant'
            },
            {
                id: 3,
                personnel: {
                    nom: 'Bernard',
                    prenom: 'Sophie',
                    matriculeP: 'EMP003'
                },
                dateDeb: '2024-12-15',
                dateFin: '2024-12-20',
                nbJours: 6,
                repChefsNiveau1: 'APPROUVE',
                repChefsNiveau2: 'EN_ATTENTE',
                repRh: 'EN_ATTENTE',
                motif: 'Congés maternité',
                dateDecision: null,
                decisionBy: null,
                commentaire: null
            }
        ];
        this.applyFilters();
    }
    applyFilters() {
        var _a, _b, _c, _d, _e;
        let filtered = [...this.decisions];
        const searchTerm = ((_b = (_a = this.filterForm.get('searchTerm')) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.toLowerCase()) || '';
        const statusFilter = ((_c = this.filterForm.get('statusFilter')) === null || _c === void 0 ? void 0 : _c.value) || '';
        const dateFrom = ((_d = this.filterForm.get('dateFrom')) === null || _d === void 0 ? void 0 : _d.value) || '';
        const dateTo = ((_e = this.filterForm.get('dateTo')) === null || _e === void 0 ? void 0 : _e.value) || '';
        // Filtre par recherche
        if (searchTerm) {
            filtered = filtered.filter(decision => {
                var _a, _b, _c, _d, _e, _f;
                return ((_b = (_a = decision.personnel) === null || _a === void 0 ? void 0 : _a.nom) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(searchTerm)) ||
                    ((_d = (_c = decision.personnel) === null || _c === void 0 ? void 0 : _c.prenom) === null || _d === void 0 ? void 0 : _d.toLowerCase().includes(searchTerm)) ||
                    ((_f = (_e = decision.personnel) === null || _e === void 0 ? void 0 : _e.matriculeP) === null || _f === void 0 ? void 0 : _f.toLowerCase().includes(searchTerm));
            });
        }
        // Filtre par statut
        if (statusFilter) {
            filtered = filtered.filter(decision => decision.repRh === statusFilter);
        }
        // Filtre par date
        if (dateFrom) {
            filtered = filtered.filter(decision => new Date(decision.dateDeb || '') >= new Date(dateFrom));
        }
        if (dateTo) {
            filtered = filtered.filter(decision => new Date(decision.dateFin || '') <= new Date(dateTo));
        }
        this.filteredDecisions = filtered;
        this.totalItems = filtered.length;
        this.currentPage = 1;
    }
    getBadgeClass(status) {
        switch (status) {
            case 'APPROUVE': return 'success';
            case 'REFUSE': return 'danger';
            case 'EN_ATTENTE': return 'warning';
            default: return 'secondary';
        }
    }
    getStatusText(status) {
        switch (status) {
            case 'APPROUVE': return 'Approuvé';
            case 'REFUSE': return 'Refusé';
            case 'EN_ATTENTE': return 'En attente';
            default: return 'Non défini';
        }
    }
    getPaginatedDecisions() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.filteredDecisions.slice(startIndex, endIndex);
    }
    onPageChange(page) {
        this.currentPage = page;
    }
    getTotalPages() {
        return Math.ceil(this.totalItems / this.itemsPerPage);
    }
    getApprovedCount() {
        return this.filteredDecisions.filter(d => d.repRh === 'APPROUVE').length;
    }
    getRejectedCount() {
        return this.filteredDecisions.filter(d => d.repRh === 'REFUSE').length;
    }
    getPendingCount() {
        return this.filteredDecisions.filter(d => d.repRh === 'EN_ATTENTE').length;
    }
    getStartIndex() {
        return (this.currentPage - 1) * this.itemsPerPage + 1;
    }
    getEndIndex() {
        return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
    }
    getPageNumbers() {
        const totalPages = this.getTotalPages();
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    clearFilters() {
        this.filterForm.reset();
        this.applyFilters();
    }
    exportToExcel() {
        // Implémentation future pour l'export Excel
        this.message = 'Fonctionnalité d\'export en cours de développement';
        setTimeout(() => this.message = '', 3000);
    }
    refresh() {
        this.loadDecisions();
    }
}
HistoriqueDecisionsComponent.ɵfac = function HistoriqueDecisionsComponent_Factory(t) { return new (t || HistoriqueDecisionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_rh_service__WEBPACK_IMPORTED_MODULE_0__.RhService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorage)); };
HistoriqueDecisionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HistoriqueDecisionsComponent, selectors: [["app-historique-decisions"]], decls: 45, vars: 8, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [3, "formGroup"], [1, "row", "mb-3"], [1, "col-md-3"], [1, "search-box"], [1, "position-relative"], ["type", "text", "placeholder", "Rechercher par nom ou matricule...", "formControlName", "searchTerm", 1, "form-control"], [1, "mdi", "mdi-magnify", "search-icon"], [1, "col-md-2"], ["formControlName", "statusFilter", 1, "form-select"], ["value", ""], ["value", "APPROUVE"], ["value", "REFUSE"], ["value", "EN_ATTENTE"], ["type", "date", "placeholder", "Date d\u00E9but", "formControlName", "dateFrom", 1, "form-control"], ["type", "date", "placeholder", "Date fin", "formControlName", "dateTo", 1, "form-control"], [1, "col-md-3", "text-end"], [1, "btn", "btn-outline-secondary", "me-2", 3, "click"], [1, "mdi", "mdi-filter-remove"], [1, "btn", "btn-primary", "me-2", 3, "disabled", "click"], [1, "mdi", "mdi-refresh"], [1, "btn", "btn-success", 3, "click"], [1, "mdi", "mdi-download"], ["class", "alert alert-warning", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "row mb-3", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["emptyDecisions", ""], ["class", "row", 4, "ngIf"], [1, "alert", "alert-warning"], [1, "mdi", "mdi-alert-circle"], ["class", "mt-2", 4, "ngIf"], [1, "mt-2"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "mdi", "mdi-login"], [1, "alert", "alert-success"], [1, "card", "bg-primary", "text-white"], [1, "d-flex", "justify-content-between"], [1, "card-title"], [1, "align-self-center"], [1, "mdi", "mdi-file-document-outline", "display-4"], [1, "card", "bg-success", "text-white"], [1, "mdi", "mdi-check-circle", "display-4"], [1, "card", "bg-danger", "text-white"], [1, "mdi", "mdi-close-circle", "display-4"], [1, "card", "bg-warning", "text-white"], [1, "mdi", "mdi-clock-outline", "display-4"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "table-light"], [4, "ngFor", "ngForOf"], [1, "text-muted"], [1, "badge", "bg-info"], [4, "ngIf"], ["class", "text-muted", 4, "ngIf"], ["class", "text-truncate d-inline-block", "style", "max-width: 150px;", 3, "title", 4, "ngIf"], [1, "text-truncate", "d-inline-block", 2, "max-width", "150px", 3, "title"], [1, "text-center", "py-4"], [1, "mdi", "mdi-file-document-outline", "display-4", "text-muted"], [1, "text-muted", "mt-2"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"]], template: function HistoriqueDecisionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Historique des D\u00E9cisions RH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Tous les statuts");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Approuv\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Refus\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "En attente");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HistoriqueDecisionsComponent_Template_button_click_29_listener() { return ctx.clearFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Effacer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HistoriqueDecisionsComponent_Template_button_click_32_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Rafra\u00EEchir ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HistoriqueDecisionsComponent_Template_button_click_35_listener() { return ctx.exportToExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, HistoriqueDecisionsComponent_div_38_Template, 5, 3, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, HistoriqueDecisionsComponent_div_39_Template, 2, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, HistoriqueDecisionsComponent_div_40_Template, 45, 4, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, HistoriqueDecisionsComponent_div_41_Template, 26, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, HistoriqueDecisionsComponent_ng_template_42_Template, 4, 0, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, HistoriqueDecisionsComponent_div_44_Template, 14, 8, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteredDecisions.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteredDecisions == null ? null : ctx.filteredDecisions.length)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.totalItems > ctx.itemsPerPage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], styles: [".card-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n}\n\n.search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 2px solid #dee2e6;\n  font-weight: 600;\n  color: #495057;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.375rem 0.75rem;\n  min-width: 70px;\n  text-align: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  font-weight: 500;\n}\n\n.btn.btn-outline-secondary[_ngcontent-%COMP%] {\n  color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: #fff;\n}\n\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #0b5ed7;\n  border-color: #0a58ca;\n}\n\n.btn.btn-success[_ngcontent-%COMP%] {\n  background-color: #198754;\n  border-color: #198754;\n}\n\n.btn.btn-success[_ngcontent-%COMP%]:hover {\n  background-color: #157347;\n  border-color: #146c43;\n}\n\n.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  border: 1px solid #ced4da;\n}\n\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus {\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n\n.alert[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  border: none;\n}\n\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n\n.alert.alert-success[_ngcontent-%COMP%] {\n  background-color: #d1e7dd;\n  color: #0f5132;\n}\n\n.text-center[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #6c757d;\n}\n\n.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  margin: 0 0.125rem;\n  border: 1px solid #dee2e6;\n  color: #0d6efd;\n}\n\n.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n\n.pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n\n.pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: #6c757d;\n  background-color: #fff;\n  border-color: #dee2e6;\n}\n\n.card.bg-primary[_ngcontent-%COMP%], .card.bg-success[_ngcontent-%COMP%], .card.bg-danger[_ngcontent-%COMP%], .card.bg-warning[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0.5rem;\n}\n\n.card.bg-primary[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .card.bg-success[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .card.bg-danger[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .card.bg-warning[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n\n.card.bg-primary[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .card.bg-success[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .card.bg-danger[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .card.bg-warning[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\n\n.card.bg-primary[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .card.bg-success[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .card.bg-danger[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .card.bg-warning[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0;\n}\n\n.card.bg-primary[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%], .card.bg-success[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%], .card.bg-danger[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%], .card.bg-warning[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcmlxdWUtZGVjaXNpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBS0U7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRko7O0FBS0U7RUFDRSxzQkFBQTtBQUhKOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU9BO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQUpGOztBQU1FO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBSko7O0FBTUk7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUpOOztBQVFFO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQU5KOztBQVFJO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQU5OOztBQVVFO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQVJKOztBQVVJO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQVJOOztBQWFBO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtBQVZGOztBQVlFO0VBQ0UscUJBQUE7RUFDQSxrREFBQTtBQVZKOztBQWNBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FBWEY7O0FBYUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFYSjs7QUFjRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQVpKOztBQWlCRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBZEo7O0FBbUJFO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQWhCSjs7QUFrQkk7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBaEJOOztBQW9CRTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFsQko7O0FBcUJFO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFuQko7O0FBdUJBOzs7O0VBSUUsWUFBQTtFQUNBLHFCQUFBO0FBcEJGOztBQXNCRTs7OztFQUNFLGVBQUE7QUFqQko7O0FBb0JFOzs7O0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBZko7O0FBa0JFOzs7O0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFiSjs7QUFnQkU7Ozs7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFYSiIsImZpbGUiOiJoaXN0b3JpcXVlLWRlY2lzaW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXRpdGxlIHsgXG4gIGZvbnQtd2VpZ2h0OiA2MDA7IFxuICBjb2xvcjogIzQ5NTA1Nztcbn1cblxuLnNlYXJjaC1ib3gge1xuICAuc2VhcmNoLWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgY29sb3I6ICM2Yzc1N2Q7XG4gIH1cbn1cblxuLnRhYmxlIHtcbiAgdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZWUyZTY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzQ5NTA1NztcbiAgfVxuICBcbiAgdGQge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbn1cblxuLmJhZGdlIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBtaW4td2lkdGg6IDcwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBcbiAgJi5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xuICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgIGJvcmRlci1jb2xvcjogIzZjNzU3ZDtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XG4gICAgICBib3JkZXItY29sb3I6ICM2Yzc1N2Q7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cbiAgXG4gICYuYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDZlZmQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjMGQ2ZWZkO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBiNWVkNztcbiAgICAgIGJvcmRlci1jb2xvcjogIzBhNThjYTtcbiAgICB9XG4gIH1cbiAgXG4gICYuYnRuLXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTg3NTQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjMTk4NzU0O1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE1NzM0NztcbiAgICAgIGJvcmRlci1jb2xvcjogIzE0NmM0MztcbiAgICB9XG4gIH1cbn1cblxuLmZvcm0tY29udHJvbCwgLmZvcm0tc2VsZWN0IHtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIFxuICAmOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICM4NmI3ZmU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4yNXJlbSByZ2JhKDEzLCAxMTAsIDI1MywgMC4yNSk7XG4gIH1cbn1cblxuLmFsZXJ0IHtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgXG4gICYuYWxlcnQtZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xuICAgIGNvbG9yOiAjNzIxYzI0O1xuICB9XG4gIFxuICAmLmFsZXJ0LXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWU3ZGQ7XG4gICAgY29sb3I6ICMwZjUxMzI7XG4gIH1cbn1cblxuLnRleHQtY2VudGVyIHtcbiAgLmRpc3BsYXktNCB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGNvbG9yOiAjNmM3NTdkO1xuICB9XG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgLnBhZ2UtbGluayB7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gICAgbWFyZ2luOiAwIDAuMTI1cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgY29sb3I6ICMwZDZlZmQ7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xuICAgIH1cbiAgfVxuICBcbiAgLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkNmVmZDtcbiAgICBib3JkZXItY29sb3I6ICMwZDZlZmQ7XG4gIH1cbiAgXG4gIC5wYWdlLWl0ZW0uZGlzYWJsZWQgLnBhZ2UtbGluayB7XG4gICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICNkZWUyZTY7XG4gIH1cbn1cblxuLmNhcmQuYmctcHJpbWFyeSxcbi5jYXJkLmJnLXN1Y2Nlc3MsXG4uY2FyZC5iZy1kYW5nZXIsXG4uY2FyZC5iZy13YXJuaW5nIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIFxuICAuY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cbiAgXG4gIC5jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB9XG4gIFxuICBoNCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gIC5kaXNwbGF5LTQge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 38025:
/*!*************************************************************************!*\
  !*** ./src/app/pages/espaceRh/historique-rh/historique-rh.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoriqueRhComponent": () => (/* binding */ HistoriqueRhComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _rh_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rh.service */ 23155);
/* harmony import */ var src_app_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/tokenservice.service */ 73565);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ 19746);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 24352);








function HistoriqueRhComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", i_r2 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", data_r1.nom, " ", data_r1.prenom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r1.typeConge.nomTypeconge);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r1.dateCng);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r1.dateDebut);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r1.dateFin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r1.repRh);
} }
const _c0 = function (a1) { return { itemsPerPage: 9, currentPage: a1 }; };
class HistoriqueRhComponent {
    constructor(rhServ, token, fb, modalService) {
        this.rhServ = rhServ;
        this.token = token;
        this.fb = fb;
        this.modalService = modalService;
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Projects' }, { label: 'Projects Grid', active: true }];
        this.getDemandeChef();
        this.demandeForm = this.fb.group({
            idConge: [""],
            dateCng: [""],
            dateDebut: [""],
            dateFin: [""],
            repRh: [""],
            statut: [""]
        });
    }
    getDemandeChef() {
        this.rhServ.getDemandeRhNotNull().subscribe((data) => {
            this.listDemande = data;
            console.log(this.listDemande);
        });
    }
    openModal(targetModal, user) {
        this.modalService.open(targetModal, {
            centered: true,
            backdrop: 'static'
        });
        this.demandeForm.patchValue({
            idConge: user.idConge,
            dateCng: user.dateCng,
            dateDebut: user.dateDebut,
            dateFin: user.dateFin,
            repRh: user.repRh,
            statut: user.statut,
        });
        // this.lib=this.userForm.get('lib_demande').value
        // console.log(this.lib)
    }
}
HistoriqueRhComponent.ɵfac = function HistoriqueRhComponent_Factory(t) { return new (t || HistoriqueRhComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_rh_service__WEBPACK_IMPORTED_MODULE_0__.RhService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorage), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal)); };
HistoriqueRhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HistoriqueRhComponent, selectors: [["app-historique-rh"]], decls: 39, vars: 10, consts: [[1, "container-fluid"], [1, "row"], [1, "card-body", "p-4"], [1, "search-box"], [1, "text-muted"], [1, "position-relative"], ["type", "text", "placeholder", "Rechercher ..", 1, "form-control", "rounded", "bg-light", "border-light", 3, "ngModel", "ngModelChange"], [1, "mdi", "mdi-magnify", "search-icon"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "table-responsive"], [1, "table", "align-middle", "table-nowrap", "table-hover"], [1, "table-light"], ["scope", "col", 2, "width", "70px"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "text-center", "my-3"], [3, "pageChange"], [1, "avatar-xs"], [1, "avatar-title", "rounded-circle"], [1, "font-size-14", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark"]], template: function HistoriqueRhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Rechercher");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriqueRhComponent_Template_input_ngModelChange_7_listener($event) { return ctx.term = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "thead", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Nom et pr\u00E9nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Type de cong\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Date demande");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Date d\u00E9but");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Date fin");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "R\u00E9ponse Rh");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, HistoriqueRhComponent_tr_32_Template, 19, 8, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](34, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "pagination-controls", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChange", function HistoriqueRhComponent_Template_pagination_controls_pageChange_38_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.term);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](33, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](34, 5, ctx.listDemande, ctx.term), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, ctx.p)));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipe], styles: [".search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 2px solid #dee2e6;\n  font-weight: 600;\n  color: #495057;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.375rem 0.75rem;\n}\n\n.avatar-xs[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\n\n.avatar-xs[_ngcontent-%COMP%]   .avatar-title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n\n.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  margin: 0 0.125rem;\n  border: 1px solid #dee2e6;\n  color: #0d6efd;\n}\n\n.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n\n.pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n\n.pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: #6c757d;\n  background-color: #fff;\n  border-color: #dee2e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcmlxdWUtcmguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBS0U7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRko7O0FBS0U7RUFDRSxzQkFBQTtBQUhKOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQUpGOztBQU9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFKRjs7QUFNRTtFQUNFLGtCQUFBO0FBSko7O0FBU0U7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBTko7O0FBUUk7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBTk47O0FBVUU7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBUko7O0FBV0U7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQVRKIiwiZmlsZSI6Imhpc3RvcmlxdWUtcmguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJveCB7XHJcbiAgLnNlYXJjaC1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICB9XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgdGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gIH1cclxuICBcclxuICB0ZCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxufVxyXG5cclxuLmJhZGdlIHtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcclxufVxyXG5cclxuLmF2YXRhci14cyB7XHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIFxyXG4gIC5hdmF0YXItdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnBhZ2luYXRpb24ge1xyXG4gIC5wYWdlLWxpbmsge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgICBtYXJnaW46IDAgMC4xMjVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgY29sb3I6ICMwZDZlZmQ7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xyXG4gICAgICBib3JkZXItY29sb3I6ICNkZWUyZTY7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkNmVmZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzBkNmVmZDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2UtaXRlbS5kaXNhYmxlZCAucGFnZS1saW5rIHtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2RlZTJlNjtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 67315:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/espaceRh/notifications-rh/notifications-rh.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsRhComponent": () => (/* binding */ NotificationsRhComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _rh_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rh.service */ 23155);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);





function NotificationsRhComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMsg);
} }
function NotificationsRhComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.message);
} }
function NotificationsRhComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Cr\u00E9er une Nouvelle Notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function NotificationsRhComponent_div_63_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.onCreateNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Titre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "select", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "S\u00E9lectionner un type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Cong\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Validation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Rapport");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Syst\u00E8me");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Utilisateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Destinataire");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Priorit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "select", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "S\u00E9lectionner une priorit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Faible");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Normale");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\u00C9lev\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "textarea", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationsRhComponent_div_63_Template_button_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.showCreateForm = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " Cr\u00E9er la Notification ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.notificationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.notificationForm.invalid);
} }
function NotificationsRhComponent_option_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", type_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](type_r11);
} }
function NotificationsRhComponent_option_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const priorite_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", priorite_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](priorite_r12);
} }
function NotificationsRhComponent_div_98_div_2_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nouveau");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NotificationsRhComponent_div_98_div_2_a_24_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationsRhComponent_div_98_div_2_a_24_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const notification_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.onMarkAsRead(notification_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Marquer comme lu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NotificationsRhComponent_div_98_div_2_a_25_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationsRhComponent_div_98_div_2_a_25_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const notification_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.onMarkAsUnread(notification_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Marquer comme non lu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NotificationsRhComponent_div_98_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NotificationsRhComponent_div_98_div_2_span_8_Template, 2, 0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "small", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ul", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, NotificationsRhComponent_div_98_div_2_a_24_Template, 3, 0, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, NotificationsRhComponent_div_98_div_2_a_25_Template, 3, 0, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "hr", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationsRhComponent_div_98_div_2_Template_a_click_29_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const notification_r14 = restoredCtx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r24.onDeleteNotification(notification_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Supprimer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("unread", !notification_r14.lu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate2"]("mdi ", ctx_r13.getTypeIcon(notification_r14.type), " text-", ctx_r13.getTypeColor(notification_r14.type), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", notification_r14.titre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !notification_r14.lu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("badge bg-", ctx_r13.getPrioriteColor(notification_r14.priorite), " ms-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](notification_r14.priorite);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](notification_r14.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", notification_r14.destinataire, " \u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](18, 17, notification_r14.dateCreation, "dd/MM/yyyy HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !notification_r14.lu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", notification_r14.lu);
} }
function NotificationsRhComponent_div_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NotificationsRhComponent_div_98_div_2_Template, 32, 20, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.filteredNotifications);
} }
function NotificationsRhComponent_ng_template_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Aucune notification trouv\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class NotificationsRhComponent {
    constructor(rhService, fb) {
        this.rhService = rhService;
        this.fb = fb;
        this.notifications = [];
        this.filteredNotifications = [];
        this.loading = false;
        this.message = '';
        this.errorMsg = '';
        this.showCreateForm = false;
        // Filtres
        this.searchTerm = '';
        this.typeFilter = '';
        this.statutFilter = '';
        this.prioriteFilter = '';
        this.notificationForm = this.fb.group({
            titre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            destinataire: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            priorite: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
        });
    }
    ngOnInit() {
        this.loadNotifications();
    }
    loadNotifications() {
        this.loading = true;
        this.errorMsg = '';
        // Simulation de données - remplacer par l'appel API réel
        this.notifications = [
            {
                id: 1,
                titre: 'Nouvelle demande de congé',
                message: 'John Doe a soumis une demande de congé du 15 au 20 décembre',
                type: 'Congé',
                destinataire: 'Chef de service',
                dateCreation: '2024-12-01T10:30:00',
                statut: 'Non lu',
                priorite: 'Normale',
                lu: false
            },
            {
                id: 2,
                titre: 'Demande approuvée',
                message: 'La demande de congé de Marie Dupont a été approuvée',
                type: 'Validation',
                destinataire: 'Marie Dupont',
                dateCreation: '2024-12-01T09:15:00',
                statut: 'Lu',
                priorite: 'Faible',
                lu: true
            },
            {
                id: 3,
                titre: 'Rapport mensuel disponible',
                message: 'Le rapport des congés du mois de novembre est maintenant disponible',
                type: 'Rapport',
                destinataire: 'Tous les RH',
                dateCreation: '2024-12-01T08:00:00',
                statut: 'Lu',
                priorite: 'Normale',
                lu: true
            },
            {
                id: 4,
                titre: 'Système en maintenance',
                message: 'Le système sera en maintenance le 5 décembre de 2h à 4h',
                type: 'Système',
                destinataire: 'Tous les utilisateurs',
                dateCreation: '2024-11-30T16:45:00',
                statut: 'Non lu',
                priorite: 'Élevée',
                lu: false
            },
            {
                id: 5,
                titre: 'Nouvel utilisateur créé',
                message: 'Un nouvel utilisateur a été ajouté au service IT',
                type: 'Utilisateur',
                destinataire: 'Admin RH',
                dateCreation: '2024-11-30T14:20:00',
                statut: 'Lu',
                priorite: 'Faible',
                lu: true
            }
        ];
        this.filteredNotifications = [...this.notifications];
        this.loading = false;
    }
    applyFilters() {
        let filtered = [...this.notifications];
        if (this.searchTerm) {
            filtered = filtered.filter(notification => notification.titre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                notification.message.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                notification.destinataire.toLowerCase().includes(this.searchTerm.toLowerCase()));
        }
        if (this.typeFilter) {
            filtered = filtered.filter(notification => notification.type === this.typeFilter);
        }
        if (this.statutFilter) {
            filtered = filtered.filter(notification => notification.statut === this.statutFilter);
        }
        if (this.prioriteFilter) {
            filtered = filtered.filter(notification => notification.priorite === this.prioriteFilter);
        }
        this.filteredNotifications = filtered;
    }
    onCreateNotification() {
        if (this.notificationForm.valid) {
            const newNotification = {
                id: this.notifications.length + 1,
                titre: this.notificationForm.value.titre,
                message: this.notificationForm.value.message,
                type: this.notificationForm.value.type,
                destinataire: this.notificationForm.value.destinataire,
                dateCreation: new Date().toISOString(),
                statut: 'Non lu',
                priorite: this.notificationForm.value.priorite,
                lu: false
            };
            this.notifications.unshift(newNotification);
            this.applyFilters();
            this.notificationForm.reset();
            this.showCreateForm = false;
            this.message = 'Notification créée avec succès';
            setTimeout(() => this.message = '', 3000);
        }
    }
    onMarkAsRead(notification) {
        notification.lu = true;
        notification.statut = 'Lu';
        this.message = 'Notification marquée comme lue';
        setTimeout(() => this.message = '', 3000);
    }
    onMarkAsUnread(notification) {
        notification.lu = false;
        notification.statut = 'Non lu';
        this.message = 'Notification marquée comme non lue';
        setTimeout(() => this.message = '', 3000);
    }
    onDeleteNotification(notification) {
        if (confirm(`Êtes-vous sûr de vouloir supprimer cette notification ?`)) {
            this.notifications = this.notifications.filter(n => n.id !== notification.id);
            this.applyFilters();
            this.message = 'Notification supprimée avec succès';
            setTimeout(() => this.message = '', 3000);
        }
    }
    onMarkAllAsRead() {
        this.notifications.forEach(notification => {
            notification.lu = true;
            notification.statut = 'Lu';
        });
        this.message = 'Toutes les notifications ont été marquées comme lues';
        setTimeout(() => this.message = '', 3000);
    }
    getTypeIcon(type) {
        switch (type) {
            case 'Congé': return 'mdi-calendar';
            case 'Validation': return 'mdi-check-circle';
            case 'Rapport': return 'mdi-file-document';
            case 'Système': return 'mdi-cog';
            case 'Utilisateur': return 'mdi-account';
            default: return 'mdi-bell';
        }
    }
    getTypeColor(type) {
        switch (type) {
            case 'Congé': return 'primary';
            case 'Validation': return 'success';
            case 'Rapport': return 'info';
            case 'Système': return 'warning';
            case 'Utilisateur': return 'secondary';
            default: return 'light';
        }
    }
    getPrioriteColor(priorite) {
        switch (priorite) {
            case 'Élevée': return 'danger';
            case 'Normale': return 'warning';
            case 'Faible': return 'success';
            default: return 'secondary';
        }
    }
    clearFilters() {
        this.searchTerm = '';
        this.typeFilter = '';
        this.statutFilter = '';
        this.prioriteFilter = '';
        this.applyFilters();
    }
    getUniqueTypes() {
        return [...new Set(this.notifications.map(n => n.type))];
    }
    getUniquePriorites() {
        return [...new Set(this.notifications.map(n => n.priorite))];
    }
    getUnreadCount() {
        return this.notifications.filter(n => !n.lu).length;
    }
}
NotificationsRhComponent.ɵfac = function NotificationsRhComponent_Factory(t) { return new (t || NotificationsRhComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rh_service__WEBPACK_IMPORTED_MODULE_0__.RhService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
NotificationsRhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NotificationsRhComponent, selectors: [["app-notifications-rh"]], decls: 101, vars: 16, consts: [[1, "container-fluid"], [1, "row", "mb-4"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "mb-1"], [1, "text-muted", "mb-0"], [1, "d-flex", "gap-2"], [1, "btn", "btn-outline-primary", 3, "disabled", "click"], [1, "mdi", "mdi-check-all"], [1, "btn", "btn-primary", 3, "click"], [1, "mdi", "mdi-plus"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "col-md-3"], [1, "card", "bg-primary", "text-white"], [1, "card-body"], [1, "d-flex", "justify-content-between"], [1, "card-title"], [1, "align-self-center"], [1, "mdi", "mdi-bell", "display-4"], [1, "card", "bg-warning", "text-white"], [1, "mdi", "mdi-bell-ring", "display-4"], [1, "card", "bg-success", "text-white"], [1, "mdi", "mdi-bell-check", "display-4"], [1, "card", "bg-info", "text-white"], [1, "mdi", "mdi-tag", "display-4"], ["class", "row mb-4", 4, "ngIf"], [1, "row", "mb-3"], [1, "search-box"], [1, "position-relative"], ["type", "text", "placeholder", "Rechercher...", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], [1, "mdi", "mdi-magnify", "search-icon"], [1, "col-md-2"], [1, "form-select", 3, "ngModel", "ngModelChange", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["value", "Lu"], ["value", "Non lu"], [1, "btn", "btn-outline-secondary", "w-100", 3, "click"], [1, "mdi", "mdi-filter-remove"], [1, "row"], [1, "card"], [4, "ngIf", "ngIfElse"], ["noNotifications", ""], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], [1, "card-header"], [1, "card-title", "mb-0"], [3, "formGroup", "ngSubmit"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], ["type", "text", "formControlName", "titre", "placeholder", "Titre de la notification", 1, "form-control"], ["formControlName", "type", 1, "form-select"], ["value", "Cong\u00E9"], ["value", "Validation"], ["value", "Rapport"], ["value", "Syst\u00E8me"], ["value", "Utilisateur"], ["type", "text", "formControlName", "destinataire", "placeholder", "Destinataire de la notification", 1, "form-control"], ["formControlName", "priorite", 1, "form-select"], ["value", "Faible"], ["value", "Normale"], ["value", "\u00C9lev\u00E9e"], ["formControlName", "message", "rows", "3", "placeholder", "Contenu de la notification...", 1, "form-control"], [1, "text-end"], ["type", "button", 1, "btn", "btn-secondary", "me-2", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "value"], [1, "list-group"], ["class", "list-group-item list-group-item-action", 3, "unread", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action"], [1, "d-flex", "w-100", "justify-content-between", "align-items-start"], [1, "d-flex", "align-items-start"], [1, "me-3"], [2, "font-size", "1.5rem"], [1, "flex-grow-1"], [1, "mb-1", "d-flex", "align-items-center"], ["class", "badge bg-warning ms-2", 4, "ngIf"], [1, "mb-1", "text-muted"], [1, "text-muted"], [1, "mdi", "mdi-account"], [1, "mdi", "mdi-clock"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn", "btn-sm", "btn-outline-secondary", "dropdown-toggle"], [1, "dropdown-menu"], ["class", "dropdown-item", 3, "click", 4, "ngIf"], [1, "dropdown-divider"], [1, "dropdown-item", "text-danger", 3, "click"], [1, "mdi", "mdi-delete", "me-2"], [1, "badge", "bg-warning", "ms-2"], [1, "dropdown-item", 3, "click"], [1, "mdi", "mdi-check", "me-2"], [1, "mdi", "mdi-undo", "me-2"], [1, "text-center", "py-4"], [1, "mdi", "mdi-bell-off", "display-4", "text-muted"], [1, "text-muted", "mt-2"]], template: function NotificationsRhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Notifications RH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Gestion des notifications et alertes du syst\u00E8me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationsRhComponent_Template_button_click_10_listener() { return ctx.onMarkAllAsRead(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Tout marquer comme lu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationsRhComponent_Template_button_click_13_listener() { return ctx.showCreateForm = !ctx.showCreateForm; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Nouvelle Notification ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, NotificationsRhComponent_div_16_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, NotificationsRhComponent_div_17_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Non lues");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Lues");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, NotificationsRhComponent_div_63_Template, 62, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NotificationsRhComponent_Template_input_ngModelChange_68_listener($event) { return ctx.searchTerm = $event; })("input", function NotificationsRhComponent_Template_input_input_68_listener() { return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NotificationsRhComponent_Template_select_ngModelChange_71_listener($event) { return ctx.typeFilter = $event; })("change", function NotificationsRhComponent_Template_select_change_71_listener() { return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Tous les types");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, NotificationsRhComponent_option_74_Template, 2, 2, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NotificationsRhComponent_Template_select_ngModelChange_76_listener($event) { return ctx.statutFilter = $event; })("change", function NotificationsRhComponent_Template_select_change_76_listener() { return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Tous les statuts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Lu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Non lu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NotificationsRhComponent_Template_select_ngModelChange_84_listener($event) { return ctx.prioriteFilter = $event; })("change", function NotificationsRhComponent_Template_select_change_84_listener() { return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Toutes les priorit\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, NotificationsRhComponent_option_87_Template, 2, 2, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationsRhComponent_Template_button_click_89_listener() { return ctx.clearFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, " Effacer les filtres ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, NotificationsRhComponent_div_98_Template, 3, 1, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, NotificationsRhComponent_ng_template_99_Template, 4, 0, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.getUnreadCount() === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.notifications.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getUnreadCount());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.notifications.length - ctx.getUnreadCount());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getUniqueTypes().length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showCreateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.typeFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getUniqueTypes());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.statutFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.prioriteFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getUniquePriorites());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filteredNotifications == null ? null : ctx.filteredNotifications.length)("ngIfElse", _r6);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: [".card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0.5rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.card.bg-primary[_ngcontent-%COMP%], .card.bg-success[_ngcontent-%COMP%], .card.bg-info[_ngcontent-%COMP%], .card.bg-warning[_ngcontent-%COMP%] {\n  border: none;\n}\n.card.bg-primary[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .card.bg-success[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .card.bg-info[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .card.bg-warning[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.card.bg-primary[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .card.bg-success[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .card.bg-info[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .card.bg-warning[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  opacity: 0.9;\n}\n.card.bg-primary[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .card.bg-success[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .card.bg-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .card.bg-warning[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0;\n}\n.card.bg-primary[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%], .card.bg-success[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%], .card.bg-info[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%], .card.bg-warning[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  opacity: 0.8;\n}\n.search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  border: 1px solid #ced4da;\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus {\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.alert[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  border: none;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background-color: #d1e7dd;\n  color: #0f5132;\n}\n.list-group-item[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  border-radius: 0.5rem !important;\n  margin-bottom: 0.5rem;\n  transition: all 0.3s ease;\n}\n.list-group-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.list-group-item.unread[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  border-left: 4px solid #2196f3;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.375rem;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n  border: none;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  transition: all 0.3s ease;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.text-center[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #6c757d;\n}\nh2[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 700;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n}\n.card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n}\n@keyframes pulse {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.loading[_ngcontent-%COMP%] {\n  animation: pulse 1.5s ease-in-out infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMtcmguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFDRTtFQUNFLHlDQUFBO0FBQ0o7QUFHQTs7OztFQUlFLFlBQUE7QUFBRjtBQUVFOzs7O0VBQ0UsZUFBQTtBQUdKO0FBQUU7Ozs7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBS0o7QUFGRTs7OztFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBT0o7QUFKRTs7OztFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQVNKO0FBSkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBT0o7QUFIQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQU1GO0FBSkU7RUFDRSwyQkFBQTtBQU1KO0FBRkE7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0FBS0Y7QUFIRTtFQUNFLHFCQUFBO0VBQ0Esa0RBQUE7QUFLSjtBQURBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FBSUY7QUFGRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUlKO0FBREU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFHSjtBQUNBO0VBQ0UseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFFRjtBQUFFO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLHdDQUFBO0FBRUo7QUFDRTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7QUFDSjtBQUdBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FBQUY7QUFHQTtFQUNFLHFCQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0FBQUY7QUFFRTtFQUNFLG9CQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUVJO0VBQ0UseUJBQUE7QUFBTjtBQU1FO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFISjtBQU9BO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBSkY7QUFPQTtFQUNFLHlCQUFBO0FBSkY7QUFPQTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7QUFKRjtBQU1FO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBSko7QUFTQTtFQUNFO0lBQUssVUFBQTtFQUxMO0VBTUE7SUFBTSxZQUFBO0VBSE47RUFJQTtJQUFPLFVBQUE7RUFEUDtBQUNGO0FBR0E7RUFDRSwwQ0FBQTtBQURGIiwiZmlsZSI6Im5vdGlmaWNhdGlvbnMtcmguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLDAsMCwwLjE1KTtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLmJnLXByaW1hcnksXHJcbi5jYXJkLmJnLXN1Y2Nlc3MsXHJcbi5jYXJkLmJnLWluZm8sXHJcbi5jYXJkLmJnLXdhcm5pbmcge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBcclxuICAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgfVxyXG4gIFxyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgLmRpc3BsYXktNCB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94IHtcclxuICAuc2VhcmNoLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wsIC5mb3JtLXNlbGVjdCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICBcclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzg2YjdmZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMjVyZW0gcmdiYSgxMywgMTEwLCAyNTMsIDAuMjUpO1xyXG4gIH1cclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIFxyXG4gICYuYWxlcnQtZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XHJcbiAgICBjb2xvcjogIzcyMWMyNDtcclxuICB9XHJcbiAgXHJcbiAgJi5hbGVydC1zdWNjZXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWU3ZGQ7XHJcbiAgICBjb2xvcjogIzBmNTEzMjtcclxuICB9XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICB9XHJcbiAgXHJcbiAgJi51bnJlYWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzIxOTZmMztcclxuICB9XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIFxyXG4gIC5kcm9wZG93bi1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gIC5kaXNwbGF5LTQge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgfVxyXG59XHJcblxyXG5oMiB7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnRleHQtbXV0ZWQge1xyXG4gIGNvbG9yOiAjNmM3NTdkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxuICBcclxuICAuY2FyZC10aXRsZSB7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBbmltYXRpb24gcG91ciBsZSBjaGFyZ2VtZW50XHJcbkBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gIDAlIHsgb3BhY2l0eTogMTsgfVxyXG4gIDUwJSB7IG9wYWNpdHk6IDAuNTsgfVxyXG4gIDEwMCUgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbi5sb2FkaW5nIHtcclxuICBhbmltYXRpb246IHB1bHNlIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 3163:
/*!*********************************************************************!*\
  !*** ./src/app/pages/espaceRh/rapports-rh/rapports-rh.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RapportsRhComponent": () => (/* binding */ RapportsRhComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _rh_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rh.service */ 23155);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);





function RapportsRhComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMsg);
} }
function RapportsRhComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.message);
} }
function RapportsRhComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Cr\u00E9er un Nouveau Rapport");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RapportsRhComponent_div_14_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onCreateRapport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Nom du Rapport");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Type de Rapport");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "S\u00E9lectionner un type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Cong\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Utilisateurs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Statistiques");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "textarea", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Date de D\u00E9but");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Date de Fin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RapportsRhComponent_div_14_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.showCreateForm = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Cr\u00E9er le Rapport ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.rapportForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.rapportForm.invalid);
} }
function RapportsRhComponent_div_53_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RapportsRhComponent_div_53_tr_19_Template_button_click_22_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const rapport_r10 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.onGenerateRapport(rapport_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RapportsRhComponent_div_53_tr_19_Template_button_click_24_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const rapport_r10 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r13.onDownloadRapport(rapport_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RapportsRhComponent_div_53_tr_19_Template_button_click_26_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const rapport_r10 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.onDeleteRapport(rapport_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rapport_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rapport_r10.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rapport_r10.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rapport_r10.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 11, rapport_r10.dateCreation, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rapport_r10.createur);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("badge bg-", ctx_r9.getBadgeClass(rapport_r10.statut), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", rapport_r10.statut, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r9.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", rapport_r10.statut !== "Termin\u00E9");
} }
function RapportsRhComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Cr\u00E9\u00E9 le");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Cr\u00E9ateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RapportsRhComponent_div_53_tr_19_Template, 28, 14, "tr", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.filteredRapports);
} }
function RapportsRhComponent_ng_template_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Aucun rapport trouv\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class RapportsRhComponent {
    constructor(rhService, fb) {
        this.rhService = rhService;
        this.fb = fb;
        this.rapports = [];
        this.filteredRapports = [];
        this.loading = false;
        this.message = '';
        this.errorMsg = '';
        this.showCreateForm = false;
        // Filtres
        this.searchTerm = '';
        this.typeFilter = '';
        this.statutFilter = '';
        this.rapportForm = this.fb.group({
            nom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            dateDebut: [''],
            dateFin: [''],
            services: [[]],
            utilisateurs: [[]]
        });
    }
    ngOnInit() {
        this.loadRapports();
    }
    loadRapports() {
        this.loading = true;
        this.errorMsg = '';
        // Simulation de données - remplacer par l'appel API réel
        this.rapports = [
            {
                id: 1,
                nom: 'Rapport Congés Mensuel',
                description: 'Rapport des congés du mois de décembre 2024',
                type: 'Congés',
                dateCreation: '2024-12-01',
                createur: 'Admin RH',
                statut: 'Terminé'
            },
            {
                id: 2,
                nom: 'Statistiques Utilisateurs',
                description: 'Analyse des utilisateurs par service',
                type: 'Utilisateurs',
                dateCreation: '2024-11-28',
                createur: 'Admin RH',
                statut: 'En cours'
            },
            {
                id: 3,
                nom: 'Rapport Services',
                description: 'Évolution des services et affectations',
                type: 'Services',
                dateCreation: '2024-11-25',
                createur: 'Admin RH',
                statut: 'Terminé'
            }
        ];
        this.filteredRapports = [...this.rapports];
        this.loading = false;
    }
    applyFilters() {
        let filtered = [...this.rapports];
        if (this.searchTerm) {
            filtered = filtered.filter(rapport => rapport.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                rapport.description.toLowerCase().includes(this.searchTerm.toLowerCase()));
        }
        if (this.typeFilter) {
            filtered = filtered.filter(rapport => rapport.type === this.typeFilter);
        }
        if (this.statutFilter) {
            filtered = filtered.filter(rapport => rapport.statut === this.statutFilter);
        }
        this.filteredRapports = filtered;
    }
    onCreateRapport() {
        if (this.rapportForm.valid) {
            const newRapport = {
                id: this.rapports.length + 1,
                nom: this.rapportForm.value.nom,
                description: this.rapportForm.value.description,
                type: this.rapportForm.value.type,
                dateCreation: new Date().toISOString().split('T')[0],
                createur: 'Admin RH',
                statut: 'En cours'
            };
            this.rapports.unshift(newRapport);
            this.applyFilters();
            this.rapportForm.reset();
            this.showCreateForm = false;
            this.message = 'Rapport créé avec succès';
            setTimeout(() => this.message = '', 3000);
        }
    }
    onGenerateRapport(rapport) {
        this.loading = true;
        // Simulation de génération de rapport
        setTimeout(() => {
            rapport.statut = 'Terminé';
            this.loading = false;
            this.message = `Rapport "${rapport.nom}" généré avec succès`;
            setTimeout(() => this.message = '', 3000);
        }, 2000);
    }
    onDownloadRapport(rapport) {
        // Simulation de téléchargement
        this.message = `Téléchargement du rapport "${rapport.nom}" en cours...`;
        setTimeout(() => this.message = '', 3000);
    }
    onDeleteRapport(rapport) {
        if (confirm(`Êtes-vous sûr de vouloir supprimer le rapport "${rapport.nom}" ?`)) {
            this.rapports = this.rapports.filter(r => r.id !== rapport.id);
            this.applyFilters();
            this.message = 'Rapport supprimé avec succès';
            setTimeout(() => this.message = '', 3000);
        }
    }
    getBadgeClass(statut) {
        switch (statut) {
            case 'Terminé': return 'success';
            case 'En cours': return 'warning';
            case 'Erreur': return 'danger';
            default: return 'secondary';
        }
    }
    clearFilters() {
        this.searchTerm = '';
        this.typeFilter = '';
        this.statutFilter = '';
        this.applyFilters();
    }
}
RapportsRhComponent.ɵfac = function RapportsRhComponent_Factory(t) { return new (t || RapportsRhComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rh_service__WEBPACK_IMPORTED_MODULE_0__.RhService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
RapportsRhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RapportsRhComponent, selectors: [["app-rapports-rh"]], decls: 56, vars: 8, consts: [[1, "container-fluid"], [1, "row", "mb-4"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "mb-1"], [1, "text-muted", "mb-0"], [1, "btn", "btn-primary", 3, "click"], [1, "mdi", "mdi-plus"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "row mb-4", 4, "ngIf"], [1, "row", "mb-3"], [1, "col-md-4"], [1, "search-box"], [1, "position-relative"], ["type", "text", "placeholder", "Rechercher un rapport...", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], [1, "mdi", "mdi-magnify", "search-icon"], [1, "col-md-3"], [1, "form-select", 3, "ngModel", "ngModelChange", "change"], ["value", ""], ["value", "Cong\u00E9s"], ["value", "Utilisateurs"], ["value", "Services"], ["value", "Statistiques"], ["value", "Termin\u00E9"], ["value", "En cours"], ["value", "Erreur"], [1, "col-md-2"], [1, "btn", "btn-outline-secondary", "w-100", 3, "click"], [1, "mdi", "mdi-filter-remove"], [1, "row"], [1, "card"], [1, "card-body"], [1, "card-title"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noRapports", ""], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], [1, "card-header"], [1, "card-title", "mb-0"], [3, "formGroup", "ngSubmit"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], ["type", "text", "formControlName", "nom", "placeholder", "Ex: Rapport Cong\u00E9s D\u00E9cembre 2024", 1, "form-control"], ["formControlName", "type", 1, "form-select"], ["formControlName", "description", "rows", "3", "placeholder", "Description du rapport...", 1, "form-control"], ["type", "date", "formControlName", "dateDebut", 1, "form-control"], ["type", "date", "formControlName", "dateFin", 1, "form-control"], [1, "text-end"], ["type", "button", 1, "btn", "btn-secondary", "me-2", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "table-light"], [4, "ngFor", "ngForOf"], [1, "badge", "bg-info"], [1, "text-muted"], ["role", "group", 1, "btn-group"], ["title", "G\u00E9n\u00E9rer le rapport", 1, "btn", "btn-success", "btn-sm", 3, "disabled", "click"], [1, "mdi", "mdi-play"], ["title", "T\u00E9l\u00E9charger", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], [1, "mdi", "mdi-download"], ["title", "Supprimer", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "mdi", "mdi-delete"], [1, "text-center", "py-4"], [1, "mdi", "mdi-file-document-outline", "display-4", "text-muted"], [1, "text-muted", "mt-2"]], template: function RapportsRhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Rapports RH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "G\u00E9n\u00E9ration et gestion des rapports des ressources humaines");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RapportsRhComponent_Template_button_click_9_listener() { return ctx.showCreateForm = !ctx.showCreateForm; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Nouveau Rapport ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, RapportsRhComponent_div_12_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, RapportsRhComponent_div_13_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, RapportsRhComponent_div_14_Template, 52, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RapportsRhComponent_Template_input_ngModelChange_19_listener($event) { return ctx.searchTerm = $event; })("input", function RapportsRhComponent_Template_input_input_19_listener() { return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RapportsRhComponent_Template_select_ngModelChange_22_listener($event) { return ctx.typeFilter = $event; })("change", function RapportsRhComponent_Template_select_change_22_listener() { return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Tous les types");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Cong\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Utilisateurs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Statistiques");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RapportsRhComponent_Template_select_ngModelChange_34_listener($event) { return ctx.statutFilter = $event; })("change", function RapportsRhComponent_Template_select_change_34_listener() { return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Tous les statuts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Termin\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "En cours");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Erreur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RapportsRhComponent_Template_button_click_44_listener() { return ctx.clearFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Effacer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Rapports Disponibles");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, RapportsRhComponent_div_53_Template, 20, 1, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, RapportsRhComponent_ng_template_54_Template, 4, 0, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showCreateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.typeFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.statutFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filteredRapports == null ? null : ctx.filteredRapports.length)("ngIfElse", _r4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: [".search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0.5rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 2px solid #dee2e6;\n  font-weight: 600;\n  color: #495057;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.375rem;\n}\n\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n  border-radius: 0.375rem;\n}\n\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  border: 1px solid #ced4da;\n}\n\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus {\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n\n.alert[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  border: none;\n}\n\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n\n.alert.alert-success[_ngcontent-%COMP%] {\n  background-color: #d1e7dd;\n  color: #0f5132;\n}\n\n.text-center[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #6c757d;\n}\n\nh2[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 700;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n\n.card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhcHBvcnRzLXJoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUlBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtBQURGOztBQUdFO0VBQ0UseUNBQUE7QUFESjs7QUFNRTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFISjs7QUFNRTtFQUNFLHNCQUFBO0FBSko7O0FBUUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7QUFMRjs7QUFTRTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7QUFOSjs7QUFRSTtFQUNFLGVBQUE7QUFOTjs7QUFXQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQVJGOztBQVVFO0VBQ0UsMkJBQUE7QUFSSjs7QUFZQTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7QUFURjs7QUFXRTtFQUNFLHFCQUFBO0VBQ0Esa0RBQUE7QUFUSjs7QUFhQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQVZGOztBQVlFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBVko7O0FBYUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFYSjs7QUFnQkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQWJKOztBQWlCQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQWRGOztBQWlCQTtFQUNFLHlCQUFBO0FBZEY7O0FBaUJBO0VBQ0UseUJBQUE7RUFDQSxnQ0FBQTtBQWRGOztBQWdCRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQWRKIiwiZmlsZSI6InJhcHBvcnRzLXJoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1ib3gge1xyXG4gIC5zZWFyY2gtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLDAsMCwwLjE1KTtcclxuICB9XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgdGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gIH1cclxuICBcclxuICB0ZCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxufVxyXG5cclxuLmJhZGdlIHtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxufVxyXG5cclxuLmJ0bi1ncm91cCB7XHJcbiAgLmJ0biB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxuICAgIFxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wsIC5mb3JtLXNlbGVjdCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICBcclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzg2YjdmZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMjVyZW0gcmdiYSgxMywgMTEwLCAyNTMsIDAuMjUpO1xyXG4gIH1cclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIFxyXG4gICYuYWxlcnQtZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XHJcbiAgICBjb2xvcjogIzcyMWMyNDtcclxuICB9XHJcbiAgXHJcbiAgJi5hbGVydC1zdWNjZXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWU3ZGQ7XHJcbiAgICBjb2xvcjogIzBmNTEzMjtcclxuICB9XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgLmRpc3BsYXktNCB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICB9XHJcbn1cclxuXHJcbmgyIHtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4udGV4dC1tdXRlZCB7XHJcbiAgY29sb3I6ICM2Yzc1N2QgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIFxyXG4gIC5jYXJkLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 3285:
/*!***********************************************************************!*\
  !*** ./src/app/pages/espaceRh/rh-dashboard/rh-dashboard.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RhDashboardComponent": () => (/* binding */ RhDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _rh_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rh.service */ 23155);


class RhDashboardComponent {
    constructor(rhService) {
        this.rhService = rhService;
        this.stats = {
            totalUsers: 0,
            totalServices: 0,
            totalTypeConges: 0,
            pendingConges: 0,
            approvedConges: 0,
            rejectedConges: 0,
            recentDecisions: []
        };
        this.loading = false;
        this.errorMsg = '';
    }
    ngOnInit() {
        this.loadDashboardData();
    }
    loadDashboardData() {
        this.loading = true;
        this.errorMsg = '';
        // Charger toutes les données en parallèle
        Promise.all([
            this.rhService.GetUser().toPromise(),
            this.rhService.getService().toPromise(),
            this.rhService.getTypeConge().toPromise(),
            this.rhService.getPendingCongesRh().toPromise(),
            this.rhService.getHistoriqueRh().toPromise()
        ]).then(([users, services, typeConges, pendingConges, historique]) => {
            this.stats.totalUsers = (users === null || users === void 0 ? void 0 : users.length) || 0;
            this.stats.totalServices = (services === null || services === void 0 ? void 0 : services.length) || 0;
            this.stats.totalTypeConges = (typeConges === null || typeConges === void 0 ? void 0 : typeConges.length) || 0;
            this.stats.pendingConges = (pendingConges === null || pendingConges === void 0 ? void 0 : pendingConges.length) || 0;
            // Calculer les congés approuvés et refusés
            const allConges = historique || [];
            this.stats.approvedConges = allConges.filter(c => c.repRh === 'APPROUVE').length;
            this.stats.rejectedConges = allConges.filter(c => c.repRh === 'REFUSE').length;
            // Récupérer les 5 dernières décisions
            this.stats.recentDecisions = allConges
                .filter(c => c.repRh && c.repRh !== 'EN_ATTENTE')
                .sort((a, b) => new Date(b.dateDecision || b.dateCng).getTime() - new Date(a.dateDecision || a.dateCng).getTime())
                .slice(0, 5);
            this.loading = false;
        }).catch(error => {
            console.error('Erreur lors du chargement des données:', error);
            this.errorMsg = 'Erreur lors du chargement des données du dashboard';
            this.loading = false;
        });
    }
    getBadgeClass(status) {
        switch (status) {
            case 'APPROUVE': return 'success';
            case 'REFUSE': return 'danger';
            case 'EN_ATTENTE': return 'warning';
            default: return 'secondary';
        }
    }
    getStatusText(status) {
        switch (status) {
            case 'APPROUVE': return 'Approuvé';
            case 'REFUSE': return 'Refusé';
            case 'EN_ATTENTE': return 'En attente';
            default: return 'Non défini';
        }
    }
    refresh() {
        this.loadDashboardData();
    }
}
RhDashboardComponent.ɵfac = function RhDashboardComponent_Factory(t) { return new (t || RhDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rh_service__WEBPACK_IMPORTED_MODULE_0__.RhService)); };
RhDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RhDashboardComponent, selectors: [["app-rh-dashboard"]], decls: 70, vars: 4, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "page-title-box", "d-sm-flex", "align-items-center", "justify-content-between"], [1, "mb-sm-0", "font-size-18"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [1, "breadcrumb-item"], [1, "breadcrumb-item", "active"], [1, "col-xl-3", "col-md-6"], [1, "card"], [1, "card-body"], [1, "d-flex"], [1, "flex-1", "overflow-hidden"], [1, "text-truncate", "font-size-14", "mb-2"], [1, "mb-0"], [1, "text-primary"], [1, "bx", "bx-user", "h1"], [1, "text-success"], [1, "bx", "bx-buildings", "h1"], [1, "text-warning"], [1, "bx", "bx-time", "h1"], [1, "text-info"], [1, "bx", "bx-check-circle", "h1"], [1, "card-header"], [1, "card-title"], [1, "text-center", "py-4"], [1, "bx", "bx-user-check", "display-4", "text-muted", "mb-3"], [1, "text-muted"]], template: function RhDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Tableau de bord RH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Espace RH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Tableau de bord");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Total Utilisateurs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Total Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Cong\u00E9s en Attente");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Cong\u00E9s Approuv\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "h4", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Vue d'ensemble RH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Tableau de bord RH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " Interface de gestion des ressources humaines en cours de d\u00E9veloppement. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.totalUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.totalServices);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.pendingConges);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.approvedConges);
    } }, styles: [".card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0.5rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n  transform: translateY(-2px);\n}\n.card.bg-primary[_ngcontent-%COMP%], .card.bg-success[_ngcontent-%COMP%], .card.bg-info[_ngcontent-%COMP%], .card.bg-warning[_ngcontent-%COMP%], .card.bg-danger[_ngcontent-%COMP%] {\n  border: none;\n}\n.card.bg-primary[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .card.bg-success[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .card.bg-info[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .card.bg-warning[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .card.bg-danger[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.card.bg-primary[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .card.bg-success[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .card.bg-info[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .card.bg-warning[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .card.bg-danger[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  opacity: 0.9;\n}\n.card.bg-primary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .card.bg-success[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .card.bg-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .card.bg-warning[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .card.bg-danger[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  margin: 0;\n}\n.card.bg-primary[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%], .card.bg-success[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%], .card.bg-info[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%], .card.bg-warning[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%], .card.bg-danger[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  opacity: 0.8;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  font-weight: 500;\n  padding: 0.75rem 1rem;\n  transition: all 0.3s ease;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #0b5ed7;\n  border-color: #0a58ca;\n  transform: translateY(-1px);\n}\n.btn.btn-outline-primary[_ngcontent-%COMP%] {\n  color: #0d6efd;\n  border-color: #0d6efd;\n}\n.btn.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n  color: #fff;\n  transform: translateY(-1px);\n}\n.btn.btn-outline-success[_ngcontent-%COMP%] {\n  color: #198754;\n  border-color: #198754;\n}\n.btn.btn-outline-success[_ngcontent-%COMP%]:hover {\n  background-color: #198754;\n  border-color: #198754;\n  color: #fff;\n  transform: translateY(-1px);\n}\n.btn.btn-outline-info[_ngcontent-%COMP%] {\n  color: #0dcaf0;\n  border-color: #0dcaf0;\n}\n.btn.btn-outline-info[_ngcontent-%COMP%]:hover {\n  background-color: #0dcaf0;\n  border-color: #0dcaf0;\n  color: #000;\n  transform: translateY(-1px);\n}\n.btn.btn-outline-warning[_ngcontent-%COMP%] {\n  color: #ffc107;\n  border-color: #ffc107;\n}\n.btn.btn-outline-warning[_ngcontent-%COMP%]:hover {\n  background-color: #ffc107;\n  border-color: #ffc107;\n  color: #000;\n  transform: translateY(-1px);\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 2px solid #dee2e6;\n  font-weight: 600;\n  color: #495057;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.375rem;\n}\n.alert[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  border: none;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.text-center[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #6c757d;\n}\nh2[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 700;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n}\n@keyframes pulse {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.loading[_ngcontent-%COMP%] {\n  animation: pulse 1.5s ease-in-out infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJoLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHdDQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUNFO0VBQ0UseUNBQUE7RUFDQSwyQkFBQTtBQUNKO0FBR0E7Ozs7O0VBS0UsWUFBQTtBQUFGO0FBRUU7Ozs7O0VBQ0UsZUFBQTtBQUlKO0FBREU7Ozs7O0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQU9KO0FBSkU7Ozs7O0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQVVKO0FBUEU7Ozs7O0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBYUo7QUFUQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBWUY7QUFWRTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFZSjtBQVZJO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FBWU47QUFSRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQVVKO0FBUkk7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBVU47QUFORTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQVFKO0FBTkk7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBUU47QUFKRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQU1KO0FBSkk7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBTU47QUFGRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQUlKO0FBRkk7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBSU47QUFFRTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUVFO0VBQ0Usc0JBQUE7QUFBSjtBQUlBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FBREY7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQURGO0FBR0U7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFESjtBQU1FO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFISjtBQU9BO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBSkY7QUFPQTtFQUNFLHlCQUFBO0FBSkY7QUFRQTtFQUNFO0lBQUssVUFBQTtFQUpMO0VBS0E7SUFBTSxZQUFBO0VBRk47RUFHQTtJQUFPLFVBQUE7RUFBUDtBQUNGO0FBRUE7RUFDRSwwQ0FBQTtBQUFGIiwiZmlsZSI6InJoLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsMCwwLDAuMTUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQuYmctcHJpbWFyeSxcclxuLmNhcmQuYmctc3VjY2VzcyxcclxuLmNhcmQuYmctaW5mbyxcclxuLmNhcmQuYmctd2FybmluZyxcclxuLmNhcmQuYmctZGFuZ2VyIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgXHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gIH1cclxuICBcclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAuZGlzcGxheS00IHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgXHJcbiAgJi5idG4tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ2ZWZkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMGQ2ZWZkO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBiNWVkNztcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjMGE1OGNhO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLW91dGxpbmUtcHJpbWFyeSB7XHJcbiAgICBjb2xvcjogIzBkNmVmZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzBkNmVmZDtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDZlZmQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzBkNmVmZDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgJi5idG4tb3V0bGluZS1zdWNjZXNzIHtcclxuICAgIGNvbG9yOiAjMTk4NzU0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMTk4NzU0O1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5ODc1NDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjMTk4NzU0O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAmLmJ0bi1vdXRsaW5lLWluZm8ge1xyXG4gICAgY29sb3I6ICMwZGNhZjA7XHJcbiAgICBib3JkZXItY29sb3I6ICMwZGNhZjA7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGRjYWYwO1xyXG4gICAgICBib3JkZXItY29sb3I6ICMwZGNhZjA7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLW91dGxpbmUtd2FybmluZyB7XHJcbiAgICBjb2xvcjogI2ZmYzEwNztcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmYzEwNztcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2ZmYzEwNztcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgdGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gIH1cclxuICBcclxuICB0ZCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxufVxyXG5cclxuLmJhZGdlIHtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIFxyXG4gICYuYWxlcnQtZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XHJcbiAgICBjb2xvcjogIzcyMWMyNDtcclxuICB9XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgLmRpc3BsYXktNCB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICB9XHJcbn1cclxuXHJcbmgyIHtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4udGV4dC1tdXRlZCB7XHJcbiAgY29sb3I6ICM2Yzc1N2QgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gQW5pbWF0aW9uIHBvdXIgbGUgY2hhcmdlbWVudFxyXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcclxuICAwJSB7IG9wYWNpdHk6IDE7IH1cclxuICA1MCUgeyBvcGFjaXR5OiAwLjU7IH1cclxuICAxMDAlIHsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG4ubG9hZGluZyB7XHJcbiAgYW5pbWF0aW9uOiBwdWxzZSAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 10329:
/*!*****************************************************!*\
  !*** ./src/app/pages/espaceRh/rh-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RhRoutingModule": () => (/* binding */ RhRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _espace_rh_espace_rh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./espace-rh/espace-rh.component */ 75457);
/* harmony import */ var _historique_rh_historique_rh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historique-rh/historique-rh.component */ 38025);
/* harmony import */ var _gestionutilisateur_gestionutilisateur_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gestionutilisateur/gestionutilisateur.component */ 18486);
/* harmony import */ var _gestion_service_gestion_service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gestion-service/gestion-service.component */ 5361);
/* harmony import */ var _gestion_type_conge_gestion_type_conge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gestion-type-conge/gestion-type-conge.component */ 27942);
/* harmony import */ var _affectation_chefs_affectation_chefs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./affectation-chefs/affectation-chefs.component */ 11926);
/* harmony import */ var _affectation_table_affectation_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../affectation-table/affectation-table.component */ 11555);
/* harmony import */ var _employes_info_employes_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employes-info/employes-info.component */ 68293);
/* harmony import */ var _validation_conges_validation_conges_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./validation-conges/validation-conges.component */ 85216);
/* harmony import */ var _historique_decisions_historique_decisions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./historique-decisions/historique-decisions.component */ 7664);
/* harmony import */ var _rh_dashboard_rh_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rh-dashboard/rh-dashboard.component */ 3285);
/* harmony import */ var _statistiques_rh_statistiques_rh_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./statistiques-rh/statistiques-rh.component */ 79955);
/* harmony import */ var _rapports_rh_rapports_rh_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rapports-rh/rapports-rh.component */ 3163);
/* harmony import */ var _configuration_rh_configuration_rh_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./configuration-rh/configuration-rh.component */ 1456);
/* harmony import */ var _notifications_rh_notifications_rh_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./notifications-rh/notifications-rh.component */ 67315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 14001);


















const routes = [
    {
        path: '',
        component: _rh_dashboard_rh_dashboard_component__WEBPACK_IMPORTED_MODULE_10__.RhDashboardComponent
    },
    {
        path: 'dashboard',
        component: _rh_dashboard_rh_dashboard_component__WEBPACK_IMPORTED_MODULE_10__.RhDashboardComponent
    },
    {
        path: 'demandeRh',
        component: _espace_rh_espace_rh_component__WEBPACK_IMPORTED_MODULE_0__.EspaceRhComponent
    },
    {
        path: 'historiqueRh',
        component: _historique_rh_historique_rh_component__WEBPACK_IMPORTED_MODULE_1__.HistoriqueRhComponent
    },
    {
        path: 'gestionUtilisateur',
        component: _gestionutilisateur_gestionutilisateur_component__WEBPACK_IMPORTED_MODULE_2__.GestionutilisateurComponent
    },
    // {
    //     path: 'create',
    //     component: CreateComponent
    // }
    {
        path: 'Service',
        component: _gestion_service_gestion_service_component__WEBPACK_IMPORTED_MODULE_3__.GestionServiceComponent
    },
    {
        path: 'TypeConge',
        component: _gestion_type_conge_gestion_type_conge_component__WEBPACK_IMPORTED_MODULE_4__.GestionTypeCongeComponent
    },
    {
        path: 'affectations',
        component: _affectation_chefs_affectation_chefs_component__WEBPACK_IMPORTED_MODULE_5__.AffectationChefsComponent
    },
    {
        path: 'tableau-affectations',
        component: _affectation_table_affectation_table_component__WEBPACK_IMPORTED_MODULE_6__.AffectationTableComponent
    },
    {
        path: 'employes-info',
        component: _employes_info_employes_info_component__WEBPACK_IMPORTED_MODULE_7__.EmployesInfoComponent
    },
    {
        path: 'validation-conges',
        component: _validation_conges_validation_conges_component__WEBPACK_IMPORTED_MODULE_8__.ValidationCongesComponent
    },
    {
        path: 'historique-decisions',
        component: _historique_decisions_historique_decisions_component__WEBPACK_IMPORTED_MODULE_9__.HistoriqueDecisionsComponent
    },
    {
        path: 'statistiques',
        component: _statistiques_rh_statistiques_rh_component__WEBPACK_IMPORTED_MODULE_11__.StatistiquesRhComponent
    },
    {
        path: 'rapports',
        component: _rapports_rh_rapports_rh_component__WEBPACK_IMPORTED_MODULE_12__.RapportsRhComponent
    },
    {
        path: 'configuration',
        component: _configuration_rh_configuration_rh_component__WEBPACK_IMPORTED_MODULE_13__.ConfigurationRhComponent
    },
    {
        path: 'notifications',
        component: _notifications_rh_notifications_rh_component__WEBPACK_IMPORTED_MODULE_14__.NotificationsRhComponent
    }
];
class RhRoutingModule {
}
RhRoutingModule.ɵfac = function RhRoutingModule_Factory(t) { return new (t || RhRoutingModule)(); };
RhRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: RhRoutingModule });
RhRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](RhRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule] }); })();


/***/ }),

/***/ 87470:
/*!*********************************************!*\
  !*** ./src/app/pages/espaceRh/rh.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RhModule": () => (/* binding */ RhModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var _rh_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rh-routing.module */ 10329);
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ui/ui.module */ 63091);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 68346);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-apexcharts */ 86571);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-pagination */ 19746);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 24352);
/* harmony import */ var _espace_rh_espace_rh_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./espace-rh/espace-rh.component */ 75457);
/* harmony import */ var _historique_rh_historique_rh_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./historique-rh/historique-rh.component */ 38025);
/* harmony import */ var _gestionutilisateur_gestionutilisateur_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gestionutilisateur/gestionutilisateur.component */ 18486);
/* harmony import */ var _gestion_service_gestion_service_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gestion-service/gestion-service.component */ 5361);
/* harmony import */ var _gestion_type_conge_gestion_type_conge_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gestion-type-conge/gestion-type-conge.component */ 27942);
/* harmony import */ var _validation_conges_validation_conges_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./validation-conges/validation-conges.component */ 85216);
/* harmony import */ var _historique_decisions_historique_decisions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./historique-decisions/historique-decisions.component */ 7664);
/* harmony import */ var _rh_dashboard_rh_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rh-dashboard/rh-dashboard.component */ 3285);
/* harmony import */ var _statistiques_rh_statistiques_rh_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./statistiques-rh/statistiques-rh.component */ 79955);
/* harmony import */ var _rapports_rh_rapports_rh_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rapports-rh/rapports-rh.component */ 3163);
/* harmony import */ var _configuration_rh_configuration_rh_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./configuration-rh/configuration-rh.component */ 1456);
/* harmony import */ var _notifications_rh_notifications_rh_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./notifications-rh/notifications-rh.component */ 67315);
/* harmony import */ var _affectation_chefs_affectation_chefs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./affectation-chefs/affectation-chefs.component */ 11926);
/* harmony import */ var _affectation_table_affectation_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../affectation-table/affectation-table.component */ 11555);
/* harmony import */ var _employes_info_employes_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./employes-info/employes-info.component */ 68293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 14001);


























class RhModule {
}
RhModule.ɵfac = function RhModule_Factory(t) { return new (t || RhModule)(); };
RhModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: RhModule });
RhModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule,
            _rh_routing_module__WEBPACK_IMPORTED_MODULE_0__.RhRoutingModule,
            _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbDropdownModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbTooltipModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_22__.NgApexchartsModule,
            ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_23__.DropzoneModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbDatepickerModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_25__.NgxPaginationModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](RhModule, { declarations: [_espace_rh_espace_rh_component__WEBPACK_IMPORTED_MODULE_3__.EspaceRhComponent,
        _historique_rh_historique_rh_component__WEBPACK_IMPORTED_MODULE_4__.HistoriqueRhComponent,
        _gestionutilisateur_gestionutilisateur_component__WEBPACK_IMPORTED_MODULE_5__.GestionutilisateurComponent,
        _gestion_service_gestion_service_component__WEBPACK_IMPORTED_MODULE_6__.GestionServiceComponent,
        _gestion_type_conge_gestion_type_conge_component__WEBPACK_IMPORTED_MODULE_7__.GestionTypeCongeComponent,
        _validation_conges_validation_conges_component__WEBPACK_IMPORTED_MODULE_8__.ValidationCongesComponent,
        _historique_decisions_historique_decisions_component__WEBPACK_IMPORTED_MODULE_9__.HistoriqueDecisionsComponent,
        _rh_dashboard_rh_dashboard_component__WEBPACK_IMPORTED_MODULE_10__.RhDashboardComponent,
        _statistiques_rh_statistiques_rh_component__WEBPACK_IMPORTED_MODULE_11__.StatistiquesRhComponent,
        _rapports_rh_rapports_rh_component__WEBPACK_IMPORTED_MODULE_12__.RapportsRhComponent,
        _configuration_rh_configuration_rh_component__WEBPACK_IMPORTED_MODULE_13__.ConfigurationRhComponent,
        _notifications_rh_notifications_rh_component__WEBPACK_IMPORTED_MODULE_14__.NotificationsRhComponent,
        _affectation_chefs_affectation_chefs_component__WEBPACK_IMPORTED_MODULE_15__.AffectationChefsComponent,
        _affectation_table_affectation_table_component__WEBPACK_IMPORTED_MODULE_16__.AffectationTableComponent,
        _employes_info_employes_info_component__WEBPACK_IMPORTED_MODULE_17__.EmployesInfoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule,
        _rh_routing_module__WEBPACK_IMPORTED_MODULE_0__.RhRoutingModule,
        _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbDropdownModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbTooltipModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_22__.NgApexchartsModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_23__.DropzoneModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbDatepickerModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_25__.NgxPaginationModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 23155:
/*!**********************************************!*\
  !*** ./src/app/pages/espaceRh/rh.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RhService": () => (/* binding */ RhService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);





class RhService {
    constructor(http) {
        this.http = http;
        this.BASE_API = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl.replace('/api', '')}/`;
        this.getService = () => {
            return this.http.get(this.BASE_API + "service/getService");
        };
        this.getTypeConge = () => {
            return this.http.get(this.BASE_API + "service/getTypeConge");
        };
        this.getDemandeRh = () => {
            return this.http.get(this.BASE_API + "conge/getDemandeRh");
        };
        this.getDemandeRhNotNull = () => {
            return this.http.get(this.BASE_API + "conge/getDemandeRhNotNull");
        };
        this.GetUser = () => {
            return this.http.get(this.BASE_API + "api/auth/getUsers");
        };
        this.DeleteService = (id) => {
            return this.http.delete(this.BASE_API + "service/service/" + id);
        };
        this.DeleteType = (id) => {
            return this.http.delete(this.BASE_API + "service/type/" + id);
        };
    }
    addService(data) {
        return this.http.post(this.BASE_API + "service/addService", data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
            // Pass through the error message
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
        }));
    }
    addTypeConge(data) {
        return this.http.post(this.BASE_API + "service/addTypeConge", data);
    }
    UpdateDemandeRh(data) {
        return this.http.put(this.BASE_API + "conge/updateRh", data);
    }
    UpdateRole(data) {
        return this.http.put(this.BASE_API + "api/auth/setRole", data);
    }
    UpdatePss(data) {
        return this.http.put(this.BASE_API + "api/auth/updatePass", data);
    }
    Updatepers(data) {
        console.log("Sending update request:", data);
        return this.http.put(this.BASE_API + "api/auth/add", data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(response => console.log("Response received:", response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
            console.error("Error updating user:", error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
        }));
    }
    getUserByMatricule(matricule) {
        return this.http.get(this.BASE_API + "api/auth/gett/" + matricule);
    }
    getChefsByService(serviceId) {
        return this.http.get(this.BASE_API + `api/auth/getChefsByService/${serviceId}`);
    }
    // Méthodes pour les affectations
    getServices() {
        return this.http.get(this.BASE_API + "service/getService");
    }
    getChefs() {
        return this.http.get(this.BASE_API + "api/auth/getChefs");
    }
    getEmployees() {
        return this.http.get(this.BASE_API + "api/auth/getEmployees");
    }
    assignChef(serviceId, chefId) {
        return this.http.post(this.BASE_API + `service/assignChef/${serviceId}/${chefId}`, {});
    }
    assignEmployee(serviceId, employeeId) {
        return this.http.post(this.BASE_API + `service/assignEmployee/${serviceId}/${employeeId}`, {});
    }
    // Méthodes pour la validation des congés
    getPendingCongesRh() {
        return this.http.get(this.BASE_API + "conge/getPendingCongesRh");
    }
    getHistoriqueRh(status) {
        const url = status ? `conge/getHistoriqueRh?status=${status}` : "conge/getHistoriqueRh";
        return this.http.get(this.BASE_API + url);
    }
    rhDecision(congeId, decision) {
        return this.http.put(this.BASE_API + `conge/rhDecision/${congeId}`, { decision });
    }
    // Méthodes pour l'historique des décisions (utilise l'endpoint existant)
    getHistoriqueDecisions() {
        return this.http.get(this.BASE_API + "conge/getHistoriqueRh");
    }
    // Méthodes pour les statistiques RH (utilise les endpoints existants)
    // Les statistiques sont calculées côté client à partir des données existantes
    // Méthodes pour la gestion des utilisateurs
    createUser(userData) {
        return this.http.post(this.BASE_API + "api/auth/createUser", userData);
    }
    deleteUser(userId) {
        return this.http.delete(this.BASE_API + `api/auth/deleteUser/${userId}`);
    }
    // Méthodes pour la gestion des services
    updateService(serviceData) {
        return this.http.put(this.BASE_API + "service/updateService", serviceData);
    }
    // Méthodes pour la gestion des types de congés
    updateTypeConge(typeData) {
        return this.http.put(this.BASE_API + "service/updateTypeConge", typeData);
    }
}
RhService.ɵfac = function RhService_Factory(t) { return new (t || RhService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
RhService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: RhService, factory: RhService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 79955:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/espaceRh/statistiques-rh/statistiques-rh.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatistiquesRhComponent": () => (/* binding */ StatistiquesRhComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _rh_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rh.service */ 23155);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/tokenservice.service */ 73565);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);






function StatistiquesRhComponent_div_23_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StatistiquesRhComponent_div_23_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r2.router.navigate(["/account/login"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Se connecter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function StatistiquesRhComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, StatistiquesRhComponent_div_23_div_3_Template, 4, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMsg, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.errorMsg.includes("d\u00E9monstration"));
} }
class StatistiquesRhComponent {
    constructor(rhService, router, tokenStorage) {
        this.rhService = rhService;
        this.router = router;
        this.tokenStorage = tokenStorage;
        this.statistics = {
            totalUsers: 0,
            totalServices: 0,
            totalTypeConges: 0,
            pendingConges: 0,
            approvedConges: 0,
            rejectedConges: 0,
            congesByMonth: [],
            congesByService: [],
            congesByType: []
        };
        this.loading = false;
        this.errorMsg = '';
        this.selectedPeriod = '30'; // 30, 90, 365 jours
    }
    ngOnInit() {
        // Vérifier l'authentification d'abord
        const token = this.tokenStorage.getToken();
        if (!token) {
            this.loadDemoData();
            return;
        }
        this.loadStatistics();
    }
    loadDemoData() {
        this.loading = true;
        this.errorMsg = 'Mode démonstration - Veuillez vous connecter pour voir les vraies données';
        // Données de démonstration
        setTimeout(() => {
            this.statistics = {
                totalUsers: 156,
                totalServices: 12,
                totalTypeConges: 8,
                pendingConges: 5,
                approvedConges: 45,
                rejectedConges: 3,
                congesByMonth: [
                    { month: 'Jan', count: 12 },
                    { month: 'Fév', count: 18 },
                    { month: 'Mar', count: 15 },
                    { month: 'Avr', count: 22 },
                    { month: 'Mai', count: 28 },
                    { month: 'Juin', count: 25 }
                ],
                congesByService: [
                    { name: 'IT', conges: 15, color: 'primary' },
                    { name: 'RH', conges: 12, color: 'success' },
                    { name: 'Finance', conges: 8, color: 'info' },
                    { name: 'Marketing', conges: 6, color: 'warning' }
                ],
                congesByType: [
                    { name: 'Congés payés', count: 25, color: 'primary' },
                    { name: 'Maladie', count: 8, color: 'warning' },
                    { name: 'Maternité', count: 3, color: 'info' }
                ]
            };
            this.loading = false;
        }, 1000);
    }
    loadStatistics() {
        this.loading = true;
        this.errorMsg = '';
        // Vérifier l'authentification avant de charger les données
        const token = this.tokenStorage.getToken();
        if (!token) {
            this.errorMsg = 'Session expirée. Redirection vers la page de connexion...';
            setTimeout(() => {
                this.router.navigate(['/account/login']);
            }, 2000);
            this.loading = false;
            return;
        }
        // Charger toutes les données en parallèle en utilisant les endpoints existants
        Promise.all([
            this.rhService.GetUser().toPromise().catch(err => {
                console.warn('Erreur lors du chargement des utilisateurs:', err);
                return [];
            }),
            this.rhService.getService().toPromise().catch(err => {
                console.warn('Erreur lors du chargement des services:', err);
                return [];
            }),
            this.rhService.getTypeConge().toPromise().catch(err => {
                console.warn('Erreur lors du chargement des types de congés:', err);
                return [];
            }),
            this.rhService.getPendingCongesRh().toPromise().catch(err => {
                console.warn('Erreur lors du chargement des congés en attente:', err);
                return [];
            }),
            this.rhService.getHistoriqueRh().toPromise().catch(err => {
                console.warn('Erreur lors du chargement de l\'historique:', err);
                return [];
            })
        ]).then(([users, services, typeConges, pendingConges, historique]) => {
            // Mettre à jour les statistiques de base
            this.statistics.totalUsers = (users === null || users === void 0 ? void 0 : users.length) || 0;
            this.statistics.totalServices = (services === null || services === void 0 ? void 0 : services.length) || 0;
            this.statistics.totalTypeConges = (typeConges === null || typeConges === void 0 ? void 0 : typeConges.length) || 0;
            this.statistics.pendingConges = (pendingConges === null || pendingConges === void 0 ? void 0 : pendingConges.length) || 0;
            // Calculer les congés approuvés et refusés
            const allConges = historique || [];
            this.statistics.approvedConges = allConges.filter(c => c.repRh === 'APPROUVE').length;
            this.statistics.rejectedConges = allConges.filter(c => c.repRh === 'REFUSE').length;
            // Générer des données de démonstration pour les graphiques
            this.statistics.congesByMonth = this.generateCongesByMonth(allConges);
            this.statistics.congesByService = this.generateCongesByService(allConges, services);
            this.statistics.congesByType = this.generateCongesByType(allConges, typeConges);
            this.loading = false;
        }).catch(error => {
            console.error('Erreur lors du chargement des statistiques:', error);
            if (error.status === 401) {
                this.errorMsg = 'Session expirée. Redirection vers la page de connexion...';
                setTimeout(() => {
                    this.router.navigate(['/account/login']);
                }, 2000);
            }
            else {
                this.errorMsg = 'Erreur lors du chargement des statistiques. Veuillez réessayer.';
            }
            this.loading = false;
        });
    }
    onPeriodChange(period) {
        this.selectedPeriod = period;
        this.loadStatistics();
    }
    refresh() {
        this.loadStatistics();
    }
    getApprovalRate() {
        const total = this.statistics.approvedConges + this.statistics.rejectedConges;
        if (total === 0)
            return 0;
        return Math.round((this.statistics.approvedConges / total) * 100);
    }
    generateCongesByMonth(conges) {
        const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
        const currentYear = new Date().getFullYear();
        return months.map((month, index) => {
            const monthConges = conges.filter(conge => {
                const congeDate = new Date(conge.dateDeb || conge.dateCng);
                return congeDate.getFullYear() === currentYear && congeDate.getMonth() === index;
            });
            return { month, count: monthConges.length };
        });
    }
    generateCongesByService(conges, services) {
        const colors = ['primary', 'success', 'info', 'warning', 'danger', 'secondary'];
        return (services === null || services === void 0 ? void 0 : services.slice(0, 6).map((service, index) => {
            const serviceConges = conges.filter(conge => {
                var _a, _b, _c;
                return ((_b = (_a = conge.personnel) === null || _a === void 0 ? void 0 : _a.service) === null || _b === void 0 ? void 0 : _b.id) === service.id ||
                    ((_c = conge.personnel) === null || _c === void 0 ? void 0 : _c.serviceId) === service.id;
            });
            return {
                name: service.nom || service.name || `Service ${index + 1}`,
                conges: serviceConges.length,
                color: colors[index % colors.length]
            };
        })) || [];
    }
    generateCongesByType(conges, typeConges) {
        const colors = ['primary', 'success', 'info', 'warning', 'danger'];
        return (typeConges === null || typeConges === void 0 ? void 0 : typeConges.slice(0, 5).map((type, index) => {
            const typeCongesCount = conges.filter(conge => {
                var _a;
                return ((_a = conge.typeConge) === null || _a === void 0 ? void 0 : _a.id) === type.id ||
                    conge.typeCongeId === type.id;
            });
            return {
                name: type.nom || type.name || `Type ${index + 1}`,
                count: typeCongesCount.length,
                color: colors[index % colors.length]
            };
        })) || [];
    }
    exportToExcel() {
        // Implémentation future pour l'export Excel
        console.log('Export Excel en cours de développement');
    }
}
StatistiquesRhComponent.ɵfac = function StatistiquesRhComponent_Factory(t) { return new (t || StatistiquesRhComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_rh_service__WEBPACK_IMPORTED_MODULE_0__.RhService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorage)); };
StatistiquesRhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StatistiquesRhComponent, selectors: [["app-statistiques-rh"]], decls: 181, vars: 14, consts: [[1, "container-fluid"], [1, "row", "mb-4"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "mb-1"], [1, "text-muted", "mb-0"], [1, "d-flex", "gap-2"], [1, "form-select", 3, "ngModel", "ngModelChange", "change"], ["value", "30"], ["value", "90"], ["value", "365"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "mdi", "mdi-refresh"], [1, "btn", "btn-success", 3, "click"], [1, "mdi", "mdi-download"], ["class", "alert alert-warning", 4, "ngIf"], [1, "col-xl-3", "col-md-6"], [1, "card", "bg-primary", "text-white"], [1, "card-body"], [1, "d-flex", "justify-content-between"], [1, "card-title"], [1, "mb-0"], [1, "align-self-center"], [1, "mdi", "mdi-account-group", "display-4"], [1, "card", "bg-success", "text-white"], [1, "mdi", "mdi-office-building", "display-4"], [1, "card", "bg-info", "text-white"], [1, "mdi", "mdi-calendar-multiple", "display-4"], [1, "card", "bg-warning", "text-white"], [1, "mdi", "mdi-clock-outline", "display-4"], [1, "col-xl-4", "col-md-6"], [1, "mdi", "mdi-check-circle", "display-4"], [1, "card", "bg-danger", "text-white"], [1, "mdi", "mdi-close-circle", "display-4"], [1, "card", "bg-secondary", "text-white"], [1, "mdi", "mdi-chart-line", "display-4"], [1, "col-xl-6"], [1, "card"], [1, "chart-container"], ["id", "congesByMonthChart"], ["id", "congesByServiceChart"], [1, "row"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "table-light"], [1, "badge", "bg-success"], [1, "alert", "alert-warning"], [1, "mdi", "mdi-alert-circle"], ["class", "mt-2", 4, "ngIf"], [1, "mt-2"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "mdi", "mdi-login"]], template: function StatistiquesRhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Statistiques RH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Analyse des donn\u00E9es et tendances des ressources humaines");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function StatistiquesRhComponent_Template_select_ngModelChange_10_listener($event) { return ctx.selectedPeriod = $event; })("change", function StatistiquesRhComponent_Template_select_change_10_listener() { return ctx.onPeriodChange(ctx.selectedPeriod); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "30 derniers jours");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "90 derniers jours");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "1 an");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StatistiquesRhComponent_Template_button_click_17_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Rafra\u00EEchir ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StatistiquesRhComponent_Template_button_click_20_listener() { return ctx.exportToExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, StatistiquesRhComponent_div_23_Template, 4, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Total Utilisateurs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Types de Cong\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "En Attente");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Cong\u00E9s Approuv\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Cong\u00E9s Refus\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Taux d'Approbation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Cong\u00E9s par Mois");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "canvas", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "Cong\u00E9s par Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](117, "canvas", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "R\u00E9sum\u00E9 D\u00E9taill\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "table", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "thead", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "M\u00E9trique");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Valeur");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "\u00C9volution");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, "Tendance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "Total Utilisateurs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "+5%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, "\u2197");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "Cong\u00E9s Approuv\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, "+12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "\u2197");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, "Cong\u00E9s Refus\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, "-3%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "\u2198");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, "Taux d'Approbation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](175);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177, "+8%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](180, "\u2197");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedPeriod);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.statistics.totalUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.statistics.totalServices);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.statistics.totalTypeConges);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.statistics.pendingConges);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.statistics.approvedConges);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.statistics.rejectedConges);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.getApprovalRate(), "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.statistics.totalUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.statistics.approvedConges);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.statistics.rejectedConges);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.getApprovalRate(), "%");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: [".card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0.5rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n  transform: translateY(-2px);\n}\n.card.bg-primary[_ngcontent-%COMP%], .card.bg-success[_ngcontent-%COMP%], .card.bg-info[_ngcontent-%COMP%], .card.bg-warning[_ngcontent-%COMP%], .card.bg-danger[_ngcontent-%COMP%], .card.bg-secondary[_ngcontent-%COMP%] {\n  border: none;\n}\n.card.bg-primary[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .card.bg-success[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .card.bg-info[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .card.bg-warning[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .card.bg-danger[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .card.bg-secondary[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.card.bg-primary[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .card.bg-success[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .card.bg-info[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .card.bg-warning[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .card.bg-danger[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .card.bg-secondary[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  opacity: 0.9;\n}\n.card.bg-primary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .card.bg-success[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .card.bg-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .card.bg-warning[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .card.bg-danger[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .card.bg-secondary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  margin: 0;\n}\n.card.bg-primary[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%], .card.bg-success[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%], .card.bg-info[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%], .card.bg-warning[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%], .card.bg-danger[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%], .card.bg-secondary[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  opacity: 0.8;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  font-weight: 500;\n  padding: 0.75rem 1rem;\n  transition: all 0.3s ease;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.chart-container[_ngcontent-%COMP%] {\n  height: 300px;\n  position: relative;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 2px solid #dee2e6;\n  font-weight: 600;\n  color: #495057;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.375rem;\n}\n.alert[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  border: none;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\nh2[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 700;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n}\n@keyframes pulse {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.loading[_ngcontent-%COMP%] {\n  animation: pulse 1.5s ease-in-out infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpcXVlcy1yaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHdDQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUNFO0VBQ0UseUNBQUE7RUFDQSwyQkFBQTtBQUNKO0FBR0E7Ozs7OztFQU1FLFlBQUE7QUFBRjtBQUVFOzs7Ozs7RUFDRSxlQUFBO0FBS0o7QUFGRTs7Ozs7O0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQVNKO0FBTkU7Ozs7OztFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFhSjtBQVZFOzs7Ozs7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFpQko7QUFiQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBZ0JGO0FBZEU7RUFDRSwyQkFBQTtBQWdCSjtBQVpBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBZUY7QUFYRTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFjSjtBQVhFO0VBQ0Usc0JBQUE7QUFhSjtBQVRBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FBWUY7QUFUQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQVlGO0FBVkU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFZSjtBQVJBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBV0Y7QUFSQTtFQUNFLHlCQUFBO0FBV0Y7QUFQQTtFQUNFO0lBQUssVUFBQTtFQVdMO0VBVkE7SUFBTSxZQUFBO0VBYU47RUFaQTtJQUFPLFVBQUE7RUFlUDtBQUNGO0FBYkE7RUFDRSwwQ0FBQTtBQWVGIiwiZmlsZSI6InN0YXRpc3RpcXVlcy1yaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsMCwwLDAuMTUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQuYmctcHJpbWFyeSxcclxuLmNhcmQuYmctc3VjY2VzcyxcclxuLmNhcmQuYmctaW5mbyxcclxuLmNhcmQuYmctd2FybmluZyxcclxuLmNhcmQuYmctZGFuZ2VyLFxyXG4uY2FyZC5iZy1zZWNvbmRhcnkge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBcclxuICAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5kaXNwbGF5LTQge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5jaGFydC1jb250YWluZXIge1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gIHRoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RlZTJlNjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICB9XHJcbiAgXHJcbiAgdGQge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbn1cclxuXHJcbi5hbGVydCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBcclxuICAmLmFsZXJ0LWRhbmdlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xyXG4gICAgY29sb3I6ICM3MjFjMjQ7XHJcbiAgfVxyXG59XHJcblxyXG5oMiB7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnRleHQtbXV0ZWQge1xyXG4gIGNvbG9yOiAjNmM3NTdkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIEFuaW1hdGlvbiBwb3VyIGxlIGNoYXJnZW1lbnRcclxuQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgMCUgeyBvcGFjaXR5OiAxOyB9XHJcbiAgNTAlIHsgb3BhY2l0eTogMC41OyB9XHJcbiAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuLmxvYWRpbmcge1xyXG4gIGFuaW1hdGlvbjogcHVsc2UgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 85216:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/espaceRh/validation-conges/validation-conges.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationCongesComponent": () => (/* binding */ ValidationCongesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_services_rh_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/rh.service */ 87893);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);




function ValidationCongesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMsg);
} }
function ValidationCongesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.message);
} }
function ValidationCongesComponent_div_10_tr_21_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationCongesComponent_div_10_tr_21_Template_button_click_25_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const c_r10 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.decide(c_r10, "APPROUVE"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationCongesComponent_div_10_tr_21_Template_button_click_27_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const c_r10 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r13.decide(c_r10, "REFUSE"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u2716");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationCongesComponent_div_10_tr_21_Template_button_click_29_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const c_r10 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.loadHistorique(c_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "H");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", c_r10.personnel == null ? null : c_r10.personnel.prenom, " ", c_r10.personnel == null ? null : c_r10.personnel.nom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r10.personnel == null ? null : c_r10.personnel.matriculeP);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 21, c_r10.dateDeb, "dd/MM"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 24, c_r10.dateFin, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r10.nbJours);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("badge bg-", ctx_r9.badge(c_r10.repChefsNiveau1), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r10.repChefsNiveau1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("badge bg-", ctx_r9.badge(c_r10.repChefsNiveau2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r10.repChefsNiveau2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("badge bg-", ctx_r9.badge(c_r10.repRh), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r10.repRh);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r9.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r9.loading);
} }
function ValidationCongesComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Employ\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "P\u00E9riode");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Jours");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Chef1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Chef2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "RH");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ValidationCongesComponent_div_10_tr_21_Template, 31, 27, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.filteredPending());
} }
function ValidationCongesComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Aucune demande en attente.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationCongesComponent_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", ctx_r5.historique.length, ")");
} }
function ValidationCongesComponent_div_28_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", c_r16.personnel == null ? null : c_r16.personnel.prenom, " ", c_r16.personnel == null ? null : c_r16.personnel.nom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r16.personnel == null ? null : c_r16.personnel.matriculeP);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 19, c_r16.dateDeb, "dd/MM"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 22, c_r16.dateFin, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r16.nbJours);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("badge bg-", ctx_r15.badge(c_r16.repChefsNiveau1), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r16.repChefsNiveau1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("badge bg-", ctx_r15.badge(c_r16.repChefsNiveau2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r16.repChefsNiveau2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("badge bg-", ctx_r15.badge(c_r16.repRh), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r16.repRh);
} }
function ValidationCongesComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Employ\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "P\u00E9riode");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Jours");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Chef1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Chef2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "RH");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ValidationCongesComponent_div_28_tr_19_Template, 23, 25, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.filteredHistorique());
} }
function ValidationCongesComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Pas d'historique encore.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ValidationCongesComponent {
    constructor(rh) {
        this.rh = rh;
        this.pending = [];
        this.historique = [];
        this.loading = false;
        this.message = '';
        this.errorMsg = '';
        this.filterText = '';
        this.histStatus = '';
        this.histFilter = '';
        this.lastLoadedHistStatus = '';
    }
    ngOnInit() {
        this.refresh();
        this.loadHistoriqueLastFilter();
    }
    refresh() { this.loadPending(); }
    loadPending() {
        this.loading = true;
        this.errorMsg = '';
        this.rh.getPendingCongesRh().subscribe({
            next: data => { this.pending = data || []; },
            error: e => { console.error(e); this.errorMsg = 'Erreur chargement pending'; },
            complete: () => this.loading = false
        });
    }
    loadHistorique(conge) {
        // si demandé pour un employé particulier, filtrer côté client après chargement global (simple pour début)
        this.rh.getHistoriqueRh(this.histStatus || undefined).subscribe({
            next: data => {
                var _a;
                this.historique = (data || []);
                if (conge && ((_a = conge.personnel) === null || _a === void 0 ? void 0 : _a.matriculeP)) {
                    const m = conge.personnel.matriculeP;
                    this.historique = this.historique.filter(h => { var _a; return ((_a = h.personnel) === null || _a === void 0 ? void 0 : _a.matriculeP) === m; });
                }
            },
            error: e => console.error(e)
        });
    }
    loadHistoriqueLastFilter() {
        this.lastLoadedHistStatus = this.histStatus;
        this.loadHistorique();
    }
    decide(c, decision) {
        if (this.loading)
            return;
        this.loading = true;
        this.message = '';
        this.rh.rhDecision(c.id, decision).subscribe({
            next: _ => { this.message = `Décision ${decision}`; this.refresh(); this.loadHistoriqueLastFilter(); },
            error: e => { console.error(e); this.message = 'Erreur décision'; },
            complete: () => this.loading = false
        });
    }
    filteredPending() {
        if (!this.filterText)
            return this.pending;
        const t = this.filterText.toLowerCase();
        return this.pending.filter(c => { var _a, _b; return (((_a = c.personnel) === null || _a === void 0 ? void 0 : _a.matriculeP) || '').toLowerCase().includes(t) || (((_b = c.personnel) === null || _b === void 0 ? void 0 : _b.nom) || '').toLowerCase().includes(t); });
    }
    filteredHistorique() {
        if (!this.histFilter)
            return this.historique;
        const t = this.histFilter.toLowerCase();
        return this.historique.filter(c => { var _a, _b; return (((_a = c.personnel) === null || _a === void 0 ? void 0 : _a.matriculeP) || '').toLowerCase().includes(t) || (((_b = c.personnel) === null || _b === void 0 ? void 0 : _b.nom) || '').toLowerCase().includes(t); });
    }
    badge(status) {
        switch (status) {
            case 'APPROUVE': return 'success';
            case 'REFUSE': return 'danger';
            case 'EN_ATTENTE': return 'warning';
            default: return 'secondary';
        }
    }
}
ValidationCongesComponent.ɵfac = function ValidationCongesComponent_Factory(t) { return new (t || ValidationCongesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_rh_service__WEBPACK_IMPORTED_MODULE_0__.RhService)); };
ValidationCongesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ValidationCongesComponent, selectors: [["app-validation-conges"]], decls: 31, vars: 11, consts: [[1, "card", "mb-3"], [1, "card-body"], [1, "card-title", "mb-0"], [1, "d-flex", "gap-2", "align-items-center", "mt-2"], ["placeholder", "Filtrer (matricule/nom)", 1, "form-control", 2, "max-width", "260px", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "disabled", "click"], ["class", "alert alert-danger py-1 mt-2", 4, "ngIf"], ["class", "alert alert-info py-1 mt-2", 4, "ngIf"], ["class", "table-responsive mt-3", 4, "ngIf", "ngIfElse"], ["emptyPending", ""], [1, "card"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "mb-0"], ["class", "text-muted", 4, "ngIf"], [1, "d-flex", "gap-2"], [1, "form-select", "form-select-sm", 2, "width", "160px", 3, "ngModel", "ngModelChange", "change"], ["value", ""], ["value", "APPROUVE"], ["value", "REFUSE"], ["placeholder", "Filtrer", 1, "form-control", "form-control-sm", 2, "width", "180px", 3, "ngModel", "ngModelChange"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["emptyHist", ""], [1, "alert", "alert-danger", "py-1", "mt-2"], [1, "alert", "alert-info", "py-1", "mt-2"], [1, "table-responsive", "mt-3"], [1, "table", "table-sm", "align-middle"], [4, "ngFor", "ngForOf"], [1, "text-muted"], [1, "btn-group", "btn-group-sm"], [1, "btn", "btn-success", 3, "disabled", "click"], [1, "btn", "btn-danger", 3, "disabled", "click"], ["title", "Historique", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "text-muted", "mt-3"], [1, "table-responsive"], [1, "table", "table-sm"]], template: function ValidationCongesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Cong\u00E9s en attente (RH)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ValidationCongesComponent_Template_input_ngModelChange_5_listener($event) { return ctx.filterText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidationCongesComponent_Template_button_click_6_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Rafra\u00EEchir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ValidationCongesComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ValidationCongesComponent_div_9_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ValidationCongesComponent_div_10_Template, 22, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ValidationCongesComponent_ng_template_11_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Historique RH ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ValidationCongesComponent_small_18_Template, 2, 1, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ValidationCongesComponent_Template_select_ngModelChange_20_listener($event) { return ctx.histStatus = $event; })("change", function ValidationCongesComponent_Template_select_change_20_listener() { return ctx.loadHistoriqueLastFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Tous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Approuv\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Refus\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ValidationCongesComponent_Template_input_ngModelChange_27_listener($event) { return ctx.histFilter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ValidationCongesComponent_div_28_Template, 20, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ValidationCongesComponent_ng_template_29_Template, 2, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filterText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pending == null ? null : ctx.pending.length)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.historique == null ? null : ctx.historique.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.histStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.histFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.historique == null ? null : ctx.historique.length)("ngIfElse", _r7);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: [".card-title[_ngcontent-%COMP%]{font-weight:600}.badge[_ngcontent-%COMP%]{min-width:70px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRpb24tY29uZ2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLGVBQWUsQ0FBQyxPQUFPLGNBQWMiLCJmaWxlIjoidmFsaWRhdGlvbi1jb25nZXMuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtdGl0bGV7Zm9udC13ZWlnaHQ6NjAwfS5iYWRnZXttaW4td2lkdGg6NzBweH0iXX0= */"] });


/***/ }),

/***/ 29168:
/*!********************************************************!*\
  !*** ./src/app/services/affectation-simple.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AffectationSimpleService": () => (/* binding */ AffectationSimpleService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 99457);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);





class AffectationSimpleService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:8089/api/rh';
    }
    // Méthode pour obtenir les headers d'authentification
    getAuthHeaders() {
        // Recherche du token dans différents emplacements de stockage
        let token = sessionStorage.getItem('auth-token') ||
            sessionStorage.getItem('token') ||
            sessionStorage.getItem('authToken') ||
            localStorage.getItem('accessToken') ||
            localStorage.getItem('token') ||
            localStorage.getItem('authToken');
        if (token && !token.startsWith('Bearer ')) {
            token = 'Bearer ' + token;
        }
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        if (token) {
            headers['Authorization'] = token;
        }
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders(headers);
    }
    // ===== CRUD OPERATIONS =====
    // Récupérer toutes les affectations
    getAllAffectations() {
        const headers = this.getAuthHeaders();
        console.log('📡 Récupération des affectations...');
        return this.http.get(`${this.apiUrl}/affectations`, { headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(affectations => {
            console.log('✅ Affectations reçues:', affectations);
            return affectations;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
            console.error('❌ Erreur getAllAffectations:', error);
            throw error;
        }));
    }
    // Récupérer tous les services
    getServices() {
        const headers = this.getAuthHeaders();
        console.log('📡 Appel API getServices avec headers:', headers);
        return this.http.get(`${this.apiUrl}/services`, { headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(services => {
            console.log('✅ Services reçus:', services);
            return services;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
            console.error('❌ Erreur getServices:', error);
            throw error;
        }));
    }
    // Récupérer les chefs disponibles (avec rôle CHEF_SERVICE)
    getChefsDisponibles() {
        const headers = this.getAuthHeaders();
        console.log('📡 Appel API getChefsDisponibles avec headers:', headers);
        return this.http.get(`${this.apiUrl}/chefs-disponibles`, { headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(chefs => {
            console.log('✅ Chefs disponibles:', chefs);
            return chefs;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
            console.error('❌ Erreur getChefsDisponibles:', error);
            throw error;
        }));
    }
    // Créer une nouvelle affectation
    creerAffectation(affectation) {
        const headers = this.getAuthHeaders();
        console.log('📡 Création d\'affectation:', affectation);
        return this.http.post(`${this.apiUrl}/affectations`, affectation, { headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            console.log('✅ Affectation créée:', response);
            return response;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
            console.error('❌ Erreur creerAffectation:', error);
            throw error;
        }));
    }
    // Modifier une affectation existante
    modifierAffectation(serviceId, nouveauChefId) {
        const headers = this.getAuthHeaders();
        const request = { chefId: nouveauChefId };
        console.log('📡 Modification d\'affectation:', { serviceId, nouveauChefId });
        return this.http.put(`${this.apiUrl}/affectations/${serviceId}`, request, { headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            console.log('✅ Affectation modifiée:', response);
            return response;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
            console.error('❌ Erreur modifierAffectation:', error);
            throw error;
        }));
    }
    // Supprimer une affectation
    supprimerAffectation(serviceId) {
        const headers = this.getAuthHeaders();
        console.log('� Suppression d\'affectation:', serviceId);
        return this.http.delete(`${this.apiUrl}/affectations/${serviceId}`, { headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            console.log('✅ Affectation supprimée:', response);
            return response;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
            console.error('❌ Erreur supprimerAffectation:', error);
            throw error;
        }));
    }
    // ===== UTILITY METHODS =====
    // Vérifier si un chef est déjà affecté à un service (Chef A ou Chef B)
    isChefAlreadyAssigned(chefId, affectations) {
        return affectations.some(affectation => (affectation.chefA && affectation.chefA.id === chefId) ||
            (affectation.chefB && affectation.chefB.id === chefId));
    }
    // Obtenir le service d'un chef
    getChefService(chefId, affectations) {
        return affectations.find(affectation => (affectation.chefA && affectation.chefA.id === chefId) ||
            (affectation.chefB && affectation.chefB.id === chefId)) || null;
    }
    // ===== NOUVELLES MÉTHODES CHEF A / CHEF B =====
    /**
     * Affecter un chef A ou B à un service
     */
    affecterChef(request) {
        return this.http.post(`${this.apiUrl}/affectations/chef`, request, {
            headers: this.getAuthHeaders()
        });
    }
    /**
     * Supprimer l'affectation d'un chef A ou B
     */
    supprimerAffectationChef(serviceId, typeChef) {
        return this.http.delete(`${this.apiUrl}/affectations/chef/${serviceId}/${typeChef}`, {
            headers: this.getAuthHeaders()
        });
    }
    // Méthode de diagnostic pour tester les endpoints
    testEndpoints() {
        const headers = this.getAuthHeaders();
        console.log('🔍 Test des endpoints API...');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)({
            services: this.http.get(`${this.apiUrl}/services`, { headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
                console.error('❌ Erreur test services:', error);
                return [{ error: error.status + ' - ' + error.message }];
            })),
            chefs: this.http.get(`${this.apiUrl}/chefs-disponibles`, { headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
                console.error('❌ Erreur test chefs:', error);
                return [{ error: error.status + ' - ' + error.message }];
            })),
            affectations: this.http.get(`${this.apiUrl}/affectations`, { headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
                console.error('❌ Erreur test affectations:', error);
                return [{ error: error.status + ' - ' + error.message }];
            }))
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => {
            console.log('✅ Résultats des tests:', results);
            return results;
        }));
    }
}
AffectationSimpleService.ɵfac = function AffectationSimpleService_Factory(t) { return new (t || AffectationSimpleService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
AffectationSimpleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AffectationSimpleService, factory: AffectationSimpleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 48519:
/*!*******************************************************!*\
  !*** ./src/app/services/affectation-table.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AffectationTableService": () => (/* binding */ AffectationTableService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/services/tokenservice.service */ 73565);




class AffectationTableService {
    constructor(http, tokenStorage) {
        this.http = http;
        this.tokenStorage = tokenStorage;
        this.baseUrl = 'http://localhost:8089/api';
    }
    /**
     * Headers avec token d'authentification
     */
    getHttpHeaders() {
        const token = this.tokenStorage.getToken();
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': token ? `Bearer ${token}` : ''
        });
    }
    /**
     * Récupère tous les services avec leurs affectations
     */
    getServices() {
        return this.http.get(`${this.baseUrl}/services`, {
            headers: this.getHttpHeaders()
        });
    }
    /**
     * Récupère toutes les affectations complètes
     */
    getAllAffectations() {
        return this.http.get(`${this.baseUrl}/affectations`, {
            headers: this.getHttpHeaders()
        });
    }
    /**
     * Récupère tous les chefs disponibles
     */
    getAllChefs() {
        return this.http.get(`${this.baseUrl}/users/chefs`, {
            headers: this.getHttpHeaders()
        });
    }
    /**
     * Récupère les chefs disponibles (non affectés)
     */
    getAvailableChefs(excludeServiceId) {
        const params = excludeServiceId ? `?excludeServiceId=${excludeServiceId}` : '';
        return this.http.get(`${this.baseUrl}/users/chefs/available${params}`, {
            headers: this.getHttpHeaders()
        });
    }
    /**
     * Crée ou met à jour une affectation
     */
    saveAffectation(affectation) {
        return this.http.post(`${this.baseUrl}/affectations`, affectation, {
            headers: this.getHttpHeaders()
        });
    }
    /**
     * Met à jour une affectation existante
     */
    updateAffectation(serviceId, affectation) {
        return this.http.put(`${this.baseUrl}/affectations/${serviceId}`, affectation, {
            headers: this.getHttpHeaders()
        });
    }
    /**
     * Supprime une affectation (remet à null les chefs)
     */
    deleteAffectation(serviceId) {
        return this.http.delete(`${this.baseUrl}/affectations/${serviceId}`, {
            headers: this.getHttpHeaders()
        });
    }
    /**
     * Récupère les informations de l'utilisateur connecté
     */
    getCurrentUser() {
        return this.http.get(`${this.baseUrl}/auth/me`, {
            headers: this.getHttpHeaders()
        });
    }
}
AffectationTableService.ɵfac = function AffectationTableService_Factory(t) { return new (t || AffectationTableService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorage)); };
AffectationTableService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AffectationTableService, factory: AffectationTableService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_espaceRh_rh_module_ts.js.map