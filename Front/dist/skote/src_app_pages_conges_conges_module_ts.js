"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_conges_conges_module_ts"],{

/***/ 98817:
/*!*******************************************************!*\
  !*** ./src/app/pages/conges/conges-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CongesRoutingModule": () => (/* binding */ CongesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _demande_demande_conge_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demande/demande-conge.component */ 35410);
/* harmony import */ var _suivi_suivi_demandes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./suivi/suivi-demandes.component */ 23849);
/* harmony import */ var _historique_historique_conges_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./historique/historique-conges.component */ 83792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);






const routes = [
    {
        path: 'demande',
        component: _demande_demande_conge_component__WEBPACK_IMPORTED_MODULE_0__.DemandeCongeComponent
    },
    {
        path: 'suivi',
        component: _suivi_suivi_demandes_component__WEBPACK_IMPORTED_MODULE_1__.SuiviDemandesComponent
    },
    {
        path: 'historique',
        component: _historique_historique_conges_component__WEBPACK_IMPORTED_MODULE_2__.HistoriqueCongesComponent
    }
];
class CongesRoutingModule {
}
CongesRoutingModule.ɵfac = function CongesRoutingModule_Factory(t) { return new (t || CongesRoutingModule)(); };
CongesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CongesRoutingModule });
CongesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CongesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 24265:
/*!***********************************************!*\
  !*** ./src/app/pages/conges/conges.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CongesModule": () => (/* binding */ CongesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! simplebar-angular */ 6878);
/* harmony import */ var _conges_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conges-routing.module */ 98817);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 51382);
/* harmony import */ var _demande__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demande */ 56954);
/* harmony import */ var _suivi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./suivi */ 38666);
/* harmony import */ var _historique__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./historique */ 36404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);





// Simple Bar

// Component pages






class CongesModule {
}
CongesModule.ɵfac = function CongesModule_Factory(t) { return new (t || CongesModule)(); };
CongesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CongesModule });
CongesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _conges_routing_module__WEBPACK_IMPORTED_MODULE_0__.CongesRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModalModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltipModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbCollapseModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDatepickerModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPaginationModule,
            simplebar_angular__WEBPACK_IMPORTED_MODULE_11__.SimplebarAngularModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CongesModule, { declarations: [_demande__WEBPACK_IMPORTED_MODULE_2__.DemandeCongeComponent,
        _suivi__WEBPACK_IMPORTED_MODULE_3__.SuiviDemandesComponent,
        _historique__WEBPACK_IMPORTED_MODULE_4__.HistoriqueCongesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _conges_routing_module__WEBPACK_IMPORTED_MODULE_0__.CongesRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModalModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltipModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbCollapseModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDatepickerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPaginationModule,
        simplebar_angular__WEBPACK_IMPORTED_MODULE_11__.SimplebarAngularModule] }); })();


/***/ }),

/***/ 35410:
/*!*****************************************************************!*\
  !*** ./src/app/pages/conges/demande/demande-conge.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemandeCongeComponent": () => (/* binding */ DemandeCongeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _conge_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../conge-api.service */ 98435);
/* harmony import */ var src_app_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/tokenservice.service */ 73565);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);







function DemandeCongeComponent_ng_container_30_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", type_r10.idType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", type_r10.nomTypeconge, " (max ", type_r10.maxAllowedDays, " jours) ");
} }
function DemandeCongeComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DemandeCongeComponent_ng_container_30_option_1_Template, 2, 3, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const type_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", type_r10 && type_r10.idType !== null && type_r10.idType !== undefined);
} }
function DemandeCongeComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Le type de cong\u00E9 est requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DemandeCongeComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DemandeCongeComponent_div_31_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f["typeConge"].errors["required"]);
} }
function DemandeCongeComponent_div_43_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "La date de d\u00E9but est requise");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DemandeCongeComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DemandeCongeComponent_div_43_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.f["dateDebut"].errors["required"]);
} }
function DemandeCongeComponent_div_55_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "La date de fin est requise");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DemandeCongeComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DemandeCongeComponent_div_55_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.f["dateFin"].errors["required"]);
} }
function DemandeCongeComponent_small_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Dur\u00E9e: ", ctx_r6.calculerDuree(), " jour(s) ");
} }
function DemandeCongeComponent_div_62_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Le commentaire ne doit pas d\u00E9passer 500 caract\u00E8res");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DemandeCongeComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DemandeCongeComponent_div_62_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.f["commentaire"].errors["maxlength"]);
} }
function DemandeCongeComponent_span_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 52);
} }
function DemandeCongeComponent_i_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 53);
} }
class DemandeCongeComponent {
    constructor(formBuilder, calendar, congeApiService, token) {
        this.formBuilder = formBuilder;
        this.calendar = calendar;
        this.congeApiService = congeApiService;
        this.token = token;
        this.submitted = false;
        this.submitting = false;
        // Types de congés disponibles
        this.typesConges = [];
    }
    ngOnInit() {
        this.initForm();
        this.chargerTypesConges();
    }
    chargerTypesConges() {
        console.log('📋 Chargement des types de congés...');
        this.congeApiService.getTypesConges().subscribe({
            next: (response) => {
                console.log('🔍 Réponse du service API:', response);
                // L'API retourne maintenant un ApiResponse avec les données mappées
                const types = (response === null || response === void 0 ? void 0 : response.data) || response;
                this.typesConges = Array.isArray(types) ? types : [];
                // Filtrer les types valides
                this.typesConges = this.typesConges.filter(type => type && type.idType !== null && type.idType !== undefined && type.nomTypeconge);
                console.log('✅ Types de congés chargés:', this.typesConges);
            },
            error: (error) => {
                console.error('❌ Erreur lors du chargement des types de congés:', error);
                this.typesConges = [];
            }
        });
    }
    initForm() {
        const today = this.calendar.getToday();
        this.demandeForm = this.formBuilder.group({
            typeConge: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            dateDebut: [today, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            dateFin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            commentaire: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(500)]]
            // Suppression du champ fichierJustificatif
        });
    }
    get f() { return this.demandeForm.controls; }
    onSubmit() {
        this.submitted = true;
        if (this.demandeForm.invalid) {
            return;
        }
        this.submitting = true;
        // Préparation des données au format CongeRequest
        const formValue = this.demandeForm.value;
        const demandeData = {
            typeConge: this.getTypeCongeNom(formValue.typeConge),
            dateDebut: this.ngbDateToDate(formValue.dateDebut),
            dateFin: this.ngbDateToDate(formValue.dateFin),
            duree: this.calculerDuree(),
            commentaire: formValue.commentaire
            // Suppression du champ fichierJustificatif
        };
        console.log('📤 Envoi de la demande:', demandeData);
        // Envoi de la demande
        this.congeApiService.creerDemandeConge(demandeData).subscribe({
            next: (response) => {
                console.log('✅ Demande créée avec succès:', response);
                alert('Votre demande de congé a été soumise avec succès !');
                // Reset du formulaire
                this.submitted = false;
                this.submitting = false;
                this.demandeForm.reset();
                this.initForm();
            },
            error: (error) => {
                console.error('❌ Erreur lors de la création de la demande:', error);
                let errorMessage = 'Une erreur est survenue lors de la soumission de votre demande.';
                if (error === null || error === void 0 ? void 0 : error.error) {
                    errorMessage = typeof error.error === 'string' ? error.error : error.error.message || errorMessage;
                }
                alert(errorMessage);
                this.submitting = false;
            }
        });
    }
    onReset() {
        this.submitted = false;
        this.demandeForm.reset();
        this.initForm();
    }
    // Calcul automatique de la durée
    calculerDuree() {
        var _a, _b;
        const dateDebut = (_a = this.demandeForm.get('dateDebut')) === null || _a === void 0 ? void 0 : _a.value;
        const dateFin = (_b = this.demandeForm.get('dateFin')) === null || _b === void 0 ? void 0 : _b.value;
        if (dateDebut && dateFin) {
            // Conversion des dates NgbDate en Date
            const debut = new Date(dateDebut.year, dateDebut.month - 1, dateDebut.day);
            const fin = new Date(dateFin.year, dateFin.month - 1, dateFin.day);
            // Calcul de la différence en jours
            const diffTime = Math.abs(fin.getTime() - debut.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays + 1; // +1 pour inclure le jour de fin
        }
        return 0;
    }
    // Méthodes utilitaires
    getTypeCongeNom(typeId) {
        if (!typeId || !this.typesConges) {
            return '';
        }
        const type = this.typesConges.find(t => t && t.idType !== null && t.idType !== undefined && t.idType.toString() === typeId);
        return type ? type.nomTypeconge : '';
    }
    ngbDateToDate(ngbDate) {
        // Retourne un format ISO (yyyy-MM-dd) compatible avec LocalDate backend
        const month = ngbDate.month.toString().padStart(2, '0');
        const day = ngbDate.day.toString().padStart(2, '0');
        return `${ngbDate.year}-${month}-${day}`;
    }
}
DemandeCongeComponent.ɵfac = function DemandeCongeComponent_Factory(t) { return new (t || DemandeCongeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCalendar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_conge_api_service__WEBPACK_IMPORTED_MODULE_0__.CongeApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorage)); };
DemandeCongeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DemandeCongeComponent, selectors: [["app-demande-conge"]], decls: 90, vars: 21, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "page-title-box", "d-sm-flex", "align-items-center", "justify-content-between"], [1, "mb-sm-0", "font-size-18"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "col-lg-8", "offset-lg-2"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "card-body"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "row", "mb-4"], ["for", "typeConge", 1, "col-sm-3", "col-form-label"], [1, "text-danger"], [1, "col-sm-9"], ["id", "typeConge", "formControlName", "typeConge", 1, "form-select"], ["value", ""], [4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "dateDebut", 1, "col-sm-3", "col-form-label"], [1, "input-group"], ["placeholder", "S\u00E9lectionner la date de d\u00E9but", "name", "dp", "formControlName", "dateDebut", "ngbDatepicker", "", 1, "form-control"], ["dateDebut", "ngbDatepicker"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-calendar-alt"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["for", "dateFin", 1, "col-sm-3", "col-form-label"], ["placeholder", "S\u00E9lectionner la date de fin", "name", "dp2", "formControlName", "dateFin", "ngbDatepicker", "", 1, "form-control"], ["dateFin", "ngbDatepicker"], ["class", "text-muted", 4, "ngIf"], ["for", "commentaire", 1, "col-sm-3", "col-form-label"], ["id", "commentaire", "rows", "4", "formControlName", "commentaire", "placeholder", "Motif ou d\u00E9tails de la demande (optionnel)", 1, "form-control"], [1, "text-muted"], [1, "col-sm-9", "offset-sm-3"], ["type", "submit", 1, "btn", "btn-primary", "me-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-1", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["class", "fas fa-paper-plane me-1", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "disabled", "click"], [1, "fas", "fa-undo", "me-1"], [1, "fas", "fa-info-circle", "text-info", "me-2"], ["role", "alert", 1, "alert", "alert-info"], [1, "mb-0"], [3, "value", 4, "ngIf"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], [1, "invalid-feedback", "d-block"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1"], [1, "fas", "fa-paper-plane", "me-1"]], template: function DemandeCongeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Demande de cong\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Cong\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Demande de cong\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Nouvelle demande de cong\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function DemandeCongeComponent_Template_form_ngSubmit_20_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Type de cong\u00E9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "S\u00E9lectionner un type de cong\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, DemandeCongeComponent_ng_container_30_Template, 2, 1, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, DemandeCongeComponent_div_31_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Date de d\u00E9but ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DemandeCongeComponent_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](40); return _r2.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, DemandeCongeComponent_div_43_Template, 2, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Date de fin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "input", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DemandeCongeComponent_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](52); return _r4.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, DemandeCongeComponent_div_55_Template, 2, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, DemandeCongeComponent_small_56_Template, 2, 1, "small", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Commentaire");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "textarea", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, DemandeCongeComponent_div_62_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "small", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, DemandeCongeComponent_span_68_Template, 1, 0, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, DemandeCongeComponent_i_69_Template, 1, 0, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DemandeCongeComponent_Template_button_click_71_listener() { return ctx.onReset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, " R\u00E9initialiser ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Informations importantes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "ul", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Les demandes de cong\u00E9 doivent \u00EAtre soumises au moins 48h \u00E0 l'avance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Les cong\u00E9s maladie de plus de 3 jours n\u00E9cessitent un certificat m\u00E9dical \u00E0 fournir s\u00E9par\u00E9ment");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Les cong\u00E9s pay\u00E9s sont soumis \u00E0 validation hi\u00E9rarchique");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Vous recevrez une notification par email lors du traitement de votre demande");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_11_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.demandeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.submitted && ctx.f["typeConge"].errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.typesConges);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f["typeConge"].errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.submitted && ctx.f["dateDebut"].errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f["dateDebut"].errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.submitted && ctx.f["dateFin"].errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f["dateFin"].errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.calculerDuree() > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.submitted && ctx.f["commentaire"].errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f["commentaire"].errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ((tmp_11_0 = ctx.demandeForm.get("commentaire")) == null ? null : tmp_11_0.value == null ? null : tmp_11_0.value.length) || 0, "/500 caract\u00E8res");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.submitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.submitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.submitting ? "Envoi en cours..." : "Soumettre la demande", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.submitting);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbInputDatepicker], styles: ["@charset \"UTF-8\";\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n.card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #556ee6;\n  border-color: #556ee6;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #4b63d2;\n  border-color: #4b63d2;\n}\n.alert-info[_ngcontent-%COMP%] {\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n  color: #0c5460;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.form-control.is-invalid[_ngcontent-%COMP%], .form-select.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  animation: shake 0.5s;\n}\n@keyframes shake {\n  0%, 20%, 40%, 60%, 80% {\n    transform: translateX(-2px);\n  }\n  10%, 30%, 50%, 70%, 90% {\n    transform: translateX(2px);\n  }\n}\n\nsmall.text-muted[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  opacity: 0.7;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  font-weight: 500;\n  transition: all 0.15s ease-in-out;\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\n.fas[_ngcontent-%COMP%] {\n  color: #556ee6;\n}\n\n@media (max-width: 768px) {\n  .col-sm-3[_ngcontent-%COMP%] {\n    text-align: left !important;\n    margin-bottom: 0.5rem;\n  }\n\n  .offset-lg-2[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbWFuZGUtY29uZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCLHFEQUFBO0FBRUE7RUFDSSxtREFBQTtFQUNBLHNDQUFBO0FBQ0o7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsNkNBQUE7QUFDSjtBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7QUFFQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUVBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtBQUNKO0FBRUE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUNKO0FBRUE7RUFDSSxjQUFBO0FBQ0o7QUFFQSxxQ0FBQTtBQUNBOztFQUVJLHFCQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUVBO0VBQ0k7SUFDSSwyQkFBQTtFQUNOO0VBQ0U7SUFDSSwwQkFBQTtFQUNOO0FBQ0Y7QUFFQSx5Q0FBQTtBQUNBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBQUo7QUFHQSxzQ0FBQTtBQUNBO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FBQUo7QUFHQTtFQUNJLGlCQUFBO0FBQUo7QUFHQSwwQ0FBQTtBQUNBO0VBQ0ksY0FBQTtBQUFKO0FBR0EsMkJBQUE7QUFDQTtFQUNJO0lBQ0ksMkJBQUE7SUFDQSxxQkFBQTtFQUFOOztFQUdFO0lBQ0kseUJBQUE7RUFBTjtBQUNGIiwiZmlsZSI6ImRlbWFuZGUtY29uZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiBTdHlsZXMgc3DDqWNpZmlxdWVzIGF1IGNvbXBvc2FudCBkZW1hbmRlIGRlIGNvbmfDqSAqL1xuLmNhcmQge1xuICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG59XG5cbi5mb3JtLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG5cbi50ZXh0LWRhbmdlciB7XG4gIGNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTZlZTY7XG4gIGJvcmRlci1jb2xvcjogIzU1NmVlNjtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNjNkMjtcbiAgYm9yZGVyLWNvbG9yOiAjNGI2M2QyO1xufVxuXG4uYWxlcnQtaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWVjZjE7XG4gIGJvcmRlci1jb2xvcjogI2JlZTVlYjtcbiAgY29sb3I6ICMwYzU0NjA7XG59XG5cbi5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEFuaW1hdGlvbiBwb3VyIGxlcyBjaGFtcHMgcmVxdWlzICovXG4uZm9ybS1jb250cm9sLmlzLWludmFsaWQsXG4uZm9ybS1zZWxlY3QuaXMtaW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzO1xufVxuXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMCUsIDIwJSwgNDAlLCA2MCUsIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpO1xuICB9XG4gIDEwJSwgMzAlLCA1MCUsIDcwJSwgOTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KTtcbiAgfVxufVxuLyogU3R5bGUgcG91ciBsZSBjb21wdGV1ciBkZSBjYXJhY3TDqHJlcyAqL1xuc21hbGwudGV4dC1tdXRlZCB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLyogQW3DqWxpb3JhdGlvbiB2aXN1ZWxsZSBkZXMgYm91dG9ucyAqL1xuLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5idG4gaSB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4vKiBTdHlsZSBwb3VyIGxlcyBpY8O0bmVzIGRhbnMgbGVzIGxhYmVscyAqL1xuLmZhcyB7XG4gIGNvbG9yOiAjNTU2ZWU2O1xufVxuXG4vKiBSZXNwb25zaXZlIGFkanVzdG1lbnRzICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbC1zbS0zIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB9XG5cbiAgLm9mZnNldC1sZy0yIHtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG59Il19 */"] });


