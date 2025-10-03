"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_projects_projects_module_ts"],{

/***/ 61685:
/*!***************************************************************************!*\
  !*** ./src/app/pages/projects/chef-dashboard/chef-dashboard.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChefDashboardComponent": () => (/* binding */ ChefDashboardComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _chef_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chef-service.service */ 14434);
/* harmony import */ var src_app_pages_tables_conge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/tables/conge.service */ 30139);
/* harmony import */ var src_app_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/tokenservice.service */ 73565);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);







function ChefDashboardComponent_div_12_tr_13_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", role_r8.nomRole, " ");
} }
function ChefDashboardComponent_div_12_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ChefDashboardComponent_div_12_tr_13_span_6_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", sub_r6.prenom, " ", sub_r6.nom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](sub_r6.matriculeP);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", sub_r6.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](sub_r6.serv == null ? null : sub_r6.serv.lib_serv);
} }
function ChefDashboardComponent_div_12_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "No subordinates found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ChefDashboardComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "thead", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Matricule");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ChefDashboardComponent_div_12_tr_13_Template, 9, 5, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ChefDashboardComponent_div_12_tr_14_Template, 3, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.subordinates);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.subordinates.length === 0);
} }
function ChefDashboardComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ChefDashboardComponent_div_13_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.onDateChange($event.target.valueAsDate); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChefDashboardComponent_div_13_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.loadToday(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Aujourd'hui ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](4, 2, ctx_r1.selectedDate, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.isLoading);
} }
function ChefDashboardComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Chargement...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Chargement des pointages...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1, a2) { return { "badge-present": a0, "badge-half-day": a1, "badge-absent": a2 }; };
function ChefDashboardComponent_div_15_ng_container_23_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pointage_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("fa-sign-in-alt", pointage_r16.typePoint === "E")("fa-sign-out-alt", pointage_r16.typePoint === "S")("fa-pause-circle", pointage_r16.typePoint === "I");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pointage_r16.typePoint, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 13, pointage_r16.datePoint, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r15.formatMinutes(pointage_r16.totalMinutesWorked));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r15.formatMinutes(pointage_r16.lateMinutes));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r15.formatMinutes(pointage_r16.overtimeMinutes));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](16, _c0, pointage_r16.status === "PRESENT", pointage_r16.status === "HALF_DAY", pointage_r16.status === "ABSENT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r15.getStatusDisplay(pointage_r16.status), "\n");
} }
function ChefDashboardComponent_div_15_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ChefDashboardComponent_div_15_ng_container_23_tr_9_Template, 18, 20, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const group_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", group_r14.pointages[0] == null ? null : group_r14.pointages[0].personnel == null ? null : group_r14.pointages[0].personnel.nom, " ", group_r14.pointages[0] == null ? null : group_r14.pointages[0].personnel == null ? null : group_r14.pointages[0].personnel.prenom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("(", group_r14.matricule, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Total des pointages: ", group_r14.totalEntries, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", group_r14.pointages);
} }
function ChefDashboardComponent_div_15_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Aucun pointage trouv\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ChefDashboardComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "thead", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Matricule");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Date & heure");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Temps total travaill\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Retard");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Heures suppl\u00E9mentaires");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ChefDashboardComponent_div_15_ng_container_23_Template, 10, 5, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, ChefDashboardComponent_div_15_tr_25_Template, 3, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Pointages du ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 3, ctx_r3.selectedDate, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 6, ctx_r3.groupedPointages$));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 8, ctx_r3.groupedPointages$)) == null ? null : tmp_2_0.length) === 0);
} }
// ...existing imports
class ChefDashboardComponent {
    constructor(chefServ, congeService, token) {
        this.chefServ = chefServ;
        this.congeService = congeService;
        this.token = token;
        this.subordinates = [];
        this.pointages = [];
        this.activeTab = 'team';
        this.selectedDate = new Date();
        this.isLoading = false;
        this.demandesChef = [];
        const currentUser = this.token.getUser();
        this.chefMatricule = currentUser === null || currentUser === void 0 ? void 0 : currentUser.matriculeP; //
    }
    ngOnInit() {
        this.loadSubordinates();
        this.loadDemandesPourChef();
        // Debug log
    }
    loadDemandesPourChef() {
        var _a;
        this.chefMatricule = this.chefMatricule || ((_a = this.token.getUser()) === null || _a === void 0 ? void 0 : _a.matriculeP);
        if (!this.chefMatricule)
            return;
        // Use CongeService via chefServ (or inject CongeService directly) — chefServ has wrapper
        this.congeService.getDemandesPourChef().subscribe({
            next: (data) => this.demandesChef = Array.isArray(data) ? data : [],
            error: (err) => console.error('Failed to load demandes for chef', err)
        });
    }
    approveRequest(id) {
        if (!confirm('Approuver cette demande ?'))
            return;
        this.congeService.chefDecisionSimple(id, 'APPROUVE').subscribe({
            next: () => this.loadDemandesPourChef(),
            error: (err) => sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Erreur', 'Impossible d\'approuver', 'error')
        });
    }
    rejectRequest(id) {
        if (!confirm('Refuser cette demande ?'))
            return;
        this.congeService.chefDecisionSimple(id, 'REFUSE').subscribe({
            next: () => this.loadDemandesPourChef(),
            error: (err) => sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Erreur', 'Impossible de refuser', 'error')
        });
    }
    loadSubordinates() {
        console.log("Chef Matricule:", this.chefMatricule); // Debug log
        if (this.chefMatricule) {
            this.chefServ.getSubordinates(this.chefMatricule).subscribe((data) => {
                console.log("API Response:", data); // Debug log
                this.subordinates = data;
            }, (error) => {
                console.error("API Error:", error); // Debug log
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', 'Failed to load subordinates', 'error');
            });
        }
    }
    getUser() {
        const user = localStorage.getItem('currentUser');
        return user ? JSON.parse(user) : null;
    }
    switchTab(tab) {
        this.activeTab = tab;
        if (tab === 'pointage') {
            this.loadPointages();
        }
    }
    loadPointages() {
        this.isLoading = true;
        if (this.chefMatricule) {
            this.chefServ.getSubordinatesPointage(this.chefMatricule, this.selectedDate)
                .subscribe({
                next: (data) => {
                    this.pointages = data;
                    this.groupedPointages$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(this.groupByMatricule(data));
                },
                error: (err) => this.handleError('Failed to load pointage records'),
                complete: () => this.isLoading = false
            });
        }
    }
    handleError(message) {
        console.error(message);
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', message, 'error');
    }
    groupByMatricule(pointages) {
        const groups = new Map();
        pointages.sort((a, b) => a.matricule.localeCompare(b.matricule) ||
            new Date(a.datePoint).getTime() - new Date(b.datePoint).getTime());
        pointages.forEach(p => {
            if (!groups.has(p.matricule)) {
                groups.set(p.matricule, {
                    matricule: p.matricule,
                    pointages: [],
                    totalEntries: 0
                });
            }
            const group = groups.get(p.matricule);
            group.pointages.push(p);
            group.totalEntries++;
        });
        return Array.from(groups.values());
    }
    formatTime(heures, minutes) {
        return `${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }
    onDateChange(newDate) {
        this.selectedDate = newDate;
        this.loadPointages();
    }
    // Add today button handler
    loadToday() {
        this.selectedDate = new Date();
        this.loadPointages();
    }
    formatMinutes(minutes) {
        if (minutes == null || isNaN(minutes)) {
            return '';
        }
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}h ${mins}m`;
    }
    getStatusDisplay(status) {
        switch (status === null || status === void 0 ? void 0 : status.toUpperCase()) {
            case 'PRESENT': return 'Present';
            case 'HALF_DAY': return 'Demi-journée';
            case 'ABSENT': return 'Absent';
            default: return status;
        }
    }
}
ChefDashboardComponent.ɵfac = function ChefDashboardComponent_Factory(t) { return new (t || ChefDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_chef_service_service__WEBPACK_IMPORTED_MODULE_1__.ChefServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_pages_tables_conge_service__WEBPACK_IMPORTED_MODULE_2__.CongeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_3__.TokenStorage)); };
ChefDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ChefDashboardComponent, selectors: [["app-chef-dashboard"]], decls: 16, vars: 8, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "card-title", "mb-0"], [1, "tab-link", 3, "click"], ["class", "table-responsive", 4, "ngIf"], ["class", "row mb-4", 4, "ngIf"], ["class", "text-center my-3", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "table-light"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "badge bg-primary", 4, "ngFor", "ngForOf"], [1, "badge", "bg-primary"], ["colspan", "4", 1, "text-center"], [1, "row", "mb-4"], [1, "col-md-6"], [1, "input-group", "date-filter-group"], ["type", "date", 1, "form-control", 3, "value", "change"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "disabled", "click"], [1, "text-center", "my-3"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2"], [1, "table", "table-bordered", "table-hover"], [1, "table-dark"], ["colspan", "7", 1, "text-center"], [2, "width", "15%"], [2, "width", "10%"], [2, "width", "20%"], [1, "group-header", "bg-light"], ["colspan", "2"], [1, "text-muted"], ["colspan", "5"], [1, "badge", "badge-pill"], [1, "fas"], [1, "badge", 3, "ngClass"]], template: function ChefDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChefDashboardComponent_Template_span_click_7_listener() { return ctx.switchTab("team"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " My Team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChefDashboardComponent_Template_span_click_10_listener() { return ctx.switchTab("pointage"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Pointage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ChefDashboardComponent_div_12_Template, 15, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ChefDashboardComponent_div_13_Template, 7, 5, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ChefDashboardComponent_div_14_Template, 6, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ChefDashboardComponent_div_15_Template, 27, 10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.activeTab === "team");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.activeTab === "pointage");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeTab === "team");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeTab === "pointage");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeTab === "pointage");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe], styles: [".tab-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 8px 12px;\n  border-radius: 4px;\n  transition: all 0.3s ease;\n}\n.tab-link[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.tab-link.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #3b7ddd;\n}\n.fa-sign-in-alt[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.fa-sign-out-alt[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.fa-pause-circle[_ngcontent-%COMP%] {\n  color: #ffc107;\n}\n.date-filter-group[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n.date-filter-group[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  filter: invert(0.5);\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  grid-gap: 0.5rem;\n  gap: 0.5rem;\n  font-size: 0.85rem;\n  letter-spacing: 0.05em;\n}\n.badge-present[_ngcontent-%COMP%] {\n  background-color: rgba(40, 167, 69, 0.15) !important;\n  border: 1px solid #23923d;\n  color: #28a745 !important;\n  font-weight: 500;\n  padding: 0.5em 0.75em;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n.badge-present[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(40, 167, 69, 0.2);\n}\n.badge-half-day[_ngcontent-%COMP%] {\n  background-color: rgba(255, 193, 7, 0.15) !important;\n  border: 1px solid #edb100;\n  color: #ba8b00 !important;\n  font-weight: 500;\n  padding: 0.5em 0.75em;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n.badge-half-day[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(255, 193, 7, 0.2);\n}\n.badge-absent[_ngcontent-%COMP%] {\n  background-color: rgba(220, 53, 69, 0.15) !important;\n  border: 1px solid #d32535;\n  color: #dc3545 !important;\n  font-weight: 500;\n  padding: 0.5em 0.75em;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n.badge-absent[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(220, 53, 69, 0.2);\n}\n.badge-present[_ngcontent-%COMP%], .badge-half-day[_ngcontent-%COMP%], .badge-absent[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border-width: 2px;\n  border-style: solid;\n  font-weight: 600;\n  padding: 0.5em 0.75em;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  display: inline-flex;\n  align-items: center;\n  grid-gap: 0.25rem;\n  gap: 0.25rem;\n}\n.badge-present[_ngcontent-%COMP%] {\n  border-color: #28a745;\n  color: #28a745 !important;\n}\n.badge-half-day[_ngcontent-%COMP%] {\n  border-color: #ffc107;\n  color: #ffc107 !important;\n}\n.badge-absent[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  color: #dc3545 !important;\n}\n.badge-pill[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.9) !important;\n  border: 1px solid #dee2e6;\n  color: #495057 !important;\n  padding: 0.5em 0.8em;\n}\n.badge-pill[_ngcontent-%COMP%]   .fa-sign-in-alt[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.badge-pill[_ngcontent-%COMP%]   .fa-sign-out-alt[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.badge-pill[_ngcontent-%COMP%]   .fa-pause-circle[_ngcontent-%COMP%] {\n  color: #ffc107;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWYtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQ0U7RUFDRSx5QkFBQTtBQUNKO0FBRUU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUdBO0VBQWtCLGNBQUE7QUFDbEI7QUFBQTtFQUFtQixjQUFBO0FBSW5CO0FBSEE7RUFBbUIsY0FBQTtBQU9uQjtBQUpBO0VBQ0UsZ0JBQUE7QUFPRjtBQUpJO0VBQ0UsbUJBQUE7QUFNTjtBQUFBO0VBK0NFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUFBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBM0NGO0FBUEU7RUFDRSxvREFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQVNKO0FBUEk7RUFDRSwyQkFBQTtFQUNBLDRDQUFBO0FBU047QUFMRTtFQUNFLG9EQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBT0o7QUFMSTtFQUNFLDJCQUFBO0VBQ0EsNENBQUE7QUFPTjtBQUhFO0VBQ0Usb0RBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFLSjtBQUhJO0VBQ0UsMkJBQUE7RUFDQSw0Q0FBQTtBQUtOO0FBUUU7RUFFRSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUFBLFlBQUE7QUFOSjtBQVNFO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtBQVBKO0FBVUU7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0FBUko7QUFXRTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7QUFUSjtBQWNBO0VBQ0UscURBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFYRjtBQWFFO0VBQWtCLGNBQUE7QUFWcEI7QUFXRTtFQUFtQixjQUFBO0FBUnJCO0FBU0U7RUFBbUIsY0FBQTtBQU5yQiIsImZpbGUiOiJjaGVmLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWItbGluayB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgfVxyXG5cclxuICAmLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjdkZGQ7XHJcbiAgfVxyXG59XHJcbi5mYS1zaWduLWluLWFsdCB7IGNvbG9yOiAjMjhhNzQ1OyB9XHJcbi5mYS1zaWduLW91dC1hbHQgeyBjb2xvcjogI2RjMzU0NTsgfVxyXG4uZmEtcGF1c2UtY2lyY2xlIHsgY29sb3I6ICNmZmMxMDc7IH1cclxuXHJcblxyXG4uZGF0ZS1maWx0ZXItZ3JvdXAge1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xyXG4gICAgJjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcclxuICAgICAgZmlsdGVyOiBpbnZlcnQoMC41KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFN0YXR1cyBCYWRnZXNcclxuLmJhZGdlIHtcclxuICAmLXByZXNlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MCwgMTY3LCA2OSwgMC4xNSkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigjMjhhNzQ1LCA1JSk7XHJcbiAgICBjb2xvcjogIzI4YTc0NSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDAuNWVtIDAuNzVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDQwLCAxNjcsIDY5LCAwLjIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi1oYWxmLWRheSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjE1KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCNmZmMxMDcsIDUlKTtcclxuICAgIGNvbG9yOiBkYXJrZW4oI2ZmYzEwNywgMTUlKSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDAuNWVtIDAuNzVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDI1NSwgMTkzLCA3LCAwLjIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi1hYnNlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjAsIDUzLCA2OSwgMC4xNSkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigjZGMzNTQ1LCA1JSk7XHJcbiAgICBjb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDAuNWVtIDAuNzVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDIyMCwgNTMsIDY5LCAwLjIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQmFzZSBiYWRnZSBzdHlsaW5nXHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxufVxyXG4vLyBTdGF0dXMgQmFkZ2VzXHJcbi5iYWRnZSB7XHJcbiAgJi1wcmVzZW50LCAmLWhhbGYtZGF5LCAmLWFic2VudCB7XHJcbiAgICAvLyBBZGQgYmFja2dyb3VuZCBjb2xvciBhbmQgdGV4dCBjb2xvclxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjc1ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuMjVyZW07XHJcbiAgfVxyXG5cclxuICAmLXByZXNlbnQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xyXG4gICAgY29sb3I6ICMyOGE3NDUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICYtaGFsZi1kYXkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3O1xyXG4gICAgY29sb3I6ICNmZmMxMDcgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICYtYWJzZW50IHtcclxuICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcclxuICAgIGNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBUeXBlIEJhZGdlcyAoRS9TL0kpXHJcbi5iYWRnZS1waWxsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSkgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIGNvbG9yOiAjNDk1MDU3ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMC41ZW0gMC44ZW07XHJcbiAgXHJcbiAgLmZhLXNpZ24taW4tYWx0IHsgY29sb3I6ICMyOGE3NDU7IH1cclxuICAuZmEtc2lnbi1vdXQtYWx0IHsgY29sb3I6ICNkYzM1NDU7IH1cclxuICAuZmEtcGF1c2UtY2lyY2xlIHsgY29sb3I6ICNmZmMxMDc7IH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 14434:
/*!********************************************************!*\
  !*** ./src/app/pages/projects/chef-service.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChefServiceService": () => (/* binding */ ChefServiceService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/tokenservice.service */ 73565);






