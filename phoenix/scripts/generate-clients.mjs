#!/usr/bin/env zx
import "zx/globals";
import * as c from "codama";
import { rootNodeFromAnchor } from "@codama/nodes-from-anchor";
import { renderVisitor as renderJavaScriptVisitor } from "@codama/renderers-js";

// Paths.
const packageDir = path.join(__dirname, "..");
const idlDir = path.join(__dirname, "..");

// Render Phoenix types.
const idl = rootNodeFromAnchor(require(path.join(idlDir, "phoenix_v1.json")));
const codama = c.createFromRoot(idl, []);

// Render JavaScript.
codama.accept(
  renderJavaScriptVisitor(path.join(packageDir, "src", "generated"), {
    prettier: require(path.join(packageDir, ".prettierrc.json")),
  }),
);