/***/ }),

/***/ 56954:
/*!***********************************************!*\
  !*** ./src/app/pages/conges/demande/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemandeCongeComponent": () => (/* reexport safe */ _demande_conge_component__WEBPACK_IMPORTED_MODULE_0__.DemandeCongeComponent)
/* harmony export */ });
/* harmony import */ var _demande_conge_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demande-conge.component */ 35410);



/***/ }),

/***/ 83792:
/*!************************************************************************!*\
  !*** ./src/app/pages/conges/historique/historique-conges.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoriqueCongesComponent": () => (/* binding */ HistoriqueCongesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _conge_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../conge-api.service */ 98435);
/* harmony import */ var src_app_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/tokenservice.service */ 73565);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);







function HistoriqueCongesComponent_h4_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.calculerTempsEcoule(ctx_r0.statistiques.dernierCongeDate), " ");
} }
function HistoriqueCongesComponent_h4_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Aucun ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriqueCongesComponent_option_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r8.label, " ");
} }
function HistoriqueCongesComponent_option_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", type_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", type_r9.label, " ");
} }
function HistoriqueCongesComponent_option_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const annee_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", annee_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", annee_r10 === "TOUTES" ? "Toutes les ann\u00E9es" : annee_r10, " ");
} }
function HistoriqueCongesComponent_div_110_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "small", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "small", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const demande_r12 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("#", demande_r12.id.toString().padStart(4, "0"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", ctx_r11.getTypeColor(demande_r12.typeConge));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](demande_r12.typeConge);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Du ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](17, 14, demande_r12.dateDebut, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Au ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](20, 17, demande_r12.dateFin, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", demande_r12.duree, " jour(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](27, 20, demande_r12.dateDemande, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r11.getStatutClass(demande_r12.statut));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r11.getStatutIcon(demande_r12.statut));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r11.getStatutLabel(demande_r12.statut), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r11.calculerTempsEcoule(demande_r12.dateFin), " ");
} }
function HistoriqueCongesComponent_div_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "thead", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Type de cong\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "P\u00E9riode");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Dur\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Date demande");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Statut final");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Temps \u00E9coul\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "D\u00E9tails");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, HistoriqueCongesComponent_div_110_tr_21_Template, 38, 23, "tr", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](22, 2, ctx_r5.filteredHistorique, (ctx_r5.page - 1) * ctx_r5.pageSize, ctx_r5.page * ctx_r5.pageSize))("ngForTrackBy", ctx_r5.trackByFn);
} }
function HistoriqueCongesComponent_div_111_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Faire ma premi\u00E8re demande ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriqueCongesComponent_div_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Aucun historique trouv\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, HistoriqueCongesComponent_div_111_a_8_Template, 3, 0, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r6.historiqueConges.length === 0 ? "Aucun cong\u00E9 trouv\u00E9 dans l'historique. Vos demandes pass\u00E9es appara\u00EEtront ici une fois termin\u00E9es (approuv\u00E9es, refus\u00E9es ou annul\u00E9es)." : "Aucun cong\u00E9 ne correspond aux filtres s\u00E9lectionn\u00E9s.", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.historiqueConges.length === 0);
} }
function HistoriqueCongesComponent_div_112_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ngb-pagination", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageChange", function HistoriqueCongesComponent_div_112_Template_ngb_pagination_pageChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.page = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" Affichage ", (ctx_r7.page - 1) * ctx_r7.pageSize + 1, " \u00E0 ", ctx_r7.Math.min(ctx_r7.page * ctx_r7.pageSize, ctx_r7.collectionSize), " sur ", ctx_r7.collectionSize, " r\u00E9sultats ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("page", ctx_r7.page)("pageSize", ctx_r7.pageSize)("collectionSize", ctx_r7.collectionSize)("maxSize", 5)("rotate", true);
} }
class HistoriqueCongesComponent {
    constructor(congeApiService, token) {
        this.congeApiService = congeApiService;
        this.token = token;
        this.historiqueConges = [];
        this.filteredHistorique = [];
        // Filtres
        this.filtreStatut = 'TOUS';
        this.filtreTypeConge = 'TOUS';
        this.filtreAnnee = 'TOUTES';
        this.searchText = '';
        // Pagination
        this.page = 1;
        this.pageSize = 15;
        this.collectionSize = 0;
        // Options de filtre
        this.statutOptions = [
            { value: 'TOUS', label: 'Tous les statuts' },
            { value: 'APPROUVE', label: 'Approuvé' },
            { value: 'REFUSE', label: 'Refusé' },
            { value: 'ANNULE', label: 'Annulé' }
        ];
        this.typesConges = [
            { value: 'TOUS', label: 'Tous les types' },
            { value: 'Congé payé', label: 'Congé payé' },
            { value: 'Congé maladie', label: 'Congé maladie' },
            { value: 'Congé maternité', label: 'Congé maternité' },
            { value: 'Congé paternité', label: 'Congé paternité' },
            { value: 'Congé sans solde', label: 'Congé sans solde' },
            { value: 'Congé formation', label: 'Congé formation' }
        ];
        this.anneesDisponibles = [];
        // Statistiques de l'historique
        this.statistiques = {
            totalDemandes: 0,
            joursApprouves: 0,
            tauxApprobation: 0,
            dernierCongeDate: null
        };
        this.Math = Math;
    }
    ngOnInit() {
        this.chargerHistoriqueConges();
        this.genererAnneesDisponibles();
    }
    genererAnneesDisponibles() {
        const currentYear = new Date().getFullYear();
        this.anneesDisponibles = ['TOUTES'];
        for (let year = currentYear; year >= currentYear - 5; year--) {
            this.anneesDisponibles.push(year.toString());
        }
    }
    chargerHistoriqueConges() {
        console.log('📚 Chargement de l\'historique des congés...');
        this.congeApiService.getHistoriqueConges().subscribe({
            next: (historique) => {
                console.log('✅ Historique chargé:', historique.length, 'demandes');
                this.historiqueConges = historique;
                this.calculerStatistiques();
                this.appliquerFiltres();
                // Message si aucun historique
                if (historique.length === 0) {
                    console.log('📭 Aucun congé trouvé dans l\'historique');
                }
            },
            error: (error) => {
                console.error('❌ Erreur lors du chargement de l\'historique:', error);
                this.historiqueConges = [];
                this.appliquerFiltres();
                // Gestion spécifique des erreurs d'authentification
                if ((error === null || error === void 0 ? void 0 : error.status) === 401) {
                    console.warn('🚫 Utilisateur non authentifié - redirection vers login');
                    window.location.href = '/account/login';
                }
            }
        });
    }
    calculerStatistiques() {
        if (this.historiqueConges.length === 0) {
            this.statistiques = {
                totalDemandes: 0,
                joursApprouves: 0,
                tauxApprobation: 0,
                dernierCongeDate: null
            };
            return;
        }
        const demandesApprouvees = this.historiqueConges.filter(d => d.statut === 'APPROUVE');
        const joursApprouves = demandesApprouvees.reduce((total, d) => total + d.duree, 0);
        const tauxApprobation = (demandesApprouvees.length / this.historiqueConges.length) * 100;
        // Trouver la date du dernier congé approuvé
        const congesApprouvesOrdonnes = demandesApprouvees
            .sort((a, b) => new Date(b.dateFin).getTime() - new Date(a.dateFin).getTime());
        this.statistiques = {
            totalDemandes: this.historiqueConges.length,
            joursApprouves,
            tauxApprobation: Math.round(tauxApprobation),
            dernierCongeDate: congesApprouvesOrdonnes.length > 0 ? new Date(congesApprouvesOrdonnes[0].dateFin) : null
        };
    }
    appliquerFiltres() {
        this.filteredHistorique = this.historiqueConges.filter(demande => {
            var _a;
            let matchStatut = this.filtreStatut === 'TOUS' || demande.statut === this.filtreStatut;
            let matchType = this.filtreTypeConge === 'TOUS' || demande.typeConge === this.filtreTypeConge;
            let matchAnnee = this.filtreAnnee === 'TOUTES' ||
                new Date(demande.dateDebut).getFullYear().toString() === this.filtreAnnee;
            let matchSearch = !this.searchText ||
                demande.typeConge.toLowerCase().includes(this.searchText.toLowerCase()) ||
                ((_a = demande.commentaire) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(this.searchText.toLowerCase()));
            return matchStatut && matchType && matchAnnee && matchSearch;
        });
        this.collectionSize = this.filteredHistorique.length;
    }
    onFiltreChange() {
        this.page = 1;
        this.appliquerFiltres();
    }
    getStatutClass(statut) {
        switch (statut) {
            case 'APPROUVE': return 'badge bg-success';
            case 'REFUSE': return 'badge bg-danger';
            case 'ANNULE': return 'badge bg-secondary';
            default: return 'badge bg-secondary';
        }
    }
    getStatutIcon(statut) {
        switch (statut) {
            case 'APPROUVE': return 'fas fa-check-circle';
            case 'REFUSE': return 'fas fa-times-circle';
            case 'ANNULE': return 'fas fa-ban';
            default: return 'fas fa-question-circle';
        }
    }
    getStatutLabel(statut) {
        switch (statut) {
            case 'APPROUVE': return 'Approuvé';
            case 'REFUSE': return 'Refusé';
            case 'ANNULE': return 'Annulé';
            default: return 'Inconnu';
        }
    }
    // Calcul de la période depuis la fin du congé
    calculerTempsEcoule(dateFin) {
        const maintenant = new Date();
        const fin = new Date(dateFin);
        const diffMs = maintenant.getTime() - fin.getTime();
        const diffJours = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        if (diffJours < 0)
            return 'À venir';
        if (diffJours === 0)
            return 'Aujourd\'hui';
        if (diffJours === 1)
            return 'Il y a 1 jour';
        if (diffJours < 30)
            return `Il y a ${diffJours} jours`;
        if (diffJours < 365) {
            const mois = Math.floor(diffJours / 30);
            return `Il y a ${mois} mois`;
        }
        const annees = Math.floor(diffJours / 365);
        return `Il y a ${annees} an${annees > 1 ? 's' : ''}`;
    }
    // Export des données
    exporterExcel() {
        console.log('Export Excel de l\'historique des congés');
        // TODO: Implémenter l'export Excel
    }
    exporterPDF() {
        console.log('Export PDF de l\'historique des congés');
        // TODO: Implémenter l'export PDF
    }
    // Méthodes pour l'affichage
    getTypeColor(typeConge) {
        const colors = {
            'Congé Annuel': '#556ee6',
            'Congé Maladie': '#f06548',
            'Congé Maternité/Paternité': '#0ab39c',
            'Congé Exceptionnel': '#f7b84b',
            'RTT': '#299cdb',
            'Autre': '#6c757d'
        };
        return colors[typeConge] || colors['Autre'];
    }
    trackByFn(index, item) {
        return item.id;
    }
}
HistoriqueCongesComponent.ɵfac = function HistoriqueCongesComponent_Factory(t) { return new (t || HistoriqueCongesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_conge_api_service__WEBPACK_IMPORTED_MODULE_0__.CongeApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorage)); };
HistoriqueCongesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HistoriqueCongesComponent, selectors: [["app-historique-conges"]], decls: 113, vars: 15, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "page-title-box", "d-sm-flex", "align-items-center", "justify-content-between"], [1, "mb-sm-0", "font-size-18"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "col-xl-3", "col-md-6"], [1, "card", "mini-stats-wid"], [1, "card-body"], [1, "media"], [1, "media-body"], [1, "text-muted", "fw-medium"], [1, "mb-0"], [1, "mini-stat-icon", "avatar-sm", "rounded-circle", "bg-primary", "align-self-center"], [1, "avatar-title"], [1, "bx", "bx-calendar-event", "font-size-24"], [1, "mini-stat-icon", "avatar-sm", "rounded-circle", "bg-success", "align-self-center"], [1, "bx", "bx-check-shield", "font-size-24"], [1, "mini-stat-icon", "avatar-sm", "rounded-circle", "bg-info", "align-self-center"], [1, "bx", "bx-trending-up", "font-size-24"], ["class", "mb-0 font-size-14", 4, "ngIf"], [1, "mini-stat-icon", "avatar-sm", "rounded-circle", "bg-warning", "align-self-center"], [1, "bx", "bx-time", "font-size-24"], [1, "col-lg-12"], [1, "card"], [1, "card-header"], [1, "row", "align-items-center"], [1, "col-md-6"], [1, "card-title", "mb-0"], [1, "bx", "bx-archive", "me-2", "text-primary"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-end", "gap-2"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-secondary", "dropdown-toggle"], [1, "bx", "bx-download", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item", 3, "click"], [1, "bx", "bx-file", "me-1"], [1, "bx", "bx-file-blank", "me-1"], [1, "row", "mb-4"], [1, "col-md-2"], ["for", "filtreStatut", 1, "form-label"], ["id", "filtreStatut", 1, "form-select", "form-select-sm", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "filtreTypeConge", 1, "form-label"], ["id", "filtreTypeConge", 1, "form-select", "form-select-sm", 3, "ngModel", "ngModelChange"], ["for", "filtreAnnee", 1, "form-label"], ["id", "filtreAnnee", 1, "form-select", "form-select-sm", 3, "ngModel", "ngModelChange"], ["for", "searchText", 1, "form-label"], [1, "input-group", "input-group-sm"], [1, "input-group-text"], [1, "bx", "bx-search"], ["type", "text", "id", "searchText", "placeholder", "Type de cong\u00E9, commentaire...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "table-responsive", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row align-items-center mt-4", 4, "ngIf"], [1, "mb-0", "font-size-14"], [3, "value"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0"], [1, "table-light"], [1, "text-center"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "d-flex", "align-items-center"], [1, "flex-shrink-0", "me-2"], [1, "avatar-xs"], [1, "avatar-title", "rounded-circle"], [1, "bx", "bx-calendar", "font-size-16"], [1, "flex-grow-1"], [1, "fw-medium"], [1, "text-muted", "d-block"], [1, "text-muted"], [1, "badge", "badge-soft-info"], [1, "me-1"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Voir les d\u00E9tails", 1, "btn", "btn-soft-primary", "btn-sm"], [1, "bx", "bx-show"], [1, "text-center", "py-5"], [1, "avatar-md", "mx-auto", "mb-4"], [1, "avatar-title", "bg-light", "rounded-circle", "text-primary", "h1"], [1, "bx", "bx-archive-out"], ["routerLink", "/conges/demande", "class", "btn btn-primary", 4, "ngIf"], ["routerLink", "/conges/demande", 1, "btn", "btn-primary"], [1, "bx", "bx-plus", "me-1"], [1, "row", "align-items-center", "mt-4"], [1, "col-sm-6"], [1, "mb-sm-0", "text-muted"], [1, "float-sm-end"], [3, "page", "pageSize", "collectionSize", "maxSize", "rotate", "pageChange"]], template: function HistoriqueCongesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Historique des cong\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Cong\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Historique");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Total demandes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Jours accord\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Taux d'approbation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Dernier cong\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, HistoriqueCongesComponent_h4_57_Template, 2, 1, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, HistoriqueCongesComponent_h4_58_Template, 2, 0, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "h4", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Historique complet des cong\u00E9s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Exporter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "ul", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HistoriqueCongesComponent_Template_a_click_79_listener() { return ctx.exporterExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Excel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HistoriqueCongesComponent_Template_a_click_83_listener() { return ctx.exporterPDF(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "PDF ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Statut");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "select", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HistoriqueCongesComponent_Template_select_ngModelChange_91_listener($event) { return ctx.filtreStatut = $event; })("ngModelChange", function HistoriqueCongesComponent_Template_select_ngModelChange_91_listener() { return ctx.onFiltreChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](92, HistoriqueCongesComponent_option_92_Template, 2, 2, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "select", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HistoriqueCongesComponent_Template_select_ngModelChange_96_listener($event) { return ctx.filtreTypeConge = $event; })("ngModelChange", function HistoriqueCongesComponent_Template_select_ngModelChange_96_listener() { return ctx.onFiltreChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](97, HistoriqueCongesComponent_option_97_Template, 2, 2, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Ann\u00E9e");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "select", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HistoriqueCongesComponent_Template_select_ngModelChange_101_listener($event) { return ctx.filtreAnnee = $event; })("ngModelChange", function HistoriqueCongesComponent_Template_select_ngModelChange_101_listener() { return ctx.onFiltreChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](102, HistoriqueCongesComponent_option_102_Template, 2, 2, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "Rechercher");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](108, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HistoriqueCongesComponent_Template_input_ngModelChange_109_listener($event) { return ctx.searchText = $event; })("ngModelChange", function HistoriqueCongesComponent_Template_input_ngModelChange_109_listener() { return ctx.onFiltreChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](110, HistoriqueCongesComponent_div_110_Template, 23, 6, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](111, HistoriqueCongesComponent_div_111_Template, 9, 2, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](112, HistoriqueCongesComponent_div_112_Template, 8, 8, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.statistiques.totalDemandes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.statistiques.joursApprouves);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.statistiques.tauxApprobation, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.statistiques.dernierCongeDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.statistiques.dernierCongeDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.filtreStatut);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.statutOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.filtreTypeConge);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.typesConges);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.filtreAnnee);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.anneesDisponibles);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteredHistorique.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteredHistorique.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteredHistorique.length > ctx.pageSize);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPagination], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: [".historique-conges[_ngcontent-%COMP%]   .page-title-box[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.historique-conges[_ngcontent-%COMP%]   .page-title-box[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {\n  background-color: transparent;\n  padding: 0;\n  margin: 0;\n}\n.historique-conges[_ngcontent-%COMP%]   .mini-stats-wid[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n.historique-conges[_ngcontent-%COMP%]   .mini-stats-wid[_ngcontent-%COMP%]   .mini-stat-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n.historique-conges[_ngcontent-%COMP%]   .mini-stats-wid[_ngcontent-%COMP%]   .mini-stat-icon[_ngcontent-%COMP%]   .avatar-title[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.historique-conges[_ngcontent-%COMP%]   .mini-stats-wid[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n}\n.historique-conges[_ngcontent-%COMP%]   .mini-stats-wid[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin-bottom: 0.5rem;\n}\n.historique-conges[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);\n  border: 1px solid #eff2f7;\n}\n.historique-conges[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #eff2f7;\n  padding: 1rem 1.25rem;\n}\n.historique-conges[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  color: #495057;\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0;\n}\n.historique-conges[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.5rem 1.25rem;\n}\n.historique-conges[_ngcontent-%COMP%]   .row.mb-4[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #495057;\n  margin-bottom: 0.375rem;\n}\n.historique-conges[_ngcontent-%COMP%]   .row.mb-4[_ngcontent-%COMP%]   .form-select-sm[_ngcontent-%COMP%], .historique-conges[_ngcontent-%COMP%]   .row.mb-4[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n}\n.historique-conges[_ngcontent-%COMP%]   .row.mb-4[_ngcontent-%COMP%]   .form-select-sm[_ngcontent-%COMP%]:focus, .historique-conges[_ngcontent-%COMP%]   .row.mb-4[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #556ee6;\n  box-shadow: 0 0 0 0.15rem rgba(85, 110, 230, 0.25);\n}\n.historique-conges[_ngcontent-%COMP%]   .row.mb-4[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-color: #ced4da;\n  color: #6c757d;\n}\n.historique-conges[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.historique-conges[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.historique-conges[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-top: none;\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: #495057;\n  white-space: nowrap;\n  padding: 0.75rem;\n  vertical-align: middle;\n}\n.historique-conges[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  font-size: 0.8125rem;\n  vertical-align: middle;\n  border-color: #eff2f7;\n}\n.historique-conges[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .fw-medium[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.historique-conges[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n}\n.historique-conges[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.historique-conges[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: rgba(85, 110, 230, 0.04);\n}\n.historique-conges[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .avatar-xs[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\n.historique-conges[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .avatar-xs[_ngcontent-%COMP%]   .avatar-title[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: white;\n  font-size: 0.875rem;\n}\n.historique-conges[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  font-weight: 500;\n  padding: 0.35em 0.65em;\n  border-radius: 0.25rem;\n}\n.historique-conges[_ngcontent-%COMP%]   .badge.badge-soft-success[_ngcontent-%COMP%] {\n  color: #0ab39c;\n  background-color: rgba(10, 179, 156, 0.1);\n  border: 1px solid rgba(10, 179, 156, 0.2);\n}\n.historique-conges[_ngcontent-%COMP%]   .badge.badge-soft-danger[_ngcontent-%COMP%] {\n  color: #f06548;\n  background-color: rgba(240, 101, 72, 0.1);\n  border: 1px solid rgba(240, 101, 72, 0.2);\n}\n.historique-conges[_ngcontent-%COMP%]   .badge.badge-soft-warning[_ngcontent-%COMP%] {\n  color: #f7b84b;\n  background-color: rgba(247, 184, 75, 0.1);\n  border: 1px solid rgba(247, 184, 75, 0.2);\n}\n.historique-conges[_ngcontent-%COMP%]   .badge.badge-soft-info[_ngcontent-%COMP%] {\n  color: #299cdb;\n  background-color: rgba(41, 156, 219, 0.1);\n  border: 1px solid rgba(41, 156, 219, 0.2);\n}\n.historique-conges[_ngcontent-%COMP%]   .text-center.py-5[_ngcontent-%COMP%] {\n  padding: 3rem 1rem !important;\n}\n.historique-conges[_ngcontent-%COMP%]   .text-center.py-5[_ngcontent-%COMP%]   .avatar-md[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n}\n.historique-conges[_ngcontent-%COMP%]   .text-center.py-5[_ngcontent-%COMP%]   .avatar-md[_ngcontent-%COMP%]   .avatar-title[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n.historique-conges[_ngcontent-%COMP%]   .text-center.py-5[_ngcontent-%COMP%]   .avatar-md[_ngcontent-%COMP%]   .avatar-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.historique-conges[_ngcontent-%COMP%]   .text-center.py-5[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-weight: 500;\n}\n.historique-conges[_ngcontent-%COMP%]   .text-center.py-5[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #8fa3b3;\n  margin-bottom: 1.5rem;\n}\n.historique-conges[_ngcontent-%COMP%]   .float-sm-end[_ngcontent-%COMP%]     .pagination .page-item .page-link {\n  color: #495057;\n  border-color: #dee2e6;\n}\n.historique-conges[_ngcontent-%COMP%]   .float-sm-end[_ngcontent-%COMP%]     .pagination .page-item .page-link:hover {\n  color: #556ee6;\n  background-color: #f8f9fa;\n  border-color: #dee2e6;\n}\n.historique-conges[_ngcontent-%COMP%]   .float-sm-end[_ngcontent-%COMP%]     .pagination .page-item.active .page-link {\n  background-color: #556ee6;\n  border-color: #556ee6;\n  color: white;\n}\n.historique-conges[_ngcontent-%COMP%]   .float-sm-end[_ngcontent-%COMP%]     .pagination .page-item.disabled .page-link {\n  color: #6c757d;\n  background-color: white;\n  border-color: #dee2e6;\n}\n.historique-conges[_ngcontent-%COMP%]   .btn.btn-outline-secondary[_ngcontent-%COMP%] {\n  border-color: #ced4da;\n  color: #6c757d;\n}\n.historique-conges[_ngcontent-%COMP%]   .btn.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: white;\n}\n.historique-conges[_ngcontent-%COMP%]   .btn.btn-soft-primary[_ngcontent-%COMP%] {\n  color: #556ee6;\n  background-color: rgba(85, 110, 230, 0.1);\n  border-color: transparent;\n}\n.historique-conges[_ngcontent-%COMP%]   .btn.btn-soft-primary[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: #556ee6;\n  border-color: #556ee6;\n}\n.historique-conges[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #556ee6;\n  border-color: #556ee6;\n}\n.historique-conges[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #4b63d2;\n  border-color: #4b63d2;\n}\n.historique-conges[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border: 1px solid #eff2f7;\n  box-shadow: 0 0.25rem 0.75rem rgba(18, 38, 63, 0.1);\n}\n.historique-conges[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.8125rem;\n  color: #495057;\n}\n.historique-conges[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  color: #495057;\n}\n.historique-conges[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 1rem;\n}\n.historique-conges[_ngcontent-%COMP%]   .btn[data-bs-toggle=tooltip][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n@media (max-width: 768px) {\n  .historique-conges[_ngcontent-%COMP%]   .mini-stats-wid[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  .historique-conges[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .historique-conges[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .historique-conges[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.375rem;\n  }\n  .historique-conges[_ngcontent-%COMP%]   .row.mb-4[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%], .historique-conges[_ngcontent-%COMP%]   .row.mb-4[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n    margin-bottom: 0.75rem;\n  }\n  .historique-conges[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%]:last-child {\n    margin-top: 1rem;\n  }\n  .historique-conges[_ngcontent-%COMP%]   .float-sm-end[_ngcontent-%COMP%] {\n    float: none !important;\n  }\n  .historique-conges[_ngcontent-%COMP%]   .float-sm-end[_ngcontent-%COMP%]     .pagination {\n    justify-content: center;\n  }\n}\n@media (max-width: 576px) {\n  .historique-conges[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n  }\n  .historique-conges[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 1rem 0.75rem !important;\n  }\n  .historique-conges[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n    font-size: 0.6875rem;\n  }\n  .historique-conges[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .historique-conges[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.375rem 0.25rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcmlxdWUtY29uZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUJBQUE7QUFBSjtBQUVJO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUFOO0FBTUk7RUFDRSxnQkFBQTtBQUpOO0FBT0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUxOO0FBT007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBTFI7QUFTSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQVBOO0FBVUk7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBUk47QUFhRTtFQUNFLG1EQUFBO0VBQ0EseUJBQUE7QUFYSjtBQWFJO0VBQ0UseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0FBWE47QUFhTTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQVhSO0FBZUk7RUFDRSx1QkFBQTtBQWJOO0FBbUJJO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQWpCTjtBQW9CSTs7RUFFRSxvQkFBQTtBQWxCTjtBQW9CTTs7RUFDRSxxQkFBQTtFQUNBLGtEQUFBO0FBakJSO0FBcUJJO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFuQk47QUF3QkU7RUFDRSxnQkFBQTtBQXRCSjtBQXdCSTtFQUNFLGdCQUFBO0FBdEJOO0FBd0JNO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBdEJSO0FBeUJNO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUF2QlI7QUF5QlE7RUFDRSxnQkFBQTtBQXZCVjtBQTBCUTtFQUNFLHlCQUFBO0FBeEJWO0FBMkJRO0VBQ0Usa0JBQUE7QUF6QlY7QUE2Qk07RUFDRSwwQ0FBQTtBQTNCUjtBQStCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBN0JSO0FBK0JRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBN0JWO0FBb0NFO0VBeUJFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBMURKO0FBK0JJO0VBQ0UsY0FBQTtFQUNBLHlDQUFBO0VBQ0EseUNBQUE7QUE3Qk47QUFnQ0k7RUFDRSxjQUFBO0VBQ0EseUNBQUE7RUFDQSx5Q0FBQTtBQTlCTjtBQWlDSTtFQUNFLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLHlDQUFBO0FBL0JOO0FBa0NJO0VBQ0UsY0FBQTtFQUNBLHlDQUFBO0VBQ0EseUNBQUE7QUFoQ047QUEwQ0U7RUFDRSw2QkFBQTtBQXhDSjtBQTBDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBeENOO0FBMENNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBeENSO0FBMENRO0VBQ0UsZUFBQTtBQXhDVjtBQTZDSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQTNDTjtBQThDSTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQTVDTjtBQXFEVTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQW5EWjtBQXFEWTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBbkRkO0FBdURVO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFyRFo7QUF3RFU7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQXREWjtBQStESTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQTdETjtBQStETTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBN0RSO0FBaUVJO0VBQ0UsY0FBQTtFQUNBLHlDQUFBO0VBQ0EseUJBQUE7QUEvRE47QUFpRU07RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQS9EUjtBQW1FSTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFqRU47QUFtRU07RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBakVSO0FBdUVFO0VBQ0UseUJBQUE7RUFDQSxtREFBQTtBQXJFSjtBQXVFSTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FBckVOO0FBdUVNO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBckVSO0FBd0VNO0VBQ0UsV0FBQTtBQXRFUjtBQTRFRTtFQUNFLGVBQUE7QUExRUo7QUErRUE7RUFFSTtJQUNFLG1CQUFBO0VBN0VKO0VBZ0ZFO0lBQ0Usa0JBQUE7RUE5RUo7RUFpRk07SUFDRSx3QkFBQTtFQS9FUjtFQXFGSTs7SUFFRSxzQkFBQTtFQW5GTjtFQXdGSTtJQUNFLGdCQUFBO0VBdEZOO0VBMEZFO0lBQ0Usc0JBQUE7RUF4Rko7RUEwRkk7SUFDRSx1QkFBQTtFQXhGTjtBQUNGO0FBNkZBO0VBRUk7SUFDRSxxQkFBQTtJQUNBLHNCQUFBO0VBNUZKO0VBK0ZFO0lBQ0UsZ0NBQUE7RUE3Rko7RUFpR0k7SUFDRSxvQkFBQTtFQS9GTjtFQWlHTTtJQUNFLHlCQUFBO0VBL0ZSO0FBQ0YiLCJmaWxlIjoiaGlzdG9yaXF1ZS1jb25nZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlzdG9yaXF1ZS1jb25nZXMge1xyXG4gIC5wYWdlLXRpdGxlLWJveCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICBcclxuICAgIC5icmVhZGNydW1iIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFN0YXRpc3RpcXVlcyBlbiBoYXV0XHJcbiAgLm1pbmktc3RhdHMtd2lkIHtcclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWluaS1zdGF0LWljb24ge1xyXG4gICAgICB3aWR0aDogNjBweDtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICBcclxuICAgICAgLmF2YXRhci10aXRsZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoNCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGV4dC1tdXRlZCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENhcnRlIHByaW5jaXBhbGVcclxuICAuY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMS41cmVtIHJnYmEoMTgsIDM4LCA2MywgMC4wMyk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWZmMmY3O1xyXG4gICAgXHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZjJmNztcclxuICAgICAgcGFkZGluZzogMXJlbSAxLjI1cmVtO1xyXG4gICAgICBcclxuICAgICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQtYm9keSB7XHJcbiAgICAgIHBhZGRpbmc6IDEuNXJlbSAxLjI1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gU2VjdGlvbiBkZXMgZmlsdHJlc1xyXG4gIC5yb3cubWItNCB7XHJcbiAgICAuZm9ybS1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC4zNzVyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mb3JtLXNlbGVjdC1zbSxcclxuICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICAgICAgXHJcbiAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzU1NmVlNjtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjE1cmVtIHJnYmEoODUsIDExMCwgMjMwLCAwLjI1KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2NlZDRkYTtcclxuICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBUYWJsZWF1IHJlc3BvbnNpdmVcclxuICAudGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgXHJcbiAgICAudGFibGUge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICBcclxuICAgICAgdGgge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gICAgICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2VmZjJmNztcclxuICAgICAgICBcclxuICAgICAgICAuZnctbWVkaXVtIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC50ZXh0LW11dGVkIHtcclxuICAgICAgICAgIGNvbG9yOiAjNmM3NTdkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHNtYWxsIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHRyOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg1LCAxMTAsIDIzMCwgMC4wNCk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEF2YXRhciBwb3VyIHR5cGVzIGRlIGNvbmfDqVxyXG4gICAgICAuYXZhdGFyLXhzIHtcclxuICAgICAgICB3aWR0aDogMnJlbTtcclxuICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmF2YXRhci10aXRsZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQmFkZ2VzIGRlIHN0YXR1dFxyXG4gIC5iYWRnZSB7XHJcbiAgICAmLmJhZGdlLXNvZnQtc3VjY2VzcyB7XHJcbiAgICAgIGNvbG9yOiAjMGFiMzljO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLCAxNzksIDE1NiwgMC4xKTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMCwgMTc5LCAxNTYsIDAuMik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuYmFkZ2Utc29mdC1kYW5nZXIge1xyXG4gICAgICBjb2xvcjogI2YwNjU0ODtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDEwMSwgNzIsIDAuMSk7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQwLCAxMDEsIDcyLCAwLjIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLmJhZGdlLXNvZnQtd2FybmluZyB7XHJcbiAgICAgIGNvbG9yOiAjZjdiODRiO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMTg0LCA3NSwgMC4xKTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDcsIDE4NCwgNzUsIDAuMik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuYmFkZ2Utc29mdC1pbmZvIHtcclxuICAgICAgY29sb3I6ICMyOTljZGI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDEsIDE1NiwgMjE5LCAwLjEpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQxLCAxNTYsIDIxOSwgMC4yKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZm9udC1zaXplOiAwLjY4NzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgfVxyXG5cclxuICAvLyDDiXRhdCB2aWRlXHJcbiAgLnRleHQtY2VudGVyLnB5LTUge1xyXG4gICAgcGFkZGluZzogM3JlbSAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgIC5hdmF0YXItbWQge1xyXG4gICAgICB3aWR0aDogNHJlbTtcclxuICAgICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgICBcclxuICAgICAgLmF2YXRhci10aXRsZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGg1IHtcclxuICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogIzhmYTNiMztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gUGFnaW5hdGlvblxyXG4gIC5mbG9hdC1zbS1lbmQge1xyXG4gICAgOjpuZy1kZWVwIHtcclxuICAgICAgLnBhZ2luYXRpb24ge1xyXG4gICAgICAgIC5wYWdlLWl0ZW0ge1xyXG4gICAgICAgICAgLnBhZ2UtbGluayB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNkZWUyZTY7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzU1NmVlNjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2RlZTJlNjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAmLmFjdGl2ZSAucGFnZS1saW5rIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NmVlNjtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjNTU2ZWU2O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICYuZGlzYWJsZWQgLnBhZ2UtbGluayB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQm91dG9ucyBkJ2FjdGlvblxyXG4gIC5idG4ge1xyXG4gICAgJi5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xyXG4gICAgICBib3JkZXItY29sb3I6ICNjZWQ0ZGE7XHJcbiAgICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgICBcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuYnRuLXNvZnQtcHJpbWFyeSB7XHJcbiAgICAgIGNvbG9yOiAjNTU2ZWU2O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg1LCAxMTAsIDIzMCwgMC4xKTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU2ZWU2O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzU1NmVlNjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLmJ0bi1wcmltYXJ5IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NmVlNjtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjNTU2ZWU2O1xyXG4gICAgICBcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRiNjNkMjtcclxuICAgICAgICBib3JkZXItY29sb3I6ICM0YjYzZDI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIERyb3Bkb3duIG1lbnVcclxuICAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWZmMmY3O1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDAuNzVyZW0gcmdiYSgxOCwgMzgsIDYzLCAwLjEpO1xyXG4gICAgXHJcbiAgICAuZHJvcGRvd24taXRlbSB7XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpIHtcclxuICAgICAgICB3aWR0aDogMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gVG9vbHRpcHNcclxuICAuYnRuW2RhdGEtYnMtdG9nZ2xlPVwidG9vbHRpcFwiXSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSZXNwb25zaXZlIGFkanVzdG1lbnRzXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5oaXN0b3JpcXVlLWNvbmdlcyB7XHJcbiAgICAubWluaS1zdGF0cy13aWQge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgXHJcbiAgICAgIC50YWJsZSB7XHJcbiAgICAgICAgdGgsIHRkIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjM3NXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJvdy5tYi00IHtcclxuICAgICAgLmNvbC1tZC0yLFxyXG4gICAgICAuY29sLW1kLTYge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQtaGVhZGVyIC5yb3cge1xyXG4gICAgICAuY29sLW1kLTY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZmxvYXQtc20tZW5kIHtcclxuICAgICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgXHJcbiAgICAgIDo6bmctZGVlcCAucGFnaW5hdGlvbiB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5oaXN0b3JpcXVlLWNvbmdlcyB7XHJcbiAgICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgcGFkZGluZzogMXJlbSAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50YWJsZS1yZXNwb25zaXZlIHtcclxuICAgICAgLnRhYmxlIHtcclxuICAgICAgICBmb250LXNpemU6IDAuNjg3NXJlbTtcclxuICAgICAgICBcclxuICAgICAgICB0aCwgdGQge1xyXG4gICAgICAgICAgcGFkZGluZzogMC4zNzVyZW0gMC4yNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 36404:
/*!**************************************************!*\
  !*** ./src/app/pages/conges/historique/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoriqueCongesComponent": () => (/* reexport safe */ _historique_conges_component__WEBPACK_IMPORTED_MODULE_0__.HistoriqueCongesComponent)