class ChefServiceService {
    constructor(http, tokenStorage) {
        this.http = http;
        this.tokenStorage = tokenStorage;
        this.BASE_API = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl.replace('/api', '')}/`;
        this.getDemandeChef = (serv) => {
            return this.http.get(this.BASE_API + "conge/getDemandeChef/" + serv);
        };
        this.getDemandeChefNotNull = (serv) => {
            return this.http.get(this.BASE_API + "conge/getDemandeChefNotNull/" + serv);
        };
    }
    UpdateDemande(data) {
        return this.http.put(this.BASE_API + "conge/updateChef", data);
    }
    getSubordinates(matricule) {
        return this.http.get(this.BASE_API + `api/auth/getSubordinates/${matricule}`);
    }
    approveNiveau1(id, decision) {
        return this.http.put(`${this.BASE_API}conge/approve/niveau1/${id}?decision=${decision}`, {});
    }
    approveNiveau2(id, decision) {
        return this.http.put(`${this.BASE_API}conge/approve/niveau2/${id}?decision=${decision}`, {});
    }
    approveNiveau3(id, decision) {
        return this.http.put(`${this.BASE_API}conge/approve/niveau3/${id}?decision=${decision}`, {});
    }
    // Fetch demands based on niveau
    getDemandesByNiveau(serv, niveau) {
        const endpoint = `conge/getDemandeNiveau${niveau}/${serv}`;
        return this.http.get(this.BASE_API + endpoint);
    }
    getrepDemandeNiveau3(serv) {
        return this.http.get(`${this.BASE_API}conge/getrepDemandeNiveau3/${serv}`);
    }
    getrepDemandeNiveau2(serv) {
        return this.http.get(`${this.BASE_API}conge/getrepDemandeNiveau2/${serv}`);
    }
    getrepDemandeNiveau1(serv) {
        return this.http.get(`${this.BASE_API}conge/getrepDemandeNiveau1/${serv}`);
    }
    /*getSubordinatesPointage(matricule: string): Observable<any[]> {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.tokenStorage.getToken()}` // Assuming token service has getToken()
      });
      return this.http.get<any[]>(
        this.BASE_API + `api/pointage/service-by-matricule?matricule=${matricule}`,
        { headers }
      ).pipe(
        map(response => response.map(item => ({
          // Adjust mapping based on API response
          id: item.id,
          matricule: item.matricule,
          typePoint: item.typePoint,
          datePoint: item.datePoint,
          nCarte: item.nCarte,
          numPoint: item.numPoint,
          heure: item.heure,
          minute: item.minute,
           personnel: {
          nom: item.personnel?.nom || '',    // Handle null values
          prenom: item.personnel?.prenom || ''
        }
        } as Pointage)))
      );
      console.log("Token used:", this.tokenStorage.getToken());
      
    }*/
    getSubordinatesPointage(matricule, date) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'Authorization': `Bearer ${this.tokenStorage.getToken()}`
        });
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('matricule', matricule);
        if (date) {
            params = params.set('date', date.toISOString().split('T')[0]);
        }
        return this.http.get(this.BASE_API + `api/pointage/service-by-matricule`, { headers, params }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.map(item => {
            var _a, _b;
            return ({
                id: item.id,
                matricule: item.matricule,
                typePoint: item.typePoint,
                datePoint: item.datePoint,
                nCarte: item.nCarte,
                numPoint: item.numPoint,
                heure: item.heure,
                minute: item.minute,
                status: item.status,
                totalMinutesWorked: item.totalMinutesWorked,
                lateMinutes: item.lateMinutes,
                overtimeMinutes: item.overtimeMinutes,
                personnel: {
                    nom: ((_a = item.personnel) === null || _a === void 0 ? void 0 : _a.nom) || '',
                    prenom: ((_b = item.personnel) === null || _b === void 0 ? void 0 : _b.prenom) || ''
                }
            });
        })));
    }
}
ChefServiceService.ɵfac = function ChefServiceService_Factory(t) { return new (t || ChefServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorage)); };
ChefServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ChefServiceService, factory: ChefServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 27900:
/*!***********************************************!*\
  !*** ./src/app/pages/projects/projectdata.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectData": () => (/* binding */ projectData)
