/**
 * Copyright (c) 2009-2010 The Open Planning Project
 */

GeoExt.Lang.add("en", {
    "GeoExplorer.prototype": {
        zoomSliderText: "<div>Zoom Level: {zoom}</div><div>Scale: 1:{scale}</div>",
        loadConfigErrorText: "Trouble reading saved configuration: <br />",
        loadConfigErrorDefaultText: "Server Error.",
        xhrTroubleText: "Communication Trouble: Status ",
        layersText: "Layers",
        titleText: "Title",
        zoomLevelText: "Zoom level",
        saveErrorText: "Trouble saving: ",
        bookmarkText: "Bookmark URL",
        permakinkText: "Permalink",
        appInfoText: "Credits",
        aboutText: "About GeoExplorer",
        mapInfoText: "Map Info",
        descriptionText: "Description",
        contactText: "Contact",
        aboutThisMapText: "About this Map",
        searchTabTitle : "Search",
        viewTabTitle : "View"
    },
    
    "GeoExplorer.Composer.prototype": {
        loadMapText: "Import Map",
        saveMapText: "Export Map",
        toolsTitle: "Choose tools to include in the toolbar:",
        previewText: "Preview",
        backText: "Back",
        nextText: "Next",
        loginText: "Login",
        loginErrorText: "Invalid username or password.",
        userFieldText: "User",
        passwordFieldText: "Password"
    },

    "gxp.menu.LayerMenu.prototype": {
        layerText: "Layer"
    },

    "gxp.plugins.AddLayers.prototype": {
        addActionMenuText: "Add layers",
        addActionTip: "Add layers",
        addServerText: "Add a New Server",
        addButtonText: "Add layers",
        untitledText: "Untitled",
        addLayerSourceErrorText: "Error getting WMS capabilities ({msg}).\nPlease check the url and try again.",
        availableLayersText: "Available Layers",
        expanderTemplateText: "<p><b>Abstract:</b> {abstract}</p>",
        panelTitleText: "Title",
        layerSelectionText: "View available data from:",
        doneText: "Done",
        uploadText: "Upload Data"
    },

    "gxp.plugins.RemoveOverlays.prototype": {
	    removeOverlaysMenuText: "Retirer des superpositions",
	    removeOverlaysActionTip: "Supprime toutes les superpositions de la carte",
	    removeOverlaysConfirmationText: "Etes-vous sûr de vouloir supprimer tous les calques chargés de la carte?",
    },
    
    "gxp.plugins.BingSource.prototype": {
        title: "Bing Layers",
        roadTitle: "Bing Roads",
        aerialTitle: "Bing Aerial",
        labeledAerialTitle: "Bing Aerial With Labels"
    },

    "gxp.plugins.GoogleEarth.prototype": {
        apiKeyPrompt: "Please enter the Google API key for ",
        menuText: "3D Viewer",
        tooltip: "Switch to 3D Viewer"
    },
    
    "gxp.plugins.GoogleSource.prototype": {
        title: "Google Layers",
        roadmapAbstract: "Show street map",
        satelliteAbstract: "Show satellite imagery",
        hybridAbstract: "Show imagery with street names",
        terrainAbstract: "Show street map with terrain"
    },

    "gxp.plugins.LayerProperties.prototype": {
        menuText: "Layer Properties",
        toolTip: "Layer Properties"
    },
    
    "gxp.plugins.LayerTree.prototype": {
        rootNodeText: "Layers",
        overlayNodeText: "Default",
        baseNodeText: "Background"
    },

    "gxp.plugins.Legend.prototype": {
        menuText: "Show Legend",
        tooltip: "Show Legend"
    },    
    
    "gxp.plugins.Measure.prototype": {
        lengthMenuText: "Length",
        areaMenuText: "Area",
        lengthTooltip: "Measure length",
        areaTooltip: "Measure area",
        measureTooltip: "Measure"
    },

    "gxp.plugins.Navigation.prototype": {
        menuText: "Pan Map",
        tooltip: "Pan Map"
    },

    "gxp.plugins.NavigationHistory.prototype": {
        previousMenuText: "Zoom To Previous Extent",
        nextMenuText: "Zoom To Next Extent",
        previousTooltip: "Zoom To Previous Extent",
        nextTooltip: "Zoom To Next Extent"
    },

    "gxp.plugins.OSMSource.prototype": {
        title: "OpenStreetMap Layers",
        mapnikAttribution: "Data CC-By-SA by <a href='http://openstreetmap.org/'>OpenStreetMap</a>",
        osmarenderAttribution: "Data CC-By-SA by <a href='http://openstreetmap.org/'>OpenStreetMap</a>"
    },

    "gxp.plugins.Print.prototype": {
        menuText: "Print Map",
        tooltip: "Print Map",
        previewText: "Print Preview",
        notAllNotPrintableText: "Not All Layers Can Be Printed",
        nonePrintableText: "None of your current map layers can be printed",
		notPrintableLayersText: "Following layers can not be printed:"
    },

    "gxp.plugins.MapQuestSource.prototype": {
        title: "MapQuest Layers",
        osmAttribution: "Tiles Courtesy of <a href='http://open.mapquest.co.uk/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png' border='0'>",
        osmTitle: "MapQuest OpenStreetMap",
        naipAttribution: "Tiles Courtesy of <a href='http://open.mapquest.co.uk/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png' border='0'>",
        naipTitle: "MapQuest Imagery"
    },

    "gxp.plugins.RemoveLayer.prototype": {
        removeMenuText: "Remove layer",
        removeActionTip: "Remove layer"
    },

    "gxp.plugins.WMSGetFeatureInfo.prototype": {
        infoActionTip: "Get Feature Info",
        popupTitle: "Feature Info"
    },

    "gxp.plugins.Zoom.prototype": {
        zoomInMenuText: "Zoom In",
        zoomOutMenuText: "Zoom Out",
        zoomInTooltip: "Zoom In",
        zoomOutTooltip: "Zoom Out"
    },
    
    "gxp.plugins.ZoomToExtent.prototype": {
        menuText: "Zoom To Max Extent",
        tooltip: "Zoom To Max Extent"
    },
    
    "gxp.plugins.ZoomToDataExtent.prototype": {
        menuText: "Zoom to layer extent",
        tooltip: "Zoom to layer extent"
    },

    "gxp.plugins.ZoomToLayerExtent.prototype": {
        menuText: "Zoom to layer extent",
        tooltip: "Zoom to layer extent"
    },
    
    "gxp.WMSLayerPanel.prototype": {
        aboutText: "About",
        titleText: "Title",
        nameText: "Name",
        descriptionText: "Description",
        displayText: "Display",
        opacityText: "Opacity",
        formatText: "Format",
        transparentText: "Transparent",
        cacheText: "Cache",
        cacheFieldText: "Use cached version",
        stylesText: "Styles"
    },

    "gxp.NewSourceWindow.prototype": {
        title: "Add New Server...",
        cancelText: "Cancel",
        addServerText: "Add Server",
        invalidURLText: "Enter a valid URL to a WMS endpoint (e.g. http://example.com/geoserver/wms)",
        contactingServerText: "Contacting Server..."
    },

    "gxp.ScaleOverlay.prototype": { 
        zoomLevelText: "Zoom level"
    }

    "gxp.plugins.AddGroup.prototype": { 
	    addGroupMenuText: "Add Group",
	    addGroupActionTip: "Add a new group in the layer tree",   
	    addGroupDialogTitle: "New Group", 
	    addGroupFieldSetText: "Group Name",
	    addGroupFieldLabel: "New Group",
	    addGroupButtonText: "Add Group",
	    addGroupMsg: "Please enter a group name"	
    },
    
    "gxp.plugins.RemoveGroup.prototype": { 
	    removeGroupMenuText: "Remove Group",
	    removeGroupActionTip: "Remove a group from the layer tree",
	    removeGroupActionTip: "Removes the selected group and own layers from the map",
	    removeGroupConfirmationText: "Are you sure you want to remove the selected group ? The all layers inside this group will be removed from the map."
    },
    
    "gxp.plugins.SaveDefaultContext.prototype": { 
	    saveDefaultContextMenuText: "Save default context",
	    saveDefaultContextActionTip: "Save current context as default one",
	    contextSaveSuccessString: "Context saved succesfully",
	    contextSaveFailString: "Context not saved succesfully"
    },
    "gxp.plugins.FDHGeoCoder.prototype": {
        initialText: "Select an area",
        menuText: "FDH Geo Coding",
        tooltip: "FDH Geo Coding"
    },
    "gxp.plugins.ZoomBox.prototype":{
        zoomInMenuText: "Zoom Box In",
        zoomOutMenuText: "Zoom Box Out",
        zoomInTooltip: "Zoom Box In",
        zoomOutTooltip: "Zoom Box Out"
	},
     "GeoExt.ux.PrintPreview.prototype":{
    paperSizeText: "Paper size:",
    resolutionText: "Resolution:",
    printText: "Print",
    emptyTitleText: "Enter map title here.",
    includeLegendText: "Include legend?",
	legendOnSeparatePageText: "Legend on separate page?",
	compactLegendText: "Compact legend?",	
    emptyCommentText: "Enter comments here.",
    creatingPdfText: "Creating PDF..."
    },
    "gxp.plugins.GeonetworkSearch.prototype":{
        geonetworkSearchText: "View metadata",
        geonetworkSearchActionTip: "View metadata"
    },
    "gxp.plugins.GroupProperties.prototype":{
        groupPropertiesMenuText:  "Group Properties",
        groupPropertiesActionTip:  "Group Properties",
        groupPropertiesDialogTitle: "Group Properties - ",
        groupPropertiesFieldSetText: "Group Name",
        groupPropertiesFieldLabel: "New Group Name",
        groupPropertiesButtonText: "Done",
        groupPropertiesMsg: "Please enter a group name"
    },
	"gxp.plugins.Login.prototype":{
		loginText: "Login",
        loginErrorText: "Invalid username or password.",
        userFieldText: "User",
        passwordFieldText: "Password"
	}
});