/* harmony export */ });
/* harmony import */ var _historique_conges_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./historique-conges.component */ 83792);



/***/ }),

/***/ 38666:
/*!*********************************************!*\
  !*** ./src/app/pages/conges/suivi/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuiviDemandesComponent": () => (/* reexport safe */ _suivi_demandes_component__WEBPACK_IMPORTED_MODULE_0__.SuiviDemandesComponent)
/* harmony export */ });
/* harmony import */ var _suivi_demandes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./suivi-demandes.component */ 23849);



/***/ }),

/***/ 23849:
/*!****************************************************************!*\
  !*** ./src/app/pages/conges/suivi/suivi-demandes.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuiviDemandesComponent": () => (/* binding */ SuiviDemandesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _conge_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../conge-api.service */ 98435);
/* harmony import */ var src_app_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/tokenservice.service */ 73565);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);







function SuiviDemandesComponent_option_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r5.label, " ");
} }
function SuiviDemandesComponent_option_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", type_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", type_r6.label, " ");
} }
function SuiviDemandesComponent_div_107_tr_19_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SuiviDemandesComponent_div_107_tr_19_div_24_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const demande_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r18.ouvrirModalValidation(demande_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SuiviDemandesComponent_div_107_tr_19_div_24_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const demande_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r21.ouvrirModalRefus(demande_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SuiviDemandesComponent_div_107_tr_19_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const demande_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r11.getStatutClass(demande_r8.statut));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r11.getStatutIcon(demande_r8.statut));
} }
function SuiviDemandesComponent_div_107_tr_19_li_30_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SuiviDemandesComponent_div_107_tr_19_li_30_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const demande_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r24.ouvrirModalValidation(demande_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Valider ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SuiviDemandesComponent_div_107_tr_19_li_31_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SuiviDemandesComponent_div_107_tr_19_li_31_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const demande_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r27.ouvrirModalRefus(demande_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Refuser ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SuiviDemandesComponent_div_107_tr_19_li_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "hr", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SuiviDemandesComponent_div_107_tr_19_li_37_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SuiviDemandesComponent_div_107_tr_19_li_37_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const demande_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r30.annulerDemande(demande_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Annuler ma demande ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SuiviDemandesComponent_div_107_tr_19_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "hr", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "li", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "small", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Motif du refus:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const demande_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", demande_r8.motifRefus, " ");
} }
function SuiviDemandesComponent_div_107_tr_19_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "hr", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "li", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "small", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Commentaires:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const demande_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", demande_r8.commentaire, " ");
} }
function SuiviDemandesComponent_div_107_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "small", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, SuiviDemandesComponent_div_107_tr_19_div_24_Template, 5, 0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, SuiviDemandesComponent_div_107_tr_19_span_25_Template, 2, 4, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "ul", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, SuiviDemandesComponent_div_107_tr_19_li_30_Template, 4, 0, "li", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, SuiviDemandesComponent_div_107_tr_19_li_31_Template, 4, 0, "li", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, SuiviDemandesComponent_div_107_tr_19_li_32_Template, 2, 0, "li", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SuiviDemandesComponent_div_107_tr_19_Template_a_click_34_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const demande_r8 = restoredCtx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r35.voirDetails(demande_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Voir d\u00E9tails ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, SuiviDemandesComponent_div_107_tr_19_li_37_Template, 4, 0, "li", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, SuiviDemandesComponent_div_107_tr_19_ng_container_38_Template, 9, 1, "ng-container", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, SuiviDemandesComponent_div_107_tr_19_ng_container_39_Template, 9, 1, "ng-container", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const demande_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("#", demande_r8.id.toString().padStart(4, "0"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](demande_r8.typeConge);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 19, demande_r8.dateDebut, "dd/MM/yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](11, 22, demande_r8.dateFin, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", demande_r8.duree, " jour(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](18, 25, demande_r8.dateDemande, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r7.getStatutClass(demande_r8.statut));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r7.getStatutIcon(demande_r8.statut));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r7.getStatutLabel(demande_r8.statut), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.peutValider(demande_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r7.peutValider(demande_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.peutValider(demande_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.peutValider(demande_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.peutValider(demande_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", demande_r8.statut.includes("EN_ATTENTE") && !ctx_r7.peutValider(demande_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", demande_r8.statut.includes("Refus\u00E9") && demande_r8.motifRefus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", demande_r8.commentaire && demande_r8.commentaire.trim());
} }
function SuiviDemandesComponent_div_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "thead", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Type de cong\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "P\u00E9riode");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Dur\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Date demande");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, SuiviDemandesComponent_div_107_tr_19_Template, 40, 28, "tr", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](20, 2, ctx_r2.filteredDemandes, (ctx_r2.page - 1) * ctx_r2.pageSize, ctx_r2.page * ctx_r2.pageSize))("ngForTrackBy", ctx_r2.trackByFn);
} }
function SuiviDemandesComponent_div_108_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Faire ma premi\u00E8re demande ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SuiviDemandesComponent_div_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Aucune demande trouv\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SuiviDemandesComponent_div_108_a_8_Template, 3, 0, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.demandes.length === 0 ? "Vous n'avez pas encore fait de demande de cong\u00E9." : "Aucune demande ne correspond aux filtres s\u00E9lectionn\u00E9s.", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.demandes.length === 0);
} }
function SuiviDemandesComponent_div_109_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ngb-pagination", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageChange", function SuiviDemandesComponent_div_109_Template_ngb_pagination_pageChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r38.page = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" Affichage ", (ctx_r4.page - 1) * ctx_r4.pageSize + 1, " \u00E0 ", ctx_r4.Math.min(ctx_r4.page * ctx_r4.pageSize, ctx_r4.collectionSize), " sur ", ctx_r4.collectionSize, " r\u00E9sultats ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("page", ctx_r4.page)("pageSize", ctx_r4.pageSize)("collectionSize", ctx_r4.collectionSize)("maxSize", 5)("rotate", true);
} }
class SuiviDemandesComponent {
    constructor(congeApiService, token) {
        this.congeApiService = congeApiService;
        this.token = token;
        this.demandes = [];
        this.filteredDemandes = [];
        // Filtres
        this.filtreStatut = 'TOUS';
        this.filtreTypeConge = 'TOUS';
        this.searchText = '';
        // Pagination
        this.page = 1;
        this.pageSize = 10;
        this.collectionSize = 0;
        // Options de filtre (nouveau workflow)
        this.statutOptions = [
            { value: 'TOUS', label: 'Tous les statuts' },
            { value: 'EN_ATTENTE_CHEF_A', label: 'En attente Chef A' },
            { value: 'EN_ATTENTE_CHEF_B', label: 'En attente Chef B' },
            { value: 'EN_ATTENTE_RH', label: 'En attente RH' },
            { value: 'APPROUVE', label: 'Approuvé' },
            { value: 'REFUSE_PAR_CHEF_A', label: 'Refusé par Chef A' },
            { value: 'REFUSE_PAR_CHEF_B', label: 'Refusé par Chef B' },
            { value: 'REFUSE_PAR_RH', label: 'Refusé par RH' },
            { value: 'EN_ATTENTE', label: 'En attente (ancien)' },
            { value: 'REFUSE', label: 'Refusé (ancien)' }
        ];
        this.typesConges = [
            { value: 'TOUS', label: 'Tous les types' },
            { value: 'Congé payé', label: 'Congé payé' },
            { value: 'Congé maladie', label: 'Congé maladie' },
            { value: 'Congé maternité', label: 'Congé maternité' },
            { value: 'Congé paternité', label: 'Congé paternité' },
            { value: 'Congé sans solde', label: 'Congé sans solde' },
            { value: 'Congé formation', label: 'Congé formation' }
        ];
        // Référence à Math pour l'utilisation dans le template
        this.Math = Math;
    }
    ngOnInit() {
        var _a;
        this.chargerDemandes();
        // S'abonner aux notifications de mise à jour (optionnel)
        // Pour l'instant, on charge simplement les demandes
        console.log('� Utilisateur connecté:', ((_a = this.token.getUser()) === null || _a === void 0 ? void 0 : _a.matriculeP) || 'Non défini');
    }
    ngOnDestroy() {
        // Nettoyer les abonnements
        if (this.demandesSubscription) {
            this.demandesSubscription.unsubscribe();
        }
    }
    chargerDemandes() {
        console.log('🔄 Chargement des demandes en attente de validation...');
        // Charger les demandes en attente selon le rôle de l'utilisateur
        this.congeApiService.getDemandesEnAttente().subscribe({
            next: (demandes) => {
                console.log('✅ Demandes en attente chargées:', demandes.length);
                console.log('📋 Détail des demandes en attente:', demandes);
                this.demandes = demandes;
                this.appliquerFiltres();
                // Message si aucune demande en attente
                if (demandes.length === 0) {
                    console.log('📭 Aucune demande de congé en attente de validation');
                }
            },
            error: (error) => {
                console.error('❌ Erreur lors du chargement des demandes en cours:', error);
                this.demandes = [];
                this.appliquerFiltres();
                // Gestion spécifique des erreurs d'authentification
                if ((error === null || error === void 0 ? void 0 : error.status) === 401) {
                    console.warn('🚫 Utilisateur non authentifié - redirection vers login');
                    window.location.href = '/account/login';
                }
            }
        });
    }
    /**
     * Actualise les demandes (appelée après ajout/annulation)
     */
    actualiserDemandes() {
        console.log('🔄 Actualisation des demandes...');
        this.chargerDemandes();
    }
    appliquerFiltres() {
        this.filteredDemandes = this.demandes.filter(demande => {
            var _a;
            let matchStatut = this.filtreStatut === 'TOUS' || demande.statut === this.filtreStatut;
            let matchType = this.filtreTypeConge === 'TOUS' || demande.typeConge === this.filtreTypeConge;
            let matchSearch = !this.searchText ||
                demande.typeConge.toLowerCase().includes(this.searchText.toLowerCase()) ||
                ((_a = demande.commentaire) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(this.searchText.toLowerCase()));
            return matchStatut && matchType && matchSearch;
        });
        this.collectionSize = this.filteredDemandes.length;
    }
    onFiltreChange() {
        this.page = 1; // Reset à la première page
        this.appliquerFiltres();
    }
    getStatutClass(statut) {
        // Utiliser la méthode du service API pour uniformiser
        return this.congeApiService.getStatutBadgeClass(statut);
    }
    getStatutIcon(statut) {
        // Utiliser la méthode du service API pour uniformiser
        return this.congeApiService.getStatutIcon(statut);
    }
    getStatutLabel(statut) {
        switch (statut) {
            case 'APPROUVE': return 'Approuvé';
            case 'REFUSE': return 'Refusé';
            case 'EN_ATTENTE': return 'En attente';
            case 'ANNULE': return 'Annulé';
            default: return 'Inconnu';
        }
    }
    // ========== NOUVELLES MÉTHODES DE VALIDATION ==========
    /**
     * Valide une demande de congé
     */
    validerDemande(demande, commentaire) {
        if (!this.peutValider(demande)) {
            alert('Vous n\'êtes pas autorisé à valider cette demande.');
            return;
        }
        const confirmMessage = `Êtes-vous sûr de vouloir VALIDER cette demande de congé ?
    Type: ${demande.typeConge}
    Période: du ${demande.dateDebut} au ${demande.dateFin}`;
        if (confirm(confirmMessage)) {
            const validationData = {
                action: 'VALIDER',
                commentaire: commentaire || 'Validation approuvée'
            };
            console.log('✅ Validation de la demande ID:', demande.id);
            this.congeApiService.validerConge(demande.id, validationData).subscribe({
                next: (response) => {
                    console.log('✅ Demande validée avec succès:', response);
                    alert(`Demande validée avec succès ! Nouveau statut: ${response.statut}`);
                    // Recharger les données
                    this.chargerDemandes();
                },
                error: (error) => {
                    console.error('❌ Erreur lors de la validation:', error);
                    alert(`Erreur lors de la validation: ${error.message || 'Une erreur est survenue'}`);
                }
            });
        }
    }
    /**
     * Refuse une demande de congé
     */
    refuserDemande(demande, motifRefus) {
        if (!this.peutValider(demande)) {
            alert('Vous n\'êtes pas autorisé à refuser cette demande.');
            return;
        }
        const motif = motifRefus || prompt('Veuillez indiquer le motif du refus:');
        if (!motif) {
            alert('Un motif de refus est obligatoire.');
            return;
        }
        const confirmMessage = `Êtes-vous sûr de vouloir REFUSER cette demande de congé ?
    Type: ${demande.typeConge}
    Période: du ${demande.dateDebut} au ${demande.dateFin}
    Motif: ${motif}`;
        if (confirm(confirmMessage)) {
            const validationData = {
                action: 'REFUSER',
                commentaire: motif
            };
            console.log('❌ Refus de la demande ID:', demande.id);
            this.congeApiService.refuserConge(demande.id, validationData).subscribe({
                next: (response) => {
                    console.log('❌ Demande refusée avec succès:', response);
                    alert(`Demande refusée. Nouveau statut: ${response.statut}`);
                    // Recharger les données
                    this.chargerDemandes();
                },
                error: (error) => {
                    console.error('❌ Erreur lors du refus:', error);
                    alert(`Erreur lors du refus: ${error.message || 'Une erreur est survenue'}`);
                }
            });
        }
    }
    /**
     * Détermine si l'utilisateur peut valider/refuser cette demande
     */
    peutValider(demande) {
        // Convertir vers CongeResponse pour la méthode du service
        const congeResponse = {
            id: demande.id || 0,
            typeConge: demande.typeConge,
            dateDebut: demande.dateDebut,
            dateFin: demande.dateFin,
            duree: demande.duree,
            statut: demande.statut,
            dateDemande: demande.dateDemande,
            commentaire: demande.commentaire,
            motifRefus: demande.motifRefus
        };
        return this.congeApiService.peutValider(congeResponse);
    }
    /**
     * Ouvre une modal pour saisir un commentaire lors de la validation
     */
    ouvrirModalValidation(demande) {
        // TODO: Implémenter une modal Bootstrap pour saisir le commentaire
        // Pour l'instant, on utilise prompt()
        const commentaire = prompt('Commentaire de validation (optionnel):');
        if (commentaire !== null) { // L'utilisateur n'a pas annulé
            this.validerDemande(demande, commentaire);
        }
    }
    /**
     * Ouvre une modal pour saisir le motif de refus
     */
    ouvrirModalRefus(demande) {
        // TODO: Implémenter une modal Bootstrap pour saisir le motif
        // Pour l'instant, on utilise prompt()
        const motif = prompt('Motif du refus (obligatoire):');
        if (motif && motif.trim()) {
            this.refuserDemande(demande, motif.trim());
        }
        else if (motif !== null) {
            alert('Le motif du refus est obligatoire.');
        }
    }
    // Méthode pour annuler une demande en attente
    annulerDemande(demande) {
        if (demande.statut === 'EN_ATTENTE' && demande.id) {
            if (confirm('Êtes-vous sûr de vouloir annuler cette demande ?')) {
                console.log('🗑️ Annulation de la demande:', demande.id);
                this.congeApiService.annulerDemande(demande.id).subscribe({
                    next: (response) => {
                        console.log('✅ Demande annulée avec succès:', response);
                        // Recharger les données pour avoir l'état à jour
                        this.chargerDemandes();
                    },
                    error: (error) => {
                        console.error('❌ Erreur lors de l\'annulation:', error);
                        let errorMessage = 'Une erreur est survenue lors de l\'annulation de la demande.';
                        if (error === null || error === void 0 ? void 0 : error.error) {
                            errorMessage = typeof error.error === 'string' ? error.error : error.error.message || errorMessage;
                        }
                        alert(errorMessage);
                    }
                });
            }
        }
        else if (demande.statut !== 'EN_ATTENTE') {
            alert('Seules les demandes en attente peuvent être annulées.');
        }
    }
    // Méthode pour afficher les détails d'une demande
    voirDetails(demande) {
        // TODO: Ouvrir une modal avec les détails complets
        console.log('Détails de la demande:', demande);
    }
    // Méthodes pour l'export
    exporterExcel() {
        // TODO: Implémenter l'export Excel
        console.log('Export Excel des demandes');
    }
    exporterPDF() {
        // TODO: Implémenter l'export PDF
        console.log('Export PDF des demandes');
    }
    // Calcul des statistiques rapides
    getStatistiques() {
        const total = this.demandes.length;
        const enAttente = this.demandes.filter(d => d.statut === 'EN_ATTENTE').length;
        const approuvees = this.demandes.filter(d => d.statut === 'APPROUVE').length;
        const refusees = this.demandes.filter(d => d.statut === 'REFUSE').length;
        return { total, enAttente, approuvees, refusees };
    }
    // TrackBy function pour optimiser les performances
    trackByFn(index, item) {
        return item.id;
    }
}
SuiviDemandesComponent.ɵfac = function SuiviDemandesComponent_Factory(t) { return new (t || SuiviDemandesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_conge_api_service__WEBPACK_IMPORTED_MODULE_0__.CongeApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_tokenservice_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorage)); };
SuiviDemandesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SuiviDemandesComponent, selectors: [["app-suivi-demandes"]], decls: 110, vars: 12, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "page-title-box", "d-sm-flex", "align-items-center", "justify-content-between"], [1, "mb-sm-0", "font-size-18"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "col-xl-3", "col-md-6"], [1, "card", "mini-stats-wid"], [1, "card-body"], [1, "media"], [1, "media-body"], [1, "text-muted", "fw-medium"], [1, "mb-0"], [1, "mini-stat-icon", "avatar-sm", "rounded-circle", "bg-primary", "align-self-center"], [1, "avatar-title"], [1, "bx", "bx-calendar", "font-size-24"], [1, "mini-stat-icon", "avatar-sm", "rounded-circle", "bg-warning", "align-self-center"], [1, "bx", "bx-time", "font-size-24"], [1, "mini-stat-icon", "avatar-sm", "rounded-circle", "bg-success", "align-self-center"], [1, "bx", "bx-check-circle", "font-size-24"], [1, "mini-stat-icon", "avatar-sm", "rounded-circle", "bg-danger", "align-self-center"], [1, "bx", "bx-x-circle", "font-size-24"], [1, "col-lg-12"], [1, "card"], [1, "card-header"], [1, "row", "align-items-center"], [1, "col-md-6"], [1, "card-title", "mb-0"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-end", "gap-2"], ["routerLink", "/conges/demande", 1, "btn", "btn-primary"], [1, "bx", "bx-plus", "me-1"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-secondary", "dropdown-toggle"], [1, "bx", "bx-download", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item", 3, "click"], [1, "bx", "bx-file", "me-1"], [1, "bx", "bx-file-blank", "me-1"], [1, "row", "mb-4"], [1, "col-md-3"], ["for", "filtreStatut", 1, "form-label"], ["id", "filtreStatut", 1, "form-select", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "filtreTypeConge", 1, "form-label"], ["id", "filtreTypeConge", 1, "form-select", 3, "ngModel", "ngModelChange"], ["for", "searchText", 1, "form-label"], [1, "input-group"], [1, "input-group-text"], [1, "bx", "bx-search"], ["type", "text", "id", "searchText", "placeholder", "Rechercher dans les commentaires...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "table-responsive", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row align-items-center mt-4", 4, "ngIf"], [3, "value"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0"], [1, "table-light"], [1, "text-center"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "fw-medium"], [1, "text-muted"], [1, "badge", "badge-soft-info"], [1, "me-1"], ["class", "btn-group me-2", "role", "group", 4, "ngIf"], ["class", "me-2", 3, "class", 4, "ngIf"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-light", "btn-sm", "dropdown-toggle"], [4, "ngIf"], [1, "bx", "bx-show", "me-1"], ["role", "group", 1, "btn-group", "me-2"], ["type", "button", "title", "Valider cette demande", 1, "btn", "btn-sm", "btn-success", 3, "click"], [1, "bx", "bx-check"], ["type", "button", "title", "Refuser cette demande", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "bx", "bx-x"], [1, "me-2"], ["href", "javascript:void(0);", 1, "dropdown-item", "text-success", 3, "click"], [1, "bx", "bx-check-circle", "me-1"], ["href", "javascript:void(0);", 1, "dropdown-item", "text-danger", 3, "click"], [1, "bx", "bx-x-circle", "me-1"], [1, "dropdown-divider"], ["href", "javascript:void(0);", 1, "dropdown-item", "text-warning", 3, "click"], [1, "bx", "bx-x", "me-1"], [1, "dropdown-item-text"], [1, "text-center", "py-5"], [1, "avatar-md", "mx-auto", "mb-4"], [1, "avatar-title", "bg-light", "rounded-circle", "text-primary", "h1"], [1, "bx", "bx-calendar-x"], ["routerLink", "/conges/demande", "class", "btn btn-primary", 4, "ngIf"], [1, "row", "align-items-center", "mt-4"], [1, "col-sm-6"], [1, "mb-sm-0", "text-muted"], [1, "float-sm-end"], [3, "page", "pageSize", "collectionSize", "maxSize", "rotate", "pageChange"]], template: function SuiviDemandesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Suivi des demandes de cong\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Cong\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Suivi des demandes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Total demandes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "En attente");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Approuv\u00E9es");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Refus\u00E9es");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Mes demandes de cong\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Nouvelle demande ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Exporter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "ul", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SuiviDemandesComponent_Template_a_click_81_listener() { return ctx.exporterExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Excel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SuiviDemandesComponent_Template_a_click_85_listener() { return ctx.exporterPDF(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "PDF ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Filtrer par statut");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "select", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SuiviDemandesComponent_Template_select_ngModelChange_93_listener($event) { return ctx.filtreStatut = $event; })("ngModelChange", function SuiviDemandesComponent_Template_select_ngModelChange_93_listener() { return ctx.onFiltreChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](94, SuiviDemandesComponent_option_94_Template, 2, 2, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Filtrer par type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "select", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SuiviDemandesComponent_Template_select_ngModelChange_98_listener($event) { return ctx.filtreTypeConge = $event; })("ngModelChange", function SuiviDemandesComponent_Template_select_ngModelChange_98_listener() { return ctx.onFiltreChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](99, SuiviDemandesComponent_option_99_Template, 2, 2, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Rechercher");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SuiviDemandesComponent_Template_input_ngModelChange_106_listener($event) { return ctx.searchText = $event; })("ngModelChange", function SuiviDemandesComponent_Template_input_ngModelChange_106_listener() { return ctx.onFiltreChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](107, SuiviDemandesComponent_div_107_Template, 21, 6, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](108, SuiviDemandesComponent_div_108_Template, 9, 2, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](109, SuiviDemandesComponent_div_109_Template, 8, 8, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getStatistiques().total);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getStatistiques().enAttente);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getStatistiques().approuvees);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getStatistiques().refusees);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.filtreStatut);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.statutOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.filtreTypeConge);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.typesConges);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteredDemandes.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteredDemandes.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteredDemandes.length > ctx.pageSize);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPagination], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], styles: ["@charset \"UTF-8\";\n\n.mini-stats-wid[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n  border: 1px solid #f6f6f6;\n  transition: all 0.3s ease;\n}\n.mini-stats-wid[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n.card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n  background-color: #f8f9fa !important;\n  border-bottom: 2px solid #dee2e6;\n}\n.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: rgba(85, 110, 230, 0.05);\n}\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  padding: 0.375rem 0.75rem;\n}\n.bg-success[_ngcontent-%COMP%] {\n  background-color: #34c38f !important;\n}\n.bg-warning[_ngcontent-%COMP%] {\n  background-color: #f1b44c !important;\n}\n.bg-danger[_ngcontent-%COMP%] {\n  background-color: #f46a6a !important;\n}\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: #74788d !important;\n}\n.badge-soft-info[_ngcontent-%COMP%] {\n  color: #50a5f1;\n  background-color: rgba(80, 165, 241, 0.1);\n}\n\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n}\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  margin-left: 0.5rem;\n}\n\n.mini-stat-icon[_ngcontent-%COMP%] {\n  animation: pulse 2s infinite;\n}\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.form-select[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  border-radius: 0.375rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-select[_ngcontent-%COMP%]:focus, .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #556ee6;\n  box-shadow: 0 0 0 0.2rem rgba(85, 110, 230, 0.25);\n}\n\n.pagination[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.page-link[_ngcontent-%COMP%] {\n  color: #556ee6;\n  border: 1px solid #dee2e6;\n}\n.page-link[_ngcontent-%COMP%]:hover {\n  color: #4b63d2;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background-color: #556ee6;\n  border-color: #556ee6;\n}\n\n.avatar-md[_ngcontent-%COMP%] {\n  height: 3.5rem;\n  width: 3.5rem;\n}\n.avatar-title[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: #556ee6;\n  color: #fff;\n  display: flex;\n  font-weight: 500;\n  height: 100%;\n  justify-content: center;\n  width: 100%;\n}\n\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n}\n\n.fas[_ngcontent-%COMP%], .bx[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n\n@media (max-width: 768px) {\n  .card-header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n\n  .card-header[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n    grid-gap: 0.5rem;\n    gap: 0.5rem;\n  }\n\n  .table-responsive[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n\n  .mini-stats-wid[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  border-radius: 0.375rem;\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  transition: all 0.15s ease;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.dropdown-item.text-danger[_ngcontent-%COMP%]:hover {\n  background-color: #f8d7da;\n  color: #721c24 !important;\n}\n\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.loading[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1aXZpLWRlbWFuZGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQix1REFBQTtBQUVBO0VBQ0kseUNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFFQTtFQUNJLHdDQUFBO0VBQ0EsMkJBQUE7QUFDSjtBQUVBO0VBQ0ksbURBQUE7RUFDQSxzQ0FBQTtBQUNKO0FBRUE7RUFDSSx5QkFBQTtFQUNBLDZDQUFBO0FBQ0o7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0VBQ0EsZ0NBQUE7QUFDSjtBQUVBO0VBQ0ksMENBQUE7QUFDSjtBQUVBLHlCQUFBO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUVBO0VBQ0ksb0NBQUE7QUFDSjtBQUVBO0VBQ0ksb0NBQUE7QUFDSjtBQUVBO0VBQ0ksb0NBQUE7QUFDSjtBQUVBO0VBQ0ksb0NBQUE7QUFDSjtBQUVBO0VBQ0ksY0FBQTtFQUNBLHlDQUFBO0FBQ0o7QUFFQSxxQ0FBQTtBQUNBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUE7RUFDSSxtQkFBQTtBQUNKO0FBRUEsb0NBQUE7QUFDQTtFQUNJLDRCQUFBO0FBQ0o7QUFFQTtFQUNJO0lBQ0ksbUJBQUE7RUFDTjtFQUNFO0lBQ0ksc0JBQUE7RUFDTjtFQUNFO0lBQ0ksbUJBQUE7RUFDTjtBQUNGO0FBRUEsNEJBQUE7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3RUFBQTtBQUFKO0FBR0E7RUFDSSxxQkFBQTtFQUNBLGlEQUFBO0FBQUo7QUFHQSw4QkFBQTtBQUNBO0VBQ0ksZ0JBQUE7QUFBSjtBQUdBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FBQUo7QUFHQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQUo7QUFHQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUFBSjtBQUdBLHlDQUFBO0FBQ0E7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBQUFKO0FBR0E7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFBSjtBQUdBLHlDQUFBO0FBQ0E7RUFDSSx5QkFBQTtBQUFKO0FBR0EscUNBQUE7QUFDQTtFQUNJLG1CQUFBO0FBQUo7QUFHQSw0QkFBQTtBQUNBO0VBQ0k7SUFDSSxtQkFBQTtFQUFOOztFQUdFO0lBQ0ksc0JBQUE7SUFDQSxnQkFBQTtJQUFBLFdBQUE7RUFBTjs7RUFHRTtJQUNJLG1CQUFBO0VBQU47O0VBR0U7SUFDSSxtQkFBQTtFQUFOO0FBQ0Y7QUFHQSx3Q0FBQTtBQUNBO0VBQ0kscUNBQUE7RUFDQSw2Q0FBQTtFQUNBLHVCQUFBO0FBREo7QUFJQTtFQUNJLG9CQUFBO0VBQ0EsMEJBQUE7QUFESjtBQUlBO0VBQ0kseUJBQUE7QUFESjtBQUlBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBQURKO0FBSUEsbUJBQUE7QUFDQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtBQURKO0FBSUEseUJBQUE7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBREoiLCJmaWxlIjoic3VpdmktZGVtYW5kZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiBTdHlsZXMgc3DDqWNpZmlxdWVzIGF1IGNvbXBvc2FudCBzdWl2aSBkZXMgZGVtYW5kZXMgKi9cbi5taW5pLXN0YXRzLXdpZCB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjZmNmY2O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4ubWluaS1zdGF0cy13aWQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5cbi5jYXJkIHtcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xufVxuXG4udGFibGUgdGgge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RlZTJlNjtcbn1cblxuLnRhYmxlLWhvdmVyIHRib2R5IHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4NSwgMTEwLCAyMzAsIDAuMDUpO1xufVxuXG4vKiBCYWRnZXMgcGVyc29ubmFsaXPDqXMgKi9cbi5iYWRnZSB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbn1cblxuLmJnLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzRjMzhmICFpbXBvcnRhbnQ7XG59XG5cbi5iZy13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxYjQ0YyAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NmE2YSAhaW1wb3J0YW50O1xufVxuXG4uYmctc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc0Nzg4ZCAhaW1wb3J0YW50O1xufVxuXG4uYmFkZ2Utc29mdC1pbmZvIHtcbiAgY29sb3I6ICM1MGE1ZjE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODAsIDE2NSwgMjQxLCAwLjEpO1xufVxuXG4vKiBTdHlsZXMgcG91ciBsZXMgYm91dG9ucyBkJ2FjdGlvbiAqL1xuLmJ0bi1zbSB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5cbi8qIEFuaW1hdGlvbiBwb3VyIGxlcyBzdGF0aXN0aXF1ZXMgKi9cbi5taW5pLXN0YXQtaWNvbiB7XG4gIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuLyogU3R5bGVzIHBvdXIgbGVzIGZpbHRyZXMgKi9cbi5mb3JtLXNlbGVjdCwgLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLXNlbGVjdDpmb2N1cywgLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzU1NmVlNjtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoODUsIDExMCwgMjMwLCAwLjI1KTtcbn1cblxuLyogU3R5bGVzIHBvdXIgbGEgcGFnaW5hdGlvbiAqL1xuLnBhZ2luYXRpb24ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ucGFnZS1saW5rIHtcbiAgY29sb3I6ICM1NTZlZTY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi5wYWdlLWxpbms6aG92ZXIge1xuICBjb2xvcjogIzRiNjNkMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xufVxuXG4ucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NmVlNjtcbiAgYm9yZGVyLWNvbG9yOiAjNTU2ZWU2O1xufVxuXG4vKiBTdHlsZXMgcG91ciBsZXMgbWVzc2FnZXMgZCfDqXRhdCB2aWRlICovXG4uYXZhdGFyLW1kIHtcbiAgaGVpZ2h0OiAzLjVyZW07XG4gIHdpZHRoOiAzLjVyZW07XG59XG5cbi5hdmF0YXItdGl0bGUge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU2ZWU2O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIEFuaW1hdGlvbiBwb3VyIGxlcyBsaWduZXMgZHUgdGFibGVhdSAqL1xuLnRhYmxlIHRib2R5IHRyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cblxuLyogU3R5bGVzIHBvdXIgbGVzIGljw7RuZXMgZGUgc3RhdHV0ICovXG4uZmFzLCAuYngge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuXG4vKiBSZXNwb25zaXZlIGltcHJvdmVtZW50cyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJkLWhlYWRlciAucm93ID4gZGl2IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgLmNhcmQtaGVhZGVyIC5kLWZsZXgge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjVyZW07XG4gIH1cblxuICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgfVxuXG4gIC5taW5pLXN0YXRzLXdpZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxufVxuLyogQW3DqWxpb3JhdGlvbiB2aXN1ZWxsZSBkZXMgZHJvcGRvd25zICovXG4uZHJvcGRvd24tbWVudSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xufVxuXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi5kcm9wZG93bi1pdGVtLnRleHQtZGFuZ2VyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgY29sb3I6ICM3MjFjMjQgIWltcG9ydGFudDtcbn1cblxuLyogTG9hZGluZyBzdGF0ZXMgKi9cbi50YWJsZSB0Ym9keSB0ci5sb2FkaW5nIHtcbiAgb3BhY2l0eTogMC42O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogRW5oYW5jZWQgZm9ybSBsYWJlbHMgKi9cbi5mb3JtLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn0iXX0= */"] });


/***/ }),

/***/ 51382:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/ui.module */ 63091);
/* harmony import */ var _widget_widget_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget/widget.module */ 57337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule,
            _widget_widget_module__WEBPACK_IMPORTED_MODULE_1__.WidgetModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule,
        _widget_widget_module__WEBPACK_IMPORTED_MODULE_1__.WidgetModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_conges_conges_module_ts.js.map