/* harmony export */ });
const projectData = [
    {
        id: 1,
        image: 'assets/images/companies/img-1.png',
        text: 'New admin Design',
        subtext: 'It will be as simple as Occidental',
        users: ['assets/images/users/avatar-2.jpg', 'assets/images/users/avatar-1.jpg'],
        status: 'Completed',
        date: '15 Oct, 19',
        comment: 214
    },
    {
        id: 2,
        image: 'assets/images/companies/img-2.png',
        text: 'Brand logo design',
        subtext: 'To achieve it would be necessary',
        users: ['assets/images/users/avatar-3.jpg'],
        status: 'Pending',
        date: '22 Oct, 19',
        comment: 183
    },
    {
        id: 3,
        image: 'assets/images/companies/img-3.png',
        text: 'New Landing Design',
        subtext: 'For science, music, sport, etc',
        users: ['assets/images/users/avatar-5.jpg', 'assets/images/users/avatar-4.jpg'],
        status: 'Delay',
        date: '13 Oct, 19',
        comment: 175
    },
    {
        id: 4,
        image: 'assets/images/companies/img-4.png',
        text: 'Redesign - Landing page',
        subtext: 'If several languages coalesce',
        users: ['assets/images/users/avatar-6.jpg', 'assets/images/users/avatar-4.jpg', 'assets/images/users/avatar-3.jpg'],
        status: 'Completed',
        date: '14 Oct, 19',
        comment: 202
    },
    {
        id: 5,
        image: 'assets/images/companies/img-5.png',
        text: 'Skote Dashboard UI',
        subtext: 'Separate existence is a myth',
        users: ['assets/images/users/avatar-7.jpg', 'assets/images/users/avatar-8.jpg'],
        status: 'Completed',
        date: '13 Oct, 19',
        comment: 194
    },
    {
        id: 6,
        image: 'assets/images/companies/img-6.png',
        text: 'Blog Template UI',
        subtext: 'For science, music, sport, etc',
        users: ['assets/images/users/avatar-6.jpg'],
        status: 'Pending',
        date: '24 Oct, 19',
        comment: 122
    },
    {
        id: 7,
        image: 'assets/images/companies/img-3.png',
        text: 'Multipurpose Landing',
        subtext: 'It will be as simple as Occidental',
        users: ['assets/images/users/avatar-3.jpg'],
        status: 'Delay',
        date: '15 Oct, 19',
        comment: 214
    },
    {
        id: 8,
        image: 'assets/images/companies/img-4.png',
        text: 'App Landing UI',
        subtext: 'For science, music, sport, etc',
        users: ['assets/images/users/avatar-4.jpg'],
        status: 'Completed',
        date: '11 Oct, 19',
        comment: 185
    },
    {
        id: 9,
        image: 'assets/images/companies/img-2.png',
        text: 'New admin Design',
        subtext: 'Their most common words.',
        users: ['assets/images/users/avatar-5.jpg'],
        status: 'Completed',
        date: '12 Oct, 19',
        comment: 106
    },
];



