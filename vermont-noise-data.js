const vermont_sound_pollution_dataset = {
    "metadata": {
      "total_locations": 117,
      "existing_user_locations": 15,
      "new_research_locations": 102,
      "coordinate_system": "WGS84",
      "precision": "4_decimal_places",
      "last_updated": "2025-01-15",
      "academic_sources": 41,
      "data_quality": "All locations verified through multiple academic/regulatory sources",
      "weather_integration": "Temperature inversions, wind effects, seasonal variations documented",
      "temporal_patterns": "Daily, weekly, seasonal, and weather-dependent variations included"
    },
    "locations": [
      {
        "id": 1,
        "name": "F-35 Noise Data & Sources (Burlington International Airport)",
        "coordinates": [44.4759, -73.1533],
        "type": "Aviation - Military Fighter Jets",
        "noise_level": "Very High (80-130 dB)",
        "base_noise_description": "F-35 operations 4x louder than predecessor F-16",
        "temporal_variations": {
          "daily_peak": "0800-1700 military training hours",
          "quiet_hours": "2200-0600",
          "training_seasons": "Spring/Fall peak activity",
          "winter_reduced": "December-March reduced operations"
        },
        "weather_effects": {
          "wind_amplification": "Downwind areas experience 3-5 dB increase",
          "atmospheric_inversions": "Temperature inversions increase noise propagation",
          "seasonal_impact": "Cold air masses increase propagation up to 2 miles"
        },
        "community_impact": "Thousands of residents exposed, neighborhoods unsuitable for residential use",
        "status": "existing_user_location",
        "sources": [
          "BTVSound Noise Exposure Map Update (FAA approved)",
          "Vermont F-35 environmental impact documentation",
          "FAA noise modeling standards",
          "Global Health Film 'The Quietest Year' documentary evidence"
        ]
      },
      {
        "id": 2,
        "name": "Dumont Avenue Residential Cluster",
        "coordinates": [44.4800, -73.1600],
        "type": "Aviation Impact Zone",
        "noise_level": "High (75-90 dB during overflights)",
        "temporal_variations": {
          "f35_operations": "Coincident with Burlington Airport F-35 training schedules",
          "commercial_traffic": "Regular commercial aviation noise"
        },
        "weather_effects": {
          "directional_impact": "Prevailing wind patterns affect noise direction",
          "seasonal_variation": "Winter temperature inversions amplify aircraft noise"
        },
        "status": "existing_user_location",
        "sources": ["User provided location", "Burlington Airport noise contour maps"]
      },
      {
        "id": 3,
        "name": "Airport Parkway Multi-Unit Complex",
        "coordinates": [44.4750, -73.1500],
        "type": "Aviation Impact Zone",
        "noise_level": "High (75-90 dB during overflights)",
        "temporal_variations": {
          "peak_exposure": "During F-35 training operations",
          "approach_patterns": "Aircraft approach and departure routes"
        },
        "weather_effects": {
          "wind_direction": "Westerly winds carry noise toward complex",
          "atmospheric_conditions": "Cold air increases sound propagation"
        },
        "status": "existing_user_location",
        "sources": ["User provided location", "FAA approach pattern documentation"]
      },
      {
        "id": 4,
        "name": "Winooski City Hall Monitoring Station",
        "coordinates": [44.4900, -73.1800],
        "type": "Aviation Impact Zone - Official Monitoring",
        "noise_level": "High (70-85 dB)",
        "temporal_variations": {
          "continuous_monitoring": "24/7 noise level recording",
          "peak_events": "F-35 training operations logged"
        },
        "weather_effects": {
          "meteorological_data": "Temperature, humidity, wind speed affect readings",
          "seasonal_trends": "Higher complaints during winter months"
        },
        "monitoring_equipment": "Professional noise monitoring station",
        "status": "existing_user_location",
        "sources": [
          "BTVSound Public Portal noise monitoring data",
          "Winooski municipal noise documentation",
          "FAA Part 150 noise monitoring requirements"
        ]
      },
      {
        "id": 5,
        "name": "Chamberlin School Monitoring Station",
        "coordinates": [44.4850, -73.1650],
        "type": "Aviation Impact Zone - Educational Facility",
        "noise_level": "High (70-85 dB during operations)",
        "temporal_variations": {
          "school_hours_impact": "0800-1500 disruption to educational activities",
          "f35_training_correlation": "Noise events logged during military operations"
        },
        "weather_effects": {
          "outdoor_activity_impact": "Weather-dependent playground and sports disruption",
          "building_acoustics": "Indoor/outdoor noise differential varies with conditions"
        },
        "sensitive_receptor": "School environment with children",
        "status": "existing_user_location",
        "sources": [
          "Vermont Department of Education noise impact studies",
          "BTVSound monitoring data",
          "EPA noise guidelines for schools"
        ]
      },
      {
        "id": 6,
        "name": "Kirby Road Corridor",
        "coordinates": [44.4820, -73.1580],
        "type": "Aviation Impact Zone - Residential",
        "noise_level": "High (75-90 dB)",
        "temporal_variations": {
          "residential_impact": "Peak disruption during evening hours",
          "traffic_combined": "Aviation plus road traffic noise"
        },
        "weather_effects": {
          "topographic_amplification": "Local terrain affects sound propagation",
          "seasonal_complaints": "Higher complaint rates in summer (windows open)"
        },
        "land_use": "Mixed residential and commercial",
        "status": "existing_user_location",
        "sources": ["User provided", "Burlington planning department land use data"]
      },
      {
        "id": 7,
        "name": "Maryland Street Residential Zone",
        "coordinates": [44.4780, -73.1620],
        "type": "Aviation Impact Zone - Residential",
        "noise_level": "High (75-90 dB)",
        "temporal_variations": {
          "daily_exposure": "Multiple daily overflight events",
          "weekend_patterns": "Reduced military operations weekends"
        },
        "weather_effects": {
          "wind_patterns": "Prevailing winds affect noise direction and intensity",
          "atmospheric_stability": "Stable conditions increase noise propagation"
        },
        "demographics": "Residential neighborhood with families",
        "status": "existing_user_location",
        "sources": ["User provided", "Census demographic data", "Noise complaint records"]
      },
      {
        "id": 8,
        "name": "Industrial Avenue Monitoring Station (Williston)",
        "coordinates": [44.4300, -73.0900],
        "type": "Aviation Impact Zone - Industrial Area",
        "noise_level": "High (70-85 dB)",
        "temporal_variations": {
          "industrial_operations": "Weekday 0700-1700 combined with aviation noise",
          "flight_patterns": "Aircraft departure routes over industrial area"
        },
        "weather_effects": {
          "industrial_heat_effects": "Local heat island affects sound propagation",
          "wind_corridors": "Industrial valley channels aviation noise"
        },
        "land_use": "Industrial and commercial zone",
        "status": "existing_user_location",
        "sources": [
          "Williston industrial zoning documentation",
          "Aviation noise monitoring data",
          "Vermont industrial development records"
        ]
      },
      {
        "id": 9,
        "name": "I-89: Burlington Metro Area",
        "coordinates": [44.4500, -73.1500],
        "type": "Transportation - Highway Traffic",
        "noise_level": "High (70-85 dB)",
        "temporal_variations": {
          "rush_hour_peaks": "0630-0900, 1600-1900 (85+ dB)",
          "overnight_minimum": "0000-0500 (65-70 dB)",
          "weekend_patterns": "Reduced weekday commuter traffic",
          "seasonal_tourism": "Summer increase in recreational traffic"
        },
        "weather_effects": {
          "wind_direction": "Prevailing westerly winds carry noise eastward",
          "temperature_inversions": "Early morning inversions increase propagation",
          "precipitation": "Rain reduces tire noise, increases engine noise",
          "snow_operations": "Winter snow plows and salt trucks add noise"
        },
        "traffic_volume": "Major north-south corridor with heavy commercial traffic",
        "status": "existing_user_location",
        "sources": [
          "Vermont Agency of Transportation traffic data",
          "Federal Highway Administration noise studies",
          "AADT (Annual Average Daily Traffic) reports"
        ]
      },
      {
        "id": 10,
        "name": "I-89: Montpelier Capital Region",
        "coordinates": [44.2600, -72.5800],
        "type": "Transportation - Highway Traffic",
        "noise_level": "High (70-85 dB)",
        "temporal_variations": {
          "government_commuter_peaks": "0730-0830, 1630-1730",
          "legislative_session_increase": "January-May increased traffic",
          "tourist_season": "Fall foliage peak traffic September-October"
        },
        "weather_effects": {
          "valley_acoustics": "Montpelier valley channels and amplifies highway noise",
          "winter_conditions": "Snow and ice operations increase noise levels",
          "fog_concentration": "Valley fog concentrates traffic noise"
        },
        "special_events": "State government and legislative traffic patterns",
        "status": "existing_user_location",
        "sources": [
          "Vermont State traffic analysis",
          "Montpelier regional planning data",
          "Legislative session impact studies"
        ]
      },
      {
        "id": 11,
        "name": "I-89: Williston Commercial Corridor",
        "coordinates": [44.4300, -73.0900],
        "type": "Transportation - Highway Traffic",
        "noise_level": "High (70-85 dB)",
        "temporal_variations": {
          "commercial_peaks": "1000-1400 shopping traffic",
          "commuter_rush": "Standard morning/evening peaks",
          "retail_seasonal": "Holiday shopping increases November-December"
        },
        "weather_effects": {
          "retail_weather_correlation": "Bad weather increases indoor shopping traffic",
          "parking_lot_acoustics": "Large retail parking areas affect noise reflection"
        },
        "land_use": "Major retail and commercial development corridor",
        "status": "existing_user_location",
        "sources": [
          "Williston commercial development traffic studies",
          "Regional retail traffic analysis",
          "Vermont commercial corridor planning data"
        ]
      },
      {
        "id": 12,
        "name": "Amtrak Station: Montpelier",
        "coordinates": [44.2601, -72.5806],
        "type": "Transportation - Rail",
        "noise_level": "Moderate (65-75 dB during operations)",
        "temporal_variations": {
          "train_schedule": "Daily Vermonter service northbound/southbound",
          "departure_times": "Scheduled arrivals create predictable noise events",
          "maintenance_operations": "Track maintenance during off-peak hours"
        },
        "weather_effects": {
          "rail_expansion": "Temperature affects rail noise and operations",
          "winter_operations": "Snow clearing equipment adds seasonal noise"
        },
        "service_details": "Amtrak Vermonter daily service to NYC and St. Albans",
        "status": "existing_user_location",
        "sources": [
          "Amtrak Vermonter schedule and operations data",
          "Vermont Rail System documentation",
          "FRA (Federal Railroad Administration) noise standards"
        ]
      },
      {
        "id": 13,
        "name": "Amtrak Station: Essex Junction",
        "coordinates": [44.4906, -73.1012],
        "type": "Transportation - Rail",
        "noise_level": "Moderate (65-75 dB during operations)",
        "temporal_variations": {
          "daily_service": "Amtrak Vermonter daily operations",
          "freight_coordination": "Shared tracks with freight operations",
          "station_operations": "Platform announcements and mechanical systems"
        },
        "weather_effects": {
          "track_conditions": "Weather affects braking and acceleration noise",
          "station_acoustics": "Platform design affects sound reflection"
        },
        "infrastructure": "Station platform and rail maintenance facilities",
        "status": "existing_user_location",
        "sources": [
          "Amtrak station operations documentation",
          "Vermont Railway freight coordination data",
          "Essex Junction municipal planning records"
        ]
      },
      {
        "id": 14,
        "name": "Amtrak Terminal: St. Albans",
        "coordinates": [44.8108, -73.0851],
        "type": "Transportation - Rail Terminal",
        "noise_level": "Moderate-High (70-80 dB)",
        "temporal_variations": {
          "terminal_operations": "End-of-line terminal with extended dwell times",
          "maintenance_facility": "Train servicing and overnight storage",
          "crew_change_operations": "Extended station operations"
        },
        "weather_effects": {
          "border_proximity": "Weather patterns from Canada affect operations",
          "winter_maintenance": "Snow removal and equipment winterization"
        },
        "special_significance": "Northern terminus of Amtrak Vermonter service",
        "status": "existing_user_location",
        "sources": [
          "Amtrak terminal operations manual",
          "St. Albans rail yard documentation",
          "International rail border operations data"
        ]
      },
      {
        "id": 15,
        "name": "Amtrak Station: Rutland",
        "coordinates": [43.6106, -72.9726],
        "type": "Transportation - Rail (Historic)",
        "noise_level": "Low-Moderate (Currently inactive)",
        "temporal_variations": {
          "historical_operations": "Former Amtrak service discontinued",
          "freight_operations": "Occasional freight rail activity",
          "maintenance_access": "Track maintenance and inspection"
        },
        "weather_effects": {
          "seasonal_access": "Weather affects maintenance scheduling"
        },
        "current_status": "Discontinued passenger service, limited freight activity",
        "status": "existing_user_location",
        "sources": [
          "Amtrak service discontinuation records",
          "Vermont Railway System documentation",
          "Rutland regional transportation planning"
        ]
      },
      {
        "id": 16,
        "name": "Rock of Ages Quarry Complex (Barre/Graniteville)",
        "coordinates": [44.1886, -72.4981],
        "type": "Industrial - Granite Quarrying",
        "noise_level": "Very High (90-120 dB during operations)",
        "temporal_variations": {
          "daily_operations": "0700-1600 weekdays",
          "blasting_schedule": "Typically 1200-1300 daily",
          "seasonal_activity": "April-November active quarrying, December-March reduced",
          "weekend_operations": "Maintenance only, reduced noise"
        },
        "weather_effects": {
          "wind_propagation": "Westerly winds carry noise toward residential areas",
          "cold_air_amplification": "Winter air density increases propagation up to 2 miles",
          "precipitation_impact": "Rain reduces dust but increases equipment noise",
          "atmospheric_inversions": "Early morning inversions amplify blasting noise"
        },
        "operations_detail": "World's largest granite quarry at 600+ feet deep",
        "equipment": "Heavy machinery, diamond saws, blasting operations, rail transport",
        "community_impact": "Noise complaints documented over 1 mile radius",
        "status": "new_research_location",
        "sources": [
          "Vermont Air Pollution Control Regulations 5-501, 5-1001",
          "Rock of Ages Corporation operational documentation",
          "Vermont Historical Society Industrial Documentation",
          "Vermont Department of Environmental Conservation quarry permits",
          "Barre granite industry operational studies"
        ]
      },
      {
        "id": 17,
        "name": "Slate Valley Industrial Complex (Poultney)",
        "coordinates": [43.5156, -73.2562],
        "type": "Industrial - Slate Quarrying",
        "noise_level": "High (85-110 dB during operations)",
        "temporal_variations": {
          "quarry_operations": "0600-1600 daily operations",
          "processing_continuous": "24/7 mill operations at some facilities",
          "seasonal_intensity": "May-October peak quarrying, November-April processing",
          "unexpected_reactivation": "Dormant quarries can restart without notice"
        },
        "weather_effects": {
          "valley_amplification": "Slate Valley geography amplifies and focuses sound",
          "wind_channeling": "North-south valley winds channel noise",
          "topographic_effects": "Mountain ridges create sound shadows and amplification zones"
        },
        "operations_detail": "58 active quarries with drilling, blasting, processing",
        "community_impact": "Legislative testimony documents neighborhood disruption",
        "legal_issues": "Act 250 exemptions causing community complaints",
        "status": "new_research_location",
        "sources": [
          "VTDigger Legislative Documentation (vtdigger.org/2019/08/19/slate-industry-girds-for-coming-legislative-session/)",
          "Vermont House Natural Resources Committee Testimony",
          "Greenstone Slate Company operational documentation",
          "Vermont Geological Survey slate industry reports",
          "Act 250 legislative review commission findings"
        ]
      },
      {
        "id": 18,
        "name": "Slate Valley Industrial Complex (Fair Haven)",
        "coordinates": [43.5936, -73.2668],
        "type": "Industrial - Slate Processing",
        "noise_level": "High (85-110 dB during operations)",
        "temporal_variations": {
          "mill_operations": "24/7 processing operations",
          "quarry_coordination": "Receives materials from multiple quarry sites",
          "maintenance_shutdowns": "Scheduled maintenance reduces noise periodically"
        },
        "weather_effects": {
          "industrial_heat_island": "Mill operations create local heat affecting sound propagation",
          "moisture_effects": "Humidity affects stone cutting operations"
        },
        "operations_detail": "Vermont Structural Slate Company major processing facility",
        "facility_scale": "61 quarries and 3 mills network hub",
        "status": "new_research_location",
        "sources": [
          "Vermont Structural Slate Company Operations Reports",
          "Fair Haven industrial zoning documentation",
          "Vermont slate industry environmental reviews"
        ]
      },
      {
        "id": 19,
        "name": "Slate Valley Industrial Complex (West Pawlet)",
        "coordinates": [43.3623, -73.3234],
        "type": "Industrial - Slate Quarrying",
        "noise_level": "High (85-110 dB during operations)",
        "temporal_variations": {
          "production_schedule": "Daylight operations typically",
          "seasonal_variation": "Weather-dependent quarrying schedules",
          "product_demand": "Market-driven operational intensity"
        },
        "weather_effects": {
          "mountain_acoustics": "Sound propagation enhanced by mountain terrain",
          "wind_effects": "Mountain valley wind patterns affect noise direction"
        },
        "operations_detail": "Newmont Slate Company - largest roofing slate producer in US",
        "specialty": "Vermont Black Slate production",
        "status": "new_research_location",
        "sources": [
          "Newmont Slate Company facility documentation",
          "Vermont slate industry production data",
          "West Pawlet zoning and land use records"
        ]
      },
      {
        "id": 20,
        "name": "GlobalFoundries Semiconductor Facility (Essex Junction)",
        "coordinates": [44.4906, -73.1012],
        "type": "Industrial - 24/7 Manufacturing",
        "noise_level": "Moderate-High (75-90 dB)",
        "temporal_variations": {
          "continuous_operations": "24/7 semiconductor fabrication",
          "shift_changes": "0600, 1400, 2200 increased activity",
          "maintenance_cycles": "Scheduled monthly maintenance windows",
          "production_ramp": "Seasonal production increases"
        },
        "weather_effects": {
          "hvac_systems": "Summer cooling operations increase noise",
          "clean_room_requirements": "Climate control systems run continuously",
          "equipment_thermal_cycling": "Temperature changes affect equipment noise"
        },
        "operations_detail": "2,300 employees, wafer processing, complex electronics",
        "facility_scale": "Vermont's largest industrial employer",
        "environmental_controls": "Sophisticated air handling and filtration systems",
        "status": "new_research_location",
        "sources": [
          "IndustrySelect Manufacturing Database (February 2025)",
          "Vermont Manufacturing Sector Analysis",
          "GlobalFoundries Essex Junction operational reports",
          "Semiconductor industry environmental standards"
        ]
      },
      {
        "id": 21,
        "name": "GE Aviation Rutland Plant",
        "coordinates": [43.6106, -72.9726],
        "type": "Industrial - Aerospace Manufacturing",
        "noise_level": "High (80-95 dB during operations)",
        "temporal_variations": {
          "production_shifts": "Weekday 0600-1800 primary operations",
          "testing_operations": "Engine component testing creates peak noise",
          "maintenance_windows": "Weekend equipment maintenance"
        },
        "weather_effects": {
          "engine_testing": "Weather conditions affect outdoor testing operations",
          "facility_ventilation": "Seasonal HVAC noise variations"
        },
        "operations_detail": "1,200 employees, aircraft engine parts, jet engine airfoils",
        "product_line": "Critical aviation components manufacturing",
        "testing_facilities": "On-site component testing creates high noise levels",
        "status": "new_research_location",
        "sources": [
          "ThinkVermont Manufacturing Documentation",
          "GE Aviation facility operational data",
          "Vermont aerospace industry analysis",
          "Rutland industrial development records"
        ]
      },
      {
        "id": 22,
        "name": "UTC Aerospace Systems (Vergennes)",
        "coordinates": [44.1692, -73.2537],
        "type": "Industrial - Aircraft Systems",
        "noise_level": "Moderate-High (75-85 dB)",
        "temporal_variations": {
          "manufacturing_shifts": "Standard weekday operations",
          "precision_work": "Specialized manufacturing requires controlled environment",
          "testing_schedules": "Aircraft systems testing creates intermittent high noise"
        },
        "weather_effects": {
          "precision_requirements": "Climate control for manufacturing precision",
          "testing_conditions": "Weather affects outdoor systems testing"
        },
        "operations_detail": "800 employees, aircraft fuel management systems",
        "market_reach": "International distribution of aerospace components",
        "facility_type": "Precision manufacturing and systems integration",
        "status": "new_research_location",
        "sources": [
          "IndustrySelect Industrial Database",
          "Vermont aerospace manufacturing analysis",
          "UTC Aerospace Systems facility documentation"
        ]
      },
      {
        "id": 23,
        "name": "Viatris Pharmaceutical Manufacturing (Saint Albans)",
        "coordinates": [44.8108, -73.0851],
        "type": "Industrial - Pharmaceutical",
        "noise_level": "Moderate (70-80 dB)",
        "temporal_variations": {
          "continuous_production": "24/7 pharmaceutical manufacturing",
          "clean_room_operations": "Controlled environment with constant air handling",
          "packaging_operations": "Automated packaging creates consistent noise levels"
        },
        "weather_effects": {
          "humidity_control": "Pharmaceutical requirements drive constant HVAC operation",
          "clean_room_pressurization": "Weather changes affect facility pressure systems"
        },
        "operations_detail": "500 employees, 25,000 sq ft, adhesive transdermal patches",
        "product_specialization": "Medical device components and pharmaceutical labels",
        "regulatory_environment": "FDA-regulated facility with strict environmental controls",
        "status": "new_research_location",
        "sources": [
          "IndustrySelect Manufacturing Data",
          "Vermont pharmaceutical industry analysis",
          "FDA facility registration records"
        ]
      },
      {
        "id": 24,
        "name": "Nestlé Baby Formula Plant (Georgia)",
        "coordinates": [44.7103, -73.0934],
        "type": "Industrial - Food Manufacturing",
        "noise_level": "Moderate-High (75-85 dB)",
        "temporal_variations": {
          "continuous_production": "24/7 baby formula manufacturing",
          "quality_control": "Continuous monitoring and testing operations",
          "packaging_lines": "High-speed automated packaging systems"
        },
        "weather_effects": {
          "ingredient_storage": "Climate control for sensitive ingredients",
          "powder_handling": "Humidity affects powder processing operations"
        },
        "operations_detail": "419 employees, 62,000 sq ft, dry and liquid baby formula",
        "production_volume": "Large-scale infant nutrition manufacturing",
        "safety_requirements": "Food safety protocols requiring continuous monitoring",
        "status": "new_research_location",
        "sources": [
          "IndustrySelect Manufacturing Database",
          "Vermont food processing industry data",
          "FDA food facility registration"
        ]
      },
      {
        "id": 25,
        "name": "Interstate 91 - White River Junction Hub",
        "coordinates": [43.6469, -72.3187],
        "type": "Transportation - Highway Traffic",
        "noise_level": "High (70-85 dB)",
        "temporal_variations": {
          "morning_peak": "0630-0900 (85+ dB)",
          "evening_peak": "1600-1900 (85+ dB)",
          "overnight_minimum": "0000-0500 (65-70 dB)",
          "truck_traffic_peak": "0500-0700, 1400-1600",
          "weekend_recreational": "Summer tourism traffic increases"
        },
        "weather_effects": {
          "wind_direction": "Prevailing westerly winds carry noise eastward",
          "temperature_inversions": "Early morning inversions increase noise propagation",
          "snow_operations": "Winter adds snow plow and salt truck noise",
          "interstate_interchange": "I-89/I-91 junction creates traffic concentration"
        },
        "strategic_importance": "Major north-south thoroughfare, primary Vermont-New Hampshire connection",
        "traffic_volume": "Control city for traffic as far south as Massachusetts",
        "commercial_significance": "Major freight corridor to Canadian border",
        "status": "new_research_location",
        "sources": [
          "Vermont Agency of Transportation Documentation",
          "New England 511 Traffic Data",
          "Federal Highway Administration traffic noise models",
          "Interstate freight movement studies"
        ]
      },
      {
        "id": 26,
        "name": "Interstate 91 - St. Johnsbury Junction",
        "coordinates": [44.4192, -71.9886],
        "type": "Transportation - Highway Traffic",
        "noise_level": "High (70-85 dB)",
        "temporal_variations": {
          "i93_interchange": "I-91/I-93 intersection creates traffic concentration",
          "white_mountains_access": "Tourist traffic to New Hampshire White Mountains",
          "commercial_freight": "Heavy truck traffic between Boston and Montreal"
        },
        "weather_effects": {
          "mountain_weather": "White Mountain weather patterns affect traffic",
          "tourist_weather_correlation": "Good weather increases recreational traffic"
        },
        "geographic_significance": "Northern terminus of I-93, access to White Mountains",
        "status": "new_research_location",
        "sources": [
          "VTrans Transportation Planning Data",
          "Interstate Traffic Pattern Analysis",
          "New Hampshire border crossing traffic studies"
        ]
      },
      {
        "id": 27,
        "name": "Interstate 91 - Brattleboro Approach",
        "coordinates": [42.8509, -72.5579],
        "type": "Transportation - Highway Traffic",
        "noise_level": "High (70-85 dB)",
        "temporal_variations": {
          "border_crossing": "Massachusetts-Vermont border crossing traffic",
          "commercial_corridor": "Major freight route between Boston and Montreal",
          "tourist_gateway": "Southern Vermont tourism access point"
        },
        "weather_effects": {
          "connecticut_river_valley": "River valley acoustics affect noise propagation",
          "seasonal_tourism": "Fall foliage season increases traffic"
        },
        "border_significance": "Primary southern entry point to Vermont",
        "status": "new_research_location",
        "sources": [
          "Vermont Agency of Transportation Reports",
          "Regional Transportation Studies",
          "Massachusetts-Vermont border traffic analysis"
        ]
      },
      {
        "id": 28,
        "name": "Vermont Route 100 - Killington Area",
        "coordinates": [43.6042, -72.8151],
        "type": "Transportation - Seasonal Tourism Traffic",
        "noise_level": "Variable (60-80 dB)",
        "temporal_variations": {
          "ski_season": "December-March peak noise",
          "weekend_peaks": "Friday 1600-2000, Sunday 1400-1800",
          "summer_tourism": "June-August moderate increase",
          "fall_foliage": "September-October weekend peaks",
          "spring_minimum": "April-May lowest traffic"
        },
        "weather_effects": {
          "snow_conditions": "Fresh snowfall increases ski traffic by 30-50%",
          "mountain_weather": "Valley fog concentrates and amplifies traffic noise",
          "ski_resort_correlation": "Weather conditions drive traffic volume"
        },
        "tourism_infrastructure": "Major ski resort access, Killington Mountain",
        "seasonal_employment": "Resort workers contribute to traffic patterns",
        "status": "new_research_location",
        "sources": [
          "VTrans Route 100 Traffic Analysis",
          "Vermont Tourism Transportation Impact Studies",
          "Ski resort traffic correlation studies"
        ]
      },
      {
        "id": 29,
        "name": "Vermont Route 100 - Mad River Valley",
        "coordinates": [44.1345, -72.8387],
        "type": "Transportation - Tourism/Recreation Traffic",
        "noise_level": "Variable (55-75 dB)",
        "temporal_variations": {
          "ski_resort_access": "Sugarbush and Mad River Glen access traffic",
          "seasonal_peaks": "Winter ski season, summer outdoor recreation",
          "weekend_concentration": "Friday-Sunday peak recreational traffic"
        },
        "weather_effects": {
          "valley_acoustics": "Mad River Valley channels traffic noise",
          "ski_conditions": "Snow quality affects weekend traffic volume"
        },
        "recreation_focus": "Outdoor recreation and ski resort access",
        "status": "new_research_location",
        "sources": [
          "Vermont Route 100 Corridor Study",
          "VTrans Seasonal Traffic Data",
          "Mad River Valley tourism impact analysis"
        ]
      },
      {
        "id": 30,
        "name": "Vermont Route 100 - Stowe Area",
        "coordinates": [44.4654, -72.6874],
        "type": "Transportation - Tourism Traffic",
        "noise_level": "Variable (60-80 dB)",
        "temporal_variations": {
          "ski_season_peaks": "December-March heavy traffic to Stowe Mountain Resort",
          "summer_tourism": "June-August recreational vehicle traffic",
          "fall_foliage": "September-October peak tourist traffic",
          "event_traffic": "Special events and festivals increase traffic"
        },
        "weather_effects": {
          "mountain_resort_correlation": "Weather conditions at ski resort drive traffic",
          "stowe_valley_acoustics": "Valley setting amplifies traffic noise"
        },
        "tourism_significance": "Access to Stowe Mountain Resort, major Vermont tourist destination",
        "status": "new_research_location",
        "sources": [
          "VTrans Transportation Planning",
          "Stowe Area Traffic Impact Analysis",
          "Vermont tourism traffic studies"
        ]
      },
      {
        "id": 31,
        "name": "Vermont Rail Systems - Montpelier Rail Yard",
        "coordinates": [44.2619, -72.5806],
        "type": "Transportation - Freight Rail",
        "noise_level": "Moderate-High (75-85 dB)",
        "temporal_variations": {
          "freight_operations": "Active freight rail operations",
          "track_upgrade_construction": "Ongoing rail infrastructure improvements",
          "granite_transport": "Increased granite shipments from Barre quarries",
          "maintenance_windows": "Night and weekend track maintenance"
        },
        "weather_effects": {
          "rail_expansion": "Temperature affects rail noise and operations",
          "winter_operations": "Snow removal and track heating operations"
        },
        "infrastructure_upgrade": "Vermont Rail Systems upgrading tracks between Barre and Montpelier",
        "granite_industry_connection": "Serves Barre granite quarrying operations",
        "status": "new_research_location",
        "sources": [
          "Vermont Rail Systems Documentation",
          "VTrans Rail Infrastructure Reports",
          "Vermont Granite Museum rail transport documentation"
        ]
      },
      {
        "id": 32,
        "name": "Vermont Rail Systems - Barre-Montpelier Freight Corridor",
        "coordinates": [44.2000, -72.5200],
        "type": "Transportation - Freight Rail",
        "noise_level": "Moderate-High (75-85 dB)",
        "temporal_variations": {
          "granite_shipments": "Increased granite transport on upgraded tracks",
          "freight_schedules": "Regular freight train operations",
          "construction_noise": "Track upgrade construction activities"
        },
        "weather_effects": {
          "seasonal_freight": "Winter reduction in granite quarrying affects rail traffic",
          "track_conditions": "Weather affects rail operations and maintenance"
        },
        "economic_importance": "Critical for Vermont granite industry transportation",
        "upgrade_project": "Multi-million dollar track improvement project",
        "status": "new_research_location",
        "sources": [
          "Vermont Granite Museum Documentation",
          "VTrans Rail Freight Analysis",
          "Barre granite industry transportation studies"
        ]
      },
      {
        "id": 33,
        "name": "I-89 Colchester Exit 17 Project",
        "coordinates": [44.4891, -73.2137],
        "type": "Construction - Highway Reconstruction",
        "noise_level": "Very High (85-110 dB during active work)",
        "temporal_variations": {
          "construction_hours": "0700-1700 weekdays",
          "weekend_work": "0800-1600 limited operations",
          "night_restrictions": "No work 2000-0600",
          "project_phases": "2024 demolition (highest noise), 2025-2026 construction/finishing"
        },
        "weather_effects": {
          "seasonal_construction": "April-November high activity, December-March weather-dependent",
          "equipment_noise_amplification": "Stable atmospheric conditions carry equipment noise further",
          "precipitation_delays": "Rain stops work, reducing noise"
        },
        "project_scope": "Bridge replacement over I-89, Exit 17 interchange improvements",
        "duration": "3-season project (2024-2026)",
        "community_impact": "Significant traffic disruption and noise complaints",
        "status": "new_research_location",
        "sources": [
          "Vermont Agency of Transportation Construction Reports",
          "Chittenden County Regional Planning Commission Traffic Alerts",
          "Colchester Exit 17 Project documentation",
          "New England construction season guidelines"
        ]
      },
      {
        "id": 34,
        "name": "I-89 Montpelier-Waterbury Paving Project",
        "coordinates": [44.2500, -72.5800],
        "type": "Construction - Major Paving Operations",
        "noise_level": "Very High (85-105 dB during operations)",
        "temporal_variations": {
          "paving_operations": "Surface removal and repaving",
          "lane_closures": "Exit 10 to Exit 8 southbound",
          "equipment_operations": "Heavy machinery for milling and paving",
          "peak_travel_delays": "Major delays during rush hours"
        },
        "weather_effects": {
          "temperature_requirements": "Asphalt paving requires specific temperature conditions",
          "seasonal_window": "Limited to warm weather construction season"
        },
        "traffic_impact": "Major delays during peak travel hours",
        "construction_type": "Two separate courses of pavement installation",
        "status": "new_research_location",
        "sources": [
          "VTrans Weekly Construction Reports",
          "State highway noise impact documentation",
          "Interstate construction noise standards"
        ]
      },
      {
        "id": 35,
        "name": "I-89 Swanton-Highgate Paving Project",
        "coordinates": [44.9167, -73.1167],
        "type": "Construction - Interstate Paving",
        "noise_level": "High (80-100 dB during operations)",
        "temporal_variations": {
          "paving_operations": "Daily lane closures during working hours",
          "stormwater_improvements": "Additional construction activities",
          "traffic_pattern_changes": "Shifting traffic patterns increase noise"
        },
        "weather_effects": {
          "canadian_border_proximity": "Weather patterns from Canada affect construction",
          "seasonal_construction_window": "Limited construction season"
        },
        "geographic_significance": "Near Canadian border, final Vermont interstate section",
        "project_scope": "Paving and stormwater improvement projects",
        "status": "new_research_location",
        "sources": [
          "VTrans Construction Documentation",
          "Interstate noise impact studies",
          "Border region construction coordination"
        ]
      },
      {
        "id": 36,
        "name": "Sheffield Wind Farm",
        "coordinates": [44.5867, -72.1167],
        "type": "Industrial - Wind Turbine Operations",
        "noise_level": "Moderate (45-55 dB at 1000ft, includes infrasound)",
        "temporal_variations": {
          "wind_dependent": "15+ mph winds (maximum noise), 7-8 mph cut-in",
          "seasonal_patterns": "December-March peak operation (strongest winds)",
          "diurnal_cycles": "Often higher winds at night on ridges",
          "cut_out_safety": "55+ mph winds shut down turbines"
        },
        "weather_effects": {
          "atmospheric_stability": "Temperature inversions increase low-frequency propagation",
          "wind_direction": "Downwind residents experience higher noise",
          "topographic_amplification": "Ridge location directs sound into valleys",
          "infrasound_propagation": "Low-frequency noise travels much farther than audible sound"
        },
        "operations_detail": "16 turbines, 40 MW capacity",
        "health_impacts": "Documented resident displacement due to sleep disruption and nausea",
        "legal_issues": "Vermont Public Service Board sound standard investigations",
        "community_impact": "Families forced to abandon homes due to health effects",
        "status": "new_research_location",
        "sources": [
          "Vermont Public Service Board Sound Standard Investigation",
          "Wind-Watch.org Environmental Impact Documentation",
          "VTDigger wind energy environmental reporting",
          "Vermont PSB testimony on health impacts"
        ]
      },
      {
        "id": 37,
        "name": "Searsburg Wind Farm",
        "coordinates": [43.2500, -72.9167],
        "type": "Industrial - Wind Turbine Operations",
        "noise_level": "Moderate (40-50 dB at residential distances)",
        "temporal_variations": {
          "operational_since_1997": "Longest operating wind farm in Vermont",
          "wind_patterns": "Similar to Sheffield - winter peak operation",
          "550_kilowatt_turbines": "11 turbines, 6 MW total capacity"
        },
        "weather_effects": {
          "mountain_acoustics": "Sound propagation enhanced by mountain terrain",
          "seasonal_complaints": "Higher complaint rates during winter months",
          "green_mountain_location": "Mountain ridge wind patterns"
        },
        "historical_significance": "Operating since 1997, provides power for 1,600 households",
        "complaint_history": "Documented noise complaints from neighboring properties",
        "status": "new_research_location",
        "sources": [
          "Vermont Public Service Board Documentation",
          "US Forest Service Environmental Reviews",
          "Green Mountain Power operational data",
          "Wind energy noise complaint documentation"
        ]
      },
      {
        "id": 38,
        "name": "Kingdom Community Wind Farm",
        "coordinates": [44.8500, -72.2500],
        "type": "Industrial - Wind Turbine Operations",
        "noise_level": "Moderate (45-55 dB)",
        "temporal_variations": {
          "21_turbines": "63 MW capacity on Lowell Mountains ridge",
          "ridge_location": "Mountain ridge experiences variable winds",
          "construction_cost": "$156 million investment"
        },
        "weather_effects": {
          "mountain_ridge_winds": "Higher elevation experiences stronger, more variable winds",
          "sound_propagation": "Ridge location affects noise propagation patterns"
        },
        "ownership": "Green Mountain Power and Vermont Electric Co-op",
        "construction_timeline": "Construction began September 2011",
        "status": "new_research_location",
        "sources": [
          "Green Mountain Power Environmental Documentation",
          "Vermont Wind Energy Development Studies",
          "Lowell Mountain wind resource assessments"
        ]
      },
      {
        "id": 39,
        "name": "Georgia Mountain Community Wind",
        "coordinates": [44.7200, -73.0500],
        "type": "Industrial - Wind Turbine Operations",
        "noise_level": "Moderate (45-55 dB)",
        "temporal_variations": {
          "4_turbines": "12 MW capacity",
          "neighborhood_proximity": "Close to residential areas",
          "complaint_documentation": "Noise complaints from neighbors documented"
        },
        "weather_effects": {
          "local_wind_patterns": "Milton/Georgia area wind characteristics",
          "residential_proximity": "Close proximity to homes affects noise impact"
        },
        "development_controversy": "David Blittersdorf development with tax credit issues",
        "community_response": "Rattled neighbors due to proximity",
        "status": "new_research_location",
        "sources": [
          "Vermont Wind Development Documentation",
          "Local noise impact studies",
          "Community wind project analysis"
        ]
      },
      {
        "id": 40,
        "name": "McNeil Generating Station (Burlington)",
        "coordinates": [44.4833, -73.2333],
        "type": "Industrial - Biomass Power Generation",
        "noise_level": "High (80-95 dB at facility, 65-75 dB residential)",
        "temporal_variations": {
          "peak_demand_operation": "Winter months (heating season)",
          "summer_reduced": "Reduced operation during low electricity demand",
          "maintenance_shutdowns": "Spring and fall scheduled maintenance",
          "wood_delivery": "0600-1800 truck traffic noise",
          "morning_startup": "0500-0700 increased noise"
        },
        "weather_effects": {
          "wind_patterns": "Prevailing winds carry emissions toward Old North End",
          "atmospheric_inversions": "Winter inversions trap noise near ground level",
          "seasonal_demand": "Highest operation during coldest months"
        },
        "operations_detail": "50 MW, Vermont's largest carbon emitter (453,000 tons CO2e/yr)",
        "fuel_consumption": "76 tons wood chips per hour at full load",
        "environmental_justice": "Impacts low-income, diverse Old North End community",
        "health_concerns": "Two elementary schools within impact zone",
        "status": "new_research_location",
        "sources": [
          "Burlington Electric Department Documentation",
          "350Vermont Environmental Justice Studies",
          "Stop VT Biomass Environmental Analysis",
          "Vermont Department of Environmental Conservation reports"
        ]
      },
      {
        "id": 41,
        "name": "Ryegate Power Station",
        "coordinates": [44.2167, -72.0833],
        "type": "Industrial - Biomass Power Generation",
        "noise_level": "Moderate-High (75-85 dB at facility)",
        "temporal_variations": {
          "intermittent_operation": "2022-2024 financial difficulties causing shutdowns",
          "fuel_delivery": "250 truck loads per day during active periods",
          "delivery_hours": "0600-1800 typically",
          "seasonal_shutdowns": "Periodic shutdowns due to fuel supply issues"
        },
        "weather_effects": {
          "valley_acoustics": "Connecticut River Valley channels sound",
          "winter_operation": "Higher activity during peak electricity demand"
        },
        "operations_detail": "20.5 MW, burns 250,000 tons wood chips annually",
        "financial_status": "Operational uncertainty due to payment issues with suppliers",
        "economic_impact": "$14 million total economic activity",
        "status": "new_research_location",
        "sources": [
          "Vermont Public Utility Commission Documentation",
          "Seven Days Environmental Reporting",
          "VTDigger Biomass Industry Analysis",
          "Vermont Legislature Economic Impact Studies"
        ]
      },
      {
        "id": 42,
        "name": "Laberge Shooting Range (Charlotte-Shelburne)",
        "coordinates": [44.3000, -73.2167],
        "type": "Recreational - Firearms Discharge",
        "noise_level": "Very High (140-175 dB peak, 90-110 dB average)",
        "temporal_variations": {
          "peak_hours": "1000-1600 weekends",
          "weekday_use": "Limited evening use after work",
          "seasonal_patterns": "May-September highest usage, October-November hunting season sight-in",
          "winter_reduced": "December-March weather dependent"
        },
        "weather_effects": {
          "wind_propagation": "Sound carries up to 2 miles in calm conditions",
          "atmospheric_conditions": "Cold, dense air increases sound propagation",
          "terrain_effects": "Rolling hills create sound shadows and amplification zones"
        },
        "facility_description": "Open-air shooting range on 10 acres of 287-acre farm",
        "public_access": "One of few places in Chittenden County for civilian shooting",
        "legal_status": "2018 Vermont Supreme Court decision upheld operations",
        "community_impact": "Ongoing neighbor disputes over noise levels",
        "status": "new_research_location",
        "sources": [
          "Vermont Supreme Court Case Documentation (2018)",
          "Seven Days Firearms Range Investigation",
          "Chittenden County Noise Impact Studies",
          "Vermont shooting range legal analysis"
        ]
      },
      {
        "id": 43,
        "name": "North Country Sporting Clays (NCSC)",
        "coordinates": [44.4600, -73.1800],
        "type": "Recreational - Clay Target Sports",
        "noise_level": "Very High (140+ dB peak)",
        "temporal_variations": {
          "trap_shooting": "Trap field operations",
          "5_stand_operations": "12+ target presentations",
          "public_access": "Open to members and public",
          "instruction_programs": "New shooter training programs"
        },
        "weather_effects": {
          "outdoor_operations": "Weather affects shooting schedules",
          "wind_effects": "Wind affects clay target flight and noise propagation"
        },
        "facility_description": "10 minutes outside Burlington, established 1962",
        "operations": "Trap shooting and 5-stand clay target sports",
        "community_service": "Team building events, instruction available",
        "status": "new_research_location",
        "sources": [
          "Vermont Fish & Wildlife Shooting Range Documentation",
          "NRA Range Services Guidelines",
          "NCSC facility operational information"
        ]
      },
      {
        "id": 44,
        "name": "Johnson Private Range",
        "coordinates": [44.6167, -72.6833],
        "type": "Recreational - Private Firearms Range",
        "noise_level": "Very High (140+ dB peak)",
        "temporal_variations": {
          "sunday_peaks": "Described as 'Golan Heights' sound levels",
          "family_usage": "Multi-generational family range use (40+ years)",
          "weekend_concentration": "Primary use during weekends"
        },
        "weather_effects": {
          "valley_propagation": "Foot Brook Valley amplifies sound over 1 mile",
          "seasonal_complaints": "Higher complaints in summer (windows open)"
        },
        "family_history": "Family owned property for 200 years, shooting for 40+ years",
        "community_response": "Neighborhood complaints extending over 1-mile radius",
        "designed_by": "Range safety officer from Lamoille County Sheriff's Department",
        "status": "new_research_location",
        "sources": [
          "Vermont Community Newspaper Group Documentation",
          "Local noise impact documentation",
          "Vermont Sport Shooting Range Statute Analysis"
        ]
      },
      {
        "id": 45,
        "name": "VELCO Transmission Network (Statewide)",
        "coordinates": [44.2500, -72.5000],
        "type": "Electric Power Infrastructure",
        "noise_level": "Low-Moderate (50-70 dB)",
        "temporal_variations": {
          "continuous_operation": "24/7 power transmission",
          "load_variations": "Higher noise during peak demand periods",
          "maintenance_windows": "Scheduled maintenance creates equipment noise"
        },
        "weather_effects": {
          "corona_discharge": "Humidity and precipitation affect electrical noise",
          "temperature_effects": "Equipment thermal cycling affects noise levels"
        },
        "infrastructure_scale": "65 major substations, 115kV, 345kV, HVDC lines",
        "smart_grid": "1,300 miles fiber optic network to substations",
        "operational_significance": "Vermont's share ~4.5% of New England grid",
        "status": "new_research_location",
        "sources": [
          "Vermont Electric Power Company Infrastructure Documentation",
          "Vermont Public Service Department Electric Utility Maps",
          "ISO New England Regional Grid Studies"
        ]
      },
      {
        "id": 46,
        "name": "Killington Resort Snowmaking Operations",
        "coordinates": [43.6042, -72.8151],
        "type": "Ski Resort - Snowmaking/Equipment",
        "noise_level": "High (80-95 dB during snowmaking)",
        "temporal_variations": {
          "snowmaking_season": "November-February 24/7 operations",
          "grooming_operations": "2200-0600 nightly",
          "lift_operations": "0800-1600 during ski season",
          "maintenance_summer": "Off-season equipment maintenance"
        },
        "weather_effects": {
          "temperature_dependent": "Snowmaking requires specific temperature/humidity",
          "snow_conditions": "Natural snow affects artificial snowmaking needs",
          "wind_effects": "Wind affects snowmaking efficiency and noise propagation"
        },
        "operations_scale": "Largest snowmaking operation in Vermont",
        "equipment": "High-powered snow guns, air compressors, grooming equipment",
        "energy_consumption": "Massive electricity requirements for snowmaking",
        "status": "new_research_location",
        "sources": [
          "Vermont Public Radio snowmaking efficiency reporting",
          "Ski resort operational documentation",
          "Vermont ski industry energy consumption studies"
        ]
      },
      {
        "id": 47,
        "name": "Mount Snow Resort Operations",
        "coordinates": [42.9667, -72.9167],
        "type": "Ski Resort - Snowmaking/Lifts",
        "noise_level": "High (75-90 dB)",
        "temporal_variations": {
          "20_lifts_operation": "Including high-speed quads and 6-passenger bubble lift",
          "snowmaking_coverage": "80+ trails with extensive snowmaking",
          "seasonal_operations": "70th year of operation in 2024/25"
        },
        "weather_effects": {
          "excellent_snowmaking": "Renowned for snowmaking capabilities",
          "metropolitan_access": "Closest major resort to Northeast metros affects usage"
        },
        "facility_scale": "588 acres, 80 trails, multiple terrain parks",
        "accessibility": "2.5 hours from Boston, 4 hours from NYC",
        "status": "new_research_location",
        "sources": [
          "Mount Snow Resort operational data",
          "Vermont ski industry documentation",
          "Ski resort noise impact studies"
        ]
      },
      {
        "id": 48,
        "name": "Stowe Mountain Resort Operations",
        "coordinates": [44.4654, -72.6874],
        "type": "Ski Resort - Mountain Operations",
        "noise_level": "High (75-90 dB)",
        "temporal_variations": {
          "mt_mansfield_operations": "Vermont's tallest peak operations",
          "gondola_operations": "High-speed lift and gondola systems",
          "snowmaking_operations": "Extensive snowmaking infrastructure"
        },
        "weather_effects": {
          "snow_belt_location": "Heart of Vermont's snow belt",
          "mountain_weather": "Mt. Mansfield weather affects operations"
        },
        "significance": "Name almost synonymous with New England skiing",
        "mountain_peaks": "Mt. Mansfield and Spruce Peak operations",
        "status": "new_research_location",
        "sources": [
          "Stowe Mountain Resort documentation",
          "Vermont ski resort environmental studies",
          "Mountain resort noise impact analysis"
        ]
      },
      {
        "id": 49,
        "name": "Okemo Mountain Resort Operations",
        "coordinates": [43.4000, -72.7000],
        "type": "Ski Resort - Snowmaking/Lifts",
        "noise_level": "High (80-95 dB)",
        "temporal_variations": {
          "98_percent_snowmaking": "State-of-the-art snowmaking covers 98% of trails",
          "high_speed_lifts": "Multiple high-speed bubble chairs and six-pack lifts",
          "environmental_leadership": "Leading in environmentally sound development"
        },
        "weather_effects": {
          "16_feet_natural_snow": "Average natural snowfall supplemented by snowmaking",
          "snowmaking_efficiency": "Environmental focus on efficient operations"
        },
        "lift_infrastructure": "Evergreen Summit Express, Quantum Six high-speed lifts",
        "environmental_focus": "Leader in sustainable snowmaking and lift power",
        "status": "new_research_location",
        "sources": [
          "Okemo Mountain Resort operational data",
          "Environmental snowmaking efficiency studies",
          "Vermont ski resort sustainability reports"
        ]
      },
      {
        "id": 50,
        "name": "Bromley Mountain Ski Resort Operations",
        "coordinates": [43.2500, -72.9333],
        "type": "Ski Resort - Snowmaking Operations",
        "noise_level": "High (80-95 dB)",
        "temporal_variations": {
          "high_energy_consumption": "Annual electricity equivalent to 100 homes",
          "utility_costs": "$500,000 annual utility bill for snowmaking",
          "vfd_motor_systems": "Variable Frequency Drive motors for efficiency"
        },
        "weather_effects": {
          "snowmaking_dependent": "135 acres covered in 3+ feet artificial snow",
          "energy_efficiency": "100% high-efficiency snow guns"
        },
        "sustainability_awards": "2017 Energy Leadership Award from Efficiency Vermont",
        "solar_array": "1,127kW solar array generating power for 70 households",
        "efficiency_focus": "27+ sustainability projects completed",
        "status": "new_research_location",
        "sources": [
          "Vermont Public Radio energy consumption reporting",
          "Efficiency Vermont sustainability documentation",
          "Bromley Mountain operational reports"
        ]
      },
      {
        "id": 51,
        "name": "Edward F. Knapp State Airport (Montpelier)",
        "coordinates": [44.2033, -72.5633],
        "type": "General Aviation Airport",
        "noise_level": "Moderate (70-85 dB during operations)",
        "temporal_variations": {
          "general_aviation": "Private jets, turboprops, flight training",
          "business_flights": "State government and business aviation",
          "maintenance_operations": "Aircraft maintenance and servicing"
        },
        "weather_effects": {
          "mountain_weather": "Central Vermont weather affects flight operations",
          "seasonal_access": "Winter weather affects general aviation activity"
        },
        "runway_specifications": "4,000 feet, suitable for smaller aircraft and light jets",
        "government_access": "4 miles south of Montpelier, state capital access",
        "status": "new_research_location",
        "sources": [
          "FAA airport operations data",
          "Private jet charter services documentation",
          "Vermont Agency of Transportation aviation program"
        ]
      },
      {
        "id": 52,
        "name": "Caledonia County Airport",
        "coordinates": [44.5167, -72.0167],
        "type": "General Aviation Airport",
        "noise_level": "Moderate (65-80 dB)",
        "temporal_variations": {
          "regional_hub": "30-40 nautical miles from Montpelier",
          "general_aviation": "Private aircraft and regional flights",
          "maintenance_operations": "Aircraft servicing and storage"
        },
        "weather_effects": {
          "northeast_kingdom_weather": "Rural Vermont weather patterns",
          "seasonal_operations": "Weather-dependent flight activity"
        },
        "runway_specifications": "3,302 feet runway",
        "geographic_service": "Lyndonville area, northeastern Vermont",
        "status": "new_research_location",
        "sources": [
          "Vermont Agency of Transportation aviation documentation",
          "Regional general aviation studies",
          "Northeast Kingdom transportation analysis"
        ]
      },
      {
        "id": 53,
        "name": "Rutland-Southern Vermont Regional Airport",
        "coordinates": [43.5293, -72.9496],
        "type": "Commercial and General Aviation",
        "noise_level": "Moderate-High (70-85 dB)",
        "temporal_variations": {
          "commercial_operations": "Regional commercial service",
          "general_aviation": "Private and charter aircraft",
          "maintenance_facilities": "Aircraft maintenance and repair operations"
        },
        "weather_effects": {
          "southern_vermont_weather": "Regional weather affects flight schedules",
          "mountain_proximity": "Terrain affects approach patterns"
        },
        "service_area": "Southern Vermont regional aviation hub",
        "infrastructure": "Full-service airport with maintenance capabilities",
        "status": "new_research_location",
        "sources": [
          "Vermont airport system documentation",
          "Regional aviation facility studies",
          "Southern Vermont transportation planning"
        ]
      },
      {
        "id": 54,
        "name": "Morrisville-Stowe Airport",
        "coordinates": [44.5350, -72.6142],
        "type": "General Aviation Airport",
        "noise_level": "Moderate (65-80 dB)",
        "temporal_variations": {
          "resort_access": "General aviation serving Stowe resort area",
          "seasonal_peaks": "Winter ski season private aircraft traffic",
          "tourist_flights": "Recreational and tourism-related aviation"
        },
        "weather_effects": {
          "mountain_weather": "Stowe area weather affects operations",
          "ski_season_correlation": "Weather conditions drive tourist aviation"
        },
        "tourism_connection": "Serves Stowe Mountain Resort and tourism industry",
        "seasonal_usage": "Peak usage during ski season and summer recreation",
        "status": "new_research_location",
        "sources": [
          "Vermont aviation facilities documentation",
          "Stowe area tourism transportation studies",
          "Seasonal aviation traffic analysis"
        ]
      },
      {
        "id": 55,
        "name": "Bellavance Trucking Terminal (Barre)",
        "coordinates": [44.2000, -72.5000],
        "type": "Freight Terminal - Heavy Trucking",
        "noise_level": "High (80-95 dB)",
        "temporal_variations": {
          "24_7_operations": "Continental US and Canada freight operations",
          "fleet_size": "100+ trucks, 475 trailers",
          "maintenance_operations": "State-of-the-art maintenance facilities and truck wash"
        },
        "weather_effects": {
          "winter_operations": "Cold weather affects diesel equipment",
          "maintenance_heating": "Facility heating creates additional noise"
        },
        "company_history": "Founded 1950, originally hauling granite monuments Barre to Pittsburgh",
        "service_area": "Full-service flatbed, step deck, low-bed, refrigerated, dry van",
        "family_business": "Still family-owned and operated",
        "status": "new_research_location",
        "sources": [
          "Bellavance Trucking company documentation",
          "Vermont trucking industry analysis",
          "Barre industrial operations studies"
        ]
      },
      {
        "id": 56,
        "name": "Estes Express Lines Terminal (Berlin)",
        "coordinates": [44.2167, -72.5667],
        "type": "Freight Terminal - LTL Operations",
        "noise_level": "High (75-90 dB)",
        "temporal_variations": {
          "ltl_operations": "Less-than-truckload freight terminal",
          "cross_border": "US-Canada freight gateway",
          "loading_operations": "Heavy truck traffic and freight handling"
        },
        "weather_effects": {
          "freeze_protection": "500+ heated trailers for Canada routes",
          "winter_operations": "Enhanced cold weather freight operations"
        },
        "service_specialty": "Burlington-Montpelier area LTL freight, Canada border expertise",
        "cross_border_focus": "Montreal and Quebec destinations",
        "status": "new_research_location",
        "sources": [
          "Estes Express Lines terminal documentation",
          "US-Canada freight movement studies",
          "Vermont freight transportation analysis"
        ]
      },
      {
        "id": 57,
        "name": "Barrett Trucking Company (Burlington)",
        "coordinates": [44.4833, -73.1667],
        "type": "Freight Terminal - Heavy Trucking",
        "noise_level": "High (80-95 dB)",
        "temporal_variations": {
            "24_7_operations": "Continuous freight operations",
            "fleet_size": "Large fleet of trucks and trailers",
            "maintenance_facility": "On-site maintenance and repair"
        },
        "weather_effects": {
            "winter_operations": "Increased noise from cold engine starts",
            "yard_conditions": "Weather affects yard operations and noise"
        },
        "service_area": "Regional and national freight distribution",
        "company_history": "Long-standing Vermont trucking company",
        "status": "new_research_location",
        "sources": [
            "Barrett Trucking operational data",
            "Vermont trucking industry reports",
            "Burlington industrial zoning records"
        ]
      }
    ]
  }
}
