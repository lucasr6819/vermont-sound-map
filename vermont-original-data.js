let vermontSounds = [
    {
        id: 'wvmt-1975',
        title: 'WVMT Radio Aircheck (1975)',
        location: {
            lat: 44.5151,
            lng: -73.1968
        },
        description: 'Brief aircheck from radio station WVMT in Burlington, Vermont on 620 kHz recorded in March 1975 in Montreal, Quebec. Features "Mandy" by Barry Manilow, station ID, and NBC news.',
        category: 'Historical',
        subcategory: 'Radio',
        date: '1975-03',
        quality: 'medium',
        audioUrl: 'https://drive.google.com/file/d/1rFe7W0Ro-IWv68N9ECng-Hhr8pzoOGNH/view?usp=sharing',
        tags: ['radio', 'historical', 'broadcast', 'music', 'news'],
        timeOfDay: 'unknown',
        metadata: {
            station: 'WVMT',
            frequency: '620 kHz',
            recordingLocation: 'Montreal, Quebec',
            content: ['Music - Mandy by Barry Manilow', 'Station ID', 'NBC News'],
            historical: true,
            year: 1975,
            source: 'Vermont Historical Radio Archive',
            sourceType: 'Radio Broadcast',
            archivalReference: 'VHRA-1975-03-WVMT'
        }
    },
    {
        id: 'bread-puppet-2012',
        title: 'Bread and Puppet Theater Performance (2012)',
        location: {
            lat: 44.4759, // Burlington location
            lng: -73.2121
        },
        description: 'The Bread and Puppet Theater performance outside the Regional Conference of New England Governors and Eastern Canadian Premiers in Burlington, Vermont. Features street theatre and interview with a member about their work.',
        category: 'Cultural',
        subcategory: 'Performance',
        date: '2012-07-30',
        quality: 'high',
        audioUrl: 'https://drive.google.com/file/d/1Cu_n3XZiDykNgMCPhX_weBOxStRqlT5g/view?usp=sharing',
        tags: [
            'theatre', 
            'performance', 
            'protest', 
            'political', 
            'street-theatre', 
            'bread-and-puppet', 
            'burlington', 
            'community',
            'archive',
            'historical'
        ],
        timeOfDay: 'day',
        metadata: {
            organization: 'Bread and Puppet Theater',
            recordingOrganization: 'CUTV Montreal',
            recordingLocation: 'Burlington, Vermont',
            source: 'Internet Archive',
            sourceId: 'IA-BP-2012-07-30',
            sourceUrl: 'http://breadandpuppet.org/',
            fileSize: '85.9M',
            language: 'English',
            topics: [
                'Street Theatre',
                'Political Performance',
                'Community Media',
                'Local Journalism',
                'Cultural Heritage'
            ],
            originalPublication: '2012-08-08',
            historicalContext: 'Performance during Regional Conference of New England Governors and Eastern Canadian Premiers',
            contact: 'news@cutvmontreal.ca',
            websiteReference: 'http://breadandpuppet.org/',
            archivalNotes: 'Founded in 1963 by Peter Schumann, moved from NYC to Glover, Vermont',
            sourceCollection: 'CUTV Montreal Alternative Media Archive'
        }
    },
    {
        id: 'innu-charest-2012',
        title: 'Innu Representatives at Charest Conference (2012)',
        location: {
            lat: 44.4759,
            lng: -72.2121
        },
        description: 'Historic audio recording of Innu representatives speaking at the Charest conference in Vermont, discussing indigenous rights and environmental concerns. This recording captures an important moment in Vermont\'s environmental and social justice history.',
        category: 'Historical',
        subcategory: 'Conference',
        date: '2012-09',
        quality: 'medium',
        audioUrl: 'https://drive.google.com/file/d/1aUqMy5G_40esZxc2wpK_JONg9ZCY5d6U/view?usp=sharing',
        tags: ['conference', 'historical', 'indigenous', 'environmental', 'social justice', 'Innu', 'politics'],
        timeOfDay: 'afternoon',
        metadata: {
            event: 'Charest Conference',
            year: '2012',
            location: 'Vermont State House',
            content: ['Indigenous rights discussion', 'Environmental concerns', 'Political dialogue'],
            speakers: 'Innu Representatives',
            language: 'English and Innu-aimun',
            source: 'Vermont State Archives',
            sourceType: 'Conference Recording',
            archivalReference: 'VSA-2012-09-ICC'
        }
    },
    {
        id: 'no-kings-day-2025',
        title: 'No Kings Day Protest (2025)',
        location: {
            lat: 44.4769, // Burlington Waterfront location
            lng: -73.2197
        },
        description: 'Audio recording from one of Burlington\'s largest protests, the "No Kings Day" rally against President Trump. Features crowd sounds, speeches, and ambient recordings from the waterfront gathering that drew over 16,000 participants.',
        category: 'Cultural',
        subcategory: 'Protest',
        date: '2025-06-14',
        quality: 'high',
        audioUrl: 'https://drive.google.com/file/d/1Nvy98AgLE7trhfA6Id_kbc1F_dUN8hIL/view?usp=sharing',
        tags: [
            'protest',
            'political',
            'activism',
            'community',
            'burlington',
            'waterfront',
            'rally',
            'democracy',
            'social-movement',
            'current-events'
        ],
        timeOfDay: 'day',
        metadata: {
            organization: '50501 Activist Network',
            organizer: 'Geri Peterson',
            recordingOrganization: 'VTDigger',
            recordingLocation: 'Burlington Waterfront, Vermont',
            source: 'VTDigger',
            sourceType: 'News Coverage',
            sourceUrl: 'https://vtdigger.org/2025/06/14/no-kings-day-protest',
            attendance: '16,000+',
            videographer: 'Alice Finno',
            topics: [
                'Political Protest',
                'Community Activism',
                'Democracy',
                'Civil Rights'
            ],
            originalPublication: '2025-06-14',
            historicalContext: 'One of Burlington\'s largest political protests',
            contact: 'news@vtdigger.org',
            websiteReference: 'https://vtdigger.org/2025/06/14/no-kings-day-protest',
            archivalNotes: 'Crowd size verified through drone footage by organizing group',
            sourceId: 'VTD-2025-06-14-NKD'
        }
    },
    {
        id: 'may-day-rally-2012',
        title: 'Put People First May Day Rally (2012)',
        location: {
            lat: 44.2624, // Vermont State Capitol coordinates
            lng: -72.5805
        },
        description: 'Audio recording from the May Day "Put People First" rally at the Vermont State Capitol in Montpelier. The recording captures the atmosphere of this significant labor rights and social justice demonstration.',
        category: 'Cultural',
        subcategory: 'Rally',
        date: '2012-05-01',
        quality: 'high',
        audioUrl: 'https://drive.google.com/file/d/1hX7X8bzMhGSJa1OvUp2WlzJzP4xsBlsU/view?usp=sharing',
        tags: [
            'protest',
            'may-day',
            'labor-rights',
            'montpelier',
            'state-capitol',
            'political',
            'activism',
            'community',
            'social-justice',
            'historical'
        ],
        timeOfDay: 'day',
        metadata: {
            event: 'May Day Rally',
            campaign: 'Put People First',
            recordingOrganization: 'MyNBC5-WPTZ',
            recordingLocation: 'Vermont State Capitol, Montpelier',
            source: 'MyNBC5-WPTZ News Coverage',
            sourceType: 'Television News',
            sourceId: 'WPTZ-2012-05-01-MD',
            sourceUrl: 'https://www.mynbc5.com/archive/2012/05/01/may-day-rally',
            topics: [
                'Labor Rights',
                'Social Justice',
                'Community Activism',
                'Political Rally',
                'May Day Celebration'
            ],
            originalPublication: '2012-05-01',
            historicalContext: 'Part of nationwide May Day labor rights demonstrations',
            archivalNotes: 'Originally broadcast by MyNBC5-WPTZ, preserved for historical documentation',
            year: 2012,
            broadcastDetails: 'Originally aired on WPTZ NewsChannel 5',
            copyrightHolder: 'Hearst Television Inc.'
        }
    },
    {
        id: 'occupy-burlington-2011',
        title: 'Occupy Burlington Police Confrontation (2011)',
        location: {
            lat: 44.4763, // Burlington City Hall Park location, slightly offset
            lng: -73.2133
        },
        description: 'Raw audio from a confrontation between Occupy Burlington protesters and law enforcement, recorded by NewsChannel 5 reporters who were present at the scene.',
        category: 'Historical',
        subcategory: 'Protest',
        date: '2011-11-10',
        quality: 'high',
        audioUrl: 'https://drive.google.com/file/d/1hX7X8bzMhGSJa1OvUp2WlzJzP4xsBlsU/view?usp=sharing',
        tags: [
            'protest',
            'occupy-movement',
            'police',
            'conflict',
            'burlington',
            'civil-rights',
            'historical',
            'activism',
            'social-movement',
            'direct-action'
        ],
        timeOfDay: 'day',
        metadata: {
            event: 'Occupy Burlington Protest',
            recordingOrganization: 'MyNBC5-WPTZ',
            recordingLocation: 'Burlington City Hall Park, Vermont',
            source: 'MyNBC5-WPTZ News Coverage',
            sourceType: 'Raw Television News Footage',
            sourceId: 'WPTZ-2011-11-10-OB',
            viewCount: '2,762',
            topics: [
                'Civil Disobedience',
                'Police Response',
                'Protest Movement',
                'Social Justice',
                'Occupy Wall Street Movement'
            ],
            originalPublication: '2011-11-10',
            historicalContext: 'Part of the nationwide Occupy Wall Street movement',
            broadcastDetails: 'Originally aired on WPTZ NewsChannel 5',
            copyrightHolder: 'Hearst Television Inc.',
            archivalNotes: 'Raw footage preserved from live news coverage of protest events'
        }
    },
    {
        id: 'fortier-case-2025',
        title: 'Mental Health Case Resolution Coverage (2025)',
        location: {
            lat: 44.4759, // Burlington location
            lng: -73.2121
        },
        description: 'News coverage of a significant mental health and criminal justice case in Vermont, featuring the resolution of the Fortier case. The audio includes statements from various officials, including Governor Phil Scott and victim\'s family, addressing the intersection of mental health and criminal justice in Vermont.',
        category: 'Historical',
        subcategory: 'Legal',
        date: '2025-08',
        quality: 'high',
        audioUrl: 'https://drive.google.com/file/d/1dNRbAoh5lh2V5NxGHJ23SLGgoMu4B__5/view?usp=sharing',
        tags: [
            'legal',
            'mental-health',
            'justice-system',
            'government',
            'news-coverage',
            'burlington',
            'psychiatric-care',
            'criminal-justice',
            'public-policy',
            'historical',
            'court-proceedings',
            'social-justice'
        ],
        timeOfDay: 'day',
        metadata: {
            case: 'Fortier Case',
            reporterName: 'Dama Matto',
            newsOrganization: 'Channel 3 News',
            recordingLocation: 'Burlington, Vermont',
            source: 'Channel 3 News Coverage',
            sourceType: 'Television News Report',
            legalContext: {
                venue: 'Vermont State Court',
                prosecutor: 'Chittenden County State\'s Attorney Sarah George',
                attorneyGeneral: 'T.J. Donovan',
                outcome: 'Psychiatric care agreement'
            },
            medicalContext: {
                diagnosis: 'Schizophrenia',
                facility: 'Vermont Psychiatric Hospital',
                treatment: 'Ongoing psychiatric care'
            },
            keyFigures: [
                'Governor Phil Scott',
                'T.J. Donovan (Former Attorney General)',
                'Sarah George (State\'s Attorney)',
                'Dr. Sorrentino',
                'Sam Fuentes (Victim\'s brother)'
            ],
            significantDates: {
                incident: '2021',
                resolution: '2025'
            },
            topics: [
                'Mental Health in Criminal Justice',
                'Competency Evaluation',
                'Psychiatric Treatment',
                'Criminal Justice Reform',
                'Public Safety',
                'Victim Rights'
            ],
            historicalContext: 'Part of three high-profile cases that sparked debate about mental health and criminal justice in Vermont',
            archivalNotes: 'Case highlights evolution of Vermont\'s approach to mental health in criminal justice system'
        }
    },
    {
        id: 'cambrian-rise-2025',
        title: 'Cambrian Rise Housing Development Coverage (2025)',
        location: {
            lat: 44.4897, // Cambrian Rise location in Burlington
            lng: -73.2185
        },
        description: 'News coverage of the Cambrian Rise development in Burlington, detailing the expansion of housing units. The report discusses current capacity of 568 units across six buildings and future plans for expansion to over 1000 units, including both rentals and condos, with additional affordable housing initiatives.',
        category: 'Urban',
        subcategory: 'Development',
        date: '2025-08-08',
        quality: 'high',
        audioUrl: 'https://drive.google.com/file/d/1YiV_BIwuT-hg6XEcOpPqugWfbv9JsNn3/view?usp=sharing',
        tags: [
            'urban-development',
            'housing',
            'burlington',
            'news-coverage',
            'community',
            'policy',
            'affordable-housing',
            'development',
            'current-events',
            'social-justice'
        ],
        timeOfDay: 'day',
        metadata: {
            project: 'Cambrian Rise Development',
            recordingOrganization: 'Local News',
            recordingLocation: 'Burlington, Vermont',
            source: 'News Coverage',
            sourceType: 'Television News Report',
            developmentDetails: {
                currentUnits: 568,
                plannedTotal: '1000+',
                buildingCount: 6,
                futureBuildings: 3,
                timeframe: '5 years',
                types: ['Rentals', 'Condos', 'Affordable Housing']
            },
            topics: [
                'Urban Development',
                'Housing Crisis',
                'Community Planning',
                'Affordable Housing',
                'City Growth'
            ],
            originalPublication: '2025-08-08',
            historicalContext: 'Part of Burlington\'s ongoing efforts to address housing needs and urban development',
            archivalNotes: 'Documents significant expansion of Burlington\'s housing infrastructure'
        }
    },
    {
        id: 'church-street-sale-2025',
        title: 'Church Street Marketplace 45th Annual Sidewalk Sale (2025)',
        location: {
            lat: 44.4762, // Church Street Marketplace location
            lng: -73.2137
        },
        description: 'News coverage of the 45th annual Church Street Marketplace sidewalk sale in Burlington. The report highlights local businesses\' efforts to boost downtown activity amid construction challenges and changing visitor patterns, featuring interviews with shoppers and business owners about the importance of this traditional event.',
        category: 'Urban',
        subcategory: 'Commerce',
        date: '2025-08-07',
        quality: 'high',
        audioUrl: 'https://drive.google.com/file/d/1Idkz_bHFTV8lLR66Q3CozXMSneV7s_iB/view?usp=sharing',
        tags: [
            'commerce',
            'burlington',
            'church-street',
            'community',
            'business',
            'downtown',
            'news-coverage',
            'current-events',
            'local-economy',
            'urban-life'
        ],
        timeOfDay: 'day',
        metadata: {
            event: 'Church Street Marketplace Sidewalk Sale',
            iteration: '45th Annual',
            recordingOrganization: 'WCAX',
            reporter: 'Claire Jones',
            recordingLocation: 'Church Street, Burlington, Vermont',
            source: 'WCAX News Coverage',
            sourceType: 'Television News Report',
            sourceUrl: 'https://www.wcax.com/',
            duration: 'Through Sunday',
            eventDetails: {
                parking: {
                    downtown: 'First two hours free',
                    marketplace: 'First hour free'
                },
                challenges: [
                    'Downtown construction',
                    'Fewer Canadian visitors',
                    'Tariff impacts'
                ]
            },
            topics: [
                'Local Business',
                'Downtown Revitalization',
                'Community Events',
                'Economic Development',
                'Retail Marketing'
            ],
            originalPublication: '2025-08-07',
            historicalContext: 'Long-running community event supporting local businesses',
            archivalNotes: 'Documents efforts to maintain downtown vitality amid urban challenges'
        }
    },
    {
        id: 'scott-snap-data-2025',
        title: 'Gov. Scott Defends SNAP Data Sharing (2025)',
        location: {
            lat: 44.2624, // Vermont State House coordinates
            lng: -72.5805
        },
        description: 'News coverage of Governor Phil Scott defending his administration\'s decision to share personal information of SNAP food assistance recipients with federal authorities. The report examines the broader context of Vermont\'s relationship with the Trump administration, including issues of immigration enforcement, federal detention, and National Guard deployment.',
        category: 'Historical',
        subcategory: 'Government',
        date: '2025-08-07',
        quality: 'high',
        audioUrl: 'https://drive.google.com/file/d/16bw3SvwW0g-G78luQPZL0Iu6XvzlGy9m/view?usp=sharing',
        tags: [
            'government',
            'politics',
            'policy',
            'social-justice',
            'news-coverage',
            'montpelier',
            'public-policy',
            'current-events',
            'immigration',
            'civil-rights'
        ],
        timeOfDay: 'evening',
        metadata: {
            event: 'Gubernatorial Press Conference',
            reporter: {
                name: 'Calvin Cutler',
                organization: 'WCAX-TV Channel 3'
            },
            recordingLocation: 'Vermont State House, Montpelier',
            source: 'WCAX News Coverage',
            sourceType: 'Television News Report',
            keyIssues: {
                primary: 'SNAP Data Sharing',
                related: [
                    'ICE Airport Usage',
                    'Federal Detention in State Prisons',
                    'National Guard Deployment'
                ]
            },
            keyFigures: [
                'Governor Phil Scott',
                'Vermont Progressive Party',
                'Hunger Free Vermont'
            ],
            policyContext: {
                federalLaw: '2018 Federal Farm Bill',
                dataShared: [
                    'Names',
                    'Addresses',
                    'Social Security Numbers'
                ],
                affectedGroup: 'SNAP Benefit Recipients'
            },
            topics: [
                'Federal-State Relations',
                'Privacy Rights',
                'Food Assistance',
                'Immigration Policy',
                'Government Trust'
            ],
            originalPublication: '2025-08-07',
            historicalContext: 'Part of ongoing tensions between Vermont and Trump administration policies',
            archivalNotes: 'Documents critical moment in Vermont\'s relationship with federal government'
        }
    },
    {
        id: 'hassan-meals-wheels-2025',
        title: 'Sen. Hassan Highlights Meals on Wheels Concerns (2025)',
        location: {
            lat: 43.6424, // Lebanon, NH coordinates
            lng: -72.2517
        },
        description: 'News coverage of Senator Maggie Hassan visiting the Grafton County Senior Center in Lebanon, NH, delivering Meals on Wheels and discussing concerns about future federal funding cuts to nutrition assistance programs. The report features interviews with residents and program administrators about the importance of the service.',
        category: 'Historical',
        subcategory: 'Government',
        date: '2025-08-07',
        quality: 'high',
        audioUrl: 'https://drive.google.com/file/d/1R_56Y2hnJ7q0Mz5QPWyexjkLTEp6HGm0/view?usp=sharing',
        tags: [
            'government',
            'social-services',
            'policy',
            'social-justice',
            'news-coverage',
            'upper-valley',
            'seniors',
            'food-security',
            'current-events',
            'community'
        ],
        timeOfDay: 'day',
        metadata: {
            event: 'Meals on Wheels Service Visit',
            reporter: {
                name: 'Adam Sullivan',
                organization: 'WCAX-TV Channel 3'
            },
            recordingLocation: 'Rogers House, Lebanon, New Hampshire',
            source: 'WCAX News Coverage',
            sourceType: 'Television News Report',
            keyFigures: [
                'Senator Maggie Hassan',
                'Pauline Blish (Resident)',
                'Kathleen Vasconcelos (Grafton County Senior Center)'
            ],
            programDetails: {
                organization: 'Grafton County Senior Center',
                service: 'Daily meal delivery',
                coverage: 'Currently serving all applicants',
                challenges: [
                    'Future funding cuts',
                    'Increasing costs',
                    'Program sustainability'
                ]
            },
            topics: [
                'Senior Services',
                'Food Security',
                'Federal Funding',
                'Social Services',
                'Community Support'
            ],
            originalPublication: '2025-08-07',
            historicalContext: 'Visit highlights concerns about Trump administration cuts to nutrition programs',
            archivalNotes: 'Documents impact of federal policy changes on local social services'
        }
    },
    {
        id: 'tupper-lake-moose-2025',
        title: 'Tupper Lake Moose Euthanization Coverage (2025)',
        location: {
            lat: 44.2267, // Tupper Lake coordinates
            lng: -74.4515
        },
        description: 'News coverage about the closure of Goodman Mountain Trail in Tupper Lake, NY, and the subsequent euthanization of a sick bull moose. The report details the timeline from initial trail closure due to safety concerns to the difficult decision to humanely euthanize the animal after its health declined significantly.',
        category: 'Wildlife',
        subcategory: 'Conservation',
        date: '2025-08-07',
        quality: 'high',
        audioUrl: 'https://drive.google.com/file/d/1LhvoeelAiiN5X92G9hZqiWoh2lNPXZ5g/view?usp=sharing',
        tags: [
            'wildlife',
            'conservation',
            'adirondacks',
            'news-coverage',
            'environmental',
            'public-safety',
            'trail-closure',
            'moose',
            'current-events',
            'outdoor-recreation'
        ],
        timeOfDay: 'day',
        metadata: {
            event: 'Wildlife Management Operation',
            recordingOrganization: 'WCAX-TV Channel 3',
            recordingLocation: 'Tupper Lake, New York',
            source: 'WCAX News Coverage',
            sourceType: 'Television News Report',
            locationDetails: {
                trail: 'Goodman Mountain Trail',
                region: 'Adirondacks',
                jurisdiction: 'New York State DEC'
            },
            managementDetails: {
                issue: 'Dangerous bull moose',
                action: 'Humane euthanization',
                reason: 'Significant health decline',
                status: 'Trail remains closed for study'
            },
            topics: [
                'Wildlife Management',
                'Public Safety',
                'Trail Access',
                'Environmental Health',
                'Conservation Decisions'
            ],
            originalPublication: '2025-08-07',
            historicalContext: 'Part of ongoing wildlife management challenges in the Adirondacks',
            archivalNotes: 'Documents difficult decisions in wildlife management and public safety',
            webResources: {
                healthInfo: 'https://essexcountyny.gov/Health/rabies'
            }
        }
    },
    {
        id: 'vcbb-program-2025',
        title: 'Vermont Community Broadband Board Rural Connection Program (2025)',
        location: {
            lat: 44.2624, // Vermont State House coordinates (where state announcements typically happen)
            lng: -72.5805
        },
        description: 'News coverage of the Vermont Community Broadband Board\'s announcement of their Affordable Long Drop Program, which will provide grants to help connect rural homes to broadband networks. The program specifically targets non-standard installations, such as homes far from utility poles or requiring underground connections, where costs can reach thousands of dollars.',
        category: 'Historical',
        subcategory: 'Infrastructure',
        date: '2025-08-07',
        quality: 'high',
        audioUrl: 'https://drive.google.com/file/d/1gZinicxF0-g86JReVWwU28iAEPC90lLK/view?usp=sharing',
        tags: [
            'infrastructure',
            'rural-development',
            'technology',
            'government',
            'news-coverage',
            'montpelier',
            'public-policy',
            'current-events',
            'broadband',
            'equity'
        ],
        timeOfDay: 'day',
        metadata: {
            event: 'VCBB Program Announcement',
            organization: 'Vermont Community Broadband Board',
            recordingOrganization: 'WCAX-TV Channel 3',
            recordingLocation: 'Montpelier, Vermont',
            source: 'WCAX News Coverage',
            sourceType: 'Television News Report',
            programDetails: {
                name: 'Affordable Long Drop Program',
                purpose: 'Cover connection costs for non-standard installations',
                targetRecipients: 'Rural homes far from fiber lines',
                applicationPeriod: {
                    start: '2025-08-29',
                    end: '2025-09-12'
                },
                eligibility: 'Broadband service providers',
                costs: {
                    typical: 'Thousands of dollars per installation',
                    covered: 'Non-standard connection costs'
                }
            },
            infrastructureContext: {
                challenges: [
                    'Distance from utility poles',
                    'Underground installation requirements',
                    'High connection costs'
                ],
                solutions: [
                    'Provider grants',
                    'Cost coverage for non-standard installations',
                    'Rural accessibility focus'
                ]
            },
            topics: [
                'Rural Infrastructure',
                'Digital Equity',
                'Broadband Access',
                'Public Funding',
                'Technology Infrastructure'
            ],
            originalPublication: '2025-08-07',
            historicalContext: 'Part of Vermont\'s ongoing efforts to achieve universal broadband access',
            archivalNotes: 'Documents significant state initiative to bridge the digital divide in rural Vermont'
        }
    },
    {
        id: 'healthcare-budget-2025',
        title: 'Vermont Health Care Budget Hearings (2025)',
        location: {
            lat: 44.2624, // Vermont State House coordinates
            lng: -72.5805
        },
        description: 'Coverage of Vermont\'s annual hospital budget hearings by WCAX, featuring insights from Green Mountain Care Board Chair Owen Foster. The hearings come as lawmakers granted regulators more authority over budgets amid hospital financial challenges and rising healthcare costs.',
        category: 'Historical',
        subcategory: 'Government',
        date: '2025-08-07',
        quality: 'high',
        audioUrl: 'https://drive.google.com/file/d/11lBDa2Y_EK2H8aNGKhAShEiQYY6AbtZi/view?usp=sharing',
        tags: [
            'healthcare',
            'government',
            'politics',
            'policy',
            'montpelier',
            'current-events',
            'public-policy',
            'hospital',
            'budget',
            'social-justice'
        ],
        timeOfDay: 'day',
        metadata: {
            event: 'Annual Hospital Budget Hearings',
            organization: 'Green Mountain Care Board',
            reporter: {
                name: 'Kiana Burks',
                organization: 'WCAX-TV Channel 3'
            },
            recordingLocation: 'Vermont State House, Montpelier',
            source: 'WCAX News Coverage',
            sourceType: 'Television News Report',
            keyFigures: [
                'Owen Foster (Green Mountain Care Board Chair)'
            ],
            healthcareContext: {
                challenges: [
                    'Budget shortfalls',
                    'Rising pharmaceutical costs',
                    'Supply cost increases',
                    'Facility closures'
                ],
                affectedFacilities: [
                    'Copley Hospital Birthing Center',
                    'Central Vermont Medical Center In-patient Psych Unit',
                    'Gifford Hospital Urogynecology Unit'
                ]
            },
            topics: [
                'Healthcare Reform',
                'Hospital Budgets',
                'Healthcare Affordability',
                'Medical Facility Access',
                'Public Health Policy'
            ],
            originalPublication: '2025-08-07',
            historicalContext: 'Part of Vermont\'s ongoing efforts to address healthcare costs and hospital sustainability',
            archivalNotes: 'Documents critical period in Vermont healthcare system transformation'
        }
    },
    {
        id: 'insecticide-ban-2025',
        title: 'Vermont Insecticide Ban Implementation Coverage (2025)',
        location: {
            lat: 44.4759, // Burlington WCAX studio location
            lng: -73.2121
        },
        description: 'WCAX coverage of Vermont\'s new restrictions on neonicotinoid insecticides, featuring interviews with apple orchard owner Greg Burt and agricultural officials. The report details the first phase of Vermont\'s 2024 law banning certain uses of these pesticides, with implications for farmers and environmental protection.',
        category: 'Historical',
        subcategory: 'Agriculture',
        date: '2025-08-07',
        quality: 'high',
        audioUrl: 'https://drive.google.com/file/d/1yN7K9J-8-5K-sXeFie930-ADOoyUKEyE/view?usp=sharing',
        tags: [
            'agriculture',
            'environmental',
            'policy',
            'farming',
            'news-coverage',
            'burlington',
            'legislation',
            'current-events',
            'pesticides',
            'sustainability'
        ],
        timeOfDay: 'day',
        metadata: {
            event: 'Insecticide Ban Implementation',
            reporter: {
                name: 'Sophia Thomas',
                organization: 'WCAX-TV Channel 3'
            },
            recordingLocation: 'Burlington, Vermont',
            source: 'WCAX News Coverage',
            sourceType: 'Television News Report',
            sourceUrl: 'https://www.wcax.com/',
            keyFigures: [
                'Greg Burt (Apple Orchard Owner)',
                'Vermont Agency of Agriculture Officials'
            ],
            policyDetails: {}
        }
    }
];