/***/ }),

/***/ 423:
/*!*********************************************************************!*\
  !*** ./src/app/pages/projects/projectgrid/projectgrid.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectgridComponent": () => (/* binding */ ProjectgridComponent)
/* harmony export */ });
/* harmony import */ var _projectdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projectdata */ 27900);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _chef_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chef-service.service */ 14434);
/* harmony import */ var src_app_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/tokenservice.service */ 73565);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ 19746);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ 24352);










function ProjectgridComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Mise \u00E0 jour demande");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectgridComponent_ng_template_2_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const modal_r3 = restoredCtx.$implicit; return modal_r3.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Date demande");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Date d\u00E9but ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Date fin");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "R\u00E9ponse Chef");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Observation");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "textarea", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectgridComponent_ng_template_2_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.updateDemande(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.demandeForm);
} }
function ProjectgridComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h5", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectgridComponent_div_11_Template_a_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const data_r7 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3); return ctx_r9.openModal(_r0, data_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", data_r7.nom, " ", data_r7.prenom, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r7.typeConge.nomTypeconge);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r7.dateCng);
} }
const _c0 = function (a1) { return { itemsPerPage: 9, currentPage: a1 }; };
/**
 * Projects-grid component
 */
class ProjectgridComponent {
    constructor(chefServ, token, fb, modalService) {
        this.chefServ = chefServ;
        this.token = token;
        this.fb = fb;
        this.modalService = modalService;
    }
    ngOnInit() {
        //const user = this.token.getUser();
        //console.log("User object:", user); // Debug user object
        // this.currentNiveau = user.niveau; 
        this.currentNiveau = this.token.getNiveauFromToken(); // <-- Add this
        console.log("Current niveau:", this.currentNiveau); // Verify niveau value
        this.loadDemandes();
        this.breadCrumbItems = [{ label: 'Projects' }, { label: 'Projects Grid', active: true }];
        this.projectData = _projectdata__WEBPACK_IMPORTED_MODULE_0__.projectData;
        this.demandeForm = this.fb.group({
            idConge: [""],
            dateCng: [""],
            dateDebut: [""],
            dateFin: [""],
            repChef: [""],
            statut: [""]
        });
    }
    loadDemandes() {
        if (this.currentNiveau >= 1 && this.currentNiveau <= 3) {
            const serviceId = Number(this.token.getUser().serv.idService); // From stored user data
            this.chefServ.getDemandesByNiveau(serviceId, this.currentNiveau)
                .subscribe((data) => {
                this.listDemande = data;
            });
        }
    }
    getDemandeChef() {
        const serviceId = this.token.getUser().serv.idService; // From stored user data
        this.chefServ.getDemandeChef(serviceId).subscribe((data) => {
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
            repChef: user.repChef,
            statut: user.statut,
        });
        // this.lib=this.userForm.get('lib_demande').value
        // console.log(this.lib)
    }
    updateDemande() {
        const id = this.demandeForm.value.idConge;
        const decision = this.demandeForm.value.repChef;
        const serviceId = this.token.getUser().serv.idService;
        if (![1, 2, 3].includes(this.currentNiveau)) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                icon: 'error',
                title: 'Invalid Approver Level',
                text: 'Your account is not configured to approve requests!'
            });
            return;
        }
        switch (this.currentNiveau) {
            case 3:
                this.chefServ.approveNiveau3(id, decision).subscribe(() => {
                    this.loadDemandes(); // Refresh approval list
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Votre Reponse à été bien enregistrer !',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    this.chefServ.getrepDemandeNiveau3(serviceId).subscribe((data) => {
                        // Optional: Update historique list if needed
                    });
                });
                break;
            case 2:
                this.chefServ.approveNiveau2(id, decision).subscribe(() => {
                    this.loadDemandes();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Votre Reponse à été bien enregistrer !',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    this.chefServ.getrepDemandeNiveau2(serviceId).subscribe((data) => { });
                });
                break;
            case 1:
                this.chefServ.approveNiveau1(id, decision).subscribe(() => {
                    this.loadDemandes();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Votre Reponse à été bien enregistrer !',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    this.chefServ.getrepDemandeNiveau1(serviceId).subscribe((data) => { });
                });
                break;
            default:
                console.error("Invalid niveau:", this.currentNiveau);
        }
        this.modalService.dismissAll();
    }
}
ProjectgridComponent.ɵfac = function ProjectgridComponent_Factory(t) { return new (t || ProjectgridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_chef_service_service__WEBPACK_IMPORTED_MODULE_2__.ChefServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_3__.TokenStorage), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal)); };
ProjectgridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProjectgridComponent, selectors: [["app-projectgrid"]], decls: 18, vars: 10, consts: [[1, "container-fluid"], [1, "row"], ["role", "document"], ["content", ""], [1, "card-body", "p-4"], [1, "search-box"], [1, "text-muted"], [1, "position-relative"], ["type", "text", "placeholder", "Rechercher ..", 1, "form-control", "rounded", "bg-light", "border-light", 3, "ngModel", "ngModelChange"], [1, "mdi", "mdi-magnify", "search-icon"], ["class", "col-xl-2 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-12"], [1, "text-center", "my-3"], [3, "pageChange"], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup"], [1, "mb-3"], [1, "control-label"], ["placeholder", "Date demande", "type", "text", "name", "name", "formControlName", "dateCng", "readonly", "", 1, "form-control"], [1, "col-md-6"], ["placeholder", "Date d\u00E9but", "type", "text", "name", "email", "formControlName", "dateDebut", "readonly", "", 1, "form-control"], ["placeholder", "Date fin", "type", "text", "name", "email", "formControlName", "dateFin", "readonly", "", 1, "form-control"], ["aria-label", "Default select example", "formControlName", "repChef", 1, "form-select"], ["value", "O"], ["value", "N"], ["placeholder", "Entrer votre obs\u00E9rvation", "type", "text", "name", "email", "formControlName", "statut", 1, "form-control"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-success", 3, "click"], [1, "col-xl-2", "col-sm-4"], [1, "card", "text-center"], [1, "card-body"], [1, "font-size-15", "mb-0"], ["href", "javascript: void(0);", 1, "text-dark"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], [1, "flex-fill"], ["href", "javascript: void(0);", "ngbTooltip", "Visualiser demande", 3, "click"], [1, "bx", "bx-user-circle"]], template: function ProjectgridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProjectgridComponent_ng_template_2_Template, 37, 1, "ng-template", 2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Rechercher");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectgridComponent_Template_input_ngModelChange_9_listener($event) { return ctx.term = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ProjectgridComponent_div_11_Template, 15, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "pagination-controls", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function ProjectgridComponent_Template_pagination_controls_pageChange_17_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.term);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](13, 5, ctx.listDemande, ctx.term), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c0, ctx.p)));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.PaginationControlsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTooltip], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.PaginatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0Z3JpZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 25829:
/*!*********************************************************************!*\
  !*** ./src/app/pages/projects/projectlist/projectlist.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectlistComponent": () => (/* binding */ ProjectlistComponent)
