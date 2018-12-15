import React from "react";
import TestUtils from "react-addons-test-utils";
import expect from "expect";
import ReleaseForm from "../componentes/ui/ReleaseForm";


describe("<ReleaseForm />", () => {

    it("should return an p with 'Sing in' string", () => {

        const component = TestUtils.renderIntoDocument(
            <ReleaseForm />
        );

        const p = TestUtils.findRenderedDOMComponentWithTag(
            component, "p"
        );

        expect(p.textContent).toEqual("ReleaseForm")
    });

});