/* harmony export */ });
/* harmony import */ var _projectdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projectdata */ 27900);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _chef_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chef-service.service */ 14434);
/* harmony import */ var src_app_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/tokenservice.service */ 73565);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ 19746);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ 24352);










function ProjectlistComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectlistComponent_tr_27_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const data_r3 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](35); return ctx_r5.openModal(_r1, data_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r3.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r3.prenom);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r3.typeConge.nomTypeconge);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r3.dateCng);
} }
function ProjectlistComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Mise \u00E0 jour demande");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectlistComponent_ng_template_34_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const modal_r7 = restoredCtx.$implicit; return modal_r7.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Date demande");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Date d\u00E9but");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Date fin");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "R\u00E9ponse Chef");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Oui");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Non");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Observation");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "textarea", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r2.demandeForm);
} }
const _c0 = function (a1) { return { itemsPerPage: 9, currentPage: a1 }; };
/**
 * Projects-list component
 */
class ProjectlistComponent {
    constructor(chefServ, token, fb, modalService) {
        this.chefServ = chefServ;
        this.token = token;
        this.fb = fb;
        this.modalService = modalService;
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Projects' }, { label: 'Projects Grid', active: true }];
        this.projectData = _projectdata__WEBPACK_IMPORTED_MODULE_0__.projectData;
        this.getDemandeChef();
        this.demandeForm = this.fb.group({
            idConge: [""],
            dateCng: [""],
            dateDebut: [""],
            dateFin: [""],
            repChef: [""],
            statut: [""]
        });
    }
    getCurrentNiveau() {
        return this.token.getNiveauFromToken();
        console.log(this.getCurrentNiveau); // Ensure niveau is stored in the user object
    }
    getDemandeChef() {
        const servId = this.token.getUser().serv.idService;
        console.log("Service ID:", servId); // Debug line
        const niveau = this.getCurrentNiveau();
        switch (niveau) {
            case 3:
                this.chefServ.getrepDemandeNiveau3(servId).subscribe((data) => {
                    this.listDemande = data;
                });
                break;
            case 2:
                this.chefServ.getrepDemandeNiveau2(servId).subscribe((data) => {
                    this.listDemande = data;
                });
                break;
            case 1:
                this.chefServ.getrepDemandeNiveau1(servId).subscribe((data) => {
                    this.listDemande = data;
                });
                break;
            default:
                console.error("Invalid niveau:", niveau);
        }
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
            repChef: user.repChef,
            statut: user.statut,
        });
        // this.lib=this.userForm.get('lib_demande').value
        // console.log(this.lib)
    }
    updateDemande() {
        console.log(this.demandeForm.value);
        this.chefServ.UpdateDemande(this.demandeForm.value)
            .subscribe({
            next: (res) => {
                if (res) {
                    if (res) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Votre demande à été bien enregistrer !',
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
ProjectlistComponent.ɵfac = function ProjectlistComponent_Factory(t) { return new (t || ProjectlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_chef_service_service__WEBPACK_IMPORTED_MODULE_2__.ChefServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_3__.TokenStorage), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal)); };
ProjectlistComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProjectlistComponent, selectors: [["app-projectlist"]], decls: 36, vars: 10, consts: [[1, "container-fluid"], [1, "card-body", "p-4"], [1, "search-box"], [1, "text-muted"], [1, "position-relative"], ["type", "text", "placeholder", "Rechercher ..", 1, "form-control", "rounded", "bg-light", "border-light", 3, "ngModel", "ngModelChange"], [1, "mdi", "mdi-magnify", "search-icon"], [1, "row"], [1, "col-12"], [1, "table-responsive"], [1, "table", "table-hover", "table-centered", "table-nowrap", "mb-0"], [1, "table-light"], [4, "ngFor", "ngForOf"], [1, "text-center", "my-3"], [3, "pageChange"], ["role", "document"], ["content", ""], ["ngbTooltip", "Visualiser demande", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "bx", "bx-user-circle"], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup"], [1, "mb-3"], [1, "control-label"], ["type", "text", "formControlName", "dateCng", "readonly", "", 1, "form-control"], [1, "col-md-6"], ["type", "text", "formControlName", "dateDebut", "readonly", "", 1, "form-control"], ["type", "text", "formControlName", "dateFin", "readonly", "", 1, "form-control"], ["formControlName", "repChef", "disabled", "", 1, "form-select"], ["value", "O"], ["value", "N"], ["formControlName", "statut", "readonly", "", 1, "form-control"]], template: function ProjectlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Rechercher");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectlistComponent_Template_input_ngModelChange_6_listener($event) { return ctx.term = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "thead", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Pr\u00E9nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Type Cong\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Date Demande");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, ProjectlistComponent_tr_27_Template, 14, 5, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "pagination-controls", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function ProjectlistComponent_Template_pagination_controls_pageChange_33_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, ProjectlistComponent_ng_template_34_Template, 35, 1, "ng-template", 15, 16, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.term);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](28, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](29, 5, ctx.listDemande, ctx.term), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c0, ctx.p)));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.PaginationControlsComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.PaginatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0bGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 58284:
/*!***********************************************************!*\
  !*** ./src/app/pages/projects/projects-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsRoutingModule": () => (/* binding */ ProjectsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _projectgrid_projectgrid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectgrid/projectgrid.component */ 423);
/* harmony import */ var _projectlist_projectlist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectlist/projectlist.component */ 25829);
/* harmony import */ var _chef_dashboard_chef_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chef-dashboard/chef-dashboard.component */ 61685);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);






const routes = [
    {
        path: 'grid',
        component: _projectgrid_projectgrid_component__WEBPACK_IMPORTED_MODULE_0__.ProjectgridComponent
    },
    {
        path: 'list',
        component: _projectlist_projectlist_component__WEBPACK_IMPORTED_MODULE_1__.ProjectlistComponent
    },
    {
        path: 'chef-dashboard',
        component: _chef_dashboard_chef_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.ChefDashboardComponent
    },
];
class ProjectsRoutingModule {
}
ProjectsRoutingModule.ɵfac = function ProjectsRoutingModule_Factory(t) { return new (t || ProjectsRoutingModule)(); };
ProjectsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ProjectsRoutingModule });
ProjectsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProjectsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 21902:
/*!***************************************************!*\
  !*** ./src/app/pages/projects/projects.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsModule": () => (/* binding */ ProjectsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _projects_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects-routing.module */ 58284);
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ui/ui.module */ 63091);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 68346);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-apexcharts */ 86571);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ 19746);
/* harmony import */ var _projectgrid_projectgrid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectgrid/projectgrid.component */ 423);
/* harmony import */ var _projectlist_projectlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectlist/projectlist.component */ 25829);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ 24352);
/* harmony import */ var _chef_dashboard_chef_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chef-dashboard/chef-dashboard.component */ 61685);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);













class ProjectsModule {
}
ProjectsModule.ɵfac = function ProjectsModule_Factory(t) { return new (t || ProjectsModule)(); };
ProjectsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ProjectsModule });
ProjectsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _projects_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectsRoutingModule,
            _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbTooltipModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__.NgApexchartsModule,
            ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_10__.DropzoneModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDatepickerModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipeModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_12__.NgxPaginationModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ProjectsModule, { declarations: [_projectgrid_projectgrid_component__WEBPACK_IMPORTED_MODULE_2__.ProjectgridComponent, _projectlist_projectlist_component__WEBPACK_IMPORTED_MODULE_3__.ProjectlistComponent, _chef_dashboard_chef_dashboard_component__WEBPACK_IMPORTED_MODULE_5__.ChefDashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _projects_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectsRoutingModule,
        _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbTooltipModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__.NgApexchartsModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_10__.DropzoneModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDatepickerModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipeModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_12__.NgxPaginationModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_projects_projects_module_ts.js.map